
import { readdir, stat, rm } from 'node:fs/promises';
import { join, extname, dirname, relative } from 'node:path';
import sharp from 'sharp';

const PUBLIC_DIR = join(process.cwd(), 'public');
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

async function getFiles(dir) {
    const dirents = await readdir(dir, { withFileTypes: true });
    const files = await Promise.all(dirents.map((dirent) => {
        const res = join(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    }));
    return files.flat();
}

async function convertImages() {
    console.log('Finding images in public directory...');
    const files = await getFiles(PUBLIC_DIR);

    const imageFiles = files.filter(file => IMAGE_EXTENSIONS.includes(extname(file).toLowerCase()));

    console.log(`Found ${imageFiles.length} images to convert.`);

    for (const file of imageFiles) {
        const ext = extname(file);
        const webpFile = file.replace(ext, '.webp');
        const relativePath = relative(PUBLIC_DIR, file);

        console.log(`Converting: ${relativePath}...`);

        try {
            await sharp(file)
                .webp({ quality: 80 })
                .toFile(webpFile);

            console.log(`✅ Converted ${relativePath}`);

        } catch (error) {
            console.error(`❌ Failed to convert ${relativePath}:`, error.message);
        }
    }

    console.log('Conversion complete!');
}

convertImages();

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-kgf-bgSec border-t border-kgf-goldSubtle py-12 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-2xl font-oswald font-bold text-kgf-gold mb-4">KGF</h2>
        <p className="text-kgf-textSec text-sm mb-6 max-w-md mx-auto">
          Premium fitness in the heart of Kasheli. Join us to transform your body and mind.
        </p>
        <p className="text-kgf-textTert text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Kasheli Gym Fitness. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
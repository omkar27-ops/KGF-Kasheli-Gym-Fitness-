import React from 'react';
import { Button } from '../components/Button';
import { Target, Users, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-[72px] min-h-screen bg-kgf-bg">
      <div className="py-20 md:py-32 max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-[2.6rem] md:text-[4rem] font-oswald font-bold text-white mb-6">
            About <span className="text-kgf-gold">KGF</span>
          </h1>
          <p className="text-kgf-textSec max-w-2xl mx-auto font-inter text-lg">
            We are more than just a gym. We are a community dedicated to strength, discipline, and holistic well-being in Kasheli.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
             <div className="bg-kgf-card p-8 rounded-xl border border-white/5 border-l-4 border-l-kgf-gold">
               <h3 className="text-2xl font-oswald text-white mb-4 flex items-center gap-3">
                 <Target className="text-kgf-gold" /> Our Mission
               </h3>
               <p className="text-kgf-textSec leading-relaxed">
                 To provide a world-class fitness facility that empowers the people of Kasheli to achieve their physical potential. We believe in serious training, premium equipment, and a no-nonsense approach to results.
               </p>
             </div>

             <div className="bg-kgf-card p-8 rounded-xl border border-white/5 border-l-4 border-l-kgf-gold">
               <h3 className="text-2xl font-oswald text-white mb-4 flex items-center gap-3">
                 <Users className="text-kgf-gold" /> Community Focus
               </h3>
               <p className="text-kgf-textSec leading-relaxed">
                 KGF fosters a brotherhood of discipline. Whether you are a beginner or a pro athlete, our supportive environment pushes you to break your limits.
               </p>
             </div>
          </div>

          {/* Visual Placeholder */}
          <div className="relative h-[400px] bg-[#111] rounded-2xl border-2 border-dashed border-kgf-gold/20 flex items-center justify-center">
            <span className="font-oswald text-kgf-textTert tracking-widest uppercase">Gym Interior Photo</span>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1a1a1a] rounded-xl border border-dashed border-kgf-gold/40 z-10"></div>
          </div>
        </div>

        {/* Sauna Highlight */}
        <div className="bg-[#0B0B0B] rounded-2xl p-8 md:p-16 text-center border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-kgf-gold to-transparent"></div>
          <h2 className="text-3xl md:text-4xl font-oswald font-bold text-white mb-6">Premium Recovery: <span className="text-kgf-gold">Steam & Sauna</span></h2>
          <p className="text-kgf-textSec max-w-2xl mx-auto mb-8">
            Recovery is just as important as training. Our premium members enjoy access to state-of-the-art steam and sauna facilities to relax muscles and detoxify after a hard session.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto opacity-50">
             <div className="h-24 border border-dashed border-white/20 rounded-lg flex items-center justify-center text-xs uppercase tracking-widest">Sauna Photo 1</div>
             <div className="h-24 border border-dashed border-white/20 rounded-lg flex items-center justify-center text-xs uppercase tracking-widest">Sauna Photo 2</div>
             <div className="h-24 border border-dashed border-white/20 rounded-lg flex items-center justify-center text-xs uppercase tracking-widest">Steam Photo 1</div>
             <div className="h-24 border border-dashed border-white/20 rounded-lg flex items-center justify-center text-xs uppercase tracking-widest">Steam Photo 2</div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-24 text-center">
           <h3 className="text-xl font-oswald text-white mb-8 flex items-center justify-center gap-2">
             <MapPin className="text-kgf-gold" /> Serving Kasheli & Nearby Areas
           </h3>
           <div className="flex flex-wrap justify-center gap-4">
             {['Kasheli', 'Kalher', 'Bhiwandi', 'Thane West', 'Puranik Villas'].map(area => (
               <span key={area} className="px-6 py-2 bg-kgf-elevated rounded-full text-kgf-textSec text-sm border border-white/5">{area}</span>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
};
import React from 'react';
import { Star, Dumbbell, Flame, User, Activity, Trophy, Heart, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';
import { Program, Trainer, Plan, Testimonial } from '../types';

// Data Mockups
const programs: Program[] = [
  { id: '1', title: 'Strength Training', description: 'Build raw power with heavy lifting protocols.', icon: <Dumbbell className="text-kgf-gold" size={32} />, image: '/assets/programs/program-1.webp' },
  { id: '2', title: 'Fat Loss', description: 'High intensity circuits designed to burn calories.', icon: <Flame className="text-kgf-gold" size={32} />, image: '/assets/programs/program-fat-loss.webp' },
  { id: '3', title: 'Personal Training', description: 'One-on-one coaching customized to your goals.', icon: <User className="text-kgf-gold" size={32} />, image: '/assets/programs/program-personal.webp' },
  { id: '4', title: 'Functional Training', description: 'Movement-based training for real-world strength.', icon: <Activity className="text-kgf-gold" size={32} />, image: '/assets/programs/program-functional.webp' },
  { id: '5', title: 'Bodybuilding', description: 'Sculpt your physique with isolation techniques.', icon: <Trophy className="text-kgf-gold" size={32} />, image: '/assets/programs/program-bodybuilding.webp' },
  { id: '6', title: 'General Fitness', description: 'Maintain health and vitality with balanced routines.', icon: <Heart className="text-kgf-gold" size={32} />, image: '/assets/programs/program-general-fitness.webp' },
];

const trainers: Trainer[] = [
  { id: '1', name: 'Vikram Singh', specialty: 'Bodybuilding Expert', experience: '8 Years' },
  { id: '2', name: 'Priya Sharma', specialty: 'Functional & HIIT', experience: '5 Years' },
  { id: '3', name: 'Rahul Patil', specialty: 'Strength & Conditioning', experience: '6 Years' },
  { id: '4', name: 'Amit Deshmukh', specialty: 'Weight Loss Specialist', experience: '7 Years' },
];

const plans: Plan[] = [
  { id: '1', name: 'Monthly', price: '₹1,500', features: ['Gym Access', 'General Trainer Support', 'Locker Access'] },
  { id: '2', name: 'Quarterly', price: '₹4,000', features: ['Gym Access', 'Diet Consultation', 'Steam Bath Access (2x/mo)', 'Locker Access'], isPopular: true },
  { id: '3', name: 'Yearly', price: '₹12,000', features: ['Gym Access', 'Personal Training Session (1)', 'Unlimited Steam Bath', 'Priority Support', 'Free Merchandise'] },
];

const testimonials: Testimonial[] = [
  { id: '1', quote: "Top-quality equipment and welcoming atmosphere. Best gym in Kasheli by far.", name: "Rohit K.", role: "Member since 2022" },
  { id: '2', quote: "Very good personalised services and qualified staff. The trainers actually care.", name: "Sneha M.", role: "Member since 2023" },
  { id: '3', quote: "Great place to get fit, meet new people, and stay motivated. Love the vibe.", name: "Arjun R.", role: "Member since 2021" },
];

export const Home: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* SECTION 2: HERO */}
      <section id="hero" className="relative min-h-screen pt-[72px] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/hero-bg.webp')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-black/40 z-0"></div> {/* Additional darkening for better text contrast */}
        <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6 flex flex-col items-center justify-center relative z-10">

          {/* Hero Content */}
          <div className="flex flex-col items-center text-center space-y-8 animate-fade-in-up max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-kgf-goldSubtle bg-kgf-goldSubtle/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-kgf-gold animate-pulse"></span>
              <span className="text-xs font-inter font-bold tracking-widest text-kgf-gold uppercase">Premium Fitness Club in Kasheli</span>
            </div>

            <h1 className="text-[2.6rem] md:text-[4.5rem] font-oswald font-bold leading-[1.1] tracking-tight text-white">
              Train Hard.<br />
              Build <span className="text-kgf-gold">Strength.</span><br />
              Stay Consistent.
            </h1>

            <p className="text-kgf-textSec text-base md:text-lg max-w-lg leading-relaxed font-inter mx-auto">
              KGF (Kasheli Gym Fitness) is built for people who are serious about fitness.
              Top-quality equipment, personalised training, and a motivating environment.
            </p>

            <div className="flex items-center gap-4 text-sm font-inter justify-center">
              <div className="flex items-center gap-1 text-white">
                <Star size={16} className="fill-kgf-gold text-kgf-gold" />
                <span className="font-bold">5.0</span>
                <span className="text-kgf-textTert">(39 Reviews)</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-kgf-gold"></span>
              <span className="text-kgf-textSec">Certified Trainers</span>
              <span className="w-1 h-1 rounded-full bg-kgf-gold"></span>
              <span className="text-kgf-textSec">Premium Equipment</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <Button onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}>View Programs</Button>
              <Button variant="secondary" onClick={() => window.open('https://maps.google.com', '_blank')}>Get Directions</Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROGRAMS */}
      <section id="programs" className="py-16 md:py-32 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] md:text-[2.6rem] font-oswald font-semibold text-white inline-block relative pb-4">
              Training Programs
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-kgf-gold"></span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div key={program.id} className="group relative bg-kgf-card p-8 rounded-xl border border-white/5 hover:border-kgf-gold transition-all duration-300 hover:-translate-y-2 hover:shadow-gold-glow overflow-hidden">
                {/* Background Image with Overlay */}
                {program.image && (
                  <>
                    <div className="absolute inset-0 z-0">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover opacity-40 transition-transform duration-700 ease-in-out scale-100 group-hover:scale-110"
                      />
                    </div>
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60 z-0"></div>
                  </>
                )}

                {/* Content - Ensure it stays above background */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6 p-4 bg-kgf-elevated rounded-full w-fit group-hover:bg-kgf-gold/10 transition-colors">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-oswald font-semibold text-white mb-3">{program.title}</h3>
                  <p className="text-kgf-textSec font-inter mb-6 leading-relaxed text-sm flex-grow">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TRAINERS */}
      <section id="trainers" className="py-16 md:py-32 bg-gradient-to-b from-zinc-900 to-zinc-800">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] md:text-[2.6rem] font-oswald font-semibold text-white">
              Expert Trainers
            </h2>
            <p className="text-kgf-textSec mt-4 font-inter">Guided by the best in the industry.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="group bg-kgf-card rounded-xl overflow-hidden border border-white/5 hover:border-kgf-gold transition-all duration-300">
                <div className="h-64 bg-[#151515] relative overflow-hidden">
                  {/* Placeholder for trainer image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]">
                    <User size={64} className="text-kgf-textTert opacity-20" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-oswald font-semibold text-white mb-1">{trainer.name}</h3>
                  <p className="text-kgf-gold text-sm font-bold uppercase tracking-wider mb-2">{trainer.specialty}</p>
                  <p className="text-kgf-textTert text-xs font-inter">{trainer.experience} Experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: MEMBERSHIP */}
      <section id="membership" className="py-16 md:py-32 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] md:text-[2.6rem] font-oswald font-semibold text-white">
              Membership Plans
            </h2>
            <p className="text-kgf-textSec mt-4 font-inter">Invest in your health with our flexible pricing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${plan.isPopular
                  ? 'bg-[#151515] border-kgf-gold shadow-gold-glow scale-105 z-10'
                  : 'bg-kgf-card border-white/5 hover:border-white/20'
                  }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-kgf-gold text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Best Value
                  </div>
                )}
                <h3 className="text-xl font-oswald font-medium text-kgf-textSec mb-2 uppercase">{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-4xl font-oswald font-bold text-white">{plan.price}</span>
                  {plan.name !== 'Monthly' && <span className="text-kgf-textTert text-sm"> / period</span>}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-inter text-kgf-textSec">
                      <CheckCircle2 size={16} className="text-kgf-gold shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.isPopular ? 'primary' : 'outline'}
                  fullWidth
                >
                  Join Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="py-16 md:py-32 bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="mb-12 flex items-center gap-4">
            <h2 className="text-[2rem] md:text-[2.6rem] font-oswald font-semibold text-white">Success Stories</h2>
            <div className="h-[1px] flex-grow bg-white/10"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-8 snap-x">
            {testimonials.map((t) => (
              <div key={t.id} className="min-w-[300px] md:min-w-[400px] bg-kgf-card p-8 rounded-xl border border-white/5 relative snap-center">
                <Quote className="absolute top-8 right-8 text-kgf-gold/20" size={48} />
                <p className="text-lg font-inter text-white italic mb-6 relative z-10">"{t.quote}"</p>
                <div>
                  <h4 className="font-oswald font-bold text-kgf-gold">{t.name}</h4>
                  <p className="text-xs text-kgf-textTert uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="py-24 bg-gradient-to-t from-zinc-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]"></div>
        <div className="max-w-[800px] mx-auto px-4 text-center relative z-10">
          <h2 className="text-[2.6rem] md:text-[4rem] font-oswald font-bold text-white mb-8 leading-none">
            Your Fitness Journey <br /><span className="text-kgf-gold">Starts Here</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" className="min-w-[180px]" onClick={() => window.open('tel:08298292929')}>Call Now</Button>
            <Button variant="outline" className="min-w-[180px]" onClick={() => window.open('https://maps.google.com', '_blank')}>Visit Gym</Button>
          </div>
        </div>
      </section>

    </div>
  );
};
import React from 'react';
import { Button } from '../components/Button';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-[72px] min-h-screen bg-kgf-bg">
      <div className="py-20 md:py-32 max-w-[1200px] mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-[2.6rem] md:text-[4rem] font-oswald font-bold text-white mb-6">
            Get In <span className="text-kgf-gold">Touch</span>
          </h1>
          <p className="text-kgf-textSec">Visit us today or drop a message.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-kgf-card p-8 rounded-xl border border-white/5 space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-kgf-elevated rounded-lg text-kgf-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-oswald text-white mb-2">Address</h3>
                  <p className="text-kgf-textSec font-inter leading-relaxed">
                    Shivrupa Apartment, near SBI ATM,<br/>
                    Swaraj Nagar, Puranik Villas,<br/>
                    Kasheli, Maharashtra 421302
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-kgf-elevated rounded-lg text-kgf-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-oswald text-white mb-2">Phone</h3>
                  <p className="text-kgf-textSec font-inter">082982 92929</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-kgf-elevated rounded-lg text-kgf-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-oswald text-white mb-2">Hours</h3>
                  <p className="text-kgf-textSec font-inter">
                    Mon - Sat: Opens at 5:30 am<br/>
                    Sunday: 6:00 am - 12:00 pm
                  </p>
                </div>
              </div>

            </div>

            {/* Map Placeholder */}
            <div className="w-full h-[300px] bg-[#111] rounded-xl border border-dashed border-kgf-gold/30 flex items-center justify-center relative group overflow-hidden cursor-pointer hover:border-kgf-gold transition-colors">
              <span className="font-oswald text-kgf-textTert tracking-widest z-10">GOOGLE MAPS PLACEHOLDER</span>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
              <Button className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">Open Maps</Button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-kgf-card p-8 md:p-10 rounded-xl border border-white/5">
            <h3 className="text-2xl font-oswald text-white mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-kgf-textTert uppercase tracking-widest">First Name</label>
                  <input type="text" className="w-full bg-kgf-elevated border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-kgf-gold transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-kgf-textTert uppercase tracking-widest">Last Name</label>
                  <input type="text" className="w-full bg-kgf-elevated border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-kgf-gold transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-kgf-textTert uppercase tracking-widest">Phone Number</label>
                <input type="tel" className="w-full bg-kgf-elevated border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-kgf-gold transition-colors" placeholder="+91" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-kgf-textTert uppercase tracking-widest">Message</label>
                <textarea rows={4} className="w-full bg-kgf-elevated border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-kgf-gold transition-colors" placeholder="I'm interested in..." />
              </div>

              <Button fullWidth className="mt-4">Submit Query</Button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};
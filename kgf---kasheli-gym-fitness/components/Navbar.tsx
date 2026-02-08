import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollLink = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', action: () => handleScrollLink('hero') },
    { name: 'Programs', action: () => handleScrollLink('programs') },
    { name: 'Trainers', action: () => handleScrollLink('trainers') },
    { name: 'Membership', action: () => handleScrollLink('membership') },
    { name: 'Contact', action: () => { navigate('/contact'); setIsOpen(false); } },
    { name: 'About', action: () => { navigate('/about'); setIsOpen(false); } },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-[72px] bg-[#050505]/85 backdrop-blur-md border-b border-kgf-goldSubtle z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        {/* Left: Logo */}
        <div 
          className="flex flex-col cursor-pointer"
          onClick={() => handleScrollLink('hero')}
        >
          <span className="text-2xl font-oswald font-bold text-kgf-gold leading-none tracking-tighter">KGF</span>
          <span className="text-[10px] font-inter font-bold text-white tracking-widest uppercase">Kasheli Gym Fitness</span>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={link.action}
              className="text-white/75 hover:text-kgf-gold font-inter font-medium text-sm transition-colors uppercase tracking-wide"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right: CTA */}
        <div className="hidden md:block">
          <Button 
            variant="primary" 
            className="px-6 py-2 text-sm !rounded-lg"
            onClick={() => window.open('tel:08298292929')}
          >
            Call Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-kgf-gold">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-kgf-bg border-b border-kgf-goldSubtle p-6 flex flex-col gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={link.action}
              className="text-left text-white/90 hover:text-kgf-gold font-oswald text-xl uppercase tracking-wide"
            >
              {link.name}
            </button>
          ))}
          <Button 
            variant="primary" 
            fullWidth
            onClick={() => window.open('tel:08298292929')}
          >
            Call Now
          </Button>
        </div>
      )}
    </nav>
  );
};
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-kgf-gold text-black hover:shadow-gold-glow hover:bg-yellow-500",
    secondary: "bg-transparent border border-kgf-gold text-kgf-gold hover:bg-kgf-gold hover:text-black",
    outline: "border border-kgf-goldSubtle text-white hover:border-kgf-gold hover:text-kgf-gold"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = "px-8 py-3 font-black uppercase tracking-widest transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] focus:outline-none active:scale-95 flex items-center justify-center gap-2 [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] pointer-events-auto cursor-pointer shadow-[0_0_20px_rgba(249,115,22,0.4)] text-sm md:text-base";
  
  const variants = {
    primary: "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white",
    secondary: "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20",
    danger: "bg-gradient-to-r from-red-500 to-rose-600 text-white hover:from-red-600 hover:to-rose-700"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

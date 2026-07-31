import React, { useState } from 'react';
import Button from './Button';

const Navbar = ({ currentSection, setCurrentSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navTo = (index) => {
    if (setCurrentSection) {
      setCurrentSection(index);
    }
    setMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home',     index: 0 },
    { label: 'About',    index: 1 },
    { label: 'Features', index: 2 },
    { label: 'Process',  index: 3 },
    { label: 'Pricing',  index: 5 },
    { label: 'Contact',  index: 7 },
  ];

  return (
    <>
      <nav className="fixed z-50 top-3 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-6 py-2 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.15)] flex items-center justify-between gap-4 lg:gap-12 w-[92%] lg:w-max">

        {/* Logo */}
        <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={() => navTo(0)}>
          <img 
            src="/images/logo.svg" 
            alt="Signalive Logo" 
            className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]" 
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.slice(0, 5).map(({ label, index }) => (
            <button
              key={label}
              onClick={() => navTo(index)}
              className={`text-xs lg:text-sm tracking-widest uppercase font-semibold transition-all ${currentSection === index ? 'text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] scale-110' : 'text-gray-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`}
            >{label}</button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          <button onClick={() => navTo(7)} className="text-xs lg:text-sm tracking-widest uppercase font-semibold text-gray-300 hover:text-orange-400 transition-colors">Contact</button>
          <div className="scale-[0.85] whitespace-nowrap">
            <Button variant="primary" onClick={() => navTo(5)}>Signalive Core</Button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          className="lg:hidden flex items-center justify-center w-9 h-9 text-gray-300 hover:text-orange-400 transition-colors focus:outline-none flex-shrink-0"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            /* X icon */
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </nav>

      {/* Mobile Slide-Down Menu */}
      <div
        className={`fixed z-40 top-[52px] left-1/2 -translate-x-1/2 w-[92%] lg:hidden transition-all duration-300 ease-in-out overflow-hidden rounded-2xl ${
          menuOpen
            ? 'max-h-[400px] opacity-100 pointer-events-auto'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-[#060b17]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] p-4 flex flex-col gap-1">
          {navLinks.map(({ label, index }) => (
            <button
              key={label}
              onClick={() => navTo(index)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm tracking-widest uppercase font-semibold transition-all ${
                currentSection === index
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
          <div className="mt-2 pt-2 border-t border-white/10">
            <Button variant="primary" onClick={() => navTo(5)} className="w-full justify-center text-xs">
              Signalive Core
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

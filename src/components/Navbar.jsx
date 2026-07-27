import React from 'react';
import Button from './Button';

const Navbar = ({ currentSection, setCurrentSection }) => {
  const navTo = (index) => {
    if (setCurrentSection) {
      setCurrentSection(index);
    }
  };

  return (
    <nav className="fixed z-50 top-3 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.15)] flex items-center justify-between gap-6 md:gap-12 w-[90%] md:w-max">
      
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => navTo(0)}>
        <span className="text-xl md:text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
          SIGNALIVE
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 items-center">
        <button 
          onClick={() => navTo(0)} 
          className={`text-xs md:text-sm tracking-widest uppercase font-semibold transition-all ${currentSection === 0 ? 'text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] scale-110' : 'text-gray-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`}
        >Home</button>
        <button 
          onClick={() => navTo(1)} 
          className={`text-xs md:text-sm tracking-widest uppercase font-semibold transition-all ${currentSection === 1 ? 'text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] scale-110' : 'text-gray-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`}
        >About</button>
        <button 
          onClick={() => navTo(2)} 
          className={`text-xs md:text-sm tracking-widest uppercase font-semibold transition-all ${currentSection === 2 ? 'text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] scale-110' : 'text-gray-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`}
        >Features</button>
        <button 
          onClick={() => navTo(3)} 
          className={`text-xs md:text-sm tracking-widest uppercase font-semibold transition-all ${currentSection === 3 ? 'text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] scale-110' : 'text-gray-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`}
        >Process</button>
        <button 
          onClick={() => navTo(5)} 
          className={`text-xs md:text-sm tracking-widest uppercase font-semibold transition-all ${currentSection === 5 ? 'text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] scale-110' : 'text-gray-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`}
        >Pricing</button>
      </div>

      {/* Call to Action */}
      <div className="hidden md:flex items-center space-x-6">
        <button onClick={() => navTo(7)} className="text-xs md:text-sm tracking-widest uppercase font-semibold text-gray-300 hover:text-orange-400 transition-colors">Contact</button>
        <div className="scale-[0.85] whitespace-nowrap">
          <Button variant="primary" onClick={() => navTo(5)}>Signalive Core</Button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button className="p-2 text-gray-300 hover:text-orange-400 transition-colors focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </nav>
  );
};

export default Navbar;

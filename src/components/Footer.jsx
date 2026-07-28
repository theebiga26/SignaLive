import React from 'react';

const Footer = ({ setCurrentSection, onOpenLegal }) => {
  return (
    <footer id="footer" className="w-full relative pb-4 pt-16 flex items-center justify-center h-[90vh]"> 
      
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 relative flex flex-col gap-6 md:gap-8 pointer-events-auto mt-auto mb-auto scale-[0.85] origin-bottom md:scale-100">
        
        {/* CTA Section (Separate Card, No Merging) */}
        <div className="w-[90%] mx-auto max-w-4xl rounded-3xl overflow-hidden p-6 md:p-8 text-center md:text-left border border-orange-500/30 shadow-[0_20px_50px_rgba(249,115,22,0.3)] group bg-[#060b17] relative z-20">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/10 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl md:text-3xl font-black text-white mb-2 drop-shadow-md">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Initialize</span>?
              </h2>
              <p className="text-gray-300 text-xs md:text-sm max-w-md mx-auto md:mx-0">
                Join the decentralized neural network today and experience quantum data processing.
              </p>
            </div>
            <button 
              onClick={() => setCurrentSection && setCurrentSection(7)}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-black uppercase tracking-widest [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] hover:scale-105 active:scale-95 text-xs whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Footer Main Content */}
        <div className="w-full rounded-3xl relative z-10 border border-white/10 bg-[#060b17]/90 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Animated Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent opacity-100 pointer-events-none"></div>
          
          <div className="relative p-6 md:p-8 flex flex-col">
            
            {/* Top Section: Logo & Newsletter */}
            <div className="w-full flex flex-col lg:flex-row justify-between items-start border-b border-white/10 pb-4 mb-4 gap-4">
              <div className="text-left">
                <span className="text-2xl md:text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 drop-shadow-[0_0_20px_rgba(249,115,22,0.6)] block mb-2">
                  SIGNALIVE
                </span>
                <p className="text-gray-400 max-w-sm text-xs md:text-sm leading-relaxed">
                  Pioneering the next generation of quantum neural networks and interstellar data synchronization.
                </p>
              </div>
              
              {/* Newsletter */}
              <div className="w-full lg:w-auto">
                <h4 className="text-white font-bold mb-3 text-xs uppercase tracking-widest">Join the Network</h4>
                <div className="flex gap-2 w-full max-w-md">
                  <input 
                    type="email" 
                    placeholder="info@signalive.net" 
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-400 focus:bg-white/10 transition-all shadow-inner text-sm"
                  />
                  <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-black tracking-widest uppercase [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] hover:scale-105 active:scale-95 text-xs">
                    INIT
                  </button>
                </div>
              </div>
            </div>
            
            {/* Middle Section: Links Grid */}
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 text-xs mb-6">
              <div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-[10px] md:text-xs border-l-2 border-orange-500 pl-2">Navigation</h4>
                <ul className="space-y-1.5 flex flex-col text-gray-400">
                  <a href="#" className="hover:text-orange-400 transition-colors w-max">Home</a>
                  <a href="#" className="hover:text-orange-400 transition-colors w-max">About</a>
                  <a href="#" className="hover:text-orange-400 transition-colors w-max">Features</a>
                  <a href="#" className="hover:text-orange-400 transition-colors w-max">Process</a>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-[10px] md:text-xs border-l-2 border-red-500 pl-2">Platform</h4>
                <ul className="space-y-1.5 flex flex-col text-gray-400">
                  <a href="#" className="hover:text-red-400 transition-colors w-max">Pricing Plans</a>
                  <a href="#" className="hover:text-red-400 transition-colors w-max">Testimonials</a>
                  <a href="#" className="hover:text-red-400 transition-colors w-max">FAQ</a>
                  <a href="#" className="hover:text-red-400 transition-colors w-max">Contact</a>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-[10px] md:text-xs border-l-2 border-cyan-400 pl-2">Legal</h4>
                <ul className="space-y-1.5 flex flex-col text-gray-400">
                  <button onClick={() => onOpenLegal && onOpenLegal('privacy')} className="hover:text-cyan-400 transition-colors text-left w-max cursor-pointer">Privacy Policy</button>
                  <button onClick={() => onOpenLegal && onOpenLegal('terms')} className="hover:text-cyan-400 transition-colors text-left w-max cursor-pointer">Terms of Service</button>
                  <button onClick={() => onOpenLegal && onOpenLegal('cookie')} className="hover:text-cyan-400 transition-colors text-left w-max cursor-pointer">Cookie Policy</button>
                </ul>
              </div>
            </div>
            
            {/* Giant Watermark Text - Cyberpunk Hologram Style */}
            <div className="w-full flex justify-center items-center mt-4 md:mt-6 overflow-hidden select-none pointer-events-auto transition-all duration-700 drop-shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:drop-shadow-[0_0_60px_rgba(249,115,22,0.6)] group">
              <h1 className="text-[15vw] sm:text-[13vw] md:text-[120px] lg:text-[160px] leading-[0.75] font-black text-transparent bg-clip-text tracking-tighter [-webkit-text-stroke:1px_#f97316] md:[-webkit-text-stroke:2px_#f97316] bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,rgba(249,115,22,0.4)_4px,rgba(249,115,22,0.4)_8px)] group-hover:bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,rgba(249,115,22,0.8)_4px,rgba(249,115,22,0.8)_8px)] group-hover:scale-[1.02] transition-all duration-700 cursor-default">
                SIGNALIVE
              </h1>
            </div>
            
            {/* Bottom Section: Copyright */}
            <div className="w-full pt-4 mt-6 border-t border-white/10 flex justify-center md:justify-start items-center text-[10px] text-gray-500 relative z-10">
              <p>© {new Date().getFullYear()} Signalive. All rights reserved.</p>
            </div>
            
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = ({ setCurrentSection, onOpenLegal }) => {
  return (
    <footer id="footer" className="w-full relative pt-20 lg:pt-24 pb-10 flex flex-col items-center justify-center lg:min-h-[100svh] overflow-x-hidden">

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative flex flex-col gap-4 lg:gap-3 xl:gap-8 pointer-events-auto">

        {/* ── CTA Banner ── */}
        <div className="w-full max-w-4xl mx-auto rounded-2xl xl:rounded-[2rem] overflow-hidden px-5 py-4 lg:py-3 xl:p-8 text-center lg:text-left border border-orange-500/30 shadow-[0_10px_30px_rgba(249,115,22,0.2)] group bg-[#060b17] relative z-20">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/10 to-transparent pointer-events-none"></div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-4xl font-black text-white mb-0.5 xl:mb-2 drop-shadow-md">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Initialize</span>?
              </h2>
              <p className="text-gray-300 text-xs xl:text-sm max-w-md mx-auto lg:mx-0">
                Join the decentralized neural network and experience industrial intelligence.
              </p>
            </div>
            <button
              onClick={() => setCurrentSection && setCurrentSection(7)}
              className="px-6 py-2.5 xl:px-10 xl:py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-black uppercase tracking-widest [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] transition-all shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:scale-105 active:scale-95 text-xs xl:text-sm whitespace-nowrap cursor-pointer w-full sm:w-auto"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* ── Main Footer Card ── */}
        <div className="w-full rounded-2xl xl:rounded-[2rem] relative z-10 border border-white/10 bg-[#060b17]/90 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent pointer-events-none"></div>

          <div className="relative p-4 sm:p-5 lg:p-5 xl:p-8 flex flex-col">

            {/* Logo + Newsletter */}
            <div className="w-full flex flex-col lg:flex-row justify-between items-start border-b border-white/10 pb-3 xl:pb-6 mb-3 xl:mb-6 gap-3 lg:gap-4">
              <div className="text-left">
                <div 
                  className="cursor-pointer inline-block mb-2 xl:mb-3 group"
                  onClick={() => setCurrentSection && setCurrentSection(0)}
                >
                  <img 
                    src="/images/logo.svg" 
                    alt="Signalive Logo" 
                    className="h-10 sm:h-12 xl:h-14 w-auto object-contain filter drop-shadow-[0_0_20px_rgba(249,115,22,0.6)] transition-transform duration-300 group-hover:scale-105" 
                  />
                </div>
                <p className="text-gray-400 max-w-xs text-xs leading-relaxed">
                  Pioneering the next generation of quantum neural networks and interstellar data synchronization.
                </p>
              </div>

              <div className="w-full lg:w-auto flex-shrink-0">
                <h4 className="text-white font-bold mb-2 text-[10px] uppercase tracking-widest">Join the Network</h4>
                <form action="https://formspree.io/f/xpqvbqeg" method="POST" className="flex gap-2 w-full max-w-xs sm:max-w-sm">
                  <input
                    type="email"
                    name="email"
                    placeholder="info@signalive.net"
                    required
                    className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-orange-400 focus:bg-white/10 transition-all text-xs"
                  />
                  <button type="submit" className="px-5 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-black tracking-widest uppercase [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] transition-all shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] text-[10px] whitespace-nowrap cursor-pointer">
                    INIT
                  </button>
                </form>
              </div>
            </div>

            {/* Links Grid */}
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 xl:gap-8 text-xs xl:text-sm mb-3 xl:mb-8">
              <div>
                <h4 className="text-white font-bold mb-1.5 uppercase tracking-widest text-[10px] border-l-2 border-orange-500 pl-2">Navigation</h4>
                <ul className="space-y-1 flex flex-col text-gray-400 text-xs">
                  <a href="#" className="hover:text-orange-400 transition-colors w-max">Home</a>
                  <a href="#" className="hover:text-orange-400 transition-colors w-max">About</a>
                  <a href="#" className="hover:text-orange-400 transition-colors w-max">Features</a>
                  <a href="#" className="hover:text-orange-400 transition-colors w-max">Process</a>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1.5 uppercase tracking-widest text-[10px] border-l-2 border-red-500 pl-2">Platform</h4>
                <ul className="space-y-1 flex flex-col text-gray-400 text-xs">
                  <a href="#" className="hover:text-red-400 transition-colors w-max">Pricing Plans</a>
                  <a href="#" className="hover:text-red-400 transition-colors w-max">Testimonials</a>
                  <a href="#" className="hover:text-red-400 transition-colors w-max">FAQ</a>
                  <a href="#" className="hover:text-red-400 transition-colors w-max">Contact</a>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-white font-bold mb-1.5 uppercase tracking-widest text-[10px] border-l-2 border-cyan-400 pl-2">Legal</h4>
                <ul className="space-y-1 flex flex-col text-gray-400 text-xs">
                  <button onClick={() => onOpenLegal && onOpenLegal('privacy')} className="hover:text-cyan-400 transition-colors text-left w-max cursor-pointer">Privacy Policy</button>
                  <button onClick={() => onOpenLegal && onOpenLegal('terms')} className="hover:text-cyan-400 transition-colors text-left w-max cursor-pointer">Terms of Service</button>
                  <button onClick={() => onOpenLegal && onOpenLegal('cookie')} className="hover:text-cyan-400 transition-colors text-left w-max cursor-pointer">Cookie Policy</button>
                </ul>
              </div>
            </div>

            {/* Watermark — capped at 90px on lg to save space */}
            <div className="w-full flex justify-center items-center overflow-hidden select-none drop-shadow-[0_0_15px_rgba(249,115,22,0.2)] hover:drop-shadow-[0_0_40px_rgba(249,115,22,0.6)] group transition-all duration-700 mt-1 xl:mt-4">
              <h1 className="text-[14vw] sm:text-[12vw] md:text-[100px] lg:text-[90px] xl:text-[160px] leading-[0.8] font-black text-transparent bg-clip-text tracking-tighter [-webkit-text-stroke:1px_#f97316] md:[-webkit-text-stroke:2px_#f97316] bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,rgba(249,115,22,0.4)_4px,rgba(249,115,22,0.4)_8px)] group-hover:bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,rgba(249,115,22,0.8)_4px,rgba(249,115,22,0.8)_8px)] transition-all duration-700 cursor-default">
                SIGNALIVE
              </h1>
            </div>

            {/* Copyright */}
            <div className="w-full pt-2 mt-2 border-t border-white/10 flex justify-center lg:justify-start items-center text-[10px] text-gray-500">
              <p>© {new Date().getFullYear()} Signalive. All rights reserved.</p>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

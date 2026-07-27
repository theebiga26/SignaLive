import React from 'react';
import Button from '../Button';

const Hero = () => {
  return (
    <section id="home" className="min-h-[100svh] w-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      
      {/* Immersive Tech Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_60%)]"></div>
        {/* Animated Perspective Grid */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom opacity-50 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        {/* Floating Light Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center animate-[fade-in-up_1s_ease-out] w-full max-w-5xl mx-auto pt-10">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-950/40 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
          <h2 className="text-orange-500 tracking-[0.3em] text-xs md:text-sm font-semibold uppercase">
            Industrial Smart Detection Active
          </h2>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-2 drop-shadow-2xl uppercase">
          Industrial Intelligence
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 drop-shadow-[0_0_20px_rgba(249,115,22,0.6)] mb-6">
          Through Real-Time Signal Understanding.
        </h2>
        
        <p className="text-cyan-50/70 max-w-3xl text-sm md:text-lg leading-relaxed mb-10 drop-shadow-md px-4">
          Signalive transforms complex industrial data streams into actionable operational insights. 
          Monitor equipment behavior, detect anomalous patterns instantly, and ensure continuous visibility across your entire smart infrastructure.
        </p>
        
        <div className="flex gap-4 md:gap-6 group mb-16">
          <Button variant="primary">
            Initialize Platform
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-70 animate-bounce">
        <span className="text-cyan-400 text-xs tracking-widest uppercase font-bold">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;

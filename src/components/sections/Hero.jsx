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
            Industrial AI Detection Active
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

        {/* Technical Diagram */}
        <div className="hidden md:flex w-full bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {[
            { label: 'Industrial Signals', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
            { label: 'AI Processing Engine', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
            { label: 'Pattern Analysis', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
            { label: 'Anomaly Detection', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
            { label: 'Operational Intelligence', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
          ].map((step, idx, arr) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center gap-3 w-1/5 group/step">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center group-hover/step:scale-110 group-hover/step:border-orange-400 group-hover/step:shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.icon} /></svg>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 text-center">{step.label}</span>
              </div>
              {idx < arr.length - 1 && (
                <div className="flex-1 h-[1px] bg-gradient-to-r from-orange-500/50 to-transparent relative mx-2">
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.8)] animate-[ping_2s_linear_infinite]" style={{ animationDelay: `${idx * 0.5}s` }}></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* SDK Showcase */}
        <div className="mt-8 flex flex-col items-center opacity-60">
          <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-3">Compatible Technologies</span>
          <div className="flex gap-6 items-center grayscale">
            <span className="font-black tracking-widest text-xs md:text-sm text-gray-400">NVIDIA Jetson</span>
            <div className="w-1 h-1 rounded-full bg-gray-600"></div>
            <span className="font-black tracking-widest text-xs md:text-sm text-gray-400">DeepStream</span>
            <div className="w-1 h-1 rounded-full bg-gray-600"></div>
            <span className="font-black tracking-widest text-xs md:text-sm text-gray-400">CV SDKs</span>
          </div>
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

import React from 'react';

const steps = [
  {
    id: '01',
    title: 'INDUSTRIAL SIGNALS',
    desc: 'Sensors and edge devices stream raw operational data.',
    color: 'from-cyan-400 to-blue-500',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  {
    id: '02',
    title: 'AI PROCESSING',
    desc: 'Engines analyze streams in real-time, filtering noise.',
    color: 'from-blue-500 to-indigo-500',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
  },
  {
    id: '03',
    title: 'PATTERN ANALYSIS',
    desc: 'Models establish baseline patterns across machinery.',
    color: 'from-orange-500 to-red-500',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  },
  {
    id: '04',
    title: 'ANOMALY DETECTION',
    desc: 'Algorithms identify unusual behaviors and risks.',
    color: 'from-red-500 to-rose-600',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  },
  {
    id: '05',
    title: 'INTELLIGENCE',
    desc: 'Dashboards generate alerts and predictive workflows.',
    color: 'from-purple-500 to-pink-500',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  }
];

const HowItWorks = () => {
  // Pre-calculated positions for a 600x600 container (center 300,300)
  // Text Radius = 210px, Box width = 240px
  const textPositions = [
    { left: 180, top: 35 },   // 0: Top
    { left: 380, top: 180 },  // 1: Right Top
    { left: 304, top: 415 },  // 2: Right Bottom
    { left: 56,  top: 415 },  // 3: Left Bottom
    { left: -20, top: 180 },  // 4: Left Top
  ];

  return (
    <section id="how-it-works" className="w-full min-h-[100svh] py-20 lg:py-0 flex flex-col items-center justify-center relative pointer-events-auto overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="flex flex-col items-center text-center w-full z-30 pointer-events-none mt-4 mb-2 lg:mt-8 lg:mb-4">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
          <span className="text-orange-500 uppercase font-black tracking-[0.2em] text-sm drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">PROCESS</span>
          <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 tracking-tight drop-shadow-lg">
          How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Works</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm drop-shadow-md px-4">
          The intelligent pipeline powering our next-generation industrial signal anomaly detection framework.
        </p>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 relative z-10 flex flex-col items-center flex-shrink-0">
        
        {/* Desktop Circular Pentagon Layout */}
        <div className="hidden lg:block relative w-[600px] h-[600px] lg:scale-[0.85] xl:scale-100 origin-center">
          
          {/* Slices (Backgrounds) */}
          {steps.map((step, i) => {
            const rotation = i * 72; // 360 / 5
            return (
              <div key={`bg-${step.id}`} className="absolute inset-0 origin-center pointer-events-none" style={{ transform: `rotate(${rotation}deg)` }}>
                
                {/* Outer Dark Wedge */}
                <div 
                  className="absolute bottom-1/2 left-1/2 w-[340px] h-[280px] bg-[#0a0f1c]/90 border-[3px] border-white/5 shadow-2xl origin-bottom transition-all duration-300 hover:bg-[#111827]"
                  style={{ 
                    transform: 'translateX(-50%)',
                    clipPath: 'polygon(50% 100%, 0 0, 100% 0)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
                </div>

                {/* Inner Colored Ring Wedge */}
                <div 
                  className={`absolute bottom-1/2 left-1/2 w-[180px] h-[150px] bg-gradient-to-b ${step.color} origin-bottom shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
                  style={{ 
                    transform: 'translateX(-50%)',
                    clipPath: 'polygon(50% 100%, 0 0, 100% 0)'
                  }}
                ></div>
                
                {/* Gap lines (simulating padding between slices) */}
                <div className="absolute bottom-1/2 left-1/2 w-[4px] h-[300px] bg-[#0c132c] origin-bottom translate-x-[-2px] rotate-[36deg]"></div>
                <div className="absolute bottom-1/2 left-1/2 w-[4px] h-[300px] bg-[#0c132c] origin-bottom translate-x-[-2px] -rotate-[36deg]"></div>
              </div>
            );
          })}

          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#050914] rounded-full z-20 border-[8px] border-[#0c132c] shadow-[0_0_50px_rgba(249,115,22,0.3)] flex flex-col items-center justify-center pointer-events-auto cursor-pointer group">
            <div className="absolute inset-0 rounded-full border border-orange-500/30 group-hover:border-orange-500 transition-colors animate-[spin_10s_linear_infinite]"></div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(249,115,22,0.5)]">
               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <span className="text-white font-black text-xs tracking-[0.2em] uppercase">Core Engine</span>
          </div>

          {/* Slices Content (Upright Text) */}
          {steps.map((step, i) => {
            const pos = textPositions[i];
            
            return (
              <div 
                key={`text-${step.id}`} 
                className="absolute w-[240px] flex flex-col items-center text-center z-30 pointer-events-auto group cursor-default"
                style={{ left: pos.left, top: pos.top }}
              >
                <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b ${step.color} drop-shadow-md mb-1 transition-transform group-hover:scale-110`}>
                  {step.id}
                </div>
                
                {/* Icon in Content */}
                <div className={`w-8 h-8 text-transparent bg-clip-text bg-gradient-to-b ${step.color} mb-1 opacity-80`}>
                   {React.cloneElement(step.icon, { className: 'w-7 h-7 mx-auto text-gray-300' })}
                </div>

                <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-1 drop-shadow-md px-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs leading-[1.3] px-2">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout (Vertical Stack) */}
        <div className="flex lg:hidden flex-col gap-8 w-full max-w-md mx-auto pt-8">
          {steps.map((step, i) => (
            <div key={step.id} className="bg-[#0f172a] rounded-2xl p-6 relative border border-white/10 shadow-xl group transition-transform hover:-translate-y-2 duration-300 flex flex-col items-center text-center">
              
              <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-black text-xl shadow-[0_10px_20px_rgba(0,0,0,0.3)] border-2 border-[#0c132c]`}>
                {step.id}
              </div>
              
              <div className="mt-8 mb-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shadow-inner text-gray-300">
                  {step.icon}
                </div>
              </div>
              
              <h3 className="text-white font-black text-lg mb-2 tracking-widest uppercase">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;

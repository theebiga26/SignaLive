import React from 'react';

const steps = [
  {
    id: '01',
    title: 'INDUSTRIAL SIGNALS',
    desc: 'Industrial sensors, edge devices, and camera feeds stream continuous raw operational data into our network.',
  },
  {
    id: '02',
    title: 'AI PROCESSING ENGINE',
    desc: 'Signal processing engines analyze the raw data streams in real-time, filtering noise and normalizing data.',
  },
  {
    id: '03',
    title: 'PATTERN ANALYSIS',
    desc: 'Deep learning models classify behaviors and establish baseline operational patterns across all connected machinery.',
  },
  {
    id: '04',
    title: 'ANOMALY DETECTION',
    desc: 'Advanced algorithms instantly identify unusual behaviors, equipment deviations, and potential operational risks.',
  },
  {
    id: '05',
    title: 'OPERATIONAL INTELLIGENCE',
    desc: 'Centralized dashboards generate actionable insights, intelligent alerts, and predictive maintenance workflows.',
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full min-h-[100svh] py-20 lg:py-0 flex flex-col items-center justify-center relative pointer-events-auto">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="flex flex-col items-center text-center w-full z-30 pointer-events-none mt-12 mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
          <span className="text-orange-500 uppercase font-black tracking-[0.2em] text-sm drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">PROCESS</span>
          <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-2 md:mb-4 tracking-tight drop-shadow-lg">
          How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Works</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg drop-shadow-md px-4">
          The intelligent pipeline powering our next-generation industrial signal anomaly detection framework.
        </p>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-shrink-0">
        
        {/* Desktop Layout (Horizontal Puzzle) */}
        <div className="hidden lg:flex flex-row items-stretch justify-center w-full pr-10 gap-8 xl:gap-12">
          {steps.map((step, i) => {
            const isFirst = i === 0;
            const isLast = i === steps.length - 1;
            
            // Polygon for the main card body
            // First card doesn't have the left indent.
            const cardClipPath = isFirst 
              ? 'polygon(100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 0)' 
              : 'polygon(100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 80px, 40px 40px, 0 0)';
              
            return (
              <div 
                key={step.id} 
                className="relative flex-1 min-h-[300px] flex flex-col group"
                style={{ zIndex: 10 - i }}
              >
                {/* Main Card Wrapper (Acts as Border) */}
                <div 
                  className="w-full h-full p-[2px] bg-gradient-to-br from-orange-500 to-red-600 transition-transform hover:-translate-y-2 duration-300 relative"
                  style={{ clipPath: cardClipPath }}
                >
                  {/* Main Card Body */}
                  <div 
                    className="bg-[#0f172a] w-full h-full p-6 pt-28 relative"
                    style={{ clipPath: cardClipPath }}
                  >
                    <h3 className="text-orange-400 font-black text-lg xl:text-xl mb-3 tracking-widest uppercase">{step.title}</h3>
                    <p className="text-gray-400 text-xs xl:text-sm leading-relaxed">{step.desc}</p>
                    
                    {/* Subtle bottom glow line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* The Overlapping Chevron Arrow */}
                <div 
                  className="absolute top-0 right-[-40px] w-[140px] h-[80px] bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center transition-all duration-500 group-hover:brightness-125 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] group-hover:translate-x-3"
                  style={{ 
                    clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 50%, calc(100% - 40px) 100%, 0 100%, 40px 50%)',
                    zIndex: 20
                  }}
                >
                  <span className="text-white font-black text-3xl ml-4 drop-shadow-md transition-transform duration-500 group-hover:scale-110">{step.id}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout (Vertical Stack) */}
        <div className="flex lg:hidden flex-col gap-10 w-full max-w-md mx-auto pt-8">
          {steps.map((step, i) => (
            <div key={step.id} className="bg-[#0f172a] rounded-2xl p-8 relative border-2 border-orange-500/50 shadow-2xl group transition-transform hover:-translate-y-2 duration-300">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-[0_10px_20px_rgba(249,115,22,0.4)] transform rotate-3 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                {step.id}
              </div>
              <h3 className="text-orange-400 font-black text-xl mb-3 mt-4 tracking-widest uppercase">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;

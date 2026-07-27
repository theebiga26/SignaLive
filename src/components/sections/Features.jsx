import React, { useState, useEffect } from 'react';

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const featuresList = [
    {
      title: "Signal Intelligence Engine",
      description: "Analyzes complex industrial signals and operational data streams to classify behaviors and extract meaningful operational insights.",
      img: "/feature_quantum.png",
      alt: "Signal Engine",
      gradient: "from-cyan-400 to-cyan-600",
      border: "border-cyan-500/30",
      shadow: "shadow-[0_0_15px_rgba(34,211,238,0.6)]"
    },
    {
      title: "Smart Anomaly Detection",
      description: "Identifies unusual behaviors and potential operational risks using advanced pattern recognition for intelligent early warning detection.",
      img: "/feature_neural.png",
      alt: "Anomaly Detection",
      gradient: "from-orange-400 to-red-500",
      border: "border-orange-500/30",
      shadow: "shadow-[0_0_15px_rgba(249,115,22,0.6)]"
    },
    {
      title: "Industrial Monitoring",
      description: "Provides continuous real-time visibility into operational environments, tracking equipment behavior and critical performance metrics.",
      img: "/feature_sync.png",
      alt: "Monitoring System",
      gradient: "from-cyan-500 to-blue-500",
      border: "border-cyan-500/30",
      shadow: "shadow-[0_0_15px_rgba(34,211,238,0.6)]"
    },
    {
      title: "Computer Vision Intelligence",
      description: "Supports advanced visual analysis for industrial environments, including image-based anomaly detection and real-time object recognition.",
      img: "/feature_security.png",
      alt: "Computer Vision",
      filter: "hue-rotate-90",
      gradient: "from-red-500 to-orange-600",
      border: "border-red-500/30",
      shadow: "shadow-[0_0_15px_rgba(239,68,68,0.6)]"
    },
    {
      title: "Operations Dashboard",
      description: "Provides centralized control and analytics, tracking system health, anomaly alerts, and generating comprehensive performance reports.",
      img: "/feature_scale.png",
      alt: "Operations Dashboard",
      filter: "-hue-rotate-15",
      gradient: "from-cyan-400 to-cyan-500",
      border: "border-cyan-500/30",
      shadow: "shadow-[0_0_15px_rgba(34,211,238,0.6)]"
    }
  ];

  // Auto-play the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev < featuresList.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, [featuresList.length]);

  return (
    <section id="features" className="w-full min-h-[100svh] flex flex-col items-center justify-center relative overflow-hidden bg-transparent pointer-events-auto">
      
      {/* Top Header */}
      <div className="flex flex-col items-center text-center w-full z-30 pointer-events-none mt-24">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
          <span className="text-orange-500 uppercase font-black tracking-[0.2em] text-sm drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">CAPABILITIES</span>
          <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-2 md:mb-4 tracking-tight drop-shadow-lg">
          Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Capabilities</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg drop-shadow-md px-4">
          Transform raw industrial signals into meaningful operational insights using our advanced detection frameworks.
        </p>
      </div>

      {/* Main Carousel Area */}
      <div className="relative w-full max-w-6xl h-[450px] md:h-[520px] flex items-center justify-center mt-2 flex-shrink-0">
        
        {featuresList.map((feature, i) => {
          // Circular distance calculation
          const total = featuresList.length;
          let diff = i - activeIndex;
          if (diff > total / 2) diff -= total;
          if (diff < -total / 2) diff += total;
          
          let transformClasses = '';
          let zIndex = 0;
          let opacity = 0;

          // Mobile logic (stack closer) vs Desktop logic (spread out)
          if (diff === 0) {
            transformClasses = 'translate-x-0 scale-100';
            zIndex = 30;
            opacity = 1;
          } else if (diff === -1) {
            transformClasses = '-translate-x-[220px] md:-translate-x-[340px] scale-[0.65] md:scale-[0.75]';
            zIndex = 20;
            opacity = 0.9;
          } else if (diff === 1) {
            transformClasses = 'translate-x-[220px] md:translate-x-[340px] scale-[0.65] md:scale-[0.75]';
            zIndex = 20;
            opacity = 0.9;
          } else if (diff === -2) {
            transformClasses = '-translate-x-[340px] md:-translate-x-[550px] scale-[0.4] md:scale-[0.55]';
            zIndex = 10;
            opacity = 0.6;
          } else if (diff === 2) {
            transformClasses = 'translate-x-[340px] md:translate-x-[550px] scale-[0.4] md:scale-[0.55]';
            zIndex = 10;
            opacity = 0.6;
          } else if (diff < -2) {
             transformClasses = '-translate-x-[420px] md:-translate-x-[700px] scale-[0.3]';
             zIndex = 0;
             opacity = 0;
          } else if (diff > 2) {
             transformClasses = 'translate-x-[420px] md:translate-x-[700px] scale-[0.3]';
             zIndex = 0;
             opacity = 0;
          }

          const isActive = diff === 0;

          return (
            <div 
              key={i}
              className={`absolute transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center justify-center cursor-pointer select-none ${transformClasses}`}
              style={{ 
                zIndex, 
                opacity: opacity, // Smooth fading
                pointerEvents: opacity === 0 ? 'none' : 'auto'
              }}
              onClick={() => setActiveIndex(i)}
            >
              
              {/* Unified Card Container */}
               <div className={`relative flex flex-col justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] rounded-lg overflow-hidden ${isActive ? 'w-[320px] md:w-[480px] h-[450px] md:h-[520px] bg-[#0c132c]/95 border border-white/10 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] p-8 md:p-12' : 'w-[260px] md:w-[360px] h-[160px] md:h-[220px] bg-transparent border-0 p-0 shadow-none'}`}>
                  
                  {/* Dynamic Gradient Background overlay (only active) */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} pointer-events-none transition-opacity duration-[800ms] ${isActive ? 'opacity-10' : 'opacity-0'}`}></div>
                  
                  {/* Top Subtitle */}
                  <div className={`text-left w-full relative z-10 transition-all duration-[800ms] overflow-hidden flex-shrink-0 ${isActive ? 'max-h-20 opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}>
                    <h3 className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-gray-400 mb-1">Feature Spec</h3>
                    <div className={`w-8 h-[2px] bg-gradient-to-r ${feature.gradient}`}></div>
                  </div>
                  
                  {/* The Image (The only thing visible when inactive) */}
                  <div className={`relative z-10 border-[4px] ${feature.border} shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] flex-shrink-0 ${isActive ? 'w-full h-44 md:h-56' : 'w-full h-full'}`}>
                     <div className={`absolute inset-0 bg-gradient-to-tr ${feature.gradient} mix-blend-overlay z-10 pointer-events-none transition-opacity duration-[800ms] ${isActive ? 'opacity-20' : 'opacity-0'}`}></div>
                     <img src={feature.img} alt={feature.alt} className={`w-full h-full object-cover transition-all duration-[800ms] ${isActive ? 'grayscale-0 scale-100' : 'grayscale-[70%] hover:grayscale-[20%] scale-110'} ${feature.filter || ''}`} />
                  </div>
            
                  {/* Bottom Title & Description */}
                  <div className={`text-left w-full relative z-10 transition-all duration-[800ms] overflow-hidden flex-shrink-0 ${isActive ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-2 md:mb-4 tracking-tight drop-shadow-md whitespace-nowrap">{feature.title}</h2>
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-medium line-clamp-3">{feature.description}</p>
                  </div>

               </div>
            </div>
          );
        })}

        {/* Linear Fraction Pagination (e.g. 1/6) */}
        <div className="absolute right-6 md:right-12 top-0 md:top-6 flex items-center font-serif text-3xl md:text-5xl z-40 drop-shadow-lg">
          <span className="text-white font-bold">{activeIndex + 1}</span>
          <span className="text-white/50 mx-2 font-light">/</span>
          <span className="text-white/50 text-xl md:text-3xl">{featuresList.length}</span>
        </div>

      </div>

    </section>
  );
};

export default Features;

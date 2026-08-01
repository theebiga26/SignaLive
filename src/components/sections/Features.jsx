import React, { useState, useEffect, useRef } from 'react';

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  const featuresList = [
    {
      title: "Signal Intelligence Engine",
      description: "Analyzes complex industrial signals and operational data streams to classify behaviors and extract meaningful operational insights.",
      img: "/images/fea_1.svg",
      alt: "Signal Engine",
      gradient: "from-cyan-400 to-cyan-600",
      border: "border-cyan-500/30",
      shadow: "shadow-[0_0_15px_rgba(34,211,238,0.6)]"
    },
    {
      title: "Smart Anomaly Detection",
      description: "Identifies unusual behaviors and potential operational risks using advanced pattern recognition for intelligent early warning detection.",
      img: "/images/fea_2.svg",
      alt: "Anomaly Detection",
      gradient: "from-orange-400 to-red-500",
      border: "border-orange-500/30",
      shadow: "shadow-[0_0_15px_rgba(249,115,22,0.6)]"
    },
    {
      title: "Industrial Monitoring",
      description: "Provides continuous real-time visibility into operational environments, tracking equipment behavior and critical performance metrics.",
      img: "/images/fea_3.svg",
      alt: "Monitoring System",
      gradient: "from-cyan-500 to-blue-500",
      border: "border-cyan-500/30",
      shadow: "shadow-[0_0_15px_rgba(34,211,238,0.6)]"
    },
    {
      title: "Computer Vision Intelligence",
      description: "Supports advanced visual analysis for industrial environments, including image-based anomaly detection and real-time object recognition.",
      img: "/images/fea_4.svg",
      alt: "Computer Vision",
      gradient: "from-red-500 to-orange-600",
      border: "border-red-500/30",
      shadow: "shadow-[0_0_15px_rgba(239,68,68,0.6)]"
    },
    {
      title: "Operations Dashboard",
      description: "Provides centralized control and analytics, tracking system health, anomaly alerts, and generating comprehensive performance reports.",
      img: "/images/fea_5.svg",
      alt: "Operations Dashboard",
      gradient: "from-cyan-400 to-cyan-500",
      border: "border-cyan-500/30",
      shadow: "shadow-[0_0_15px_rgba(34,211,238,0.6)]"
    }
  ];

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev < featuresList.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, [featuresList.length]);

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setActiveIndex((prev) => (prev < featuresList.length - 1 ? prev + 1 : 0));
      } else {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : featuresList.length - 1));
      }
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="features"
      className="w-full lg:min-h-[100svh] pt-24 sm:pt-28 md:pt-32 lg:pt-28 pb-10 flex flex-col items-center justify-start lg:justify-between relative overflow-hidden pointer-events-auto"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* Top Header — Properly Aligned below floating Navbar */}
      <div className="flex flex-col items-center text-center w-full z-30 pointer-events-auto px-4 pt-2 mb-2 sm:mb-4">
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2 sm:mb-3">
          <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
          <span className="text-orange-500 uppercase font-black tracking-[0.2em] text-xs sm:text-sm drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">CAPABILITIES</span>
          <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 md:mb-3 tracking-tight drop-shadow-lg">
          Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Capabilities</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg drop-shadow-md px-4 leading-relaxed">
          Transform raw industrial signals into meaningful operational insights using our advanced detection frameworks.
        </p>
        {/* Mobile swipe hint */}
        <p className="md:hidden text-gray-500 text-[10px] tracking-widest uppercase mt-2">Swipe to explore</p>
      </div>

      {/* Main Carousel Area */}
      <div className="relative w-full max-w-6xl h-[380px] sm:h-[420px] md:h-[450px] flex items-center justify-center my-auto flex-shrink-0 px-2">
        
        {featuresList.map((feature, i) => {
          const total = featuresList.length;
          let diff = i - activeIndex;
          if (diff > total / 2) diff -= total;
          if (diff < -total / 2) diff += total;
          
          let transformClasses = '';
          let zIndex = 0;
          let opacity = 0;

          if (diff === 0) {
            transformClasses = 'translate-x-0 scale-100';
            zIndex = 30;
            opacity = 1;
          } else if (diff === -1) {
            transformClasses = '-translate-x-[120px] sm:-translate-x-[220px] md:-translate-x-[340px] scale-[0.58] sm:scale-[0.65] md:scale-[0.75]';
            zIndex = 20;
            opacity = 0.9;
          } else if (diff === 1) {
            transformClasses = 'translate-x-[120px] sm:translate-x-[220px] md:translate-x-[340px] scale-[0.58] sm:scale-[0.65] md:scale-[0.75]';
            zIndex = 20;
            opacity = 0.9;
          } else if (diff === -2) {
            transformClasses = '-translate-x-[200px] sm:-translate-x-[340px] md:-translate-x-[550px] scale-[0.35] md:scale-[0.55]';
            zIndex = 10;
            opacity = 0.4;
          } else if (diff === 2) {
            transformClasses = 'translate-x-[200px] sm:translate-x-[340px] md:translate-x-[550px] scale-[0.35] md:scale-[0.55]';
            zIndex = 10;
            opacity = 0.4;
          } else if (diff < -2) {
             transformClasses = '-translate-x-[300px] md:-translate-x-[700px] scale-[0.25]';
             zIndex = 0;
             opacity = 0;
          } else if (diff > 2) {
             transformClasses = 'translate-x-[300px] md:translate-x-[700px] scale-[0.25]';
             zIndex = 0;
             opacity = 0;
          }

          const isActive = diff === 0;

          return (
            <div 
              key={i}
              className={`absolute transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center justify-center cursor-pointer select-none ${transformClasses}`}
              style={{ zIndex, opacity, pointerEvents: opacity === 0 ? 'none' : 'auto' }}
              onClick={() => setActiveIndex(i)}
            >
               <div className={`relative flex flex-col justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] rounded-xl overflow-hidden ${isActive ? 'w-[250px] sm:w-[320px] md:w-[380px] lg:w-[440px] h-[360px] sm:h-[400px] md:h-[430px] bg-[#0c132c]/95 border border-white/10 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] p-4 sm:p-5 md:p-6' : 'w-[160px] sm:w-[220px] md:w-[300px] lg:w-[340px] h-[120px] sm:h-[150px] md:h-[200px] bg-transparent border-0 p-0 shadow-none'}`}>
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} pointer-events-none transition-opacity duration-[800ms] ${isActive ? 'opacity-10' : 'opacity-0'}`}></div>
                  
                  <div className={`text-left w-full relative z-10 transition-all duration-[800ms] overflow-hidden flex-shrink-0 ${isActive ? 'max-h-20 opacity-100 mb-2 sm:mb-3' : 'max-h-0 opacity-0 mb-0'}`}>
                    <h3 className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-gray-400 mb-1">Feature Spec</h3>
                    <div className={`w-8 h-[2px] bg-gradient-to-r ${feature.gradient}`}></div>
                  </div>
                  
                  <div className={`relative z-10 border-[3px] ${feature.border} rounded-lg bg-[#060b17]/80 shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] flex-shrink-0 ${isActive ? 'w-full h-32 sm:h-36 md:h-44' : 'w-full h-full'}`}>
                     <div className={`absolute inset-0 bg-gradient-to-tr ${feature.gradient} mix-blend-overlay z-10 pointer-events-none transition-opacity duration-[800ms] ${isActive ? 'opacity-20' : 'opacity-0'}`}></div>
                     <img src={feature.img} alt={feature.alt} className={`w-full h-full object-contain p-2 transition-all duration-[800ms] ${isActive ? 'grayscale-0 scale-100' : 'grayscale-[70%] hover:grayscale-[20%] scale-105'}`} />
                  </div>
            
                  <div className={`text-left w-full relative z-10 transition-all duration-[800ms] overflow-hidden flex-shrink-0 ${isActive ? 'max-h-40 opacity-100 mt-2 sm:mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
                    <h2 className="text-base sm:text-lg md:text-xl font-black text-white mb-1 tracking-tight drop-shadow-md">{feature.title}</h2>
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-medium line-clamp-3">{feature.description}</p>
                  </div>

               </div>
            </div>
          );
        })}

        {/* Pagination fraction */}
        <div className="absolute right-3 sm:right-6 md:right-12 top-0 md:top-4 flex items-center font-serif text-xl sm:text-2xl md:text-4xl z-40 drop-shadow-lg">
          <span className="text-white font-bold">{activeIndex + 1}</span>
          <span className="text-white/50 mx-1 sm:mx-2 font-light">/</span>
          <span className="text-white/50 text-base sm:text-lg md:text-2xl">{featuresList.length}</span>
        </div>

        {/* Mobile dot indicators */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 md:hidden z-40">
          {featuresList.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default Features;

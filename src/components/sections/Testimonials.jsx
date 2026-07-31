import React, { useState, useEffect } from 'react';

const testimonialsData = [
  { 
    name: "Kathrine Katija", 
    title: "Marketing Manager, ABC Ad Services", 
    headline: "Our ad campaigns finally speak to the right audience with clarity resulting in high CTR and ROI.",
    subquote: "Trust her work, that the words that she delivered completely transformed our brand presence.",
    image: "/images/testi1 (1).svg", 
    colorTheme: "orange",
    rating: 5
  },
  { 
    name: "Node Commander", 
    title: "Sector 7G Industrial", 
    headline: "The predictive algorithms implemented in the core update increased data processing efficiency by 400%.",
    subquote: "The AI neural network is flawlessly synchronized across all edge nodes without any telemetry delay.",
    image: "/images/testi1 (2).svg", 
    colorTheme: "cyan",
    rating: 5
  },
  { 
    name: "Lead Architect", 
    title: "Project Genesis Infrastructure", 
    headline: "The seamless transition between deep learning models and real-time environment adaptation is revolutionary.",
    subquote: "It provides an intelligent detection layer that analyzes operational signals before failures occur.",
    image: "/images/testi1 (3).svg", 
    colorTheme: "red",
    rating: 5
  },
  { 
    name: "Cybernetics Lead", 
    title: "Neo-Tokyo Satellite Grid", 
    headline: "Deployment was completely seamless with real-time uplink to global arrays.",
    subquote: "Zero latency telemetry and automated predictive alert workflows have streamlined our whole operation.",
    image: "/images/testi1 (4).svg", 
    colorTheme: "cyan",
    rating: 5
  },
  { 
    name: "Quantum Analyst", 
    title: "Sector 4 Data Enterprise", 
    headline: "The data streaming capabilities exceeded all our corporate benchmarks and security standards.",
    subquote: "Truly a next-generation platform for high-throughput industrial intelligence.",
    image: "/images/testi1 (5).svg", 
    colorTheme: "orange",
    rating: 5
  },
  { 
    name: "Data Scientist", 
    title: "Orbital Structures Lab", 
    headline: "Interactive neural visualizations allow our engineering team to map out complex structures natively.",
    subquote: "Exceptional system stability, instant pattern recognition, and robust anomaly warning systems.",
    image: "/images/testi1 (6).svg", 
    colorTheme: "red",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeData = testimonialsData[activeIndex];

  const len = testimonialsData.length;
  const prevIdx = (activeIndex - 1 + len) % len;
  const currIdx = activeIndex;
  const nextIdx = (activeIndex + 1) % len;

  const visibleCards = [
    { index: prevIdx, position: 'top' },
    { index: currIdx, position: 'active' },
    { index: nextIdx, position: 'bottom' }
  ];

  return (
    <section id="testimonials" className="w-full lg:min-h-[100svh] pt-24 sm:pt-28 md:pt-32 lg:pt-24 pb-12 flex flex-col items-center justify-start lg:justify-center relative overflow-hidden bg-[#060b17] pointer-events-auto">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">

        {/* Section Header — Safely aligned below floating navbar */}
        <div className="flex flex-col items-center text-center w-full mb-8 lg:mb-12">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
            <span className="text-orange-500 uppercase font-black tracking-[0.2em] text-xs sm:text-sm drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">
              TESTIMONIALS
            </span>
            <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Feedback</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm tracking-widest uppercase mt-1">
            Real Operational Intelligence & Verified Reviews
          </p>
        </div>

        {/* Main Side-by-Side Container (3 Avatar Cards Stack + Big Quote Card) */}
        <div className="w-full flex flex-col md:flex-row items-stretch gap-6 lg:gap-8">

          {/* Left Column: Exactly 3 Avatar Cards (Previous, Active, Next) */}
          <div className="w-full md:w-[32%] lg:w-[28%] flex flex-row md:flex-col justify-center items-center gap-3 sm:gap-4 py-1">
            {visibleCards.map(({ index, position }) => {
              const item = testimonialsData[index];
              const isActive = position === 'active';

              return (
                <div
                  key={`${index}-${position}`}
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-full md:h-28 rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-500 overflow-hidden flex items-center justify-center p-2 border ${
                    isActive
                      ? 'bg-[#0c132c] border-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.5)] scale-105 z-10'
                      : 'bg-[#060b17]/80 border-white/10 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:border-white/30 hover:scale-[1.02]'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-1.5 transition-transform duration-500"
                  />
                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-orange-500/80 pointer-events-none animate-pulse"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Large Quote Card */}
          <div className="w-full md:w-[68%] lg:w-[72%] bg-[#0e1628]/90 backdrop-blur-2xl border border-white/10 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-12 relative flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden min-h-[340px] sm:min-h-[380px]">

            {/* Giant Background Quote Watermark */}
            <div className="absolute top-4 right-6 text-white/5 font-serif text-[120px] sm:text-[160px] md:text-[200px] leading-none select-none pointer-events-none">
              ”
            </div>

            {/* Quote Content */}
            <div key={activeIndex} className="relative z-10 animate-[fade-in-up_0.5s_ease-out_forwards]">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-snug md:leading-normal mb-4 tracking-tight">
                "{activeData.headline}"
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-2xl">
                {activeData.subquote}
              </p>
            </div>

            {/* Card Footer (Author Info & Rating) */}
            <div className="relative z-10 mt-8 pt-6 border-t border-dashed border-white/15 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h4 className="text-white font-black text-lg sm:text-xl md:text-2xl tracking-tight mb-0.5">
                  {activeData.name}
                </h4>
                <p className="text-orange-400 font-medium text-xs sm:text-sm tracking-wide">
                  {activeData.title}
                </p>
              </div>

              {/* 5-Star Rating */}
              <div className="flex items-center gap-1 text-orange-500 text-lg sm:text-xl">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;

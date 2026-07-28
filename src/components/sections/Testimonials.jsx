import React, { useState, useEffect } from 'react';

const testimonialsData = [
  { name: "Node Commander", title: "Sector 7G", quote: "The predictive algorithms implemented in the latest core update have increased our data processing efficiency by 400%. The AI neural network is flawlessly synchronized.", image: "/avatar1.png", colorTheme: "cyan" },
  { name: "Lead Architect", title: "Project Genesis", quote: "Absolutely revolutionary. The seamless transition between deep learning models and real-time environment adaptation is like nothing we've ever experienced in the field.", image: "/avatar2.png", colorTheme: "orange" },
  { name: "Data Scientist", title: "Orbital Lab", quote: "The interactive visualizations provided by the neural core allow our team to map out complex quantum structures natively in the browser. Exceptional stability.", image: "/avatar3.png", colorTheme: "red" },
  { name: "Cybernetics Lead", title: "Neo-Tokyo Base", quote: "Deployment was completely seamless. The interface allows us to directly uplink with global satellite arrays in real-time without any noticeable latency.", image: "/avatar4.png", colorTheme: "cyan" },
  { name: "Neural Hacker", title: "The Grid", quote: "I've never seen encryption this tight before. The quantum hashing algorithms are entirely unbreakable. Truly a secure platform.", image: "/avatar5.png", colorTheme: "orange" },
  { name: "Quantum Analyst", title: "Sector 4", quote: "The data streaming capabilities exceeded all our corporate benchmarks. It's truly a next-generation platform for any serious data enterprise.", image: "/avatar6.png", colorTheme: "red" }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeData = testimonialsData[activeIndex];

  const getFilter = (colorTheme) => {
    if (colorTheme === 'orange') return 'hue-rotate-90';
    if (colorTheme === 'red') return 'hue-rotate-180 saturate-150';
    return '';
  };

  const getTextColor = (colorTheme) => {
    if (colorTheme === 'orange') return 'text-orange-500';
    if (colorTheme === 'red') return 'text-red-500';
    return 'text-cyan-400';
  };

  return (
    <section id="testimonials" className="w-full min-h-[100svh] relative overflow-hidden bg-[#060b17] pointer-events-auto">
      
      {/* ── Mobile layout (< md): stacked vertically ── */}
      <div className="flex md:hidden flex-col h-full min-h-[100svh]">

        {/* Text content on top */}
        <div className="flex-1 flex flex-col justify-center px-5 pt-24 pb-4 bg-[#0c132c]/95 relative z-10">

          {/* Decorative glow */}
          <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40 blur-[80px] opacity-20 transition-all duration-1000 ${activeData.colorTheme === 'orange' ? 'bg-orange-500' : activeData.colorTheme === 'red' ? 'bg-red-500' : 'bg-cyan-400'}`}></div>

          <div className="mb-5 relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
              <span className="text-orange-500 uppercase font-black tracking-[0.2em] text-xs drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tight">
              System <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Feedback</span>
            </h2>
            <p className="text-gray-400 text-[10px] tracking-widest uppercase">Live Node Telemetry</p>
          </div>

          <div key={activeIndex} className="animate-[fade-in-up_0.5s_ease-out_forwards] relative z-10">
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-medium mb-5 max-w-sm">
              {activeData.quote}
            </p>
            <div>
              <h3 className="text-white font-bold text-lg mb-1">{activeData.name}</h3>
              <p className={`${getTextColor(activeData.colorTheme)} text-[10px] tracking-widest uppercase font-bold mb-2`}>{activeData.title}</p>
              <div className={`flex gap-1 ${getTextColor(activeData.colorTheme)} text-xs`}>★ ★ ★ ★ ★</div>
            </div>
          </div>

          {/* Progress dots */}
          <div className="mt-6 flex gap-3 relative z-10">
            {testimonialsData.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                  i === activeIndex
                    ? `w-10 ${activeData.colorTheme === 'orange' ? 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]' : activeData.colorTheme === 'red' ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]'}`
                    : 'w-4 bg-white/10 hover:bg-white/30'
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Image grid on bottom */}
        <div className="grid grid-cols-3 grid-rows-2 h-[35vh] sm:h-[40vh]">
          {testimonialsData.map((testim, i) => (
            <div
              key={i}
              className={`relative overflow-hidden cursor-pointer group transition-all duration-700 ${activeIndex === i ? 'scale-105 z-10 shadow-[0_0_50px_rgba(0,0,0,0.8)]' : 'scale-100 z-0 grayscale-[40%] hover:grayscale-0'}`}
              onClick={() => setActiveIndex(i)}
            >
              <img
                src={testim.image}
                alt={testim.name}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${getFilter(testim.colorTheme)} ${activeIndex === i ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
              />
              <div className={`absolute inset-0 border-4 transition-colors duration-500 ${activeIndex === i ? (testim.colorTheme === 'orange' ? 'border-orange-500' : testim.colorTheme === 'red' ? 'border-red-500' : 'border-cyan-400') : 'border-transparent'}`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop layout (md+): side-by-side ── */}
      <div className="hidden md:block absolute inset-0">

        {/* Right: Image Gallery */}
        <div className="absolute inset-0 left-[40%] w-[60%] h-full grid grid-cols-3 grid-rows-2 z-0">
          {testimonialsData.map((testim, i) => (
            <div
              key={i}
              className={`relative overflow-hidden cursor-pointer group transition-all duration-700 ${activeIndex === i ? 'scale-105 z-10 shadow-[0_0_50px_rgba(0,0,0,0.8)]' : 'scale-100 z-0 grayscale-[40%] hover:grayscale-0'}`}
              onClick={() => setActiveIndex(i)}
            >
              <img
                src={testim.image}
                alt={testim.name}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${getFilter(testim.colorTheme)} ${activeIndex === i ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
              />
              <div className={`absolute inset-0 border-4 transition-colors duration-500 ${activeIndex === i ? (testim.colorTheme === 'orange' ? 'border-orange-500' : testim.colorTheme === 'red' ? 'border-red-500' : 'border-cyan-400') : 'border-transparent'}`}></div>
            </div>
          ))}
        </div>

        {/* Left: Content Panel */}
        <div className="absolute top-0 left-0 w-[55%] h-full z-10 flex items-center justify-center pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[#0c132c]/95 backdrop-blur-3xl shadow-[20px_0_50px_rgba(0,0,0,0.8)] rounded-r-[400px] lg:rounded-r-[500px] border-r border-white/10 pointer-events-auto overflow-hidden">
            
            <div className={`absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 blur-[100px] opacity-20 transition-all duration-1000 ${activeData.colorTheme === 'orange' ? 'bg-orange-500' : activeData.colorTheme === 'red' ? 'bg-red-500' : 'bg-cyan-400'}`}></div>

            <div className="w-full h-full p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col justify-center relative z-10">
              
              <div className="mb-8 md:mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
                  <span className="text-orange-500 uppercase font-black tracking-[0.2em] text-sm drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">TESTIMONIALS</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight">
                  System <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Feedback</span>
                </h2>
                <p className="text-gray-400 text-[10px] md:text-xs tracking-widest uppercase">Live Node Telemetry</p>
              </div>

              <div key={activeIndex} className="animate-[fade-in-up_0.5s_ease-out_forwards]">
                <div className={`text-6xl md:text-8xl font-serif leading-none ${getTextColor(activeData.colorTheme)} opacity-20 absolute -z-10 -ml-2 md:-ml-4 -mt-4 md:-mt-6`}>"</div>
                <p className="text-gray-200 text-lg md:text-xl lg:text-2xl leading-relaxed font-medium mb-6 md:mb-8 max-w-sm md:max-w-lg relative z-10">
                  {activeData.quote}
                </p>
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-xl md:text-2xl mb-1">{activeData.name}</h3>
                  <p className={`${getTextColor(activeData.colorTheme)} text-[10px] md:text-xs tracking-widest uppercase font-bold mb-3 md:mb-4`}>{activeData.title}</p>
                  <div className={`flex gap-1 ${getTextColor(activeData.colorTheme)} text-xs md:text-sm`}>★ ★ ★ ★ ★</div>
                </div>
              </div>

              <div className="mt-10 md:mt-12 flex gap-3 relative z-10">
                {testimonialsData.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                      i === activeIndex
                        ? `w-12 ${activeData.colorTheme === 'orange' ? 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]' : activeData.colorTheme === 'red' ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]'}`
                        : 'w-4 bg-white/10 hover:bg-white/30'
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Testimonials;

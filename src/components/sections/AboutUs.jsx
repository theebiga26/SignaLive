import React, { useState, useEffect } from 'react';
import Button from '../Button';

const AboutUs = ({ isActive }) => {
  const [networkCount, setNetworkCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    if (isActive) {
      let n = 0;
      let c = 0;
      
      const nInterval = setInterval(() => {
        n += Math.floor(Math.random() * 3) + 1;
        if (n >= 90) {
          n = 90;
          clearInterval(nInterval);
        }
        setNetworkCount(n);
      }, 30);
      
      const cInterval = setInterval(() => {
        c += Math.floor(Math.random() * 3) + 1;
        if (c >= 95) {
          c = 95;
          clearInterval(cInterval);
        }
        setClientCount(c);
      }, 25);
      
      return () => {
        clearInterval(nInterval);
        clearInterval(cInterval);
      };
    } else {
      // Reset when not active
      setNetworkCount(0);
      setClientCount(0);
    }
  }, [isActive]);

  return (
    <section id="about" className="w-full min-h-screen flex flex-col justify-center p-6 pt-32 pb-20 relative pointer-events-auto">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 z-10 mx-auto">
        
        {/* Left Column: Image Collage */}
        <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center group">
          
          {/* Subtle outline frame for depth */}
          <div className="absolute left-[10%] top-[10%] w-[65%] h-[70%] border-2 border-orange-500/20 z-0 translate-x-4 -translate-y-4 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-700"></div>

          {/* Main Back Image */}
          <div className="absolute right-4 md:right-10 top-0 w-2/3 md:w-3/5 h-[80%] z-10 border-[6px] md:border-[10px] border-[#0a0f1c] shadow-[0_0_40px_rgba(249,115,22,0.15)] overflow-hidden group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(249,115,22,0.3)] transition-all duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" alt="Cyber Network" className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
          </div>

          {/* Front Overlapping Image */}
          <div className="absolute left-0 md:left-4 top-1/4 w-3/5 md:w-1/2 h-[70%] z-20 border-[6px] md:border-[10px] border-[#0a0f1c] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group-hover:translate-y-2 group-hover:translate-x-2 transition-transform duration-700">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" alt="Server Infrastructure" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110" />
          </div>

          {/* Accents (Floating Squares) */}
          <div className="absolute top-4 right-[5%] md:right-[15%] w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-orange-400 to-orange-600 z-0 shadow-[0_0_30px_rgba(249,115,22,0.4)] animate-[bounce_4s_ease-in-out_infinite]"></div>
          <div className="absolute top-1/3 left-2 md:left-8 w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-red-500 to-red-700 z-30 shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-[bounce_5s_ease-in-out_infinite_reverse]"></div>
          <div className="absolute bottom-16 right-0 md:right-8 w-12 h-12 md:w-20 md:h-20 bg-[#0a0f1c] border-4 border-orange-500 z-20 animate-[pulse_3s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-4 left-[20%] w-6 h-6 md:w-8 md:h-8 bg-cyan-400 z-30 shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-[bounce_6s_ease-in-out_infinite]"></div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-1/2 flex flex-col z-20 text-left pt-6 lg:pt-12">
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
            <span className="text-orange-500 uppercase font-black tracking-[0.2em] text-sm drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">About Signalive</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
            Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Detection</span> Layer
          </h2>
          
          <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
            Industrial systems generate complex signal data that manual monitoring simply cannot decipher. Signalive provides an intelligent detection layer that analyzes operational signals, recognizes patterns, and identifies anomalies before equipment failures occur.
          </p>

          <div className="flex flex-col gap-1 mb-10">
            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
              <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-gray-200 text-sm md:text-base font-medium">Predictive operational visibility</p>
            </div>
            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
              <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-gray-200 text-sm md:text-base font-medium">Reduced unexpected disruptions & maintenance costs</p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-8 mb-6 border-b border-white/10 pb-6">
            {/* Progress Circle 1 */}
            <div className="flex items-center gap-4 w-full sm:w-auto hover:-translate-y-1 transition-transform duration-300">
               <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                 <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                   <circle cx="50" cy="50" r="45" fill="none" stroke="#ffffff1a" strokeWidth="8" />
                   <circle cx="50" cy="50" r="45" fill="none" stroke="#f97316" strokeWidth="8" strokeDasharray="283" strokeDashoffset={isActive ? 28 : 283} className="drop-shadow-[0_0_10px_rgba(249,115,22,0.8)] transition-all duration-[1500ms] ease-out" />
                 </svg>
                 <div className="absolute inset-0 flex items-center justify-center text-white font-black text-lg md:text-xl drop-shadow-md">{networkCount}%</div>
               </div>
               <div>
                 <p className="text-white font-black md:text-lg uppercase tracking-wider">Industrial</p>
                 <p className="text-gray-400 text-sm">Uptime</p>
               </div>
            </div>

            {/* Progress Circle 2 */}
            <div className="flex items-center gap-4 w-full sm:w-auto hover:-translate-y-1 transition-transform duration-300">
               <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                 <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                   <circle cx="50" cy="50" r="45" fill="none" stroke="#ffffff1a" strokeWidth="8" />
                   <circle cx="50" cy="50" r="45" fill="none" stroke="#ef4444" strokeWidth="8" strokeDasharray="283" strokeDashoffset={isActive ? 14 : 283} className="drop-shadow-[0_0_10px_rgba(239,68,68,0.8)] transition-all duration-[1500ms] ease-out" />
                 </svg>
                 <div className="absolute inset-0 flex items-center justify-center text-white font-black text-lg md:text-xl drop-shadow-md">{clientCount}%</div>
               </div>
               <div>
                 <p className="text-white font-black md:text-lg uppercase tracking-wider">Anomaly</p>
                 <p className="text-gray-400 text-sm">Catch Rate</p>
               </div>
            </div>
          </div>

          <div>
             <Button variant="primary" className="w-full sm:w-max">
                Read More
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
             </Button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;

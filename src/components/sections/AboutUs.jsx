import React, { useState, useEffect } from 'react';
import Button from '../Button';

const AboutUs = ({ isActive, setCurrentSection }) => {
  const [networkCount, setNetworkCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    if (isActive) {
      let n = 0; let c = 0;
      const nI = setInterval(() => { n += 2; if (n >= 90) { n = 90; clearInterval(nI); } setNetworkCount(n); }, 25);
      const cI = setInterval(() => { c += 2; if (c >= 95) { c = 95; clearInterval(cI); } setClientCount(c); }, 20);
      return () => { clearInterval(nI); clearInterval(cI); };
    } else { setNetworkCount(0); setClientCount(0); }
  }, [isActive]);

  return (
    <section id="about" className="w-full lg:min-h-[100svh] flex flex-col justify-center px-4 sm:px-6 pt-20 lg:pt-24 pb-10 xl:pb-12 relative pointer-events-auto overflow-x-hidden">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 z-10 mx-auto">

        {/* ── Left: Image Collage ── */}
        <div className="w-full lg:w-[44%] relative h-[220px] sm:h-[300px] lg:h-[320px] xl:h-[400px] 2xl:h-[480px] flex-shrink-0 flex items-center justify-center group">
          <div className="absolute left-[10%] top-[10%] w-[65%] h-[70%] border-2 border-orange-500/20 z-0 translate-x-3 -translate-y-3 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-700"></div>

          <div className="absolute right-2 sm:right-6 top-0 w-[58%] h-[76%] z-10 border-[4px] sm:border-[6px] border-[#0a0f1c] shadow-[0_0_30px_rgba(249,115,22,0.15)] overflow-hidden group-hover:-translate-y-2 transition-all duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" alt="Cyber Network" className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
          </div>

          <div className="absolute left-0 sm:left-2 top-1/4 w-[52%] h-[66%] z-20 border-[4px] sm:border-[6px] border-[#0a0f1c] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group-hover:translate-y-2 group-hover:translate-x-1 transition-transform duration-700">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" alt="Server Infrastructure" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110" />
          </div>

          {/* Accent squares — smaller on lg */}
          <div className="absolute top-2 right-[12%] w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 bg-gradient-to-br from-orange-400 to-orange-600 z-0 shadow-[0_0_20px_rgba(249,115,22,0.4)] animate-[bounce_4s_ease-in-out_infinite]"></div>
          <div className="absolute top-1/3 left-1 sm:left-3 w-6 h-6 sm:w-10 sm:h-10 lg:w-8 lg:h-8 bg-gradient-to-br from-red-500 to-red-700 z-30 shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-[bounce_5s_ease-in-out_infinite_reverse]"></div>
          <div className="absolute bottom-8 right-0 sm:right-3 w-8 h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 bg-[#0a0f1c] border-4 border-orange-500 z-20 animate-[pulse_3s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-2 left-[18%] w-4 h-4 sm:w-6 sm:h-6 bg-cyan-400 z-30 shadow-[0_0_12px_rgba(34,211,238,0.6)] animate-[bounce_6s_ease-in-out_infinite]"></div>
        </div>

        {/* ── Right: Content ── */}
        <div className="w-full lg:w-[56%] flex flex-col z-20 text-left">

          <div className="flex items-center gap-3 mb-2 sm:mb-3 xl:mb-4">
            <div className="w-8 sm:w-10 xl:w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
            <span className="text-orange-500 uppercase font-black tracking-[0.2em] text-xs xl:text-sm drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">About Signalive</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-white mb-2 xl:mb-4 leading-tight tracking-tight">
            Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Detection</span> Layer
          </h2>

          <p className="text-gray-300 text-sm xl:text-base leading-relaxed mb-3 sm:mb-4 lg:mb-3 xl:mb-5">
            Industrial systems generate complex signal data that manual monitoring simply cannot decipher. Signalive provides an intelligent detection layer that analyzes operational signals, recognizes patterns, and identifies anomalies before equipment failures occur.
          </p>

          <div className="flex flex-col gap-1 xl:gap-2 mb-3 sm:mb-4 lg:mb-3 xl:mb-6">
            {[
              'Predictive operational visibility',
              'Reduced unexpected disruptions & maintenance costs'
            ].map((text) => (
              <div key={text} className="flex items-center gap-3 py-1.5 px-3 rounded-lg hover:bg-white/5 transition-colors">
                <div className="flex-shrink-0 w-5 h-5 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.3)]">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-gray-200 text-sm xl:text-base font-medium">{text}</p>
              </div>
            ))}
          </div>

          {/* Progress Circles — compact on lg */}
          <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-5 xl:gap-8 mb-4 lg:mb-3 xl:mb-8">
            {[
              { count: networkCount, color: '#f97316', shadowColor: 'rgba(249,115,22,0.8)', offset: isActive ? 28 : 283, label: 'Industrial', sub: 'Uptime' },
              { count: clientCount, color: '#ef4444', shadowColor: 'rgba(239,68,68,0.8)', offset: isActive ? 14 : 283, label: 'Anomaly', sub: 'Catch Rate' },
            ].map(({ count, color, shadowColor, offset, label, sub }) => (
              <div key={label} className="flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-14 lg:h-14 xl:w-20 xl:h-20 flex-shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#ffffff1a" strokeWidth="8" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="8" strokeDasharray="283" strokeDashoffset={offset}
                      className="transition-all duration-[1500ms] ease-out" style={{ filter: `drop-shadow(0 0 6px ${shadowColor})` }} />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-black text-sm drop-shadow-md">{count}%</div>
                </div>
                <div>
                  <p className="text-white font-black text-sm xl:text-base uppercase tracking-wider">{label}</p>
                  <p className="text-gray-400 text-xs xl:text-sm">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          <Button variant="primary" onClick={() => setCurrentSection && setCurrentSection(7)}>
            Contact Us
          </Button>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;

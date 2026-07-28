import React, { useState } from 'react';

const steps = [
  {
    id: '01',
    title: 'INDUSTRIAL SIGNALS',
    desc: 'Sensors and edge devices stream raw operational data continuously.',
    color: 'from-amber-500 via-orange-500 to-red-600',
    accentColor: '#f97316', // orange-500
    textColor: 'text-orange-600',
    badgeBg: 'bg-orange-950/80 border-orange-500/40 text-orange-400',
    cx: 100,
    path: 'M 500 0 C 500 45, 100 25, 100 80',
    // Standard Industrial Signal Telemetry / RF Sensor Emblem Logo
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 18h.01M8 14a5 5 0 0 1 8 0M5 10a10 10 0 0 1 14 0M2 6a15 15 0 0 1 20 0" />
        <circle cx="12" cy="18" r="2" fill="currentColor" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'SMART PROCESSING',
    desc: 'Engines analyze streams in real-time, filtering signal noise.',
    color: 'from-rose-500 via-pink-500 to-red-600',
    accentColor: '#f43f5e', // rose-500
    textColor: 'text-rose-600',
    badgeBg: 'bg-rose-950/80 border-rose-500/40 text-rose-400',
    cx: 300,
    path: 'M 500 0 C 500 45, 300 25, 300 80',
    // Standard Microchip / Smart Processor CPU Emblem Logo
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="3" strokeWidth="2.2" />
        <rect x="8" y="8" width="8" height="8" rx="1.5" fill="currentColor" fillOpacity="0.25" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      </svg>
    )
  },
  {
    id: '03',
    title: 'PATTERN ANALYSIS',
    desc: 'Models establish baseline behavioral patterns across machinery.',
    color: 'from-purple-500 via-violet-500 to-indigo-600',
    accentColor: '#a855f7', // purple-500
    textColor: 'text-purple-600',
    badgeBg: 'bg-purple-950/80 border-purple-500/40 text-purple-400',
    cx: 500,
    path: 'M 500 0 L 500 80',
    // Standard Waveform Analytics / Pattern Trend Logo
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 12h4l3-9 4 18 3-9h4" />
        <circle cx="10" cy="3" r="1.5" fill="currentColor" />
        <circle cx="14" cy="21" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    id: '04',
    title: 'ANOMALY DETECTION',
    desc: 'Algorithms identify unusual behaviors and critical risks.',
    color: 'from-cyan-400 via-blue-500 to-indigo-600',
    accentColor: '#06b6d4', // cyan-500
    textColor: 'text-cyan-600',
    badgeBg: 'bg-cyan-950/80 border-cyan-500/40 text-cyan-400',
    cx: 700,
    path: 'M 500 0 C 500 45, 700 25, 700 80',
    // Standard Detection Shield & Target Radar Logo
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="11" r="3" strokeWidth="2.2" />
        <circle cx="12" cy="11" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    id: '05',
    title: 'INTELLIGENCE',
    desc: 'Dashboards generate alerts and automated predictive workflows.',
    color: 'from-emerald-400 via-green-500 to-teal-600',
    accentColor: '#10b981', // emerald-500
    textColor: 'text-emerald-600',
    badgeBg: 'bg-emerald-950/80 border-emerald-500/40 text-emerald-400',
    cx: 900,
    path: 'M 500 0 C 500 45, 900 25, 900 80',
    // Standard AI Neural Brain & Predictive Network Emblem Logo
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="5" r="2.5" strokeWidth="2.2" />
        <circle cx="6" cy="17" r="2.5" strokeWidth="2.2" />
        <circle cx="18" cy="17" r="2.5" strokeWidth="2.2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M10.8 7.2L7.2 14.8M13.2 7.2l3.6 7.6M8.5 17h7" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    )
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section id="how-it-works" className="w-full lg:min-h-[100svh] pt-20 md:pt-24 lg:pt-24 pb-10 flex flex-col items-center justify-center relative pointer-events-auto overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Header - Positioned safely below the navbar */}
      <div className="flex flex-col items-center text-center w-full z-30 pointer-events-none mb-3 lg:mb-4 xl:mb-8 px-4">
        <div className="flex items-center justify-center gap-3 mb-1.5">
          <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
          <span className="text-orange-500 uppercase font-black tracking-[0.25em] text-xs md:text-sm drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">
            PROCESS PIPELINE
          </span>
          <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-red-500 to-orange-500"></div>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-black text-white mb-1.5 xl:mb-4 tracking-tight drop-shadow-lg">
          How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Works</span>
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto text-xs md:text-sm xl:text-base font-medium drop-shadow-md">
          Our real-time industrial anomaly detection pipeline, branching from raw signal streams to predictive operational intelligence.
        </p>
      </div>

      {/* Desktop Tree-Branching Flowchart (Inspired by diagram) */}
      <div className="hidden lg:flex flex-col items-center w-full max-w-7xl mx-auto px-4 z-20">
        
        {/* Top Central Hub */}
        <div className="relative group cursor-pointer mb-1.5">
          {/* Decorative concentric spinning rings */}
          <div className="absolute -inset-3 rounded-full border border-dashed border-orange-500/30 animate-[spin_30s_linear_infinite]"></div>
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 opacity-40 blur-md group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>
          
          <div className="relative w-26 h-26 xl:w-28 xl:h-28 rounded-full bg-[#0a0f1c] border-2 border-white/15 shadow-2xl flex flex-col items-center justify-center p-2 text-center group-hover:border-orange-500/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 via-pink-500 to-cyan-400 flex items-center justify-center mb-1 shadow-[0_0_15px_rgba(249,115,22,0.5)] text-white group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-300">Signalive</span>
            <span className="text-xs xl:text-sm font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400">
              CORE ENGINE
            </span>
          </div>
        </div>

        {/* SVG Bezier Connector Curves */}
        <div className="w-full h-[45px] xl:h-[60px] -my-1 xl:-my-2 relative z-10 pointer-events-none">
          <svg viewBox="0 0 1000 60" preserveAspectRatio="none" className="w-full h-full overflow-visible">
            {/* Top hub center connection point */}
            <circle cx="500" cy="0" r="5" fill="#f97316" className="animate-pulse" style={{ filter: 'drop-shadow(0 0 8px #f97316)' }} />
            
            {steps.map((step, i) => {
              const isHovered = activeStep === i;
              const isDimmed = activeStep !== null && activeStep !== i;

              return (
                <g key={`curve-${step.id}`}>
                  {/* Base smooth curve */}
                  <path
                    d={step.path}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.15)"
                    strokeWidth="2"
                    className="transition-all duration-300"
                  />
                  {/* Animated glowing dashed stream line */}
                  <path
                    d={step.path}
                    fill="none"
                    stroke={step.accentColor}
                    strokeWidth={isHovered ? "3.5" : "2.5"}
                    strokeDasharray="8 10"
                    className="transition-all duration-300"
                    style={{
                      animation: 'dash 15s linear infinite',
                      filter: isHovered ? `drop-shadow(0 0 8px ${step.accentColor})` : 'none',
                      opacity: isDimmed ? 0.25 : 0.85
                    }}
                  />
                  {/* Target circle point at top of node */}
                  <circle
                    cx={step.cx}
                    cy="55"
                    r={isHovered ? "5" : "4"}
                    fill={step.accentColor}
                    className="transition-all duration-300"
                    style={{
                      filter: `drop-shadow(0 0 6px ${step.accentColor})`
                    }}
                  />
                </g>
              );
            })}
          </svg>
        </div>

        {/* 5 Horizontal Nodes & Cards Row - Equal Height & Stretch */}
        <div className="grid grid-cols-5 gap-5 xl:gap-6 w-full max-w-7xl mx-auto z-20 items-stretch">
          {steps.map((step, index) => {
            const isHovered = activeStep === index;
            const isDimmed = activeStep !== null && activeStep !== index;

            return (
              <div
                key={step.id}
                className={`flex flex-col items-center group cursor-pointer transition-all duration-300 h-full ${
                  isDimmed ? 'opacity-60 scale-95' : 'opacity-100 scale-100'
                }`}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Colorful Medallion Node */}
                <div className="relative mb-2.5 flex-shrink-0">
                  {/* Glowing background */}
                  <div className={`absolute -inset-1 rounded-full bg-gradient-to-br ${step.color} opacity-60 blur-md transition-all duration-300 ${
                    isHovered ? 'opacity-100 scale-125' : 'group-hover:opacity-100 group-hover:scale-110'
                  }`}></div>

                  {/* Gradient Ring Border */}
                  <div className={`relative w-22 h-22 xl:w-24 xl:h-24 rounded-full p-[3px] bg-gradient-to-br ${step.color} shadow-xl transition-transform duration-300 ${
                    isHovered ? 'scale-110' : 'group-hover:scale-105'
                  }`}>
                    {/* Inner 3D Bright Medallion */}
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-white via-slate-100 to-slate-200 flex items-center justify-center shadow-[inset_0_2px_5px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.15)]">
                      <div className={`${step.textColor} transition-transform duration-300 ${isHovered ? 'scale-125' : 'group-hover:scale-110'}`}>
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Step Badge (01, 02, etc.) */}
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 z-30">
                    <span className={`px-3.5 py-0.5 rounded-full text-xs xl:text-sm font-black tracking-widest uppercase border shadow-lg transition-transform ${step.badgeBg} ${
                      isHovered ? 'scale-110' : ''
                    }`}>
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Connecting Dropper Line */}
                <div className="w-full flex flex-col items-center my-1.5 flex-shrink-0">
                  <div className="w-[2px] h-4 bg-gradient-to-b from-white/30 to-white/10"></div>
                  <div className="w-1.5 h-1.5 rounded-full -mt-0.5" style={{ backgroundColor: step.accentColor }}></div>
                </div>

                {/* Step Description Card - Identical Fixed Height & Flex Between */}
                <div className={`w-full h-[170px] xl:h-[185px] bg-[#0e1628]/90 hover:bg-[#111c35] border transition-all duration-300 rounded-2xl p-4 flex flex-col justify-between items-center text-center shadow-xl relative overflow-hidden ${
                  isHovered ? 'border-white/30 -translate-y-1 shadow-[0_10px_25px_rgba(0,0,0,0.5)]' : 'border-white/10 group-hover:border-white/20'
                }`}>
                  <div>
                    <h3 className="text-white font-black text-sm xl:text-base uppercase tracking-wider mb-2 drop-shadow-sm">
                      {step.title}
                    </h3>
                    <p className="text-gray-200 text-xs xl:text-sm font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  
                  {/* Bottom Colored Accent Line */}
                  <div className={`h-[3px] rounded-full bg-gradient-to-r ${step.color} mt-2 transition-all duration-300 ${
                    isHovered ? 'w-full opacity-100' : 'w-10 opacity-70 group-hover:w-16'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Mobile & Tablet Flowchart Layout (< lg screens) */}
      <div className="flex lg:hidden flex-col items-center w-full max-w-md mx-auto px-4 z-20">
        
        {/* Top Central Hub for Mobile */}
        <div className="relative mb-8">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 opacity-50 blur-md animate-pulse"></div>
          <div className="relative w-28 h-28 rounded-full bg-[#0a0f1c] border-2 border-white/20 shadow-xl flex flex-col items-center justify-center p-2 text-center">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-orange-500 via-pink-500 to-cyan-400 flex items-center justify-center mb-1 text-white shadow-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-300">Signalive</span>
            <span className="text-xs font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400">
              CORE ENGINE
            </span>
          </div>
          {/* Vertical connecting line from top hub */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-gradient-to-b from-orange-500 to-white/20"></div>
        </div>

        {/* Vertical Stacked Cards with Timeline - Uniform Height */}
        <div className="w-full flex flex-col gap-6 relative">
          {/* Continuous vertical timeline bar */}
          <div className="absolute top-4 bottom-4 left-9 w-[2px] bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>

          {steps.map((step, i) => (
            <div
              key={step.id}
              className="relative flex items-center gap-4 bg-[#0e1628]/90 border border-white/10 rounded-2xl p-4 shadow-xl transition-all duration-300 hover:border-white/20 hover:-translate-y-1 min-h-[110px]"
            >
              {/* Medallion Node on Left */}
              <div className="relative flex-shrink-0">
                <div className={`w-16 h-16 rounded-full p-[2px] bg-gradient-to-br ${step.color} shadow-lg`}>
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-white via-slate-100 to-slate-200 flex items-center justify-center">
                    <div className={`${step.textColor} scale-95`}>
                      {step.icon}
                    </div>
                  </div>
                </div>
                {/* Step badge */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-black tracking-widest uppercase border shadow ${step.badgeBg}`}>
                    {step.id}
                  </span>
                </div>
              </div>

              {/* Card Content on Right */}
              <div className="flex-col text-left pl-2">
                <h3 className="text-white font-black text-base uppercase tracking-wider mb-1.5 drop-shadow-sm">
                  {step.title}
                </h3>
                <p className="text-gray-200 text-sm font-medium leading-relaxed">
                  {step.desc}
                </p>
                <div className={`h-[2px] w-12 rounded-full bg-gradient-to-r ${step.color} mt-2.5 opacity-80`}></div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default HowItWorks;

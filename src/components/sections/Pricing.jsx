import React, { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      title: 'Monitoring',
      ribbonText: 'MONITORING',
      priceMonthly: '$99',
      priceAnnual: '$79',
      colorTheme: 'from-orange-400 to-red-500',
      shadowColor: 'rgba(249,115,22,0.5)',
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        'Basic sensor integration',
        'Real-time alerting',
        'Standard anomaly detection',
        'Community support',
      ]
    },
    {
      title: 'Enterprise',
      ribbonText: 'ENTERPRISE',
      priceMonthly: '$249',
      priceAnnual: '$199', // 20% off
      isRecommended: true,
      colorTheme: 'from-orange-500 to-red-600',
      shadowColor: 'rgba(239,68,68,0.5)',
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      features: [
        'Advanced anomaly detection',
        'Advanced predictive insights',
        '500GB Operational Storage',
        'Dedicated engineering support',
      ]
    },
    {
      title: 'Intelligence',
      ribbonText: 'INTELLIGENCE',
      priceMonthly: '$499',
      priceAnnual: '$399', // 20% off
      colorTheme: 'from-red-500 to-rose-600',
      shadowColor: 'rgba(225,29,72,0.5)',
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-red-500 drop-shadow-[0_0_12px_rgba(225,29,72,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      features: [
        'Custom API access',
        'Computer vision integration',
        '24/7 priority operational support',
        'Dedicated signal infrastructure',
      ]
    }
  ];


  return (
    <section id="pricing" className="w-full min-h-screen flex flex-col items-center justify-center p-6 pt-24 md:pt-32 pb-48 relative pointer-events-auto">
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center z-10 relative">
        <div className="flex items-center justify-center gap-4 mb-4 mt-12 md:mt-16">
          <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
          <span className="text-orange-500 uppercase font-black tracking-[0.2em] text-sm drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">PRICING</span>
          <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-0 tracking-tight drop-shadow-lg">
          Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Solution</span>
        </h2>
        
        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mt-3 mb-8 relative z-20">
          <span className={`text-sm font-bold transition-colors duration-300 ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-16 h-8 rounded-full bg-[#050914] border border-white/20 relative flex items-center px-1 cursor-pointer pointer-events-auto shadow-inner transition-colors hover:border-orange-500/50"
          >
            <div className={`w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-[0_0_10px_rgba(249,115,22,0.5)] transition-transform duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}></div>
          </button>
          <span className={`text-sm font-bold transition-colors duration-300 ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
            Annually <span className="text-orange-400 ml-1 text-xs px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20">-20%</span>
          </span>
        </div>
        
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-4 lg:gap-6 w-full mt-10 md:mt-16 px-4 md:px-0">
          
          {plans.map((plan, i) => (
            <div key={i} className={`relative w-full max-w-[260px] lg:max-w-[270px] mx-auto flex flex-col items-center group pointer-events-auto transition-all duration-300 ${plan.isRecommended ? 'lg:scale-110 z-20 mt-4 md:mt-0' : 'z-10'}`}>
              
              {/* Top Ribbon */}
              <div 
                className={`absolute top-[-15px] left-[-20px] h-[48px] z-20 bg-gradient-to-r ${plan.colorTheme} pl-6 pr-10 flex items-center transition-transform duration-300 group-hover:-translate-y-2`} 
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0 100%)',
                  boxShadow: `0 10px 20px ${plan.shadowColor}` 
                }}
              >
                <span className="text-white font-black text-lg tracking-widest">{plan.ribbonText}</span>
              </div>
              {/* Ribbon Fold */}
              <div 
                className={`absolute top-[33px] left-[-20px] w-[20px] h-[15px] bg-[#050914] z-10 transition-transform duration-300 group-hover:-translate-y-2`} 
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
              ></div>
              
              {/* Main Body */}
              <div className={`w-full bg-[#0f172a] px-5 pt-10 pb-16 z-10 rounded-2xl relative transition-transform duration-300 group-hover:-translate-y-2 border ${plan.isRecommended ? 'border-orange-500/50 shadow-[0_0_50px_rgba(249,115,22,0.3)]' : 'border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.6)]'}`}>
                
                {plan.icon}
                
                {plan.isRecommended && (
                  <div className="flex justify-center mb-3">
                    <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white text-[10px] font-black tracking-[0.15em] uppercase py-1 px-3.5 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.8)] border border-white/25 animate-pulse">
                      <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Recommended Plan
                    </div>
                  </div>
                )}

                <p className="text-center text-gray-400 text-[10px] xl:text-xs mb-5">Seamless integration for your designated industrial environment.</p>
                <div className="text-center mb-8">
                   <span className="text-3xl font-black text-white">{isAnnual ? plan.priceAnnual : plan.priceMonthly}</span>
                   <span className="text-xs text-gray-400 ml-1">/mo</span>
                   {isAnnual && (
                     <div className="text-[10px] text-orange-400 font-semibold mt-1 tracking-wider uppercase">
                       Billed annually (20% off)
                     </div>
                   )}
                </div>
                <ul className="text-gray-300 space-y-3 mb-2 text-xs xl:text-sm text-left">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-3 leading-tight">
                      <span className={`w-2 h-2 mt-1 flex-shrink-0 rounded-full bg-gradient-to-r ${plan.colorTheme}`}></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Chevron Holder */}
              <div 
                className={`absolute bottom-[-30px] left-[-10px] right-[-10px] h-[130px] bg-gradient-to-br ${plan.colorTheme} z-0 transition-transform duration-300 group-hover:-translate-y-2`}
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), 50% 100%, 0 calc(100% - 30px))',
                  boxShadow: `0 20px 40px ${plan.shadowColor}`
                }}
              >
              </div>
              
              {/* Standardized Button */}
              <button 
                className={`absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[85%] py-3.5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-black tracking-widest uppercase [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] hover:scale-105 active:scale-95 text-[10px] pointer-events-auto z-30`}
              >
                Choose Plan
              </button>

              {/* Bottom Dots */}
              <div className="absolute bottom-[-110px] flex gap-2 transition-transform duration-300 group-hover:translate-y-2">
                 <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.colorTheme}`}></span>
                 <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.colorTheme} opacity-60`}></span>
                 <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.colorTheme} opacity-30`}></span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Pricing;

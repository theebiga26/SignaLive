import React, { useState } from 'react';
import Button from '../Button';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1); // Default to Enterprise

  const plans = [
    {
      title: 'Monitoring',
      subtitle: 'For designated industrial environments.',
      priceMonthly: '$99',
      priceAnnual: '$79',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      subtitle: 'For scaling industrial ops.',
      priceMonthly: '$249',
      priceAnnual: '$199', // 20% off
      isRecommended: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      subtitle: 'For mission-critical infrastructure.',
      priceMonthly: '$499',
      priceAnnual: '$399', // 20% off
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

  const activePlan = plans[selectedPlanIndex];

  return (
    <section id="pricing" className="w-full lg:min-h-[100svh] pt-20 md:pt-24 lg:pt-24 pb-10 xl:pb-12 flex flex-col items-center justify-center relative pointer-events-auto overflow-hidden">
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center z-10 relative px-4">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-1 mt-1">
          <div className="w-10 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
          <span className="text-orange-500 uppercase font-black tracking-[0.2em] text-xs md:text-sm drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">PRICING</span>
          <div className="w-10 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 tracking-tight drop-shadow-lg">
          Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Solution</span>
        </h2>
        
        <p className="text-gray-300 max-w-xl mx-auto text-xs md:text-sm mb-3 drop-shadow-md">
          Select from tailored industrial pricing options designed for your operational needs and budget.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mt-1 mb-4 relative z-20">
          <span className={`text-xs md:text-sm font-bold transition-colors duration-300 ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-7 rounded-full bg-[#050914] border border-white/20 relative flex items-center px-1 cursor-pointer pointer-events-auto shadow-inner transition-colors hover:border-orange-500/50"
          >
            <div className={`w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-[0_0_10px_rgba(249,115,22,0.5)] transition-transform duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`}></div>
          </button>
          <span className={`text-xs md:text-sm font-bold transition-colors duration-300 ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
            Annually <span className="text-orange-400 ml-1 text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20">-20%</span>
          </span>
        </div>

        {/* Outer 2-Column Container without Background Box */}
        <div className="w-full max-w-4xl mx-auto relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* LEFT COLUMN: Stack of Selectable Plan Row-Cards (Equal Height to Right Card) */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-4 h-full">
              {plans.map((plan, i) => {
                const isSelected = i === selectedPlanIndex;
                return (
                  <div
                    key={plan.title}
                    onClick={() => setSelectedPlanIndex(i)}
                    className={`flex-1 flex items-center justify-between p-4 md:p-5 rounded-2xl cursor-pointer transition-all duration-300 group ${
                      isSelected
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-[0_10px_35px_rgba(249,115,22,0.45)] scale-[1.02]'
                        : plan.isRecommended
                        ? 'bg-gradient-to-r from-orange-500/20 via-[#0f172a]/95 to-[#0f172a]/95 text-gray-200 shadow-[0_0_25px_rgba(249,115,22,0.25)] hover:bg-[#0f172a] hover:scale-[1.01]'
                        : 'bg-[#0f172a]/75 text-gray-300 hover:bg-[#0f172a] hover:scale-[1.01] shadow-lg'
                    }`}
                  >
                    {/* Left: Enhanced Icon Badge + Text + Recommended Badge */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors shadow-md ${
                          isSelected
                            ? 'bg-white/20 text-white shadow-inner'
                            : 'bg-white/5 text-orange-500 group-hover:bg-orange-500/10'
                        }`}
                      >
                        {plan.icon}
                      </div>
                      <div className="flex flex-col text-left">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-base md:text-lg font-black text-white">
                            {plan.title} Plan
                          </span>
                          {plan.isRecommended && (
                            <span
                              className={`inline-flex items-center gap-1 text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)] animate-pulse ${
                                isSelected
                                  ? 'bg-white text-orange-600 shadow-white/30'
                                  : 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                              }`}
                            >
                              ★ Recommended
                            </span>
                          )}
                        </div>
                        <span
                          className={`text-xs font-medium ${
                            isSelected ? 'text-white/85' : 'text-gray-400'
                          }`}
                        >
                          {plan.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Right: Enhanced Price Display */}
                    <div className="flex items-baseline flex-shrink-0">
                      <span className="text-2xl md:text-3xl font-black text-white">
                        {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                      </span>
                      <span
                        className={`text-xs ml-0.5 font-bold ${
                          isSelected ? 'text-white/85' : 'text-gray-400'
                        }`}
                      >
                        /Mo
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN: Selected Plan Detail Preview Box (One Unified Panel Without Nested Box) */}
            <div className="lg:col-span-6 flex flex-col h-full">
              <div className="w-full h-full rounded-2xl p-6 md:p-7 bg-gradient-to-br from-orange-500/25 via-[#0f172a] to-[#0f172a] shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between relative overflow-hidden">
                
                {/* Top Section: Header, Price & Feature Checklist */}
                <div>
                  {/* Title & Recommended Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3 text-left">
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-white mb-0.5">
                        {activePlan.title} Plan
                      </h3>
                      <p className="text-xs text-gray-300 font-medium">
                        {activePlan.subtitle}
                      </p>
                    </div>
                    {activePlan.isRecommended && (
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.6)] flex-shrink-0">
                        ★ Recommended
                      </span>
                    )}
                  </div>

                  {/* Price Header formatted like "$249 | Month" */}
                  <div className="flex items-center gap-2.5 my-4 pb-4 border-b border-white/10 text-left">
                    <span className="text-2xl md:text-3xl font-black text-white">
                      {isAnnual ? activePlan.priceAnnual : activePlan.priceMonthly}
                    </span>
                    <span className="text-gray-500 font-bold text-lg">|</span>
                    <span className="text-xs text-gray-300 font-semibold">
                      {isAnnual ? 'Billed Annually (-20%)' : 'Month'}
                    </span>
                  </div>

                  {/* Feature Checklist with Circle Checkmarks */}
                  <div className="space-y-2.5 mb-6 text-left">
                    {activePlan.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5 text-xs md:text-sm text-gray-200 font-medium">
                        <svg
                          className="w-4 h-4 text-orange-500 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prominent CTA Button at bottom of card */}
                <Button variant="primary" className="w-full justify-center text-xs md:text-sm">
                  Purchase Plan
                </Button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;

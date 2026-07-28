import React, { useState } from 'react';

const FAQ = ({ setCurrentSection }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How secure is the industrial data processing?",
      answer: "Our platform utilizes military-grade encryption, ensuring your operational data and edge device streams are completely isolated and secure from external anomalies."
    },
    {
      question: "Can we scale our monitoring package?",
      answer: "Yes, the system allows for real-time tier scaling without any downtime. Upgrades are applied instantaneously to your industrial environment."
    },
    {
      question: "Do you support legacy industrial systems?",
      answer: "Our signal intelligence core is designed to be universally compatible. We provide APIs and edge-connectors for seamless integration across all major industrial protocols."
    },
    {
      question: "How fast is the anomaly detection?",
      answer: "Our predictive smart algorithms analyze signal data locally at the edge, reducing response latency to near absolute zero for instantaneous alerts."
    },
    {
      question: "What happens if an edge device goes offline?",
      answer: "Our distributed architecture automatically relies on overlapping sensor networks to maintain visibility, guaranteeing 99.99% monitoring uptime."
    }
  ];

  return (
    <section id="faq" className="w-full lg:min-h-[100svh] pt-20 md:pt-24 lg:pt-24 pb-10 xl:pb-12 flex flex-col items-center justify-center relative overflow-hidden bg-[#0c132c]">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] w-full z-10 mx-auto flex flex-col pointer-events-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-3 lg:mb-4 mt-2 relative flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-2 lg:mb-3">
            <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
            <span className="text-orange-500 uppercase font-black tracking-[0.2em] text-sm drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">FAQS</span>
            <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-black text-white tracking-tight drop-shadow-lg leading-tight">
            Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Look here</span>
            <span className="text-orange-500 ml-2 animate-pulse">✦</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-10 w-full mt-2 xl:mt-6">
          
          {/* Left Column: Scrollable Accordion */}
          <div className="lg:col-span-2 flex flex-col gap-3 xl:gap-4 max-h-[50vh] sm:max-h-[60vh] lg:max-h-[52vh] xl:max-h-[600px] overflow-y-auto pr-1 sm:pr-2 xl:pr-4 scrollbar-thin scrollbar-thumb-orange-500/50 scrollbar-track-white/5 hover:scrollbar-thumb-orange-500">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={`w-full rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 shadow-[0_10px_30px_rgba(249,115,22,0.3)]' 
                      : 'bg-[#0f172a] border border-white/5 hover:border-orange-500/30'
                  }`}
                >
                  <div className="p-4 md:px-5 md:py-3 xl:p-6 flex justify-between items-center">
                    <h3 className={`text-base md:text-lg xl:text-xl font-bold pr-8 ${isOpen ? 'text-white' : 'text-gray-200'}`}>
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 relative w-6 h-6 flex items-center justify-center">
                      <div className={`absolute w-4 h-0.5 transition-all duration-300 ${isOpen ? 'bg-white' : 'bg-gray-400'}`}></div>
                      <div className={`absolute w-4 h-0.5 transition-all duration-300 ${isOpen ? 'bg-white rotate-0' : 'bg-gray-400 rotate-90'}`}></div>
                    </div>
                  </div>
                  
                  {/* Answer Container (Animated Height Equivalent) */}
                  <div 
                    className={`transition-all duration-500 ease-in-out px-5 md:px-6 overflow-hidden ${
                      isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                    }`}
                  >
                    <p className={`text-sm md:text-base leading-relaxed ${isOpen ? 'text-white/90' : 'text-gray-400'}`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Contact Cards */}
          <div className="flex flex-col justify-center gap-4 h-full">
            
            {/* Contact CTA Card */}
            <div className="bg-[#050914] rounded-[2rem] border border-white/5 overflow-hidden flex flex-col items-center text-center relative shadow-2xl">
               <div className="p-4 xl:p-8 pb-10 xl:pb-14 flex flex-col items-center z-10">
                 
                 {/* Chat Icon */}
                 <div className="relative mb-3">
                   <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.5)] z-10 relative">
                     <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z" />
                     </svg>
                   </div>
                 </div>

                 <h3 className="text-lg md:text-xl xl:text-3xl font-black text-white mb-1.5 xl:mb-3 leading-tight">
                   You have different <br/>questions? Ask Away!
                 </h3>
                 <p className="text-gray-400 text-xs xl:text-sm mb-4 xl:mb-8">
                   Your Questions, Our Answers.<br/>Quick Responses Guaranteed.
                 </p>

                <button
                  onClick={() => setCurrentSection && setCurrentSection(7)}
                  className="px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-black tracking-widest uppercase [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] hover:scale-105 active:scale-95 text-xs md:text-sm cursor-pointer"
                >
                  Initialize More Queries
                </button>
               </div>

               {/* Bottom Wavy Shape */}
               <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-orange-600 to-red-700 opacity-90" style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0% 100%)' }}>
                 {/* Decorative circles inside the wave to mimic the wood/topo texture in the image */}
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 border-2 border-white/10 rounded-full"></div>
                 <div className="absolute -bottom-20 -right-20 w-64 h-64 border-2 border-white/10 rounded-full"></div>
               </div>
            </div>

            {/* Availability Card */}
            <div className="bg-[#0f172a] rounded-[1.5rem] xl:rounded-[2rem] border border-white/5 p-4 xl:p-6 flex items-center gap-3 xl:gap-5 shadow-xl">
               <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                 <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.03 21c.78 0 1-.65 1-1.19v-3.44c0-.54-.45-.99-.99-.99z" />
                 </svg>
               </div>
               <div>
                 <p className="text-gray-400 text-xs tracking-widest uppercase mb-1">Signalive Command Center</p>
                 <h4 className="text-white font-black text-xl mb-1">Available 24/7</h4>
                 <p className="text-orange-400 text-sm font-bold tracking-wide">Monitoring Online</p>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;

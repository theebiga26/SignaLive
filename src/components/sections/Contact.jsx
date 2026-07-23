import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="w-full min-h-[100svh] flex flex-col items-center justify-center p-4 md:p-8 relative pointer-events-auto mt-16 md:mt-0">
      <div className="max-w-[1200px] w-full flex flex-col gap-6 md:gap-10">
        
        {/* Top Row: Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full mt-10 md:mt-0">
          
          {/* Phone Card */}
          <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] group hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-5 h-5 text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <h3 className="text-white font-bold tracking-widest uppercase text-sm">Comm-Link</h3>
            </div>
            <p className="text-gray-400 text-sm font-medium">(+62) 8123 456 789</p>
          </div>

          {/* Email Card */}
          <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(249,115,22,0.15)] group hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-5 h-5 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <h3 className="text-white font-bold tracking-widest uppercase text-sm">Direct Uplink</h3>
            </div>
            <p className="text-gray-400 text-sm font-medium">transmission@signalive.net</p>
          </div>

          {/* Address Card */}
          <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] group hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <h3 className="text-white font-bold tracking-widest uppercase text-sm">Command Center</h3>
            </div>
            <p className="text-gray-400 text-sm font-medium">Industrial Intelligence HQ</p>
          </div>

        </div>

        {/* Bottom Area: Left Content & Right Form */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full h-full max-h-[60vh]">
          
          {/* Left Column: Text & Map */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center text-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
              <span className="text-orange-500 uppercase font-black tracking-[0.2em] text-xs drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">CONTACT</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
              Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Connection</span>
            </h2>
            
            <p className="text-gray-400 text-sm mb-6 leading-relaxed pr-4">
              Establish a direct integration link with our command center. Our AI infrastructure engineers are on standby 24/7 to assist with your industrial monitoring needs.
            </p>

            {/* Stylized Dark Map */}
            <div className="w-full h-40 md:h-48 rounded-2xl overflow-hidden border border-white/10 relative shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-6 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 mix-blend-overlay z-10 pointer-events-none transition-opacity group-hover:opacity-50"></div>
              {/* Radar Sweep Effect */}
              <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,211,238,0.2)_90deg,transparent_90deg)] animate-[spin_4s_linear_infinite] z-20 pointer-events-none"></div>
              
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" alt="Satellite Map" className="w-full h-full object-cover filter brightness-[0.4] contrast-125 sepia-[0.3] hue-rotate-[180deg] saturate-[1.5] group-hover:scale-110 transition-transform duration-700" />
              
              {/* Center Map Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                 <div className="w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,1)] animate-ping absolute inset-0"></div>
                 <div className="w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,1)] relative z-10 border-2 border-white"></div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-2 md:mt-0">
              <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mr-1 md:mr-2">Network:</span>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500 hover:bg-orange-500/20 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>

              {/* Facebook */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-400/20 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)] transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              {/* Pinterest */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-600 hover:bg-red-600/20 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.604 0 12.017 0z"/></svg>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-7/12 relative group mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-orange-400/20 animate-pulse blur-xl rounded-3xl pointer-events-none"></div>
            
            <form className="relative bg-[#060b17]/90 backdrop-blur-2xl rounded-3xl p-6 md:p-8 lg:p-10 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col gap-5 h-full z-10">
              
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">First Name <span className="text-orange-500">*</span></label>
                  <input 
                    type="text" 
                    placeholder="John" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-400 focus:bg-white/10 transition-all shadow-inner focus:shadow-[0_0_15px_rgba(251,146,60,0.2)] text-sm" 
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Last Name <span className="text-orange-500">*</span></label>
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all shadow-inner focus:shadow-[0_0_15px_rgba(239,68,68,0.2)] text-sm" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address <span className="text-orange-500">*</span></label>
                <input 
                  type="email" 
                  placeholder="transmission@node.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-400 focus:bg-white/10 transition-all shadow-inner focus:shadow-[0_0_15px_rgba(251,146,60,0.2)] text-sm" 
                />
              </div>
              
              <div className="flex-1 flex flex-col">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Questions <span className="text-orange-500">*</span></label>
                <textarea 
                  placeholder="What you need help with..." 
                  className="w-full h-full min-h-[120px] bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all shadow-inner focus:shadow-[0_0_15px_rgba(239,68,68,0.2)] resize-none text-sm"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="mt-2 w-full md:w-auto self-start px-10 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 hover:from-orange-400 hover:via-red-400 hover:to-orange-500 text-white font-black tracking-widest uppercase [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] active:scale-95 text-xs md:text-sm"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

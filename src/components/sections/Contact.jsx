import React, { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

/* ── Toast Notification ────────────────────────────────────── */
const Toast = ({ visible, status }) => (
  <div
    className={`fixed top-4 right-4 z-[9999] flex items-center gap-3 px-5 py-4 rounded-2xl border shadow-[0_8px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-500 ease-in-out max-w-[320px] ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
    } ${
      status === 'success'
        ? 'bg-[#0a1f0d]/95 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.25)]'
        : 'bg-[#1f0a0a]/95 border-red-500/40 shadow-[0_0_30px_rgba(239,68,68,0.25)]'
    }`}
  >
    {status === 'success' ? (
      <>
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
          <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-white font-black text-sm tracking-wide">Sending Successful</p>
          <p className="text-emerald-400 text-xs font-medium mt-0.5">We'll get back to you shortly.</p>
        </div>
      </>
    ) : (
      <>
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.4)]">
          <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div>
          <p className="text-white font-black text-sm tracking-wide">Send Failed</p>
          <p className="text-red-400 text-xs font-medium mt-0.5">Please try again later.</p>
        </div>
      </>
    )}
  </div>
);

/* ── Contact Section ───────────────────────────────────────── */
const Contact = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [toastVisible, setToastVisible] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState(null);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const showToast = (type) => {
    setStatus(type);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const payload = { ...form };
      if (turnstileToken) {
        payload['cf-turnstile-response'] = turnstileToken;
      }
      const res = await fetch('https://formspree.io/f/xgogdolg', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setForm({ firstName: '', lastName: '', email: '', message: '' });
        showToast('success');
      } else {
        showToast('error');
      }
    } catch {
      showToast('error');
    }
  };

  const isSending = status === 'sending';

  return (
    <>
      <Toast visible={toastVisible} status={status} />

      <section id="contact" className="w-full lg:min-h-[100svh] pt-20 md:pt-24 lg:pt-24 pb-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 relative pointer-events-auto overflow-x-hidden">
        <div className="max-w-[1200px] w-full flex flex-col gap-5 sm:gap-6 md:gap-8">

          {/* ── Info Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full mt-2">
            
            {/* Phone */}
            <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] group hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <svg className="w-5 h-5 text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <h3 className="text-white font-bold tracking-widest uppercase text-sm">Comm-Link</h3>
              </div>
              <p className="text-gray-400 text-sm font-medium">+1 (415) 555-0119</p>
            </div>

            {/* Email */}
            <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(249,115,22,0.15)] group hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <svg className="w-5 h-5 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <h3 className="text-white font-bold tracking-widest uppercase text-sm">Direct Uplink</h3>
              </div>
              <p className="text-gray-400 text-sm font-medium">info@signalive.net</p>
            </div>

            {/* Address */}
            <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] group hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <svg className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <h3 className="text-white font-bold tracking-widest uppercase text-sm">Command Center</h3>
              </div>
              <p className="text-gray-400 text-sm font-medium">650 Market St, San Francisco, CA 94102</p>
            </div>

          </div>

          {/* ── Main Two-Column ── */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 w-full">

            {/* Left: Text + Map */}
            <div className="w-full lg:w-5/12 flex flex-col justify-center text-left">
              <div className="flex items-center gap-4 mb-3 sm:mb-4">
                <div className="w-8 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></div>
                <span className="text-orange-500 uppercase font-black tracking-[0.2em] text-xs drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">CONTACT</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight drop-shadow-lg">
                Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Connection</span>
              </h2>
              
              <p className="text-gray-400 text-sm mb-4 sm:mb-6 leading-relaxed pr-0 lg:pr-4">
                Establish a direct integration link with our command center. Our AI infrastructure engineers are on standby 24/7 to assist with your industrial monitoring needs.
              </p>

              {/* Real OpenStreetMap embed */}
              <div className="w-full h-40 sm:h-48 rounded-2xl overflow-hidden border border-white/10 relative shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-4 sm:mb-6 group">
                {/* Cyan tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 to-blue-600/10 mix-blend-overlay z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0"></div>
                {/* Radar sweep */}
                <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,211,238,0.12)_90deg,transparent_90deg)] animate-[spin_5s_linear_infinite] z-20 pointer-events-none"></div>
                {/* Orange pin pulse on top */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                  <div className="w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,1)] animate-ping absolute inset-0"></div>
                  <div className="w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,1)] relative z-10 border-2 border-white"></div>
                </div>
                {/* Real map iframe — 650 Market St, San Francisco */}
                <iframe
                  title="Signalive Command Center"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0864673982846!2d-122.40489568467997!3d37.78916677975772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858082925e70cf%3A0x6e5a3e3e3e3e3e3e!2s650%20Market%20St%2C%20San%20Francisco%2C%20CA%2094102%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  className="w-full h-full border-0 grayscale-[60%] contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-700"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Social Icons */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
                <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mr-1">Network:</span>
                {/* Twitter */}
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500 hover:bg-orange-500/20 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                {/* Facebook */}
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-400/20 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)] transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full lg:w-7/12 relative group mt-2 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-orange-400/20 animate-pulse blur-xl rounded-3xl pointer-events-none"></div>

              <form
                onSubmit={handleSubmit}
                className="relative bg-[#060b17]/90 backdrop-blur-2xl rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col gap-4 sm:gap-5 z-10"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                  <div className="flex-1">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">First Name <span className="text-orange-500">*</span></label>
                    <input
                      type="text" name="firstName" value={form.firstName} onChange={handleChange}
                      placeholder="John" required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-400 focus:bg-white/10 transition-all shadow-inner focus:shadow-[0_0_15px_rgba(251,146,60,0.2)] text-sm"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Last Name <span className="text-orange-500">*</span></label>
                    <input
                      type="text" name="lastName" value={form.lastName} onChange={handleChange}
                      placeholder="Doe" required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all shadow-inner focus:shadow-[0_0_15px_rgba(239,68,68,0.2)] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address <span className="text-orange-500">*</span></label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="info@signalive.net" required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-400 focus:bg-white/10 transition-all shadow-inner focus:shadow-[0_0_15px_rgba(251,146,60,0.2)] text-sm"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Questions <span className="text-orange-500">*</span></label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="What you need help with..." required
                    className="w-full min-h-[120px] bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all shadow-inner focus:shadow-[0_0_15px_rgba(239,68,68,0.2)] resize-none text-sm"
                  ></textarea>
                </div>

                {/* Cloudflare Turnstile */}
                <div className="w-full flex justify-center sm:justify-start mt-2">
                  <Turnstile 
                    siteKey="0x4AAAAAAD_upg56nvHMva34" 
                    onSuccess={(token) => setTurnstileToken(token)}
                    onError={() => setTurnstileToken(null)}
                    onExpire={() => setTurnstileToken(null)}
                    options={{ theme: 'dark' }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending || !turnstileToken}
                  className={`mt-1 w-full sm:w-auto self-start px-8 sm:px-10 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white font-black tracking-widest uppercase [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] text-xs md:text-sm flex items-center justify-center gap-2.5 ${
                    (isSending || !turnstileToken)
                      ? 'opacity-50 cursor-not-allowed grayscale-[30%]'
                      : 'hover:from-orange-400 hover:via-red-400 hover:to-orange-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] hover:scale-105 active:scale-95 cursor-pointer'
                  }`}
                >
                  {isSending ? (
                    <>
                      {/* Spinner */}
                      <svg className="animate-spin w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

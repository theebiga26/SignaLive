import React, { useState, useEffect } from 'react';

const CookieConsent = ({ onOpenLegal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('signalive_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('signalive_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('signalive_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[100] max-w-sm bg-[#060b17]/90 backdrop-blur-2xl border border-white/10 p-6 shadow-[0_0_50px_rgba(249,115,22,0.15)] animate-[fade-in-up_0.5s_ease-out] [clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)]">
      <div className="flex items-center gap-3 mb-3">
        <img src="/images/logo.svg" alt="Signalive Logo" className="h-6 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
        <h4 className="text-white font-bold tracking-widest uppercase text-sm">Data Protocols</h4>
      </div>
      <p className="text-gray-400 text-xs mb-6 leading-relaxed">
        We use essential telemetry (cookies) to ensure optimal node performance and data synchronization across the network. Review our{' '}
        <button 
          onClick={() => onOpenLegal && onOpenLegal('cookie')} 
          className="text-orange-500 hover:text-orange-400 hover:underline font-bold inline bg-transparent border-none p-0 cursor-pointer"
        >
          Cookie Policy
        </button>{' '}
        for details. Do you accept our transmission protocols?
      </p>
      <div className="flex gap-3">
        <button 
          onClick={handleAccept}
          className="flex-1 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-black text-[10px] md:text-xs tracking-widest uppercase [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] transition-all shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] active:scale-95 cursor-pointer pointer-events-auto"
        >
          Accept
        </button>
        <button 
          onClick={handleReject}
          className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 text-gray-300 font-bold text-[10px] md:text-xs tracking-widest uppercase border border-white/10 [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] transition-all hover:text-white active:scale-95 cursor-pointer pointer-events-auto"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;

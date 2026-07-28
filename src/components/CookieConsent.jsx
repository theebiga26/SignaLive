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
        <svg className="w-5 h-5 text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
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

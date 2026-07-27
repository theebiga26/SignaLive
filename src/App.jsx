import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import HowItWorks from './components/sections/HowItWorks'
import AboutUs from './components/sections/AboutUs'
import Pricing from './components/sections/Pricing'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'

const sections = [
  { id: 'hero', label: 'Home', component: <Hero key="hero" /> },
  { id: 'about', label: 'About Us', component: <AboutUs key="about" /> },
  { id: 'features', label: 'Core Features', component: <Features key="features" /> },
  { id: 'how-it-works', label: 'How It Works', component: <HowItWorks key="how" /> },
  { id: 'testimonials', label: 'Testimonials', component: <Testimonials key="testimonials" /> },
  { id: 'pricing', label: 'Pricing Plans', component: <Pricing key="pricing" /> },
  { id: 'faq', label: 'FAQ', component: <FAQ key="faq" /> },
  { id: 'contact', label: 'Contact Us', component: <Contact key="contact" /> },
  { id: 'footer', label: 'Footer', component: <Footer key="footer" /> }
]

const App = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const isScrolling = useRef(false)
  const touchStartY = useRef(0)

  // Desktop Mouse Wheel Logic
  useEffect(() => {
    const handleWheel = (e) => {
      if (window.innerWidth < 768) return; // Disable on mobile
      if (isScrolling.current) return;
      
      if (e.deltaY > 50) {
        if (currentSection < sections.length - 1) {
          isScrolling.current = true;
          setCurrentSection(prev => prev + 1);
          setTimeout(() => isScrolling.current = false, 1200);
        }
      } else if (e.deltaY < -50) {
        if (currentSection > 0) {
          isScrolling.current = true;
          setCurrentSection(prev => prev - 1);
          setTimeout(() => isScrolling.current = false, 1200);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection]);

  // Mobile Touch Swipe Logic (Desktop Touchpads only now)
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (window.innerWidth < 768) return;
      touchStartY.current = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e) => {
      if (window.innerWidth < 768) return;
      if (isScrolling.current) return;
      const touchEndY = e.touches[0].clientY;
      const diff = touchStartY.current - touchEndY;
      
      if (diff > 50) {
        if (currentSection < sections.length - 1) {
          isScrolling.current = true;
          setCurrentSection(prev => prev + 1);
          setTimeout(() => isScrolling.current = false, 1200);
        }
      } else if (diff < -50) {
        if (currentSection > 0) {
          isScrolling.current = true;
          setCurrentSection(prev => prev - 1);
          setTimeout(() => isScrolling.current = false, 1200);
        }
      }
    };
    
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentSection]);

  return (
    <div className="w-full min-h-screen md:h-screen md:fixed md:inset-0 font-sans text-white overflow-x-hidden md:overflow-hidden bg-[#0c132c]">
      
      {/* Animated Cinematic Background Image (Fixed) */}
      <div className="fixed md:absolute inset-0 w-full h-full z-0 overflow-hidden bg-black pointer-events-none">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center animate-cinematic opacity-80 mix-blend-screen" style={{ backgroundImage: "url('/bg-industrial.png')" }}></div>
        <div className="absolute inset-0 w-full h-full bg-[#0a0f1c]/70"></div> {/* Slightly darkened overlay for readability */}
      </div>

      {/* Floating Navbar (Fixed) */}
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />

      {/* Absolute Crossfading Sections on Desktop, Vertical Stack on Mobile */}
      <main className="relative w-full z-10 flex flex-col md:block md:absolute md:inset-0 md:pointer-events-none">
        {sections.map((section, index) => {
          const isActive = index === currentSection;
          return (
            <div 
              key={index}
              className={`
                w-full min-h-[100svh] flex flex-col justify-center items-center relative z-10 py-16 md:py-0
                opacity-100 scale-100 pointer-events-auto
                md:absolute md:inset-0 md:transition-all md:duration-1000 md:ease-in-out
                ${isActive ? 'md:opacity-100 md:scale-100 md:z-20 md:translate-y-0' : 'md:opacity-0 md:scale-95 md:z-0 md:translate-y-8 md:pointer-events-none'}
              `}
            >
              {React.cloneElement(section.component, { setCurrentSection, isActive })}
            </div>
          );
        })}
      </main>

      {/* Right-side Pagination Indicators with Labels */}
      <div className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-5">
        {sections.map((section, index) => {
          const isActive = index === currentSection;
          // Hide dot for footer to keep UI clean at the very bottom
          if (section.id === 'footer') return null;
          
          return (
            <div 
              key={index} 
              className="relative flex items-center justify-end group"
            >
              {/* Tooltip Label */}
              <span className={`absolute right-4 md:right-5 px-3 py-1 bg-[#0a0f1c]/80 backdrop-blur-md rounded-md border border-white/10 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 whitespace-nowrap pointer-events-none ${
                isActive 
                  ? 'opacity-100 translate-x-0 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)] border-orange-500/30' 
                  : 'opacity-0 translate-x-4 text-gray-400 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-cyan-400 group-hover:border-cyan-400/30'
              }`}>
                {section.label}
              </span>
              
              {/* Dot */}
              <div 
                className={`w-2 md:w-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                  isActive ? 'h-8 md:h-10 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]' : 'h-2 md:h-2.5 bg-white/20 hover:bg-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] hover:scale-125'
                }`}
                onClick={() => {
                  if (isScrolling.current) return;
                  isScrolling.current = true;
                  setCurrentSection(index);
                  setTimeout(() => isScrolling.current = false, 1200);
                }}
              ></div>
            </div>
          )
        })}
      </div>
      
      <CookieConsent />
    </div>
  )
}

export default App
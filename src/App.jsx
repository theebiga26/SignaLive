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
import LegalDocument from './components/sections/LegalDocument'

const sections = [
  { id: 'hero',         label: 'Home',         component: <Hero key="hero" /> },
  { id: 'about',        label: 'About Us',      component: <AboutUs key="about" /> },
  { id: 'features',     label: 'Core Features', component: <Features key="features" /> },
  { id: 'how-it-works', label: 'How It Works',  component: <HowItWorks key="how" /> },
  { id: 'testimonials', label: 'Testimonials',  component: <Testimonials key="testimonials" /> },
  { id: 'pricing',      label: 'Pricing Plans', component: <Pricing key="pricing" /> },
  { id: 'faq',          label: 'FAQ',           component: <FAQ key="faq" /> },
  { id: 'contact',      label: 'Contact Us',    component: <Contact key="contact" /> },
  { id: 'footer',       label: 'Footer',        component: <Footer key="footer" /> },
]

// Desktop snapping threshold — lg breakpoint (1024px)
const SNAP_BREAKPOINT = 1024;

const App = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [activeLegalDoc, setActiveLegalDoc] = useState(null)
  const [visitedSections, setVisitedSections] = useState([0])
  const isScrolling = useRef(false)
  const touchStartY = useRef(0)

  // Track visited sections for lazy-mounting
  useEffect(() => {
    if (!visitedSections.includes(currentSection)) {
      setVisitedSections(prev => [...prev, currentSection]);
    }
  }, [currentSection]);

  // Helper: walk up DOM to find a scrollable ancestor within the active section
  const getScrollableAncestor = (el, direction) => {
    while (el && el !== document.body) {
      const style = window.getComputedStyle(el);
      const overflow = style.overflow + ' ' + style.overflowY;
      const isScrollable = overflow.includes('auto') || overflow.includes('scroll');
      if (isScrollable && el.scrollHeight > el.clientHeight) {
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;
        const atTop = el.scrollTop <= 0;
        if (direction === 'down' && !atBottom) return el;
        if (direction === 'up' && !atTop) return el;
      }
      el = el.parentElement;
    }
    return null;
  };

  // Desktop Mouse Wheel — only on lg+ (1024px)
  useEffect(() => {
    let ticking = false;

    const handleWheel = (e) => {
      if (window.innerWidth < SNAP_BREAKPOINT) return;

      // If a scrollable element inside the section still has room to scroll, let it
      const dir = e.deltaY > 0 ? 'down' : 'up';
      if (getScrollableAncestor(e.target, dir)) return;

      e.preventDefault();
      if (isScrolling.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
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
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection]);

  // Touchpad vertical swipe — only on lg+ (1024px)
  useEffect(() => {
    let ticking = false;

    const handleTouchStart = (e) => {
      if (window.innerWidth < SNAP_BREAKPOINT) return;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (window.innerWidth < SNAP_BREAKPOINT) return;

      e.preventDefault();
      if (isScrolling.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
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
          ticking = false;
        });
        ticking = true;
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
    <div className="w-full min-h-screen lg:h-screen lg:fixed lg:inset-0 font-sans text-white overflow-x-hidden lg:overflow-hidden bg-[#0c132c]">

      {/* Cinematic Background — fixed on both, but only fills viewport on lg+ */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden bg-black pointer-events-none">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center animate-cinematic opacity-80 mix-blend-screen" style={{ backgroundImage: "url('/bg-industrial.png')" }}></div>
        <div className="absolute inset-0 w-full h-full bg-[#0a0f1c]/70"></div>
      </div>

      {/* Floating Navbar */}
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />

      {/*
        lg+  → Crossfading fullscreen sections (absolute stack, pointer-events toggled)
        < lg → Normal vertical stacked scroll (flex-col, each section flows naturally)
      */}
      <main className="relative w-full z-10 flex flex-col lg:block lg:absolute lg:inset-0 lg:pointer-events-none overflow-x-hidden">
        {sections.map((section, index) => {
          const isActive = index === currentSection;
          const hasBeenVisited = visitedSections.includes(index);

          return (
            <div
              key={index}
              data-section={index}
              className={`
                w-full relative z-10 overflow-x-hidden
                lg:absolute lg:inset-0 lg:overflow-hidden
                lg:transition-all lg:duration-1000 lg:ease-in-out
                ${isActive
                  ? 'lg:opacity-100 lg:scale-100 lg:z-20 lg:translate-y-0 lg:pointer-events-auto'
                  : 'lg:opacity-0 lg:scale-95 lg:z-0 lg:translate-y-8 lg:pointer-events-none'
                }
              `}
            >
              {(window.innerWidth < SNAP_BREAKPOINT || hasBeenVisited) ? (
                React.cloneElement(section.component, {
                  setCurrentSection,
                  isActive,
                  onOpenLegal: section.id === 'footer' ? setActiveLegalDoc : undefined
                })
              ) : (
                <div className="h-screen w-full" />
              )}
            </div>
          );
        })}
      </main>

      {/* Right-side pagination dots — desktop only (lg+) */}
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-5">
        {sections.map((section, index) => {
          const isActive = index === currentSection;
          if (section.id === 'footer') return null;

          return (
            <div key={index} className="relative flex items-center justify-end group">
              {/* Tooltip label */}
              <span className={`absolute right-5 px-3 py-1 bg-[#0a0f1c]/80 backdrop-blur-md rounded-md border border-white/10 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 whitespace-nowrap pointer-events-none ${
                isActive
                  ? 'opacity-100 translate-x-0 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)] border-orange-500/30'
                  : 'opacity-0 translate-x-4 text-gray-400 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-cyan-400 group-hover:border-cyan-400/30'
              }`}>
                {section.label}
              </span>

              {/* Dot */}
              <div
                className={`w-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                  isActive
                    ? 'h-10 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]'
                    : 'h-2.5 bg-white/20 hover:bg-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] hover:scale-125'
                }`}
                onClick={() => {
                  if (isScrolling.current) return;
                  isScrolling.current = true;
                  setCurrentSection(index);
                  setTimeout(() => isScrolling.current = false, 1200);
                }}
              ></div>
            </div>
          );
        })}
      </div>

      <CookieConsent onOpenLegal={setActiveLegalDoc} />
      {activeLegalDoc && (
        <LegalDocument
          type={activeLegalDoc}
          onClose={() => setActiveLegalDoc(null)}
        />
      )}
    </div>
  )
}

export default App
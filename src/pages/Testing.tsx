import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const videos = [
  { id: 0, url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081127_0992a171-d3c6-4978-8213-0ec5df8b6d63.mp4', label: 'Golden Hour' },
  { id: 1, url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_092026_dd05b805-ea0f-40b2-8c52-332b88502592.mp4', label: 'Still Water' },
  { id: 2, url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081042_df7202bf-bd80-4b2b-bbc6-1f09ba2870e9.mp4', label: 'Deep Woods' },
  { id: 3, url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_080959_4cac5234-3573-464e-a5b7-76b94b8a7d61.mp4', label: 'Quiet Dawn' },
];

export function Testing() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleVideoChange = (id: number) => {
    if (activeVideo === id || isTransitioning) return;
    setIsTransitioning(true);
    setActiveVideo(id);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const isDark = activeVideo === 2;

  // Use instrument serif for heading text if available
  const fontClass = "font-serif";

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black font-sans text-white">
      {/* Background Videos */}
      {videos.map((vid) => (
        <video
          key={vid.id}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${activeVideo === vid.id ? 'opacity-100' : 'opacity-0'}`}
          src={vid.url}
        />
      ))}

      {/* Transparent PNG Overlay */}
      <motion.div
        className="absolute inset-0 z-[1] w-full h-full pointer-events-none opacity-30"
        style={{
          backgroundImage: `url('https://soft-zoom-63098134.figma.site/_assets/v11/0b4a435b2df2747593c43d7a1c9b4578f7d8d90c.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
      />

      {/* Content Layer */}
      <div className="relative z-[2] w-full h-full flex flex-col pointer-events-auto">
        
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-6 w-full">
          <div className={`${fontClass} italic text-xl sm:text-2xl tracking-wide ${isDark ? 'text-[#182C41]' : 'text-white'} transition-colors duration-700`}>
            WinkyX
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center testing-liquid-glass rounded-full p-1.5 pl-6 gap-2">
            {['How It Works', 'Architecture', 'Threat Model', 'Docs'].map(link => (
              <a key={link} href="#" className={`text-sm px-4 py-2 text-white/90 hover:text-white transition-colors cursor-pointer ${isDark ? 'text-[#182C41]/90 hover:text-[#182C41]' : 'text-white/90 hover:text-white'}`}>
                {link}
              </a>
            ))}
            <button className={`font-medium text-sm px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors ml-2 ${isDark ? 'bg-[#182C41] text-white' : 'bg-white text-black'}`}>
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className={`md:hidden testing-liquid-glass rounded-full p-3 flex items-center justify-center relative overflow-hidden w-12 h-12 z-[60]`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X size={20} className={isDark && !menuOpen ? 'text-[#182C41]' : 'text-white'} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu size={20} className={isDark ? 'text-[#182C41]' : 'text-white'} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center px-6"
            >
              <div className="flex flex-col items-center gap-8">
                {['How It Works', 'Architecture', 'Threat Model', 'Docs'].map((link, i) => (
                  <motion.a
                    key={link}
                    href="#"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.5, delay: 0.1 + (i * 0.05), ease: [0.4, 0, 0.2, 1] }}
                    className="text-white text-3xl font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </motion.a>
                ))}
                <motion.button
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="bg-white text-black font-semibold text-lg px-10 py-4 rounded-full mt-4"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 mt-[-10vh]">
          
          {/* Badge */}
          <div className={`testing-liquid-glass rounded-full px-6 py-2.5 mb-8 flex items-center gap-2 ${isDark ? 'text-[#182C41]' : 'text-white/90'} transition-colors duration-700`}>
            <span className="text-xs uppercase tracking-widest font-semibold">Over 10,000 nodes active</span>
          </div>

          {/* Heading */}
          <h1 className={`${fontClass} text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] max-w-4xl text-center mb-6 ${isDark ? 'text-[#182C41]' : 'text-white'} transition-colors duration-700`}>
            Private & Secure <br/>
            <span className="italic">Offline Messenger</span>
          </h1>

          {/* Subtext */}
          <p className={`text-base sm:text-lg max-w-xl text-center mb-10 leading-relaxed font-sans ${isDark ? 'text-[#182C41]/80' : 'text-white/80'} transition-colors duration-700`}>
            WinkyX is the secure, private messenger that works anywhere—even without internet or cellular service. Keep your personal conversations completely off the cloud and safe from prying eyes.
          </p>

          {/* Email Input */}
          <div className={`testing-liquid-glass rounded-full p-2 flex items-center w-full max-w-[320px] sm:max-w-sm mb-12`}>
            <input 
              type="email" 
              placeholder="Your Best Email" 
              className={`bg-transparent outline-none border-none flex-1 px-4 text-sm font-sans ${isDark ? 'text-[#182C41] placeholder-[#182C41]/60' : 'text-white placeholder-white/60'} transition-colors duration-700`} 
            />
            <button className={`font-medium text-sm px-6 py-2.5 rounded-full transition-colors duration-700 ${isDark ? 'bg-[#182C41] text-white' : 'bg-white text-black'} hover:opacity-90 whitespace-nowrap`}>
              Early Access
            </button>
          </div>

          {/* Video Switcher */}
          <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto max-w-full pb-4 px-4 snap-x">
            {videos.map((vid) => (
              <button
                key={vid.id}
                onClick={() => handleVideoChange(vid.id)}
                className={`snap-center uppercase tracking-widest text-[10px] sm:text-xs font-semibold pb-2 border-b-2 transition-all duration-300 whitespace-nowrap
                  ${activeVideo === vid.id 
                    ? (isDark ? 'border-[#182C41] text-[#182C41]' : 'border-white text-white') 
                    : (isDark ? 'border-transparent text-[#182C41]/50 hover:text-[#182C41]/80' : 'border-transparent text-white/50 hover:text-white/80')}
                `}
              >
                {vid.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={`flex-shrink-0 w-full flex items-center justify-center gap-3 sm:gap-6 pb-8 px-6 text-xs sm:text-sm font-sans flex-wrap transition-colors duration-700 ${isDark ? 'text-[#182C41]/70' : 'text-white/70'}`}>
          <div className="whitespace-nowrap">60+ Local Nodes</div>
          <div className="hidden sm:block opacity-40">|</div>
          <div className="whitespace-nowrap">12,000+ Users</div>
          <div className="hidden sm:block opacity-40">|</div>
          <div className="whitespace-nowrap">4.8 Satisfaction</div>
          <div className="hidden sm:block opacity-40">|</div>
          <div className="whitespace-nowrap">Privacy-First Design</div>
        </div>
      </div>
    </section>
  );
}

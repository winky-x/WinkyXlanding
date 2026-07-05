import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export function Hero() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleRequestBeta = () => {
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    window.dispatchEvent(
      new CustomEvent("open-beta-modal", { detail: { email: email.trim() } })
    );
  };

  const fadeUpDelayed = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.4, delay: delay + 2.0, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 md:pt-32 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-85"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div {...fadeUpDelayed(0.1)} className="flex flex-col items-center gap-4 mb-8">
          <span className="text-muted-foreground text-sm uppercase tracking-[3px]">Private & Secure Offline Messenger</span>
        </motion.div>

        <motion.h1 {...fadeUpDelayed(0.25)} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] max-w-4xl mx-auto mb-6 leading-[1.1]">
          Go <span className="font-serif italic font-normal">Off-Grid</span> and Stay Safe
        </motion.h1>

        <motion.p {...fadeUpDelayed(0.4)} className="text-lg text-[hsl(var(--hero-subtitle))] max-w-2xl mx-auto mb-10 leading-relaxed">
          WinkyX is the secure, private messenger that works anywhere—even without internet or cellular service. Keep your personal conversations completely off the cloud and safe from prying eyes.
        </motion.p>

        <motion.div 
          {...fadeUpDelayed(0.55)} 
          className="liquid-glass rounded-[24px] sm:rounded-full p-1.5 sm:p-2 max-w-lg mx-auto flex flex-col sm:flex-row gap-2 sm:gap-0 items-stretch sm:items-center"
        >
          <input 
            type="email" 
            placeholder="Enter your email for beta access" 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleRequestBeta();
              }
            }}
            className="flex-1 bg-transparent border-none outline-none text-foreground px-6 py-3.5 sm:py-0 placeholder:text-muted-foreground text-center sm:text-left text-sm"
          />
          <motion.button 
            type="button"
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.98 }}
            onClick={handleRequestBeta}
            className="bg-foreground text-background font-medium rounded-full px-8 py-3.5 sm:py-3 uppercase tracking-wide text-xs sm:text-sm w-full sm:w-auto whitespace-nowrap"
          >
            REQUEST BETA
          </motion.button>
        </motion.div>
        {error && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm mt-4 font-medium"
          >
            {error}
          </motion.p>
        )}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 md:pt-32 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div {...fadeUp(0.1)} className="flex flex-col items-center gap-4 mb-8">
          <span className="text-muted-foreground text-sm uppercase tracking-[3px]">The Paradigm Shift in Secure Communication</span>
        </motion.div>

        <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] max-w-4xl mx-auto mb-6 leading-[1.1]">
          Go <span className="font-serif italic font-normal">Off-Grid</span> with WinkyX
        </motion.h1>

        <motion.p {...fadeUp(0.3)} className="text-lg text-[hsl(var(--hero-subtitle))] max-w-2xl mx-auto mb-10 leading-relaxed">
          The anti-fragile, zero-knowledge mesh messenger. Completely obliterate the cloud from the equation with our Digital Pigeon Protocol.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="liquid-glass rounded-full p-2 max-w-lg mx-auto flex items-center">
          <input 
            type="email" 
            placeholder="Enter your email for beta access" 
            className="flex-1 bg-transparent border-none outline-none text-foreground px-6 placeholder:text-muted-foreground"
          />
          <motion.button 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background font-medium rounded-full px-8 py-3 uppercase tracking-wide text-sm"
          >
            REQUEST BETA
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeUp } from "../lib/animations";
import { HlsVideo } from "./HlsVideo";

export function CTA() {
  const navigate = useNavigate();

  const handleDownloadBeta = () => {
    window.dispatchEvent(new CustomEvent("open-beta-modal"));
  };

  return (
    <section className="relative py-32 md:py-44 border-t border-border/30 overflow-hidden flex items-center justify-center min-h-[600px]">
      {/* Background Video (HLS) */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-95"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4" type="video/mp4" />
        </video>
        {/* Full coverage dark overlay for readability */}
        <div className="absolute inset-0 bg-background/25 z-[1]" />
        
        {/* Bottom fade to dark — matches Hero section */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent z-[2]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <motion.div 
          {...fadeUp(0.1)}
          className="mb-8"
        >
          <img src="/logo-white.png" alt="WinkyX Logo" className="h-16 sm:h-24 w-auto object-contain mx-auto" />
        </motion.div>

        <motion.h2 {...fadeUp(0.2)} className="text-5xl md:text-7xl font-serif italic mb-6">
          Start Your Safe Journey
        </motion.h2>

        <motion.p {...fadeUp(0.3)} className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Join the serverless messaging ecosystem that puts your security and privacy first. Take back ownership of your communication today.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <motion.button 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.98 }}
            onClick={handleDownloadBeta}
            className="bg-foreground text-background font-medium rounded-lg px-8 py-3.5 whitespace-nowrap cursor-pointer w-full sm:w-auto"
          >
            Download Beta
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/architecture")}
            className="liquid-glass font-medium rounded-lg px-8 py-3.5 whitespace-nowrap text-foreground cursor-pointer w-full sm:w-auto"
          >
            Read Architecture
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

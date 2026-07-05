import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";
import { HlsVideo } from "./HlsVideo";

export function CTA() {
  return (
    <section className="relative py-32 md:py-44 border-t border-border/30 overflow-hidden flex items-center justify-center min-h-[600px]">
      {/* Background Video (HLS) */}
      <div className="absolute inset-0 z-0">
        <HlsVideo 
          src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-background/45 z-[1]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <motion.div 
          {...fadeUp(0.1)}
          className="relative flex items-center justify-center w-10 h-10 rounded-full border border-foreground/60 mb-8"
        >
          <div className="w-5 h-5 rounded-full border border-foreground/60" />
        </motion.div>

        <motion.h2 {...fadeUp(0.2)} className="text-5xl md:text-7xl font-serif italic mb-6">
          Start Your Off-Grid Journey
        </motion.h2>

        <motion.p {...fadeUp(0.3)} className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Join the true zero-knowledge messaging ecosystem and take control of your communication.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background font-medium rounded-lg px-8 py-3.5 whitespace-nowrap"
          >
            Download Beta
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.98 }}
            className="liquid-glass font-medium rounded-lg px-8 py-3.5 whitespace-nowrap text-foreground"
          >
            Read Architecture
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

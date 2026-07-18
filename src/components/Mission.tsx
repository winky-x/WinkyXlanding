import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "../lib/animations";

export function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const p1 = "We are building a network where private messaging meets true safety—where your words are sent directly from device to device, completely offline, and every connection is mathematically secured against hackers.";
  const p2 = "An ecosystem where unbreakable protection and direct off-grid chat flow together—without central databases, without cloud leaks, and with 100% user ownership of data.";

  const words1 = p1.split(/(?=—)|(?<=—)|\s+/);
  const words2 = p2.split(/(?=—)|(?<=—)|\s+/);

  const highlights = ["safety", "offline", "unbreakable", "ownership"];

  // Video Parallax Offset
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={containerRef} className="pt-0 pb-32 md:pb-44 container mx-auto px-6">
      <motion.div {...fadeUp(0.1)} className="relative mb-32 mx-[2%] md:mx-[3%] overflow-hidden rounded-3xl border border-white/10 h-[50vh] md:h-[80vh]">
        <motion.video  
          autoPlay  
          loop  
          muted  
          playsInline  
          className="absolute inset-0 w-full h-[120%] object-cover"
          style={{ y: videoY, top: "-10%" }}
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260604_125109_19424216-4e2a-4560-b9f2-f1b5f6eb2c2e.mp4" type="video/mp4" />
        </motion.video>
        {/* Bottom fade to dark */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent z-10" />
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-10">
        <p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-tight flex flex-wrap gap-x-2 gap-y-2">
          {words1.map((word, i) => {
            const start = i / (words1.length + words2.length);
            const end = start + 0.05;
            const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
            const y = useTransform(scrollYProgress, [start, end], [12, 0]);
            
            const cleanWord = word.replace(/[^a-zA-Z-]/g, '').toLowerCase();
            const isHighlighted = highlights.includes(cleanWord);

            return (
              <motion.span  
                key={i}  
                style={{ opacity, y }}
                className={isHighlighted ? "text-foreground" : "text-[hsl(var(--hero-subtitle))]"}
              >
                {word}
              </motion.span>
            );
          })}
        </p>

        <p className="text-xl md:text-2xl lg:text-3xl font-medium flex flex-wrap gap-x-2 gap-y-2 mt-10">
          {words2.map((word, i) => {
            const index = i + words1.length;
            const start = index / (words1.length + words2.length);
            const end = start + 0.05;
            const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
            const y = useTransform(scrollYProgress, [start, end], [12, 0]);

            return (
              <motion.span  
                key={i}  
                style={{ opacity, y }}
                className="text-[hsl(var(--hero-subtitle))]"
              >
                {word}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
}

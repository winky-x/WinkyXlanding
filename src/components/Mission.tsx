import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "../lib/animations";

export function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const p1 = "We're building a network where security meets true decentralization — where messages route through mesh nodes, entirely off-grid, and every connection is mathematically immune to interception.";
  const p2 = "A platform where unbreakable cryptography and the Digital Pigeon Protocol flow together — with no backend databases, no cloud storage, and zero-knowledge by design.";

  const words1 = p1.split(" ");
  const words2 = p2.split(" ");

  const highlights = ["security", "decentralization", "off-grid", "unbreakable"];

  return (
    <section ref={containerRef} className="pt-0 pb-32 md:pb-44 container mx-auto px-6">
      <motion.div {...fadeUp(0.1)} className="flex justify-center mb-32">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full max-w-[800px] h-auto md:h-[800px] object-cover rounded-2xl grayscale"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-10">
        <p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-tight flex flex-wrap gap-x-2 gap-y-2">
          {words1.map((word, i) => {
            const start = i / (words1.length + words2.length);
            const end = start + 0.05;
            const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
            const cleanWord = word.replace(/[^a-zA-Z-]/g, '').toLowerCase();
            const isHighlighted = highlights.includes(cleanWord);

            return (
              <motion.span 
                key={i} 
                style={{ opacity }}
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

            return (
              <motion.span 
                key={i} 
                style={{ opacity }}
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

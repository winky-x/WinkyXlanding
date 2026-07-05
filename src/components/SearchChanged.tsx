import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export function SearchChanged() {
  const features = [
    {
      name: "Zero-Knowledge by Design",
      description: "No backend databases, no cloud storage, and no centralized routing tables.",
      icon: "/icon-chatgpt.svg" // Using placeholder icons
    },
    {
      name: "Unbreakable Cryptography",
      description: "1MB One-Time Pads (OTP) making decryption mathematically impossible.",
      icon: "/icon-perplexity.svg"
    },
    {
      name: "Off-Grid Capable",
      description: "Messages route through neighboring devices entirely without cellular service or internet.",
      icon: "/icon-google.svg"
    }
  ];

  return (
    <section className="pt-52 md:pt-64 pb-6 md:pb-9 container mx-auto px-6 text-center">
      <motion.h2 {...fadeUp(0.1)} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-6">
        Security has <span className="font-serif italic font-normal">changed.</span> Have you?
      </motion.h2>
      
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-24">
        Traditional secure messengers still rely on a single point of failure: the cloud. It's time to completely obliterate the cloud from the equation.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20">
        {features.map((feature, i) => (
          <motion.div 
            key={feature.name}
            {...fadeUp(0.2 + i * 0.1)}
            className="flex flex-col items-center text-center"
          >
            <div className="w-[200px] h-[200px] mb-8 liquid-glass rounded-2xl flex items-center justify-center">
              <img src={feature.icon} alt={feature.name} className="w-16 h-16 opacity-80" />
            </div>
            <h3 className="font-semibold text-base mb-2">{feature.name}</h3>
            <p className="text-muted-foreground text-sm max-w-xs">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.p {...fadeUp(0.5)} className="text-muted-foreground text-sm text-center">
        If you rely on servers, you rely on a single point of failure.
      </motion.p>
    </section>
  );
}

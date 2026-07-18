import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";
import { ServerOff, KeyRound, Radio } from "lucide-react";
import { MeshBackground } from "./MeshBackground";

export function SearchChanged() {
  const features = [
    {
      name: "Zero Cloud, Absolute Privacy",
      description: "No central servers, no cloud databases, and no tracking. Your private data stays exactly where it belongs: on your device.",
      icon: ServerOff
    },
    {
      name: "Unbreakable Cryptography",
      description: "Uses mathematically proven One-Time Pads and secure local vaults to keep your messages completely safe from hacker attacks.",
      icon: KeyRound
    },
    {
      name: "Off-Grid Connectivity",
      description: "Send messages directly to nearby devices using Bluetooth and Wi-Fi. Chat freely without cell service, internet, or ISPs.",
      icon: Radio
    }
  ];

  return (
    <section className="relative w-full overflow-hidden pt-52 md:pt-64 pb-20 md:pb-24">
      {/* Top Blur Blend Transition */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent backdrop-blur-[8px] z-10 pointer-events-none" />

      {/* Mesh Background Particles & Links */}
      <MeshBackground />

      {/* Bottom Blur Transition */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h2 {...fadeUp(0.1)} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-6">
          Messaging has <span className="font-serif italic font-normal">evolved.</span> Have you?
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="text-zinc-300 text-lg max-w-2xl mx-auto mb-24 leading-relaxed">
          Traditional secure apps still rely on a single point of failure: the cloud. WinkyX completely removes the cloud, giving you true, absolute privacy.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-[200px] h-[200px] mb-8 liquid-glass rounded-2xl flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-2xl bg-emerald-500/0 group-hover:animate-glow-pulse transition-all duration-700" />
                  <Icon className="w-16 h-16 text-foreground/80 stroke-[1.5] group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-500 z-10" />
                </div>
                <h3 className="font-semibold text-base mb-2">{feature.name}</h3>
                <p className="text-zinc-400 text-sm max-w-xs">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p {...fadeUp(0.5)} className="text-zinc-400 text-sm text-center">
          If you rely on servers, you rely on a single point of failure. Math protects you; servers don't.
        </motion.p>
      </div>
    </section>
  );
}

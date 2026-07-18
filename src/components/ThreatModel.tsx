import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { fadeUp } from "../lib/animations";
import { Shield, ShieldAlert, Cpu, EyeOff, Trash2, Key } from "lucide-react";
import React, { useRef } from "react";

// Internal Tilt Card Component
const TiltCard: React.FC<{ t: any, i: number, gridClasses: string }> = ({ t, i, gridClasses }) => {
  const Icon = t.icon;
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { damping: 20, stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { damping: 20, stiffness: 150 });
  
  // Spring for glow effect position
  const mouseX = useSpring(0, { damping: 20, stiffness: 150 });
  const mouseY = useSpring(0, { damping: 20, stiffness: 150 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Normalize coordinates for tilt (-0.5 to 0.5)
    const normalizedX = (event.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(normalizedX);
    y.set(normalizedY);
    
    // Exact coordinates for glow
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const backgroundGlow = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.15), transparent 40%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
      className={`relative [perspective:1000px] ${gridClasses}`}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group liquid-glass p-8 rounded-2xl flex flex-col justify-between h-full border border-white/5 overflow-hidden"
      >
        {/* Hover Glow Background */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
          style={{ background: backgroundGlow }}
        />
        
        <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 transition-colors duration-300">
            <Icon className="w-6 h-6 text-foreground/70 group-hover:text-emerald-400 transition-all duration-300" />
          </div>
          <h3 className="font-bold text-lg mb-3 tracking-tight group-hover:text-emerald-300 transition-colors duration-300">{t.vector}</h3>
          <p className="text-zinc-400 text-xs mb-6 leading-relaxed">
            <strong className="text-zinc-300">Threat:</strong> {t.threat}
          </p>
        </div>
        
        <div className="relative z-10 mt-auto border-t border-white/5 pt-4" style={{ transform: "translateZ(20px)" }}>
          <span className="text-xs font-semibold text-foreground/90 block mb-1.5 flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-400" /> WinkyX Mitigation
          </span>
          <p className="text-zinc-300 text-xs leading-relaxed">
            {t.mitigation}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ThreatModel() {
  const threats = [
    {
      vector: "Server Database Breach",
      threat: "Hackers break into the company's central server and steal everyone's messages and profile data.",
      mitigation: "Not Applicable. WinkyX does not use servers. There is no central database to hack or leak.",
      icon: ShieldAlert
    },
    {
      vector: "Physical Device Seizure",
      threat: "An unauthorized person physically takes your phone and attempts to read your chats.",
      mitigation: "Every conversation is individually encrypted. Without your Master Password (which only exists in active phone memory, never on disk), your data is unreadable.",
      icon: EyeOff
    },
    {
      vector: "Network Flooding (Spam)",
      threat: "Malicious nodes flood the local network to block messages and slow down the mesh.",
      mitigation: "A fast, automated 12-bit Proof-of-Work check is required for every message, making network spam computationally too expensive for attackers.",
      icon: Cpu
    },
    {
      vector: "Future Quantum Hacking",
      threat: "Supercomputers in the future try to crack current encryption methods.",
      mitigation: "Payloads use One-Time Pads (OTP) which are mathematically proven to be unbreakable, even by future quantum computers.",
      icon: Key
    },
    {
      vector: "Forensic Memory Analysis",
      threat: "Advanced tools dump the phone's memory to find secure keys.",
      mitigation: "Our 'Nuclear Wipe' feature instantly zeroes out volatile memory, clears the secure keychain, and wipes verification hashes.",
      icon: Trash2
    }
  ];

  return (
    <section id="threat-model" className="py-32 md:py-44 border-t border-border/30 container mx-auto px-6 scroll-mt-24 overflow-hidden">
      <motion.div {...fadeUp(0.1)} className="mb-16 text-center max-w-2xl mx-auto">
        <span className="text-xs tracking-[3px] uppercase text-muted-foreground block mb-6">SECURITY MATRIX</span>
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-6">
          Threat Model & <span className="font-serif italic font-normal">Mitigations</span>
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">
          Security is not just a marketing claim. Here is exactly how WinkyX protects you against advanced modern threats.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
        {threats.map((t, i) => {
          const gridClasses = i < 3 
            ? "lg:col-span-2 col-span-1" 
            : i === 3 
              ? "lg:col-span-3 md:col-span-1 col-span-1" 
              : "lg:col-span-3 md:col-span-2 col-span-1";

          return (
            <TiltCard key={t.vector} t={t} i={i} gridClasses={gridClasses} />
          );
        })}
      </div>
    </section>
  );
}

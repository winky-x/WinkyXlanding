import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export function Solution() {
  const features = [
    { title: "The Secure Vault", description: "Protects your data if your device is lost or stolen. Every message and contact is encrypted with XSalsa20-Poly1305 before it is saved, using keys kept only in temporary RAM." },
    { title: "Digital Pigeon Protocol", description: "Our serverless mesh system that slices messages into 10 fault-tolerant shards. Messages route dynamically across nearby nodes to find their destination." },
    { title: "Proof-of-Work Security", description: "Requires a tiny, instant 12-bit Proof-of-Work calculation for every sent shard, significantly mitigating the risk of spam bots flooding or slowing down the network." },
    { title: "Strong Encryption", description: "Combines Curve25519 key exchanges, Ed25519 signatures, and One-Time Pads (OTP) for mathematically-grounded security designed to resist advanced interception." }
  ];

  return (
    <section id="architecture" className="relative min-h-screen border-t border-border/30 scroll-mt-24 overflow-hidden">
      {/* Full-screen Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-85"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260525_052706_d2e390fd-1846-4fe7-a4d8-8d2f1c875358.mp4" type="video/mp4" />
        </video>
        {/* Top fade to dark */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background to-transparent z-[1]" />
        {/* Bottom fade to dark */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-16 md:pt-24 pb-32 md:pb-44">
        <motion.div {...fadeUp(0.1)} className="mb-16">
          <span className="text-xs tracking-[3px] uppercase text-muted-foreground block mb-6">ARCHITECTURE</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight max-w-2xl leading-tight">
            The platform for <span className="font-serif italic font-normal">unbreakable</span> communication
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div key={i} {...fadeUp(0.3 + i * 0.1)} className="border-t border-border/30 pt-6">
              <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

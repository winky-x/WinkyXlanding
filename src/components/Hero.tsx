import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Scroll tracking for the tall outer container
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  // Scroll-linked transforms
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

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

  // Character-by-character reveal variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.025, delayChildren: 2.0 },
    },
  };

  const charVariants = {
    hidden: {
      y: "110%",
      clipPath: "inset(100% 0% 0% 0%)",
    },
    visible: {
      y: "0%",
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        type: "spring",
        damping: 22,
        stiffness: 90,
      },
    },
  };

  // Split heading into words, keeping italic span for "Off-Grid"
  const headingParts = [
    { text: "Go ", italic: false },
    { text: "Off-Grid", italic: true },
    { text: " and Stay", italic: false },
    { text: "", italic: false, break: true },
    { text: "Safe", italic: false },
  ];

  // Sequenced subtitle/email variants (appear after heading)
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, delay: 3.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const emailBarVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.0, delay: 3.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const labelVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, delay: 2.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Scroll indicator animation
  const scrollLineVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: { duration: 1.0, delay: 4.0, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={scrollRef} className="relative min-h-[100dvh] overflow-hidden flex items-center justify-center pt-40 pb-16">
      {/* Background Video — scale linked to scroll */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: videoScale }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 0.85 }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center mt-12 md:mt-24">
        {/* Label — sequenced fade */}
        <motion.div
          variants={labelVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-4 mb-6"
        >
          <span className="text-muted-foreground text-sm uppercase tracking-[3px]">
            Private & Secure Offline Messenger
          </span>
        </motion.div>

        {/* Heading — character-by-character clip reveal */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] max-w-none mx-auto mb-4 leading-[1.1] flex flex-wrap justify-center"
        >
          {headingParts.map((part, partIdx) => (
            part.break ? <span key={`break-${partIdx}`} className="w-full h-0 block" /> : (
            <span
              key={partIdx}
              className={
                part.italic
                  ? "font-serif italic font-normal inline-flex overflow-hidden tracking-[6px]"
                  : "inline-flex overflow-hidden"
              }
            >
              {part.text.split("").map((char, charIdx) => (
                <motion.span
                  key={`${partIdx}-${charIdx}`}
                  variants={charVariants}
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            )
          ))}
        </motion.h1>

        {/* Subtitle — sequenced after heading */}
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="text-lg text-[hsl(var(--hero-subtitle))] max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          WinkyX is the secure, private messenger that works anywhere—even
          without internet or cellular service. Keep your personal
          conversations completely off the cloud and safe from prying eyes.
        </motion.p>

        {/* Email bar — slides up with blur-to-sharp */}
        <motion.div
          variants={emailBarVariants}
          initial="hidden"
          animate="visible"
          className="liquid-glass rounded-[24px] sm:rounded-full p-1.5 sm:p-2 max-w-lg mx-auto flex flex-col sm:flex-row gap-2 sm:gap-0 items-stretch sm:items-center relative"
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
            className="flex-1 bg-transparent border-none outline-none text-foreground px-6 py-3.5 sm:py-0 placeholder:text-zinc-400 text-center sm:text-left text-sm"
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

import { motion } from "framer-motion";

export function Preloader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1.4, delay: 2.0, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center select-none pointer-events-none"
    >
      <div className="flex flex-col items-center">
        {/* Slow, glowing fade in-out of WinkyX Logo */}
        <motion.img
          src="/logo-white.png"
          alt="WinkyX Logo"
          initial={{ opacity: 0, scale: 0.92, filter: "drop-shadow(0 0 0px rgba(16,185,129,0))" }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.92, 1, 1, 0.96],
            filter: [
              "drop-shadow(0 0 0px rgba(16,185,129,0))",
              "drop-shadow(0 0 20px rgba(16,185,129,0.3))",
              "drop-shadow(0 0 20px rgba(16,185,129,0.3))",
              "drop-shadow(0 0 0px rgba(16,185,129,0))"
            ]
          }}
          transition={{
            duration: 1.8,
            times: [0, 0.3, 0.8, 1],
            ease: "easeInOut"
          }}
          className="h-20 w-auto object-contain"
        />
        {/* Progress reveal line */}
        <div className="w-36 h-[1px] bg-zinc-900 mt-8 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}

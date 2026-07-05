import { Github, Twitter, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StaggeredMenu from "./StaggeredMenu";

const MotionLink = motion(Link);

export function Navbar() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Overview', ariaLabel: 'Overview', link: '/why-choose-us' },
    { label: 'Architecture', ariaLabel: 'Architecture Spec', link: '/architecture' },
    { label: 'Threat Model', ariaLabel: 'Threat Model', link: '/threat-model' },
    { label: 'Cryptography', ariaLabel: 'Cryptography', link: '/one-time-pad' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 px-8 md:px-28 py-4 flex items-center justify-between"
    >
      <div className="flex-1 flex items-center justify-start">
        <Link to="/" className="flex items-center">
          <img src="/logo-white.png" alt="WinkyX Logo" className="h-12 md:h-16 w-auto object-contain" />
        </Link>
      </div>

      <div className="hidden md:flex items-center liquid-glass rounded-full p-2 gap-1 shadow-[0_4px_30px_rgba(0,0,0,0.15)] mx-auto">
        <Link to="/" className="text-sm px-5 py-2.5 rounded-full text-foreground/80 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium">Home</Link>
        <Link to="/architecture" className="text-sm px-5 py-2.5 rounded-full text-foreground/80 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium">Architecture</Link>
        <Link to="/threat-model" className="text-sm px-5 py-2.5 rounded-full text-foreground/80 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium">Threat Model</Link>
        <Link to="/encryption" className="text-sm px-5 py-2.5 rounded-full text-foreground/80 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium">Docs</Link>
      </div>

      <div className="flex-1 flex items-center justify-end gap-6">
        <div className="hidden lg:flex items-center gap-3">
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            href="https://github.com/winky-x/winkyx" 
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:text-white transition-colors"
          >
            <Github size={18} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            href="https://x.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:text-white transition-colors"
          >
            <Twitter size={18} />
          </motion.a>
          <MotionLink 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            to="/threat-model" 
            aria-label="Threat Model and Security Matrix"
            className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:text-white transition-colors"
          >
            <Shield size={18} />
          </MotionLink>
        </div>
        
        <StaggeredMenu
          position="right"
          items={menuItems}
          displaySocials={false}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={['#1a1a1a', '#000000']}
          accentColor="#fff"
        />
      </div>
    </motion.nav>
  );
}

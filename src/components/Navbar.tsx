import { Github, Twitter, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StaggeredMenu from "./StaggeredMenu";

export function Navbar() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Why Choose Us', ariaLabel: 'Why choose us', link: '/why-choose-us' },
    { label: 'Privacy', ariaLabel: 'Privacy policy', link: '/privacy' },
    { label: 'What is Privacy?', ariaLabel: 'What is privacy', link: '/what-is-privacy' },
    { label: 'Encryption', ariaLabel: 'What is encryption', link: '/encryption' }
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 px-8 md:px-28 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Link to="/" className="relative flex items-center justify-center w-7 h-7 rounded-full border-2 border-foreground/60">
          <div className="w-3 h-3 rounded-full border border-foreground/60" />
        </Link>
        <Link to="/" className="font-bold text-lg tracking-tight">WinkyX</Link>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>•</span>
        <a href="#" className="hover:text-foreground transition-colors">Architecture</a>
        <span>•</span>
        <a href="#" className="hover:text-foreground transition-colors">Threat Model</a>
        <span>•</span>
        <a href="#" className="hover:text-foreground transition-colors">Docs</a>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            href="#" 
            className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:text-white transition-colors"
          >
            <Github size={18} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            href="#" 
            className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:text-white transition-colors"
          >
            <Twitter size={18} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            href="#" 
            className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:text-white transition-colors"
          >
            <Shield size={18} />
          </motion.a>
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
    </nav>
  );
}

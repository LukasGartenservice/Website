import { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/70 backdrop-blur-2xl border-b border-zinc-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-5 md:px-12 max-w-6xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Grünblick Logo" 
              className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform group-hover:scale-105" 
            />
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-zinc-900 group-hover:text-primary-700 transition-colors">
              Grünblick <span className="text-primary-600 italic font-light">Gartenservice</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              <li><a href="#services" className="text-zinc-500 font-medium transition-colors hover:text-zinc-900 text-[15px]">Leistungen</a></li>
              <li><a href="#gallery" className="text-zinc-500 font-medium transition-colors hover:text-zinc-900 text-[15px]">Projekte</a></li>
            </ul>
            <a href="#contact" className="bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5 shadow-sm">
              Kontakt
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-zinc-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-xl border-t border-zinc-100"
          >
            <ul className="flex flex-col py-6 px-6 gap-1">
              <li><a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-lg text-zinc-800 hover:text-primary-600 transition-colors font-medium">Leistungen</a></li>
              <li><a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-lg text-zinc-800 hover:text-primary-600 transition-colors font-medium">Projekte</a></li>
              <li className="pt-4 mt-2 border-t border-zinc-100">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-zinc-900 text-white text-center block w-full py-3.5 rounded-xl font-bold shadow-sm">
                  Kontakt
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

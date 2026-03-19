import { useState, useEffect } from 'react';
import { Leaf, Menu, X, PhoneCall } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-primary-500 text-white p-2 rounded-lg group-hover:bg-primary-600 transition-colors">
              <Leaf className="w-6 h-6" />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
              Grünblick <span className="text-primary-500 font-medium">Gartenservice</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              <li><a href="#services" className={`font-medium transition-colors hover:text-primary-500 ${isScrolled ? 'text-slate-700' : 'text-slate-900 lg:text-white/90'}`}>Leistungen</a></li>
              <li><a href="#contact" className={`font-medium transition-colors hover:text-primary-500 ${isScrolled ? 'text-slate-700' : 'text-slate-900 lg:text-white/90'}`}>Über uns</a></li>
            </ul>
            <a href="#contact" className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5 flex items-center gap-2">
              <PhoneCall className="w-4 h-4" /> Kontakt
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-md ${isScrolled ? 'text-slate-800' : 'text-slate-900'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100">
          <ul className="flex flex-col py-4 px-6 gap-4">
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-slate-700 hover:text-primary-500">Leistungen</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-slate-700 hover:text-primary-500">Über uns</a></li>
            <li className="pt-4 border-t border-slate-100">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-primary-500 text-white text-center block w-full py-3 rounded-lg font-medium mt-2">
                Jetzt Kontakt aufnehmen
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

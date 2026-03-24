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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/60 backdrop-blur-xl border-b border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm transition-colors duration-300 ${isScrolled ? 'bg-primary-600 text-white' : 'bg-primary-600 text-white shadow-lg'}`}>
              <Leaf className="w-5 h-5" />
            </div>
            <span className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>
              Grünblick <span className="text-primary-600 italic font-medium">Gartenservice</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              <li><a href="#services" className={`font-medium transition-colors hover:text-primary-600 ${isScrolled ? 'text-slate-600' : 'text-slate-700'}`}>Leistungen</a></li>
              <li><a href="#contact" className={`font-medium transition-colors hover:text-primary-600 ${isScrolled ? 'text-slate-600' : 'text-slate-700'}`}>Über uns</a></li>
            </ul>
            <a href="#contact" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-primary-600/30 hover:-translate-y-0.5 flex items-center gap-2">
              <PhoneCall className="w-4 h-4" /> Kontakt
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-md ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/80 backdrop-blur-xl shadow-xl border-t border-white/40">
          <ul className="flex flex-col py-4 px-6 gap-4">
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-xl font-serif text-slate-800 hover:text-primary-600">Leistungen</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-xl font-serif text-slate-800 hover:text-primary-600">Über uns</a></li>
            <li className="pt-4 border-t border-slate-200">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-primary-600 text-white text-center block w-full py-3.5 rounded-xl font-bold mt-2 shadow-md">
                Jetzt anfragen
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

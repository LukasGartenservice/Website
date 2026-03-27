import { Leaf, Instagram, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-950 text-white pt-24 pb-10 relative overflow-hidden font-sans">
      {/* Subtle glow */}
      <div className="absolute -top-[300px] right-0 w-[600px] h-[600px] bg-primary-800/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-5 md:px-12 max-w-6xl relative z-10">
        
        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-primary-900/40 to-primary-800/20 backdrop-blur-sm border border-white/5 rounded-3xl p-8 lg:p-12 mb-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-serif text-white mb-2 tracking-tight">Bereit für Ihren Traumgarten?</h3>
            <p className="text-zinc-400 font-light">Kostenlose, unverbindliche Erstberatung vor Ort.</p>
          </div>
          <a href="#contact" className="bg-primary-500 hover:bg-primary-400 text-zinc-950 font-bold py-4 px-10 rounded-full transition-all hover:-translate-y-1 flex items-center gap-3 group shrink-0 shadow-lg shadow-primary-500/20">
            Jetzt anfragen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-5 pr-4">
            <a href="#" className="flex items-center gap-3.5 mb-6 group">
              <img 
                src="/logo.png" 
                alt="Grünblick Logo" 
                className="w-8 h-8 object-contain" 
              />
              <span className="text-2xl font-serif font-bold tracking-tight text-white">
                Grünblick <span className="text-primary-400 italic font-light">Gartenservice</span>
              </span>
            </a>
            <p className="text-zinc-500 mb-8 leading-relaxed max-w-sm font-light">
              Ihr professioneller Partner für Gartengestaltung und -pflege in Leichlingen und Umgebung.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/gruenblick.gartenservice/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:bg-primary-600 hover:border-primary-600 flex items-center justify-center transition-all duration-300 text-zinc-400 hover:text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-6">Leistungen</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-zinc-500 hover:text-white transition-colors text-[15px]">Rasenpflege & Mäharbeiten</a></li>
              <li><a href="#services" className="text-zinc-500 hover:text-white transition-colors text-[15px]">Heckenschnitt</a></li>
              <li><a href="#services" className="text-zinc-500 hover:text-white transition-colors text-[15px]">Baumpflege & Fällungen</a></li>
              <li><a href="#services" className="text-zinc-500 hover:text-white transition-colors text-[15px]">Flächenreinigung</a></li>
            </ul>
          </div>

          {/* Contact Info - nur Standort */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-6">Standort</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
              <span className="text-zinc-500 leading-relaxed">An der Obstwiese 9<br />42799 Leichlingen</span>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm font-light">
            &copy; {new Date().getFullYear()} Grünblick Gartenservice
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-600">
            <a href="#impressum" className="hover:text-white transition-colors">Impressum</a>
            <a href="#datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
            <div className="flex items-center gap-1.5 pl-6 border-l border-white/10 group cursor-default">
              <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-zinc-500">Designed by</span>
              <img src="/pm-logo.png" alt="Prestia Media Logo" className="w-5 h-5 object-contain opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="text-[11px] font-bold text-zinc-400 group-hover:text-white transition-colors">Prestia Media</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

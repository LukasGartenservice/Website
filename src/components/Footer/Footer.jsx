import { Leaf, Instagram, Facebook, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f2416] text-slate-300 pt-24 pb-12 relative overflow-hidden font-sans border-t border-white/10">
      {/* Luxury Dark Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[400px] -right-[200px] w-[800px] h-[800px] bg-primary-800/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-[300px] -left-[200px] w-[600px] h-[600px] bg-emerald-900/40 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noisy.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      {/* Subtle leaf overlay */}
      <Leaf className="absolute -bottom-20 -right-20 w-[600px] h-[600px] text-primary-900/30 rotate-[-30deg] pointer-events-none blur-sm" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 mb-16 backdrop-blur-sm shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-serif text-white mb-2">Bereit für Ihren Traumgarten?</h3>
            <p className="text-primary-100/70 font-sans">Kontaktieren Sie uns für eine kostenlose, unverbindliche Erstberatung vor Ort.</p>
          </div>
          <a href="#contact" className="bg-primary-500 hover:bg-primary-400 text-white font-bold py-4 px-10 rounded-full shadow-[0_10px_30px_-10px_rgba(79,141,110,0.5)] hover:shadow-[0_15px_40px_-5px_rgba(79,141,110,0.6)] transition-all hover:-translate-y-1 flex items-center gap-3 group shrink-0">
            Jetzt anfragen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand */}
          <div className="lg:col-span-4 pr-4">
            <a href="#" className="flex items-center gap-3 mb-8 group">
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 text-white p-2.5 rounded-xl rounded-tr-sm rounded-bl-sm shadow-lg group-hover:shadow-primary-500/50 transition-shadow">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="text-3xl font-serif font-bold tracking-tight text-white drop-shadow-sm">
                Grünblick <span className="text-primary-400 italic font-light drop-shadow-md">Gartenservice</span>
              </span>
            </a>
            <p className="text-primary-100/60 mb-8 leading-relaxed text-lg max-w-sm font-light">
              Wir pflegen Werte und schaffen Lebensräume. Ihr professioneller Partner für herausragendes Gartendesign und Pflege in Leichlingen.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-primary-500 hover:border-primary-500 flex items-center justify-center transition-all duration-300 text-primary-200 hover:text-white shadow-lg shadow-black/20 hover:shadow-primary-500/30 hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-primary-500 hover:border-primary-500 flex items-center justify-center transition-all duration-300 text-primary-200 hover:text-white shadow-lg shadow-black/20 hover:shadow-primary-500/30 hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="text-white font-serif font-bold text-xl mb-8 tracking-wide">Unsere Expertise</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-primary-100/60 hover:text-primary-300 transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50 group-hover:bg-primary-400 transition-colors"></span> Rasenpflege & Gestaltung</a></li>
              <li><a href="#services" className="text-primary-100/60 hover:text-primary-300 transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50 group-hover:bg-primary-400 transition-colors"></span> Professioneller Heckenschnitt</a></li>
              <li><a href="#services" className="text-primary-100/60 hover:text-primary-300 transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50 group-hover:bg-primary-400 transition-colors"></span> Baumpflege & Fällungen</a></li>
              <li><a href="#services" className="text-primary-100/60 hover:text-primary-300 transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50 group-hover:bg-primary-400 transition-colors"></span> Pflasterarbeiten & Wegebau</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-serif font-bold text-xl mb-8 tracking-wide">Treten Sie in Kontakt</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-primary-400 shrink-0 shadow-inner group-hover:bg-primary-500/20 group-hover:text-primary-300 transition-colors"><MapPin className="w-5 h-5" /></div>
                <span className="text-primary-100/60 leading-relaxed pt-1">An der Obstwiese 9<br />42799 Leichlingen</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-primary-400 shrink-0 shadow-inner group-hover:bg-primary-500/20 group-hover:text-primary-300 transition-colors"><Phone className="w-5 h-5" /></div>
                <a href="tel:+49123456789" className="text-primary-100/60 hover:text-white transition-colors pt-1 tracking-wider">+49 (0) 123 456 789</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-primary-400 shrink-0 shadow-inner group-hover:bg-primary-500/20 group-hover:text-primary-300 transition-colors"><Mail className="w-5 h-5" /></div>
                <a href="mailto:info@gruenblick-gartenservice.de" className="text-primary-100/60 hover:text-white transition-colors pt-1">info@gruenblick.de</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-100/40 text-sm font-light">
            &copy; {new Date().getFullYear()} Grünblick Gartenservice. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-100/40 font-light">
            <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
            <span className="flex items-center gap-1.5 opacity-80">Mit <Leaf className="w-3 h-3 text-primary-500" /> in Ingolstadt</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

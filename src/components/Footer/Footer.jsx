import { Leaf, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-950 text-slate-300 pt-24 pb-12 border-t-[8px] border-primary-600 relative overflow-hidden font-sans">
      {/* Subtle leaf overlay */}
      <Leaf className="absolute -bottom-20 -right-20 w-[600px] h-[600px] text-primary-900/50 rotate-[-30deg] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand */}
          <div className="lg:col-span-5 pr-4">
            <a href="#" className="flex items-center gap-3 mb-8">
              <div className="bg-primary-500 text-white p-2.5 rounded-xl rounded-tr-sm rounded-bl-sm">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="text-3xl font-serif font-bold tracking-tight text-white">
                Grünblick <span className="text-primary-500 italic">Gartenservice</span>
              </span>
            </a>
            <p className="text-primary-100/70 mb-8 leading-relaxed text-lg max-w-sm">
              Wir pflegen Werte und schaffen Lebensräume. Ihr professioneller Partner für Natur im Garten in Leichlingen und der Region.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-primary-800 hover:bg-primary-500 hover:border-primary-500 flex items-center justify-center transition-all text-primary-200 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-primary-800 hover:bg-primary-500 hover:border-primary-500 flex items-center justify-center transition-all text-primary-200 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-serif font-bold text-xl mb-8">Unsere Expertise</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-primary-100/70 hover:text-accent-400 transition-colors inline-block hover:translate-x-1 duration-300">Rasenpflege & Gestaltung</a></li>
              <li><a href="#services" className="text-primary-100/70 hover:text-accent-400 transition-colors inline-block hover:translate-x-1 duration-300">Professioneller Heckenschnitt</a></li>
              <li><a href="#services" className="text-primary-100/70 hover:text-accent-400 transition-colors inline-block hover:translate-x-1 duration-300">Baumpflege & Fällungen</a></li>
              <li><a href="#services" className="text-primary-100/70 hover:text-accent-400 transition-colors inline-block hover:translate-x-1 duration-300">Pflasterarbeiten & Wegebau</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-serif font-bold text-xl mb-8">Treten Sie in Kontakt</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="bg-primary-900 p-2 rounded-lg text-primary-400 shrink-0 mt-0.5"><MapPin className="w-5 h-5" /></div>
                <span className="text-primary-100/70 leading-relaxed">An der Obstwiese 9<br />42799 Leichlingen</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary-900 p-2 rounded-lg text-primary-400 shrink-0"><Phone className="w-5 h-5" /></div>
                <a href="tel:+49123456789" className="text-primary-100/70 hover:text-white transition-colors">+49 (0) 123 456 789</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary-900 p-2 rounded-lg text-primary-400 shrink-0"><Mail className="w-5 h-5" /></div>
                <a href="mailto:info@gruenblick-gartenservice.de" className="text-primary-100/70 hover:text-white transition-colors">info@gruenblick.de</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-primary-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-100/50 text-sm">
            &copy; {new Date().getFullYear()} Grünblick Gartenservice. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-100/50">
            <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
            <span className="flex items-center gap-1">Mit <Leaf className="w-3 h-3 text-primary-500" /> in Ingolstadt</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Leaf, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="bg-primary-500 text-white p-1.5 rounded-lg">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Grünblick <span className="text-primary-500">Gartenservice</span>
              </span>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Ihr zuverlässiger Partner für Landschaftsbau und Gartenpflege in Leichlingen und der gesamten Region.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary-500 flex items-center justify-center transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary-500 flex items-center justify-center transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Leistungen</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-primary-400 transition-colors">Rasenpflege</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-primary-400 transition-colors">Heckenschnitt</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-primary-400 transition-colors">Baumpflege</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-primary-400 transition-colors">Pflasterarbeiten</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-primary-400 transition-colors">Gartengestaltung</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <span className="text-slate-400">An der Obstwiese 9<br />42799 Leichlingen</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <a href="tel:+49123456789" className="text-slate-400 hover:text-primary-400 transition-colors">+49 (0) 123 456 789</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <a href="mailto:info@gruenblick-gartenservice.de" className="text-slate-400 hover:text-primary-400 transition-colors break-all">info@gruenblick.de</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Rechtliches</h4>
            <ul className="space-y-3">
              <li><a href="/impressum" className="text-slate-400 hover:text-primary-400 transition-colors">Impressum</a></li>
              <li><a href="/datenschutz" className="text-slate-400 hover:text-primary-400 transition-colors">Datenschutz</a></li>
              <li><a href="/agb" className="text-slate-400 hover:text-primary-400 transition-colors">AGB</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:text-left items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Grünblick Gartenservice. Alle Rechte vorbehalten.
          </p>
          <p className="text-slate-500 text-sm flex items-center justify-center md:justify-end gap-1">
            Mit <Leaf className="w-3 h-3 text-primary-500" /> gestaltet in Ingolstadt
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

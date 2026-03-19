import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      {/* Decorative gradient for background */}
      <div className="absolute top-1/2 left-0 w-1/2 h-full bg-slate-50 -z-10 transform -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3 block">Kontakt aufnehmen</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Wir freuen uns auf <br/>Ihr Projekt.</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              Haben Sie Fragen zu unseren Leistungen oder wünschen ein individuelles Angebot? 
              Schreiben Sie uns oder rufen Sie uns direkt an. Wir beraten Sie gerne unverbindlich.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Standort</h4>
                  <p className="text-slate-600">An der Obstwiese 9<br />42799 Leichlingen</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Telefon</h4>
                  <p className="text-slate-600"><a href="tel:+49123456789" className="hover:text-primary-600 transition-colors">+49 (0) 123 456 789</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">E-Mail</h4>
                  <p className="text-slate-600"><a href="mailto:info@gruenblick-gartenservice.de" className="hover:text-primary-600 transition-colors">info@gruenblick-gartenservice.de</a></p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Arbeitszeiten</h4>
                  <p className="text-slate-600">Mo – Fr: 08:00 – 17:00 Uhr<br />Sa: nach Vereinbarung</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-50 z-0 hidden md:block pointer-events-none"></div>
            
            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Nachricht senden</h3>
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-slate-900" 
                  placeholder="Max Mustermann"
                  required 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">E-Mail Adresse</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-slate-900" 
                  placeholder="max@beispiel.de"
                  required 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-slate-700">Interesse an</label>
                <select 
                  id="service" 
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-slate-900 appearance-none"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="rasenpflege">Rasenpflege</option>
                  <option value="heckenschnitt">Heckenschnitt</option>
                  <option value="baumpflege">Baumpflege</option>
                  <option value="pflasterarbeiten">Pflasterarbeiten</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Nachricht</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-slate-900 resize-none" 
                  placeholder="Wie können wir Ihnen helfen?"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-xl shadow-lg shadow-primary-600/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 group mt-4"
              >
                Anfrage senden
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

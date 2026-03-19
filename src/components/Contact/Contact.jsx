import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Leaf } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#eef3f0]" id="contact">
      {/* Organic Background Patterns */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl opacity-60 z-0 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent-200/30 rounded-full blur-3xl z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(40,70,50,0.1)] overflow-hidden border border-white">
          <div className="grid lg:grid-cols-5 h-full">
            
            {/* Left Info Panel */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 bg-primary-800 text-white p-10 md:p-14 relative overflow-hidden"
            >
              {/* Decorative leaves */}
              <Leaf className="absolute -bottom-4 -right-4 w-32 h-32 text-primary-700 opacity-50 rotate-[-15deg] pointer-events-none" />
              <Leaf className="absolute top-10 right-10 w-16 h-16 text-primary-700 opacity-30 rotate-[45deg] pointer-events-none" />
              
              <div className="relative z-10 h-full flex flex-col">
                <h2 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">Lassen Sie uns über <br/><span className="text-primary-300 italic">Ihren Garten</span> reden.</h2>
                <p className="text-primary-100/80 mb-12 font-sans font-light text-lg">
                  Egal ob einmaliger Schnitt oder ganzjährige Pflege – wir beraten Sie kompetent und unverbindlich.
                </p>

                <div className="space-y-8 mt-auto">
                  <div className="flex items-start gap-5 group cursor-pointer">
                    <div className="w-12 h-12 bg-primary-700/50 rounded-2xl flex items-center justify-center shrink-0 border border-primary-600/30 group-hover:bg-primary-600/50 transition-colors">
                      <MapPin className="w-5 h-5 text-primary-300" />
                    </div>
                    <div>
                      <h4 className="text-primary-200 text-sm tracking-widest uppercase mb-1 font-bold">Standort</h4>
                      <p className="text-white font-serif text-lg">An der Obstwiese 9<br />42799 Leichlingen</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-primary-700/50 rounded-2xl flex items-center justify-center shrink-0 border border-primary-600/30 group-hover:bg-primary-600/50 transition-colors">
                      <Phone className="w-5 h-5 text-primary-300" />
                    </div>
                    <div>
                      <h4 className="text-primary-200 text-sm tracking-widest uppercase mb-1 font-bold">Telefon</h4>
                      <p className="text-white font-serif text-lg"><a href="tel:+49123456789" className="hover:text-primary-300 transition-colors">+49 (0) 123 456 789</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-primary-700/50 rounded-2xl flex items-center justify-center shrink-0 border border-primary-600/30 group-hover:bg-primary-600/50 transition-colors">
                      <Mail className="w-5 h-5 text-primary-300" />
                    </div>
                    <div>
                      <h4 className="text-primary-200 text-sm tracking-widest uppercase mb-1 font-bold">E-Mail</h4>
                      <p className="text-white font-serif text-lg"><a href="mailto:info@gruenblick-gartenservice.de" className="hover:text-primary-300 transition-colors">info@gruenblick.de</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Form Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 p-10 md:p-14 bg-white"
            >
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-3xl font-serif text-slate-800 mb-2">Ihre Projektanfrage</h3>
                <p className="text-slate-500 mb-8">Füllen Sie das Formular aus – wir melden uns im Regelfall innerhalb von 24 Stunden bei Ihnen.</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 relative">
                    <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Vollständiger Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-primary-500 transition-colors text-slate-800 placeholder-slate-300 font-sans" 
                      placeholder="Max Mustermann"
                      required 
                    />
                  </div>

                  <div className="space-y-2 relative">
                    <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">E-Mail Adresse</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-primary-500 transition-colors text-slate-800 placeholder-slate-300 font-sans" 
                      placeholder="max@beispiel.de"
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2 relative">
                  <label htmlFor="service" className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Gewünschte Leistung</label>
                  <select 
                    id="service" 
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-primary-500 transition-colors text-slate-800 appearance-none font-serif text-lg"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="rasenpflege">Rasenpflege & Mäharbeiten</option>
                    <option value="heckenschnitt">Hecken- & Strauchschnitt</option>
                    <option value="baumpflege">Baumpflege & Fällungen</option>
                    <option value="pflasterarbeiten">Pflasterarbeiten & Wegebau</option>
                    <option value="komplett">Komplette Gartenpflege</option>
                  </select>
                </div>

                <div className="space-y-2 relative">
                  <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Ihre Nachricht</label>
                  <textarea 
                    id="message" 
                    rows="3" 
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-primary-500 transition-colors text-slate-800 placeholder-slate-300 resize-none font-sans" 
                    placeholder="Beschreiben Sie kurz Ihr Vorhaben..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-accent-500/30 transition-all hover:-translate-y-1 inline-flex items-center gap-3 group mt-4 w-full md:w-auto"
                >
                  Anfrage absenden
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Leaf } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-16 lg:py-32 relative overflow-hidden bg-slate-50" id="contact">
      {/* Organic Premium Background Patterns */}
      <div className="absolute -top-20 -left-20 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-primary-200/30 rounded-full blur-[80px] lg:blur-[100px] opacity-60 z-0 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-accent-200/20 rounded-full blur-[80px] lg:blur-[120px] z-0 pointer-events-none"></div>
      
      {/* Subtle Grid Pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3c7056 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white rounded-2xl lg:backdrop-blur-xl md:rounded-[2.5rem] shadow-sm lg:shadow-[0_30px_60px_-15px_rgba(40,70,50,0.12)] overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-5 h-full">
            
            {/* Left Info Panel - Now with Image Background */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 relative overflow-hidden p-5 sm:p-8 md:p-14 text-white"
            >
              {/* Premium Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=800&auto=format&fit=crop" 
                  alt="Garten Hintergrund" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/85 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 to-transparent"></div>
              </div>

              {/* Decorative leaves */}
              <Leaf className="absolute -bottom-4 -right-4 w-40 h-40 text-primary-500/20 rotate-[-15deg] pointer-events-none z-10" />
              <Leaf className="absolute top-10 right-10 w-20 h-20 text-primary-400/20 rotate-[45deg] pointer-events-none z-10" />
              
              <div className="relative z-20 h-full flex flex-col">
                <div className="inline-block bg-primary-500/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary-200 uppercase tracking-widest mb-6 border border-primary-400/30 w-fit">Kontakt aufnehmen</div>
                <h2 className="text-2xl leading-[1.2] md:text-5xl font-serif mb-3 md:mb-6 md:leading-tight">
                  Lassen Sie uns über <br/><span className="text-primary-300 italic font-light drop-shadow-md">Ihren Garten</span> reden.
                </h2>
                <p className="text-primary-100/90 mb-6 md:mb-12 font-sans font-light text-sm md:text-lg leading-relaxed max-w-sm">
                  Ob einmaliger Pflegeschnitt oder ganzjährige Betreuung – wir beraten Sie kompetent, persönlich und unverbindlich.
                </p>

                <div className="space-y-6 md:space-y-8 mt-auto">
                  <div className="flex items-start gap-5 group cursor-pointer">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-primary-500/40 group-hover:border-primary-400/50 transition-all duration-300 shadow-lg">
                      <MapPin className="w-6 h-6 text-primary-200 group-hover:text-white transition-colors" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-primary-300 text-xs tracking-[0.2em] uppercase mb-1.5 font-bold">Standort</h4>
                      <p className="text-white font-serif text-xl tracking-wide">An der Obstwiese 9<br />42799 Leichlingen</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-primary-500/40 group-hover:border-primary-400/50 transition-all duration-300 shadow-lg">
                      <Phone className="w-6 h-6 text-primary-200 group-hover:text-white transition-colors" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-primary-300 text-xs tracking-[0.2em] uppercase mb-1.5 font-bold">Telefon</h4>
                      <p className="text-white font-serif text-xl tracking-wide"><a href="tel:+49123456789" className="hover:text-primary-200 transition-colors">+49 (0) 123 456 789</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-primary-500/40 group-hover:border-primary-400/50 transition-all duration-300 shadow-lg">
                      <Mail className="w-6 h-6 text-primary-200 group-hover:text-white transition-colors" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-primary-300 text-xs tracking-[0.2em] uppercase mb-1.5 font-bold">E-Mail</h4>
                      <p className="text-white font-serif text-xl tracking-wide"><a href="mailto:info@gruenblick-gartenservice.de" className="hover:text-primary-200 transition-colors drop-shadow-sm">info@gruenblick.de</a></p>
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
              className="lg:col-span-3 p-4 sm:p-8 lg:p-16 bg-white object-cover"
            >
              <form className="space-y-3 lg:space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-2 md:mb-0">
                  <h3 className="text-xl md:text-2xl lg:text-4xl font-serif text-slate-800 mb-1 md:mb-3">Ihre Projektanfrage</h3>
                  <p className="text-slate-500 text-xs md:text-base lg:text-lg">Füllen Sie das Formular aus – wir melden uns im Regelfall innerhalb von 24 Stunden bei Ihnen.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-1.5 md:space-y-2 relative group">
                    <label htmlFor="name" className="text-[10px] md:text-xs font-extrabold text-slate-400 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-primary-600">Vollständiger Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-3 md:px-4 py-2.5 md:py-4 bg-slate-50 border-2 border-slate-100 rounded-lg md:rounded-xl focus:ring-0 focus:border-primary-500 focus:bg-white transition-all text-slate-800 placeholder-slate-400 font-sans shadow-inner outline-none text-xs md:text-sm lg:text-base" 
                      placeholder="z.B. Max Mustermann"
                      required 
                    />
                  </div>

                  <div className="space-y-1.5 md:space-y-2 relative group">
                    <label htmlFor="email" className="text-[10px] md:text-xs font-extrabold text-slate-400 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-primary-600">E-Mail Adresse</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-3 md:px-4 py-2.5 md:py-4 bg-slate-50 border-2 border-slate-100 rounded-lg md:rounded-xl focus:ring-0 focus:border-primary-500 focus:bg-white transition-all text-slate-800 placeholder-slate-400 font-sans shadow-inner outline-none text-xs md:text-sm lg:text-base" 
                      placeholder="z.B. max@beispiel.de"
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-1.5 md:space-y-2 relative group">
                  <label htmlFor="service" className="text-[10px] md:text-xs font-extrabold text-slate-400 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-primary-600">Gewünschte Leistung</label>
                  <div className="relative">
                    <select 
                      id="service" 
                      className="w-full px-3 md:px-4 py-2.5 md:py-4 bg-slate-50 border-2 border-slate-100 rounded-lg md:rounded-xl focus:ring-0 focus:border-primary-500 focus:bg-white transition-all text-slate-800 appearance-none font-sans text-xs md:text-sm lg:text-base outline-none shadow-inner cursor-pointer"
                    >
                      <option value="">Bitte Leistungsbereich wählen...</option>
                      <option value="rasenpflege">Rasenpflege & Mäharbeiten</option>
                      <option value="heckenschnitt">Hecken- & Strauchschnitt</option>
                      <option value="baumpflege">Baumpflege & Fällungen</option>
                      <option value="hochdruckreinigung">Terrassen- & Hochdruckreinigung</option>
                      <option value="komplett">Alles rund um den Garten</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 md:space-y-2 relative group">
                  <label htmlFor="message" className="text-[10px] md:text-xs font-extrabold text-slate-400 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-primary-600">Ihre Nachricht</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-3 md:px-4 py-2.5 md:py-4 bg-slate-50 border-2 border-slate-100 rounded-lg md:rounded-xl focus:ring-0 focus:border-primary-500 focus:bg-white transition-all text-slate-800 placeholder-slate-400 resize-none font-sans shadow-inner outline-none text-xs md:text-sm lg:text-base" 
                    placeholder="Beschreiben Sie kurz Ihr Vorhaben, die Fläche oder besondere Wünsche..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2.5 md:py-4.5 px-6 md:px-10 rounded-full shadow-md shadow-primary-600/30 transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-2 group mt-2 w-full md:w-auto text-sm md:text-lg"
                >
                  Anfrage absenden
                  <Send className="w-3.5 h-3.5 md:w-5 md:h-5 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform" />
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

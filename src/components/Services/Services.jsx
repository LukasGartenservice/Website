import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shovel, Scissors, TreeDeciduous, Droplets, ArrowRight } from 'lucide-react';

const servicesData = [
  { 
    id: 1, 
    title: 'Rasenpflege', 
    description: 'Vertikutieren, Düngen & Mähen für dichtes Grün. Wir erwecken Ihren Rasen zu neuem Leben und kümmern uns um die nachhaltige Pflege.',
    icon: Shovel
  },
  { 
    id: 2, 
    title: 'Heckenschnitt', 
    description: 'Präziser Form- und Pflegeschnitt. Für gesundes Wachstum und perfekte, klare Konturen an Grundstücksgrenzen und in Vorgärten.',
    icon: Scissors
  },
  { 
    id: 3, 
    title: 'Baumpflege', 
    description: 'Professioneller Obstbaumschnitt und sichere Fällungen durch erfahrene Kletter-Spezialisten für den Erhalt Ihres Baumbestands.',
    icon: TreeDeciduous
  },
  { 
    id: 4, 
    title: 'Flächenreinigung', 
    description: 'Schonende Hochdruckreinigung von Terrassen, Wegen und Einfahrten. Befreien Sie Ihre Flächen professionell und nachhaltig von Moos.',
    icon: Droplets
  }
];

const Services = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  return (
    <section className="py-24 lg:py-36 bg-[#fafafa] relative" id="services">
      <div className="container mx-auto px-5 md:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-24 text-center max-w-3xl mx-auto"
        >
          <span className="text-primary-600 font-bold tracking-[0.25em] text-xs uppercase mb-4 md:mb-5 block">
            Unsere Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zinc-900 leading-[1.15] tracking-tight mb-4 md:mb-6">
            Kompetenz für Ihr <br className="hidden md:block"/>
            <span className="text-primary-600 italic font-light">wichtigstes Grün.</span>
          </h2>
          <p className="hidden md:block text-zinc-500 font-light text-lg md:text-xl">Entdecken Sie unsere maßgeschneiderten Dienstleistungen für einen Garten, der zu jeder Jahreszeit Freude bereitet.</p>
        </motion.div>
        
        {/* DESKTOP VERSION: Premium Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-10">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a 
                href="#contact"
                key={service.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-14 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-15px_rgba(40,70,50,0.12)] border border-zinc-100 transition-all duration-500 hover:-translate-y-2 flex flex-col items-start overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary-100/50 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-500 shadow-sm relative z-10 border border-zinc-100 group-hover:border-primary-600">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-zinc-400 group-hover:text-white transition-colors duration-500 stroke-[1.5]" />
                </div>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-zinc-900 mb-4 group-hover:text-primary-800 transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-zinc-500 font-sans text-base md:text-lg font-light leading-relaxed mb-12 relative z-10 flex-grow">
                  {service.description}
                </p>

                <div className="mt-auto flex items-center justify-between w-full relative z-10">
                  <span className="text-sm font-bold text-zinc-400 group-hover:text-primary-600 uppercase tracking-widest transition-colors duration-300">Anfragen</span>
                  <div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-primary-600 group-hover:border-primary-600 transition-colors duration-300 shadow-sm">
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* MOBILE VERSION: Clean Accordion */}
        <div className="md:hidden flex flex-col gap-3">
          {servicesData.map((service) => {
            const Icon = service.icon;
            const isActive = activeAccordion === service.id;
            
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-white rounded-[1.5rem] border ${isActive ? 'border-primary-200 shadow-md' : 'border-zinc-100 shadow-sm'} overflow-hidden transition-all duration-300`}
              >
                <button 
                  onClick={() => setActiveAccordion(isActive ? null : service.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-primary-600 text-white shadow-sm' : 'bg-zinc-50 border border-zinc-100 text-zinc-400'}`}>
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <h3 className={`font-serif text-lg ${isActive ? 'text-primary-800' : 'text-zinc-800'}`}>{service.title}</h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isActive ? 'rotate-180 bg-primary-50 text-primary-600' : 'bg-zinc-50 text-zinc-400'}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pt-1 border-t border-zinc-50 mx-5">
                        <p className="text-zinc-500 font-light text-sm leading-relaxed mb-5">{service.description}</p>
                        <a href="#contact" className="inline-flex items-center gap-2 text-primary-600 font-bold text-[11px] uppercase tracking-widest group">
                          ZUM KONTAKT <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;

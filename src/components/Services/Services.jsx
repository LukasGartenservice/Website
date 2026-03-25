import { motion } from 'framer-motion';
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
  return (
    <section className="py-24 lg:py-36 bg-[#fafafa] relative" id="services">
      <div className="container mx-auto px-5 md:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
        >
          <span className="text-primary-600 font-bold tracking-[0.25em] text-xs uppercase mb-5 block">
            Unsere Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zinc-900 leading-[1.15] tracking-tight mb-6">
            Kompetenz für Ihr <br className="hidden md:block"/>
            <span className="text-primary-600 italic font-light">wichtigstes Grün.</span>
          </h2>
          <p className="text-zinc-500 font-light text-lg md:text-xl">Entdecken Sie unsere maßgeschneiderten Dienstleistungen für einen Garten, der zu jeder Jahreszeit Freude bereitet.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
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
                {/* Decorative background glow on hover */}
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
      </div>
    </section>
  );
};

export default Services;

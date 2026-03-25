import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const servicesData = [
  { 
    id: '01', 
    title: 'Rasenpflege', 
    description: 'Vertikutieren, Düngen & Mähen für dichtes Grün. Wir erwecken Ihren Rasen zu neuem Leben.' 
  },
  { 
    id: '02', 
    title: 'Heckenschnitt', 
    description: 'Präziser Form- und Pflegeschnitt. Für gesundes Wachstum und perfekte, klare Konturen.' 
  },
  { 
    id: '03', 
    title: 'Baumpflege', 
    description: 'Professioneller Obstbaumschnitt und sichere Fällungen durch erfahrene Kletter-Spezialisten.' 
  },
  { 
    id: '04', 
    title: 'Flächenreinigung', 
    description: 'Schonende Hochdruckreinigung von Terrassen, Wegen und Einfahrten. Frei von Moos & Schmutz.' 
  }
];

const Services = () => {
  return (
    <section className="py-24 lg:py-40 bg-zinc-50" id="services">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32 max-w-2xl"
        >
          <span className="text-primary-600 font-bold tracking-[0.25em] text-xs uppercase mb-6 block">
            Unsere Expertise
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-serif text-zinc-900 leading-[1.1] tracking-tight">
            Präzision für <br/>
            <span className="text-primary-600 italic font-light">Ihren Garten.</span>
          </h2>
        </motion.div>
        
        <div className="flex flex-col border-t border-zinc-200">
          {servicesData.map((service, index) => {
            return (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative border-b border-zinc-200 py-10 md:py-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-16 hover:bg-white transition-all duration-500 px-6 -mx-6 rounded-3xl md:rounded-full md:px-8 md:-mx-8 cursor-pointer"
              >
                <div className="text-zinc-300 font-serif text-4xl md:text-6xl group-hover:text-primary-200 transition-colors duration-500 shrink-0 min-w[80px]">
                  {service.id}
                </div>
                
                <div className="flex-grow flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-zinc-900 group-hover:text-primary-700 transition-colors duration-500 shrink-0 md:w-1/3">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 font-sans text-lg md:text-xl font-light leading-relaxed max-w-xl md:ml-auto">
                    {service.description}
                  </p>
                </div>

                <div className="hidden lg:flex w-20 h-20 rounded-full border border-zinc-200 items-center justify-center group-hover:bg-primary-600 group-hover:border-primary-600 group-hover:text-white transition-all duration-500 shrink-0">
                  <ArrowUpRight className="w-8 h-8 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

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
    <section className="py-24 lg:py-40 bg-zinc-50 relative" id="services">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-300/40 to-transparent"></div>

      <div className="container mx-auto px-5 md:px-12 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-28 max-w-2xl"
        >
          <span className="text-primary-600 font-bold tracking-[0.25em] text-xs uppercase mb-5 block">
            Unsere Expertise
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-zinc-900 leading-[1.1] tracking-tight">
            Präzision für <br/>
            <span className="text-primary-600 italic font-light">Ihren Garten.</span>
          </h2>
        </motion.div>
        
        <div className="flex flex-col border-t border-zinc-200/80">
          {servicesData.map((service, index) => (
            <motion.a 
              href="#contact"
              key={service.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative border-b border-zinc-200/80 py-8 md:py-14 flex items-start md:items-center gap-5 md:gap-10 lg:gap-16 hover:bg-white/80 transition-all duration-500 px-4 md:px-8 -mx-4 md:-mx-8 cursor-pointer"
            >
              {/* Number */}
              <span className="text-zinc-200 font-serif text-3xl md:text-5xl lg:text-6xl group-hover:text-primary-300 transition-colors duration-500 shrink-0 w-[50px] md:w-[80px] lg:w-[100px] pt-1 md:pt-0">
                {service.id}
              </span>
              
              {/* Title + Description stacked on mobile, side by side on desktop */}
              <div className="flex-grow min-w-0">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
                  <h3 className="text-2xl md:text-3xl lg:text-[2.75rem] font-serif text-zinc-900 group-hover:text-primary-700 transition-colors duration-500 shrink-0 lg:w-[280px] xl:w-[320px] leading-tight mb-2 lg:mb-0">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 font-sans text-base md:text-lg font-light leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-primary-600 group-hover:border-primary-600 transition-all duration-500 shrink-0 self-center">
                <ArrowUpRight className="w-5 h-5 md:w-7 md:h-7 text-zinc-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

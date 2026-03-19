import { motion } from 'framer-motion';
import { Shovel, Scissors, TreeDeciduous, Flower2, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'Rasenpflege',
    description: 'Mähen, Vertikutieren und Düngen für ein sattes, dichtes Grün. Wir bringen Ihren Rasen auf Vordermann.',
    icon: Shovel,
    color: 'text-primary-600',
    blobColor: 'bg-primary-100'
  },
  {
    id: 2,
    title: 'Heckenschnitt',
    description: 'Präziser Form- und Pflegeschnitt für Hecken und Sträucher. Für gesundes Wachstum und klare Linien.',
    icon: Scissors,
    color: 'text-accent-600',
    blobColor: 'bg-accent-100'
  },
  {
    id: 3,
    title: 'Baumpflege',
    description: 'Sichere Fällungen und professioneller Obstbaumschnitt durch absolut erfahrene Kletter-Profis.',
    icon: TreeDeciduous,
    color: 'text-emerald-600',
    blobColor: 'bg-emerald-100'
  },
  {
    id: 4,
    title: 'Pflanzungen',
    description: 'Farbharmonische Beete und standortgerechte Pflanzenwahl – für ganzjährige Blütenpracht im Garten.',
    icon: Flower2,
    color: 'text-rose-500',
    blobColor: 'bg-rose-100'
  }
];

const Services = () => {
  return (
    <section className="py-28 bg-[#fafaf8] relative overflow-hidden" id="services">
      {/* Background Leaves */}
      <LeafBackground />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:w-2/3"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-800 mb-6 leading-tight">
              Alles, was Ihr Garten <br/><span className="italic text-primary-600">braucht.</span>
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <p className="text-lg text-slate-600 border-l-4 border-accent-400 pl-6 py-2 bg-white/50 backdrop-blur-sm shadow-sm rounded-r-xl">
              Jeder Garten ist einzigartig. Wir bieten maßgeschneiderte Pflegekonzepte für Ihr wertvolles Stück Natur.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-[2rem] p-8 h-full transition-all duration-300 group-hover:-translate-y-3 shadow-sm group-hover:shadow-[0_20px_40px_-15px_rgba(44,82,60,0.12)] group-hover:bg-[#f6faf7] border border-slate-100">
                  <div className={`w-20 h-20 ${service.blobColor} ${service.color} organic-blob flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 shadow-sm`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-10 leading-relaxed font-sans">
                    {service.description}
                  </p>
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors mt-auto shadow-sm">
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Subtle background decoration
const LeafBackground = () => (
  <svg className="absolute w-full h-full inset-0 z-0 opacity-[0.02] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <pattern id="leaf-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M40,50 C40,20 70,10 90,30 C100,40 100,60 80,80 C60,100 30,90 20,70 C10,50 40,50 40,50 Z" fill="currentColor" />
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#leaf-pattern)" />
  </svg>
);

export default Services;

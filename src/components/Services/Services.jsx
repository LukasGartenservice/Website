import { motion } from 'framer-motion';
import { Shovel, Scissors, TreeDeciduous, Droplets, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'Rasenpflege',
    description: 'Mähen, Vertikutieren und Düngen für ein sattes, dichtes Grün. Wir bringen Ihren Rasen auf Vordermann.',
    icon: Shovel,
    color: 'text-primary-600',
    blobColor: 'bg-primary-100',
    shadowColor: 'group-hover:shadow-primary-500/20'
  },
  {
    id: 2,
    title: 'Heckenschnitt',
    description: 'Präziser Form- und Pflegeschnitt für Hecken und Sträucher. Für gesundes Wachstum und klare Linien.',
    icon: Scissors,
    color: 'text-accent-600',
    blobColor: 'bg-accent-100',
    shadowColor: 'group-hover:shadow-accent-500/20'
  },
  {
    id: 3,
    title: 'Baumpflege',
    description: 'Sichere Fällungen und professioneller Obstbaumschnitt durch absolut erfahrene Kletter-Profis.',
    icon: TreeDeciduous,
    color: 'text-emerald-600',
    blobColor: 'bg-emerald-100',
    shadowColor: 'group-hover:shadow-emerald-500/20'
  },
  {
    id: 4,
    title: 'Hochdruckreinigung',
    description: 'Gründliche und schonende Reinigung von Terrassen, Wegen und Einfahrten. Befreien Sie Flächen von Moos & Schmutz.',
    icon: Droplets,
    color: 'text-cyan-600',
    blobColor: 'bg-cyan-100',
    shadowColor: 'group-hover:shadow-cyan-500/20'
  }
];

const Services = () => {
  return (
    <section className="py-28 lg:py-36 relative overflow-hidden bg-slate-50" id="services">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-emerald-100/50 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animation-delay-4000"></div>
      </div>
      
      <PremiumPatternBackground />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-end mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:w-3/5"
          >
            <div className="inline-block bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-primary-600 tracking-wider uppercase mb-6 shadow-sm border border-primary-100">
              Unser Angebot
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-serif text-slate-800 mb-6 leading-[1.1]">
              Alles, was Ihr Garten <br/><span className="text-primary-600 relative inline-block">
                braucht.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent-300 opacity-70" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none"/></svg>
              </span>
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-2/5"
          >
            <div className="relative p-8 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/80 shadow-lg shadow-primary-900/5">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary-400 to-primary-600 rounded-l-2xl"></div>
              <p className="text-lg text-slate-600 leading-relaxed font-sans">
                Jeder Garten ist einzigartig. Wir bieten <strong className="text-slate-800 font-semibold">maßgeschneiderte Pflegekonzepte</strong> für Ihr wertvolles Stück Natur, ausgeführt von erfahrenen Profis.
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                className="group cursor-pointer h-full"
              >
                <div className={`bg-white/80 backdrop-blur-lg rounded-[2.5rem] p-8 h-full transition-all duration-500 group-hover:-translate-y-4 hover:bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${service.shadowColor} group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-white/60 relative overflow-hidden flex flex-col`}>
                  
                  {/* Decorative corner shape */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-white to-slate-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                  <div className={`w-20 h-20 ${service.blobColor} ${service.color} organic-blob flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 shadow-sm relative z-10`}>
                    <Icon className="w-8 h-8" strokeWidth={1.75} />
                  </div>
                  
                  <h3 className="text-2xl font-serif font-extrabold text-slate-800 mb-4 relative z-10">{service.title}</h3>
                  <p className="text-slate-600 mb-10 leading-relaxed font-sans relative z-10">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between relative z-10">
                    <span className="text-sm font-bold text-slate-400 group-hover:text-primary-600 transition-colors uppercase tracking-wider">Mehr erfahren</span>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100 group-hover:border-primary-600">
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
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

// Intricate organic pattern background
const PremiumPatternBackground = () => (
  <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83zm-2.49 0l.83.83-1.66 1.66-.83-.83.83-.83v-.83z' fill='%239bc8b0' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
  </div>
);

export default Services;

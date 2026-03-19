import { motion } from 'framer-motion';
import { Leaf, Scissors, TreeDeciduous, BrickWall, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'Rasenpflege',
    description: 'Regelmäßiges Mähen, Vertikutieren und bedarfsgerechtes Düngen für einen dichten, sattgrünen Rasen.',
    icon: Leaf,
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    id: 2,
    title: 'Heckenschnitt',
    description: 'Fachgerechter Form- und Pflegeschnitt für Hecken und Sträucher aller Art für gesundes Wachstum.',
    icon: Scissors,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50'
  },
  {
    id: 3,
    title: 'Baumpflege',
    description: 'Sichere Baumfällungen, Kronenpflege und professioneller Obstbaumschnitt durch erfahrene Profis.',
    icon: TreeDeciduous,
    color: 'text-teal-500',
    bgColor: 'bg-teal-50'
  },
  {
    id: 4,
    title: 'Pflasterarbeiten',
    description: 'Elegante Wege, Terrassen und stabile Einfahrten – professionell geplant und präzise verlegt.',
    icon: BrickWall,
    color: 'text-slate-600',
    bgColor: 'bg-slate-100'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Services = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="services">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3 block">Unsere Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Leistungen für Ihren Traumgarten</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Von der regelmäßigen Pflege bis zur kompletten Neugestaltung. 
            Wir bringen Fachwissen, Leidenschaft und die richtigen Maschinen mit.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id} 
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-primary-600/5 transition-all duration-300 border border-slate-100 group relative overflow-hidden"
              >
                {/* Hover gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 ${service.bgColor} ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a href="#contact" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group/link">
                    Mehr erfahren <ArrowRight className="ml-1 w-4 h-4 text-primary-500 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

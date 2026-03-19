import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Flower2, TreePine } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden bg-[#fdfdfb]" id="home">
      {/* Organic Background Decorations */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-primary-50/50 rounded-bl-[100px] z-0"></div>
      
      {/* Floating Leaves Animation */}
      <motion.div 
        className="absolute top-32 left-10 text-primary-300 opacity-60 z-10"
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf size={40} />
      </motion.div>
      <motion.div 
        className="absolute top-1/2 right-20 text-accent-400 opacity-40 z-10"
        animate={{ y: [0, 30, 0], rotate: [0, -15, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Leaf size={32} />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-1.5 rounded-full text-sm font-bold mb-8 shadow-sm">
              <Flower2 className="w-4 h-4 text-accent-500" />
              <span>Garten- & Landschaftspflege in Leichlingen</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-serif text-slate-800 leading-[1.05] mb-8 tracking-tight">
              Wir lassen Ihren <br/>
              <span className="text-primary-600 relative inline-block">
                Garten
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent-400 opacity-60" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none"/></svg>
              </span>
              <br/>aufblühen.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-10 font-sans leading-relaxed">
              Ob gründliche Pflege oder kreative Neugestaltung – wir widmen uns Ihrem Grün mit Herz, Handwerk und Erfahrung.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <a href="#contact" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-2 group">
                Jetzt anfragen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-primary-300 px-8 py-4 rounded-full font-bold text-lg transition-all text-center hover:-translate-y-1">
                Unsere Leistungen
              </a>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-slate-200">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-white bg-primary-200 flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1592520113018-180c85c3b9b4?w=100&h=100&fit=crop" alt="Customer" className="w-full h-full object-cover" /></div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-accent-200 flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&h=100&fit=crop" alt="Customer" className="w-full h-full object-cover" /></div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-primary-600 text-white flex items-center justify-center font-bold text-sm">+50</div>
              </div>
              <p className="text-sm text-slate-600 font-medium">Glückliche Kunden<br/>in der Region</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            {/* Organic Image Wrapper */}
            <div className="relative w-full max-w-lg mx-auto aspect-[4/5] organic-blob overflow-hidden border-8 border-white shadow-[0_20px_50px_-15px_rgba(44,82,60,0.3)]">
              <img 
                src="https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=1200&auto=format&fit=crop" 
                alt="Gartenpflege durch Profi" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 z-30"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-14 h-14 bg-accent-50 text-accent-600 rounded-full flex items-center justify-center">
                <TreePine className="w-7 h-7" />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-800">100%</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Naturverbunden</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

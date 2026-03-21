import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Flower2, TreePine } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden bg-[#fafafa]" id="home">
      {/* Enhanced Animated Background Decorations */}
      <div className="absolute top-0 right-0 w-full lg:w-[85%] h-full bg-gradient-to-bl from-primary-100/50 via-primary-50/30 to-transparent rounded-bl-[150px] z-0"></div>
      
      {/* Glowing blurred blobs */}
      <motion.div 
        className="absolute top-20 left-10 lg:left-32 w-72 h-72 lg:w-96 lg:h-96 bg-primary-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0 pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 lg:right-1/4 w-80 h-80 lg:w-[400px] lg:h-[400px] bg-accent-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0 pointer-events-none"
        animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-white/40 rounded-full filter blur-[100px] opacity-50 z-0 pointer-events-none"
      />
      
      {/* Floating Leaves Animation */}
      <motion.div 
        className="absolute top-40 left-10 lg:left-20 text-primary-400 opacity-60 z-10"
        animate={{ y: [0, -20, 0], rotate: [0, 15, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf size={48} strokeWidth={1.5} />
      </motion.div>
      <motion.div 
        className="absolute top-1/3 right-10 lg:right-32 text-accent-400 opacity-50 z-10"
        animate={{ y: [0, 30, 0], rotate: [0, -20, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Leaf size={36} strokeWidth={1.5} />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary-100 text-primary-800 px-5 py-2 rounded-full text-sm font-bold mb-8 shadow-sm">
              <Flower2 className="w-4 h-4 text-accent-500" />
              <span>Garten- & Landschaftspflege in Leichlingen</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-serif text-slate-800 leading-[1.05] mb-8 tracking-tight">
              Wir lassen Ihren <br/>
              <span className="text-primary-600 relative inline-block mt-2">
                Garten
                <svg className="absolute -bottom-3 left-0 w-full h-4 text-accent-400/80" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none"/></svg>
              </span>
              <br/>aufblühen.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-10 font-sans leading-relaxed">
              Ob gründliche Pflege oder kreative Neugestaltung – wir widmen uns Ihrem Grün mit Herz, Handwerk und Erfahrung.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <a href="#contact" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4.5 rounded-full font-bold text-lg shadow-xl shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-2 group">
                Jetzt anfragen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>
              <a href="#services" className="bg-white/80 backdrop-blur-sm hover:bg-white text-slate-800 border-2 border-slate-200 hover:border-primary-300 px-8 py-4.5 rounded-full font-bold text-lg transition-all text-center hover:-translate-y-1 shadow-sm hover:shadow-md">
                Unsere Leistungen
              </a>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-slate-200/60">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-white bg-primary-200 flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1592520113018-180c85c3b9b4?w=100&h=100&fit=crop" alt="Customer" className="w-full h-full object-cover" /></div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-accent-200 flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&h=100&fit=crop" alt="Customer" className="w-full h-full object-cover" /></div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-primary-600 text-white flex items-center justify-center font-bold text-sm">+50</div>
              </div>
              <p className="text-sm text-slate-600 font-medium">Glückliche Kunden<br/>in der Region</p>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative lg:ml-auto w-full flex justify-center lg:justify-end"
          >
            {/* Background decorative blob behind image */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-accent-200/40 to-primary-200/40 rounded-full filter blur-2xl z-0 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Organic Image Wrapper - Make it larger explicitly */}
            <div className="relative w-full max-w-[500px] lg:max-w-[650px] aspect-square organic-blob overflow-hidden border-[12px] border-white z-10 shadow-[0_30px_60px_-15px_rgba(44,82,60,0.3)]">
              <img 
                src="https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=1200&auto=format&fit=crop" 
                alt="Gartenpflege im Fokus" 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out hover:scale-110"
              />
              <div className="absolute inset-0 border-4 border-primary-100/30 organic-blob pointer-events-none z-20"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              className="absolute bottom-4 -left-4 lg:-left-12 bg-white/95 backdrop-blur-sm p-5 lg:p-7 rounded-[2rem] shadow-2xl flex items-center gap-4 lg:gap-5 z-30 border border-slate-100"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-accent-50 text-accent-600 rounded-full flex items-center justify-center shadow-inner">
                <TreePine className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-black text-slate-800">100%</p>
                <p className="text-xs lg:text-sm font-bold text-slate-500 uppercase tracking-widest mt-0.5">Naturverbunden</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

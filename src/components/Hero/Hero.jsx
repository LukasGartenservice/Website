import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Leaf, Flower2, TreePine } from 'lucide-react';

const carouselImages = [
  '/client-images/1.2.jpg',
  '/client-images/3.2.jpg',
  '/client-images/4.2.jpg',
  '/client-images/5.2.jpg',
  '/client-images/6.2.jpg'
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 4500); // Change image every 4.5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center pt-28 md:pt-32 pb-16 overflow-hidden bg-[#fafafa]" id="home">
      {/* Enhanced Animated Background Decorations */}
      <div className="hidden lg:block absolute top-0 right-0 w-full lg:w-[85%] h-full bg-gradient-to-bl from-primary-100/50 via-primary-50/30 to-transparent rounded-bl-[150px] z-0"></div>
      
      {/* Glowing blurred blobs */}
      <motion.div 
        className="hidden md:block absolute top-20 left-10 lg:left-32 w-72 h-72 lg:w-96 lg:h-96 bg-primary-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0 pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="hidden md:block absolute bottom-10 right-10 lg:right-1/4 w-80 h-80 lg:w-[400px] lg:h-[400px] bg-accent-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0 pointer-events-none"
        animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-white/40 rounded-full filter blur-[100px] opacity-50 z-0 pointer-events-none"
      />
      
      {/* Floating Leaves Animation - Hidden on mobile to prevent overlap */}
      <motion.div 
        className="hidden md:block absolute top-40 left-10 lg:left-20 text-primary-400 opacity-60 z-10"
        animate={{ y: [0, -20, 0], rotate: [0, 15, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf size={48} strokeWidth={1.5} />
      </motion.div>
      <motion.div 
        className="hidden md:block absolute top-1/3 right-10 lg:right-32 text-accent-400 opacity-50 z-10"
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
            className="max-w-xl text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary-100 text-primary-800 px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold mb-6 md:mb-8 shadow-sm">
              <Flower2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent-500" />
              <span>Gartenservice in Leichlingen</span>
            </div>
            
            <h1 className="text-4xl leading-[1.15] md:text-6xl lg:text-[72px] font-serif text-slate-800 md:leading-[1.05] mb-4 md:mb-8 tracking-tight">
              Wir lassen Ihren <br className="hidden md:block" />
              <span className="text-primary-600 relative inline-block mt-1 md:mt-2">
                Garten
                <svg className="absolute -bottom-1 md:-bottom-3 left-0 w-full h-2 md:h-4 text-accent-400/80" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none"/></svg>
              </span>
              <br className="hidden md:block"/> aufblühen.
            </h1>
            
            <p className="text-base sm:text-lg md:text-2xl text-slate-600 mb-8 md:mb-10 font-sans leading-relaxed">
              Ob Pflege oder Neugestaltung – wir widmen uns Ihrem Grün mit Erfahrung.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-10 md:mb-12">
              <a href="#contact" className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 md:py-4.5 rounded-2xl md:rounded-full font-bold md:text-lg shadow-sm md:shadow-lg hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-2 group">
                Jetzt anfragen
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>
              <a href="#services" className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-8 py-3.5 md:py-4.5 rounded-2xl md:rounded-full font-bold md:text-lg transition-all text-center hover:-translate-y-1 shadow-sm">
                Leistungen
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6 pt-6 border-t border-slate-200/60 mb-6 md:mb-0">
              <div className="flex -space-x-2 shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-primary-200 flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1592520113018-180c85c3b9b4?w=100&h=100&fit=crop" alt="Customer" className="w-full h-full object-cover" /></div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-accent-200 flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&h=100&fit=crop" alt="Customer" className="w-full h-full object-cover" /></div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-primary-600 text-white flex items-center justify-center font-bold text-xs md:text-sm">+50</div>
              </div>
              <p className="text-xs md:text-sm text-slate-600 font-medium text-left">Glückliche Kunden<br/>in der Region</p>
            </div>
          </motion.div>

          {/* Right Side - Image Carousel */}
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
            
            {/* Clean Image Wrapper - Fading Carousel */}
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] aspect-[4/3] md:aspect-[4/5] rounded-3xl md:rounded-[3rem] md:organic-blob overflow-hidden border-[4px] md:border-[12px] border-white z-10 shadow-lg md:shadow-[0_30px_60px_-15px_rgba(44,82,60,0.3)] mx-auto">
              <AnimatePresence>
                <motion.img 
                  key={currentImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  src={carouselImages[currentImage]} 
                  alt="Gartenpflege Projekt" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
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

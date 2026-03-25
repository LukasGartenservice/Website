import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Flower2 } from 'lucide-react';

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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] md:min-h-[95vh] flex items-center pt-24 md:pt-32 pb-16 overflow-hidden bg-[#fafafa]" id="home">
      {/* Clean background gradient instead of heavy blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/60 via-transparent to-accent-50/30 z-0"></div>
      
      <div className="container mx-auto px-5 md:px-12 max-w-6xl relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary-100 text-primary-800 px-4 py-1.5 rounded-full text-xs font-bold mb-8 shadow-sm">
              <Flower2 className="w-3.5 h-3.5 text-accent-500" />
              <span>Gartenservice in Leichlingen</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-serif text-zinc-900 leading-[1.1] mb-6 tracking-tight">
              Wir lassen Ihren <br className="hidden md:block" />
              <span className="text-primary-600 italic font-light">Garten</span> aufblühen.
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-500 mb-10 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
              Ob Pflege oder Neugestaltung – wir widmen uns Ihrem Grün mit Erfahrung und Leidenschaft.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 justify-center lg:justify-start">
              <a href="#contact" className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 group">
                Jetzt anfragen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 px-8 py-4 rounded-full font-bold text-base transition-all hover:-translate-y-0.5 text-center shadow-sm">
                Leistungen
              </a>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start pt-6 border-t border-zinc-200/60">
              <div className="flex -space-x-2 shrink-0">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-200 overflow-hidden"><img src="https://images.unsplash.com/photo-1592520113018-180c85c3b9b4?w=100&h=100&fit=crop" alt="Customer" className="w-full h-full object-cover" /></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-accent-200 overflow-hidden"><img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&h=100&fit=crop" alt="Customer" className="w-full h-full object-cover" /></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-900 text-white flex items-center justify-center font-bold text-xs">+50</div>
              </div>
              <p className="text-sm text-zinc-500 text-left">Glückliche Kunden<br/>in der Region</p>
            </div>
          </motion.div>

          {/* Right Side - Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[520px] aspect-[1/1] md:aspect-[4/5] organic-blob overflow-hidden border-[6px] md:border-[10px] border-white z-10 shadow-2xl shadow-zinc-900/15 mx-auto">
              <AnimatePresence>
                <motion.img 
                  key={currentImage}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  src={carouselImages[currentImage]} 
                  alt="Gartenpflege Projekt" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Image indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === currentImage ? 'w-8 bg-white' : 'w-3 bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

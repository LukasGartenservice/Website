import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, ChevronDown } from 'lucide-react';

const pairs = [
  { 
    id: 1, 
    before: { src: '/client-images/1.jpg', alt: 'Vorher' },
    after: { src: '/client-images/1.2.jpg', alt: 'Nachher' },
    title: 'Gartengestaltung & Bepflanzung'
  },
  { 
    id: 2, 
    before: { src: '/client-images/2.jpg', alt: 'Vorher' },
    after: { src: '/client-images/2.2.jpg', alt: 'Nachher' },
    title: 'Rasenpflege & Anlage'
  },
  { 
    id: 3, 
    before: { src: '/client-images/3.jpg', alt: 'Vorher' },
    after: { src: '/client-images/3.2.jpg', alt: 'Nachher' },
    title: 'Hecken- & Strauchschnitt'
  },
  { 
    id: 4, 
    before: { src: '/client-images/4.jpg', alt: 'Vorher' },
    after: { src: '/client-images/4.2.jpg', alt: 'Nachher' },
    title: 'Wegebau & Pflasterarbeiten'
  },
  { 
    id: 5, 
    before: { src: '/client-images/5.jpg', alt: 'Vorher' },
    after: { src: '/client-images/5.2.jpg', alt: 'Nachher' },
    title: 'Baumpflege & Fällarbeiten'
  },
  { 
    id: 6, 
    before: { src: '/client-images/6.jpg', alt: 'Vorher' },
    after: { src: '/client-images/6.2.jpg', alt: 'Nachher' },
    title: 'Komplette Gartenpflege'
  }
];

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden" id="gallery">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(40,70,50,0.03)_0%,transparent_50%)] pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-24">
          <div className="inline-block bg-white text-primary-800 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-4 md:mb-6 shadow-sm border border-primary-100">
            Unsere Arbeit
          </div>
          <h2 className="text-[2rem] leading-[1.2] md:text-5xl font-serif text-slate-800 mb-4 md:mb-6 md:leading-tight">
            Echte <span className="text-primary-600 italic font-light drop-shadow-sm">Ergebnisse</span> aus unseren Projekten.
          </h2>
          <p className="text-lg text-slate-600 font-sans">
            Lassen Sie sich von unseren Vorher-/Nachher-Vergleichen inspirieren. Ein Bild sagt mehr als tausend Worte.
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:gap-24">
          {pairs.slice(0, visibleCount).map((pair, index) => (
            <motion.div
              key={pair.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="bg-white p-5 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl md:shadow-[0_20px_40px_-15px_rgba(40,70,50,0.08)] border border-slate-100 relative"
            >
              {/* Project Title */}
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-serif text-slate-800">{pair.title}</h3>
                <div className="w-12 h-1 bg-primary-200 mx-auto mt-4 rounded-full"></div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-8 relative">
                
                {/* Center Icon */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg md:shadow-xl z-20 text-primary-500 border border-slate-100">
                  <ArrowLeftRight className="w-4 h-4 md:w-7 md:h-7 opacity-70" />
                </div>

                {/* Vorher / Before */}
                <div className="relative group rounded-2xl md:rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-video lg:aspect-[16/10] bg-slate-100 shadow-inner">
                  <img
                    src={pair.before.src}
                    alt={pair.before.alt}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 filter grayscale-[20%] sepia-[10%] group-hover:grayscale-0 group-hover:sepia-0"
                  />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-slate-800/80 backdrop-blur-md text-white px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs font-extrabold tracking-widest uppercase rounded-full border border-white/20 shadow-lg">
                    Davor
                  </div>
                </div>

                {/* Nachher / After */}
                <div className="relative group rounded-2xl md:rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-video lg:aspect-[16/10] bg-slate-100 shadow-inner">
                  <img
                    src={pair.after.src}
                    alt={pair.after.alt}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-primary-600/90 backdrop-blur-md text-white px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs font-extrabold tracking-widest uppercase rounded-full border border-white/20 shadow-lg shadow-primary-900/40">
                    Danach
                  </div>
                  <div className="absolute inset-0 border-2 md:border-4 border-primary-500/20 rounded-2xl md:rounded-[2rem] pointer-events-none z-10 transition-colors group-hover:border-primary-400/50"></div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < pairs.length && (
          <div className="mt-12 md:mt-16 flex justify-center w-full relative z-10">
            <button 
              onClick={() => setVisibleCount(pairs.length)}
              className="bg-white hover:bg-slate-50 text-primary-700 border border-primary-200 px-8 py-3.5 md:py-4.5 rounded-full font-bold text-base md:text-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center gap-3 group"
            >
              Weitere Referenzen ansehen
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

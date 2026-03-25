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
    <section className="py-24 lg:py-40 bg-white relative" id="gallery">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>

      <div className="container mx-auto px-5 md:px-12 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-28 max-w-2xl"
        >
          <span className="text-primary-600 font-bold tracking-[0.25em] text-xs uppercase mb-5 block">
            Unsere Arbeit
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-zinc-900 leading-[1.1] tracking-tight">
            Echte <span className="text-primary-600 italic font-light">Ergebnisse</span><br/>
            aus unseren Projekten.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {pairs.slice(0, visibleCount).map((pair) => (
            <motion.div
              key={pair.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Project Title */}
              <h3 className="text-lg md:text-xl font-serif text-zinc-800 mb-4 md:mb-6 font-semibold tracking-tight">{pair.title}</h3>

              <div className="grid grid-cols-2 gap-3 md:gap-6 relative">
                {/* Center swap icon */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg z-20 text-primary-600 border border-zinc-100">
                  <ArrowLeftRight className="w-4 h-4 md:w-6 md:h-6" />
                </div>

                {/* Before */}
                <div className="relative group rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[16/11] bg-zinc-100">
                  <img
                    src={pair.before.src}
                    alt={pair.before.alt}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 filter saturate-[0.85]"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 md:top-5 md:left-5 bg-zinc-900/70 backdrop-blur-md text-white px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-full">
                    Davor
                  </span>
                </div>

                {/* After */}
                <div className="relative group rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[16/11] bg-zinc-100">
                  <img
                    src={pair.after.src}
                    alt={pair.after.alt}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 md:top-5 md:right-5 bg-primary-600/80 backdrop-blur-md text-white px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-full">
                    Danach
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < pairs.length && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-20 flex justify-center"
          >
            <button 
              onClick={() => setVisibleCount(pairs.length)}
              className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-full font-bold text-base transition-all hover:-translate-y-1 flex items-center gap-3 group shadow-lg"
            >
              Weitere Referenzen
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

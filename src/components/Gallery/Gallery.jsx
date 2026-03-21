import { motion } from 'framer-motion';

const images = [
  { id: 1, src: '/client-images/651167466_804826098768747_2232222347755592427_n.jpg', alt: 'Gartenprojekt Referenz 1' },
  { id: 2, src: '/client-images/652692125_1849364152439752_7762044846891967579_n.jpg', alt: 'Gartenprojekt Referenz 2' },
  { id: 3, src: '/client-images/653713255_1602941554088697_2491206418215949836_n.jpg', alt: 'Gartenprojekt Referenz 3' },
  { id: 4, src: '/client-images/650966641_930590976410127_3293420947195975631_n.jpg', alt: 'Gartenprojekt Referenz 4' },
  { id: 5, src: '/client-images/650038274_1414747203271045_644927671185212080_n.jpg', alt: 'Gartenprojekt Referenz 5' },
  { id: 6, src: '/client-images/650071771_1990929878465182_5460502490233427381_n.jpg', alt: 'Gartenprojekt Referenz 6' },
  { id: 7, src: '/client-images/655093738_1434937218314351_2417054086460405705_n.jpg', alt: 'Gartenprojekt Referenz 7' },
  { id: 8, src: '/client-images/651782231_1270519191201835_1063216441776480734_n.jpg', alt: 'Gartenprojekt Referenz 8' },
];

const Gallery = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="gallery">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-primary-100 text-primary-800 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
            Unsere Arbeit
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6 leading-tight">
            Echte <span className="text-primary-600 italic">Ergebnisse</span> aus unseren Projekten.
          </h2>
          <p className="text-lg text-slate-600 font-sans">
            Lassen Sie sich von unseren bisherigen Arbeiten inspirieren. Ein Bild sagt mehr als tausend Worte.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl bg-slate-100 ${
                index === 0 || index === 3 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className="aspect-square lg:aspect-auto h-full w-full relative">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

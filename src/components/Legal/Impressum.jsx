import { motion } from 'framer-motion';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-primary-950 text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-600 rounded-full blur-[180px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-12 tracking-tight">
            Impressum
          </h1>
          
          <div className="space-y-12 text-zinc-300 font-light leading-relaxed text-lg">
            <section>
              <h2 className="text-white text-xl font-bold uppercase tracking-widest mb-4 opacity-50">Angaben gemäß § 5 DDG</h2>
              <p className="text-xl text-white font-medium">
                Grünblick Gartenservice<br />
                Lukas Friedt<br />
                An der Obstwiese 9<br />
                42799 Leichlingen
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold uppercase tracking-widest mb-4 opacity-50">Kontakt</h2>
              <p>
                E-Mail: <a href="mailto:lukasgartenservice@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors">lukasgartenservice@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold uppercase tracking-widest mb-4 opacity-50">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p className="text-white font-medium">
                Lukas Friedt<br />
                An der Obstwiese 9<br />
                42799 Leichlingen
              </p>
            </section>

            <section className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h2 className="text-white text-xl font-bold uppercase tracking-widest mb-4 opacity-50">EU-Streitschlichtung</h2>
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>.
              </p>
              <p className="text-zinc-400 italic">
                Unsere E-Mail-Adresse findest du oben im Impressum.
              </p>
            </section>
          </div>

          <div className="mt-20 pt-10 border-t border-white/10">
            <a 
              href="/" 
              onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}
              className="text-primary-400 hover:text-primary-300 transition-all flex items-center gap-2 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Zur Startseite
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Impressum;

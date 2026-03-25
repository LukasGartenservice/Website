import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

const VielenDank = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-zinc-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-100 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-5 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto bg-white rounded-[2.5rem] p-10 md:p-16 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-zinc-100"
        >
          <div className="w-20 h-20 md:w-28 md:h-28 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <CheckCircle2 className="w-10 h-10 md:w-14 md:h-14 text-primary-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zinc-900 mb-6 tracking-tight leading-[1.1]">
            Vielen <span className="text-primary-600 italic font-light">Dank.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-500 mb-10 font-light leading-relaxed">
            Ihre Anfrage wurde erfolgreich an uns übermittelt. Wir werden uns schnellstmöglich bei Ihnen melden, um Ihr Gartenprojekt zu besprechen.
          </p>

          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = ''; // Clear hash to return to main page
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-full font-bold text-base transition-all hover:-translate-y-1 shadow-lg group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VielenDank;

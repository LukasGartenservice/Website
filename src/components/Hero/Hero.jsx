import { motion } from 'framer-motion';
import { ArrowRight, Leaf, ShieldCheck, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20" id="home">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=2670&auto=format&fit=crop" 
          alt="Gepflegter Garten" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
              Für Privat & Gewerbe in Leichlingen
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Ihr Traumgarten,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200 drop-shadow-sm">
                unsere Leidenschaft.
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-2xl font-light leading-relaxed drop-shadow-md">
              Professionelle Garten- und Landschaftspflege, die begeistert. 
              Wir verwandeln Ihre Grünflächen in echte Wohlfühloasen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50 transition-all text-center flex items-center justify-center gap-2 group border border-primary-400">
                Kostenloses Angebot
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all text-center hover:-translate-y-0.5">
                Unsere Leistungen
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-primary-400" />
                <span className="text-slate-200 font-medium leading-snug">Zuverlässig<br/>& Versichert</span>
              </div>
              <div className="flex items-center gap-3">
                <Leaf className="w-8 h-8 text-primary-400" />
                <span className="text-slate-200 font-medium leading-snug">Beste<br/>Qualität</span>
              </div>
              <div className="flex items-center gap-3 hidden md:flex">
                <Clock className="w-8 h-8 text-primary-400" />
                <span className="text-slate-200 font-medium leading-snug">Termingerechte<br/>Umsetzung</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

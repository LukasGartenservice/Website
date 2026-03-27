import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://n8n.srv1155101.hstgr.cloud/webhook/kontakt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Gartenservice Kontaktformular',
          website: 'gruenblick-gartenservice.de',
          date: new Date().toLocaleString('de-DE'),
        }),
      });

      if (response.ok) {
        window.location.hash = '#vielen-dank';
      } else {
        alert('Etwas ist schief gelaufen. Bitte versuchen Sie es später erneut.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Verbindung zum Server fehlgeschlagen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 lg:py-40 bg-primary-950 text-white relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-600 rounded-full blur-[180px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <span className="text-primary-400 font-bold tracking-[0.25em] text-xs uppercase mb-8 block">
              Ein unverbindliches Angebot
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-serif mb-8 leading-[1.05] tracking-tight">
              Lassen Sie uns <br/>
              <span className="text-primary-400 italic font-light">starten.</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              Die Pflege und Neugestaltung Ihres Gartens beginnt hier. Hinterlassen Sie uns ein paar Projektdetails und wir melden uns zeitnah bei Ihnen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/[0.03] backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-14 border border-white/10 shadow-2xl shadow-black/50"
          >
            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 pb-4 focus:border-primary-400 transition-colors outline-none text-white placeholder-white/40 text-lg md:text-xl font-light font-sans" 
                  placeholder="Vollständiger Name"
                  required 
                />
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 pb-4 focus:border-primary-400 transition-colors outline-none text-white placeholder-white/40 text-lg md:text-xl font-light font-sans" 
                    placeholder="E-Mail Adresse"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 pb-4 focus:border-primary-400 transition-colors outline-none text-white placeholder-white/40 text-lg md:text-xl font-light font-sans" 
                    placeholder="Telefon (Optional)"
                  />
                </div>
              </div>

              <div className="space-y-2 relative">
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 pb-4 focus:border-primary-400 transition-colors outline-none text-white/40 focus:text-white text-lg md:text-xl font-light appearance-none cursor-pointer font-sans"
                  required
                >
                  <option value="" disabled className="bg-zinc-900 text-zinc-400">Kategorie wählen...</option>
                  <option value="Rasenpflege & Mäharbeiten" className="bg-zinc-900 text-white">Rasenpflege & Mäharbeiten</option>
                  <option value="Hecken- & Strauchschnitt" className="bg-zinc-900 text-white">Hecken- & Strauchschnitt</option>
                  <option value="Baumpflege & Fällarbeiten" className="bg-zinc-900 text-white">Baumpflege & Fällarbeiten</option>
                  <option value="Flächen- & Terrassenreinigung" className="bg-zinc-900 text-white">Flächen- & Terrassenreinigung</option>
                  <option value="Sonstiges" className="bg-zinc-900 text-white">Sonstiges</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center mb-4 pointer-events-none">
                  <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>

              <div className="space-y-2">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3" 
                  className="w-full bg-transparent border-b border-white/20 pb-4 focus:border-primary-400 transition-colors outline-none text-white placeholder-white/40 resize-none text-lg md:text-xl font-light font-sans" 
                  placeholder="Beschreiben Sie kurz Ihr Projekt..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary-500 hover:bg-primary-400 disabled:opacity-50 disabled:cursor-not-allowed text-zinc-950 font-bold py-5 px-10 rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 text-lg md:text-xl shadow-[0_0_40px_rgba(40,70,50,0.5)] group mt-4 tracking-wide"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    Anfrage senden
                    <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

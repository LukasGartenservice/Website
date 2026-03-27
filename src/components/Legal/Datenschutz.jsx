import { motion } from 'framer-motion';

const Datenschutz = () => {
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
            Datenschutz
          </h1>
          
          <div className="space-y-16 text-zinc-300 font-light leading-relaxed text-lg">
            
            <section className="space-y-6">
              <h2 className="text-white text-3xl font-serif">1. Datenschutz auf einen Blick</h2>
              <div className="space-y-4">
                <h3 className="text-primary-400 font-bold uppercase tracking-widest text-sm">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-primary-400 font-bold uppercase tracking-widest text-sm">Datenerfassung auf dieser Website</h3>
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten können Sie dem Impressum dieser Website entnehmen. Ihre Daten werden dadurch erhoben, dass Sie uns diese im Kontaktformular mitteilen.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-white text-3xl font-serif">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <div className="space-y-4">
                <h3 className="text-primary-400 font-bold uppercase tracking-widest text-sm">Verantwortliche Stelle</h3>
                <p className="text-white font-medium">
                  Lukas Friedt, An der Obstwiese 9, 42799 Leichlingen.<br />
                  E-Mail: <a href="mailto:lukasgartenservice@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors">lukasgartenservice@gmail.com</a>
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-primary-400 font-bold uppercase tracking-widest text-sm">Rechte der betroffenen Personen</h3>
                <p>
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten. Sie haben außerdem ein Recht auf Berichtigung oder Löschung dieser Daten.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-white text-3xl font-serif">3. Hosting und Content Delivery Networks (CDN)</h2>
              <div className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10">
                <h3 className="text-primary-400 font-bold uppercase tracking-widest text-sm">Cloudflare</h3>
                <p>
                  Wir nutzen Dienste der Cloudflare Inc. (101 Townsend St., San Francisco, CA 94107, USA). Cloudflare bietet ein weltweit verteiltes Content Delivery Network mit DNS an. Technisch wird der Informationsverkehr zwischen Ihrem Browser und unserer Website über das Netzwerk von Cloudflare geleitet. Dies dient der Sicherheit und Schnelligkeit unserer Website (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </div>
            </section>

            <section className="space-y-6 border-l-2 border-primary-500/30 pl-8">
              <h2 className="text-white text-3xl font-serif">4. Datenerfassung über das Kontaktformular</h2>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage gespeichert.
              </p>
              <div className="space-y-4">
                <h3 className="text-primary-400 font-bold uppercase tracking-widest text-sm">Technische Verarbeitung (n8n & Gmail)</h3>
                <p>
                  Zur Automatisierung und effizienten Zustellung Ihrer Anfragen nutzen wir die Software n8n, gehostet bei der Hostinger International Ltd. Die Daten werden verschlüsselt an einen Webhook übertragen und via Gmail an uns weitergeleitet. 
                </p>
                <p>
                  Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vertragliche/vorvertragliche Maßnahmen) sowie unserem berechtigten Interesse an einer automatisierten Kommunikation (Art. 6 Abs. 1 lit. f DSGVO). Die Daten werden gelöscht, sobald der Zweck für die Speicherung entfällt.
                </p>
              </div>
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

export default Datenschutz;

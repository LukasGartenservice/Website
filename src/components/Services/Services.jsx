import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Rasenpflege',
    description: 'Regelmäßiges Mähen, Vertikutieren und Düngen für einen dichten, grünen Rasen.',
    icon: '🌱'
  },
  {
    id: 2,
    title: 'Heckenschnitt',
    description: 'Fachgerechter Form- und Pflegeschnitt für Hecken und Sträucher aller Art.',
    icon: '✂️'
  },
  {
    id: 3,
    title: 'Baumpflege',
    description: 'Sichere Baumfällungen, Kronenpflege und Obstbaumschnitt durch erfahrene Profis.',
    icon: '🌳'
  },
  {
    id: 4,
    title: 'Pflasterarbeiten',
    description: 'Wege, Terrassen und Einfahrten professionell geplant und präzise verlegt.',
    icon: '🧱'
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Unsere Leistungen</h2>
          <p>Umfassender Service für Ihren Traumgarten</p>
        </div>
        
        <div className="services-grid">
          {servicesData.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

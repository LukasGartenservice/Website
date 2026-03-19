import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Ihr Garten in besten Händen.</h1>
          <p>
            Professionelle Garten- und Landschaftspflege in Leichlingen und Umgebung.
            Von der Rasenpflege bis zum Heckenschnitt – wir kümmern uns um Ihr Grün.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">Unsere Leistungen</a>
            <a href="#contact" className="btn btn-secondary">Unverbindliche Anfrage</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <span>🌿</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

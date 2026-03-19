import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Kontaktieren Sie uns</h2>
          <p>Wir freuen uns auf Ihr Projekt.</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Grünblick Gartenservice</h3>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <strong>Adresse</strong>
                <p>An der Obstwiese 9<br/>42799 Leichlingen</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <strong>Telefon</strong>
                <p><a href="tel:+49123456789">+49 (0) 123 456 789</a></p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <strong>E-Mail</strong>
                <p><a href="mailto:info@gruenblick-gartenservice.de">info@gruenblick-gartenservice.de</a></p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Ihr Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-Mail</label>
              <input type="email" id="email" placeholder="Ihre E-Mail-Adresse" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Nachricht</label>
              <textarea id="message" rows="5" placeholder="Wie können wir Ihnen helfen?" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>Grünblick Gartenservice</h3>
          <p>Ihr zuverlässiger Partner für einen gepflegten Garten in Leichlingen und Umgebung.</p>
        </div>
        
        <div className="footer-links">
          <h4>Kontakt</h4>
          <address>
            <p><strong>Inhaber:</strong> Lukas Friedt</p>
            <p>An der Obstwiese 9</p>
            <p>42799 Leichlingen</p>
          </address>
        </div>
        
        <div className="footer-links">
          <h4>Rechtliches</h4>
          <ul>
            <li><a href="/impressum">Impressum</a></li>
            <li><a href="/datenschutz">Datenschutz</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Grünblick Gartenservice. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

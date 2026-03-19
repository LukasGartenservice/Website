import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-container">
        <a href="/" className="logo">
          <span className="logo-icon">🌿</span>
          Grünblick <span>Gartenservice</span>
        </a>
        
        <nav className="main-nav">
          <ul className="nav-list">
            <li><a href="#services">Leistungen</a></li>
            <li><a href="#about">Über uns</a></li>
            <li><a href="#contact" className="btn-contact">Kontakt</a></li>
          </ul>
        </nav>

        {/* Mobile menu toggle button could be added here */}
      </div>
    </header>
  );
};

export default Header;

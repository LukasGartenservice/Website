import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import VielenDank from './components/VielenDank/VielenDank'
import Impressum from './components/Legal/Impressum'

function App() {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentPath(hash);
      if (hash) {
        window.scrollTo(0, 0);
      }
    };
    
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case 'vielen-dank':
        return <VielenDank />;
      case 'impressum':
        return <Impressum />;
      default:
        return (
          <main>
            <Hero />
            <Services />
            <Gallery />
            <Contact />
          </main>
        );
    }
  };

  return (
    <>
      <Header />
      {renderContent()}
      <Footer />
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import VielenDank from './components/VielenDank/VielenDank'

function App() {
  const [isSuccessPage, setIsSuccessPage] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsSuccessPage(window.location.hash === '#vielen-dank');
      if (window.location.hash === '#vielen-dank') {
        window.scrollTo(0, 0);
      }
    };
    
    // Check on initial load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <Header />
      {isSuccessPage ? (
        <VielenDank />
      ) : (
        <main>
          <Hero />
          <Services />
          <Gallery />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  )
}

export default App

import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Download from './components/Download/Download';
import FAQ from './components/FAQ/FAQ';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import PopupModal from './components/Modal/PopupModal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasBeenShown) {
        setShowModal(true);
        setHasBeenShown(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [hasBeenShown]);

  useEffect(() => {
    const handleMouseOut = (e) => {
      if (e.clientY <= 0 && !hasBeenShown) {
        setShowModal(true);
        setHasBeenShown(true);
      }
    };

    document.addEventListener('mouseout', handleMouseOut);
    return () => document.removeEventListener('mouseout', handleMouseOut);
  }, [hasBeenShown]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <Newsletter />
      <Footer />
      {showModal && <PopupModal onClose={closeModal} />}
    </div>
  );
}

export default App;

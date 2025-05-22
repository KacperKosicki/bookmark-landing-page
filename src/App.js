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

  useEffect(() => {
    const timeout = setTimeout(() => setShowModal(true), 30000); // 30s

    const handleMouseMove = (e) => {
      if (e.clientY < 50) {
        setShowModal(true);
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <Newsletter />
      <Footer />
      {showModal && <PopupModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;

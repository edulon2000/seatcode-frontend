import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Preloader from '../components/Preloader';  // Certifique-se de que o Preloader foi criado e exportado corretamente

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula o carregamento de 3 segundos (pode ser ajustado conforme necessário)
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <>
          <HeroSection />
          <Services />
        </>
      )}
    </div>
  );
};

export default Home;

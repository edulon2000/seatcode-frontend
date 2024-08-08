import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false); // Inicialmente não está carregando
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      // Inicia o carregamento
      setLoading(true);
    };

    const handleComplete = () => {
      // Define o carregamento como falso após 2 segundos
      setTimeout(() => setLoading(false), 1000);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    // Cleanup the event listeners on unmount
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading && <LoadingSpinner />}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

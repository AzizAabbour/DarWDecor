import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhyChoose from './components/WhyChoose/WhyChoose';
import ProductInfo from './components/ProductInfo/ProductInfo';
import Gallery from './components/Gallery/Gallery';
import Features from './components/Features/Features';
import Reviews from './components/Reviews/Reviews';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import { useScrollPosition } from './hooks/useScrollReveal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const scrollY = useScrollPosition();

  useEffect(() => {
    // Simulate initial asset load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Loading Screen */}
      <div className={`page-loader${!loading ? ' hidden' : ''}`} aria-hidden={!loading}>
        <div className="loader-spinner"></div>
        <div className="loader-text">NORDIC COMFORT</div>
      </div>

      {!loading && (
        <div className="app">
          <Navbar />
          <main>
            <Hero />
            <WhyChoose />
            <Gallery />
            <ProductInfo />
            <Features />
            <Reviews />
            <FAQ />
            <Contact />
            <CTA />
          </main>
          <Footer />

          {/* Back to top button */}
          <button
            className={`back-to-top${scrollY > 400 ? ' visible' : ''}`}
            onClick={handleBackToTop}
            aria-label="Back to top"
          >
            ▲
          </button>
        </div>
      )}
    </>
  );
}

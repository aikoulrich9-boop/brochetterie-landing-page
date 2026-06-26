import React, { useState } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Tradition from './components/Tradition';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Juices from './components/Juices';
import Catering from './components/Catering';
import Testimonials from './components/Testimonials';
import Delivery from './components/Delivery';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <CartProvider>
      <Loader onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="app-container" style={{ opacity: 0, animation: 'fadeInApp 0.8s ease-out forwards' }}>
          <Header />
          <main>
            <Hero />
            <Specialties />
            <Tradition />
            <Gallery />
            <Menu />
            <Juices />
            <Catering />
            <Testimonials />
            <Delivery />
          </main>
          <Footer />
          <CartDrawer />
          <ScrollToTop />
        </div>
      )}

      {/* Global entrance transitions */}
      <style>{`
        @keyframes fadeInApp {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </CartProvider>
  );
}

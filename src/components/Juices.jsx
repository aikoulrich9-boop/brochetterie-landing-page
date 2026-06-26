import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingBag, ChevronRight, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Juices() {
  const { addToCart } = useCart();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const juices = [
    {
      id: 'bissap',
      name: 'Bissap',
      price: '1 000 FCFA',
      description: 'L’incontournable infusion de fleurs d’hibiscus séchées, parfumée à la menthe fraîche et relevée d’une touche de sucre de canne.',
      image: '/images/juice_bissap.png',
      whatsappText: "Bonjour, je souhaite commander un Jus de Bissap Maison (1000 FCFA)."
    },
    {
      id: 'tchakpalo',
      name: 'Tchakpalo',
      price: '1 000 FCFA',
      description: 'Boisson traditionnelle fermentée à base de malt de sorgho rouge, sucrée et désaltérante au goût boisé authentique.',
      image: '/images/juice_tchakpalo.png',
      whatsappText: "Bonjour, je souhaite commander un Jus de Tchakpalo Maison (1000 FCFA)."
    },
    {
      id: 'adoyo',
      name: 'Adoyo',
      price: '1 000 FCFA',
      description: 'Une boisson tonique à base de maïs fermenté, citronnelle sauvage et jus de citron vert pressé. Idéale pour se rafraîchir.',
      image: '/images/juice_adoyo.png',
      whatsappText: "Bonjour, je souhaite commander un Jus d'Adoyo Maison (1000 FCFA)."
    },
    {
      id: 'ananas',
      name: 'Ananas',
      price: '1 300 FCFA',
      description: 'Pur jus d’ananas pain de sucre local, pressé à froid chaque matin. Sans sucre ajouté, naturellement doux.',
      image: '/images/juice_ananas.png',
      whatsappText: "Bonjour, je souhaite commander un Jus d'Ananas Pur (1300 FCFA)."
    },
    {
      id: 'baobab',
      name: 'Baobab au lait',
      price: '2 000 FCFA',
      description: 'Jus onctueux extrait du pain de singe (fruit du baobab) mélangé à du lait concentré et parfumé à la vanille.',
      image: '/images/juice_baobab.png',
      whatsappText: "Bonjour, je souhaite commander un Jus de Baobab au lait (2000 FCFA)."
    },
    {
      id: 'gingembre',
      name: 'Gingembre',
      price: '2 000 FCFA',
      description: 'Un jus piquant et énergisant obtenu à partir de racines de gingembre fraîches pressées et adouci au jus d’ananas.',
      image: '/images/juice_gingembre.png',
      whatsappText: "Bonjour, je souhaite commander un Jus de Gingembre Maison (2000 FCFA)."
    }
  ];

  return (
    <section
      id="jus"
      className="bg-pattern-african"
      style={{
        backgroundColor: '#FFF7EC',
        position: 'relative',
        zIndex: 20,
        padding: '80px 0 100px 0',
        overflow: 'hidden'
      }}
      ref={ref}
    >
      <div className="container" style={{ position: 'relative' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}
        >
          <span
            style={{
              color: '#B31217',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '0.85rem',
              display: 'block',
              marginBottom: '10px'
            }}
          >
            Fait Maison
          </span>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#2A1616',
              fontWeight: 800,
              lineHeight: 1.2
            }}
          >
            Menu adapté à <span style={{ color: '#B31217' }}>vos envies</span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div style={{ position: 'relative' }}>
          
          {/* Scroll Buttons */}
          <button 
            onClick={scrollLeft}
            style={{
              position: 'absolute', left: '-20px', top: '45%', transform: 'translateY(-50%)',
              zIndex: 10, width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#fff',
              border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
            className="carousel-nav-btn"
          >
            <ChevronLeft size={24} color="#2A1616" />
          </button>

          <button 
            onClick={scrollRight}
            style={{
              position: 'absolute', right: '-20px', top: '45%', transform: 'translateY(-50%)',
              zIndex: 10, width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#fff',
              border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
            className="carousel-nav-btn"
          >
            <ChevronRight size={24} color="#2A1616" />
          </button>

          {/* Scrolling Area */}
          <motion.div
            ref={scrollContainerRef}
            className="scrollbar-hide"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: 'flex',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              gap: '30px',
              padding: '20px',
              paddingBottom: '40px', /* space for shadow */
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {juices.map((juice, index) => (
              <motion.div
                key={juice.id}
                style={{
                  minWidth: '280px',
                  maxWidth: '300px',
                  flex: '0 0 auto',
                  scrollSnapAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  borderRadius: '24px',
                  padding: '30px 20px',
                  boxShadow: '0 10px 30px rgba(42, 22, 22, 0.05)',
                  position: 'relative'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {/* Image Container with Hover Animation */}
                <motion.div
                  whileHover={{ scale: 1.08, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    height: '250px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  <img 
                    src={juice.image} 
                    alt={juice.name} 
                    style={{ 
                      maxHeight: '100%', 
                      maxWidth: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 15px 20px rgba(0,0,0,0.15))'
                    }} 
                  />
                </motion.div>

                {/* Content */}
                <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: '#2A1616',
                    marginBottom: '8px'
                  }}>
                    {juice.name}
                  </h3>
                  
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#6b5c5c',
                    marginBottom: '20px',
                    flex: 1
                  }}>
                    {juice.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 'auto',
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                    paddingTop: '16px'
                  }}>
                    <span style={{
                      fontWeight: 700,
                      color: '#B31217',
                      fontSize: '1.1rem'
                    }}>
                      {juice.price}
                    </span>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => addToCart({
                        id: juice.id,
                        name: juice.name,
                        price: juice.price,
                        category: "Jus",
                        whatsappText: juice.whatsappText
                      })}
                      style={{
                        backgroundColor: '#FFC107',
                        border: 'none',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: '#2A1616'
                      }}
                      title="Ajouter au panier"
                    >
                      <ShoppingBag size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

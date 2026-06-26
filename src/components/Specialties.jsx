import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Specialties() {
  const { addToCart } = useCart();
  const specialties = [
    {
      id: 'sauce-graine',
      name: 'Igname Pilée + Sauce Graine',
      price: '4 500 FCFA',
      description: 'Notre spécialité star. Une sauce graine onctueuse à base de pulpe de fruits de palmier, mijotée avec des viandes tendres et des épices authentiques.',
      image: '/images/hero_igname_pile.png', // Main stellar image
      tag: 'Le Plus Vendu',
      whatsappText: "Bonjour, je souhaite commander l'Igname Pilée + Sauce Graine (4500 FCFA)."
    },
    {
      id: 'sauce-arachide',
      name: 'Igname Pilée + Sauce Arachide',
      price: '4 000 FCFA',
      description: 'Une sauce crémeuse et veloutée préparée avec des arachides sélectionnées, des épices chaudes et servie avec une viande mijotée à la perfection.',
      image: '/images/hero_igname_pile.png',
      tag: 'Authentique',
      whatsappText: "Bonjour, je souhaite commander l'Igname Pilée + Sauce Arachide (4000 FCFA)."
    },
    {
      id: 'sauce-feuille',
      name: 'Igname Pilée + Sauce Feuille',
      price: '4 500 FCFA',
      description: 'Un délicieux mariage traditionnel de feuilles maraîchères (gboma/épinards) parfumées, préparé avec de la viande juteuse et du poisson séché.',
      image: '/images/hero_igname_pile.png',
      tag: 'Traditionnel',
      whatsappText: "Bonjour, je souhaite commander l'Igname Pilée + Sauce Feuille (4500 FCFA)."
    }
  ];

  return (
    <section
      id="specialites"
      className="curved-top bg-white section-padding-medium"
      style={{
        backgroundColor: '#ffffff',
        position: 'relative',
        zIndex: 20
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 800,
              color: '#B31217',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '12px'
            }}
          >
            Nos Signatures
          </span>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              color: '#2A1616',
              marginBottom: '20px'
            }}
          >
            Notre Igname Pilée Signature
          </h2>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '1.05rem',
              color: '#6B5C5C',
              maxWidth: '650px',
              margin: '0 auto'
            }}
          >
            Une pâte d'igname pilée d'une blancheur et d'une souplesse parfaites, préparée à la commande et accompagnée de sauces cuites à l'étouffée selon les recettes ancestrales.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid-specialties">
          {specialties.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
              whileHover={{ 
                y: -12, 
                transition: { duration: 0.25, ease: 'easeInOut' }
              }}
              style={{
                backgroundColor: '#FFF7EC',
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-soft)',
                border: '1px solid rgba(179, 18, 23, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative'
              }}
            >
              {/* Image & Tag */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '1.25', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    backgroundColor: '#B31217',
                    color: '#FFF7EC',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    fontFamily: "'Outfit', sans-serif",
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    boxShadow: '0 4px 10px rgba(179, 18, 23, 0.2)'
                  }}
                >
                  {item.tag}
                </span>

                {/* Steam Overlay on hover */}
                <div className="steam-container" style={{ top: '25%', opacity: 0.5 }}>
                  <div className="steam-line" style={{ height: '30px' }} />
                  <div className="steam-line" style={{ height: '40px' }} />
                  <div className="steam-line" style={{ height: '35px' }} />
                </div>
              </div>

              {/* Card Details */}
              <div 
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: '#2A1616',
                      marginBottom: '10px',
                      lineHeight: 1.3
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '0.92rem',
                      color: '#6B5C5C',
                      lineHeight: 1.6,
                      marginBottom: '20px'
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <div 
                  className="responsive-card-footer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                    marginTop: 'auto',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(42, 22, 22, 0.06)'
                  }}
                >
                  {/* Price */}
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '1.4rem',
                      fontWeight: 900,
                      color: '#B31217',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {item.price}
                  </span>

                  {/* Add to Cart Button */}
                  <motion.button
                    className="responsive-card-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      emoji: '🍲'
                    })}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      backgroundColor: '#FFC107',
                      color: '#2A1616',
                      padding: '10px 18px',
                      borderRadius: '9999px',
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 800,
                      fontSize: '0.88rem',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(255, 193, 7, 0.15)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Ajouter au panier
                    <ShoppingBag size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

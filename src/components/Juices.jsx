import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Juices() {
  const { addToCart } = useCart();
  const juices = [
    {
      name: 'Bissap',
      price: '1 000 FCFA',
      description: 'L’incontournable infusion de fleurs d’hibiscus séchées, parfumée à la menthe fraîche et relevée d’une touche de sucre de canne.',
      emoji: '🥤',
      whatsappText: "Bonjour, je souhaite commander un Jus de Bissap Maison (1000 FCFA)."
    },
    {
      name: 'Tchakpalo',
      price: '1 000 FCFA',
      description: 'Boisson traditionnelle fermentée à base de malt de sorgho rouge, sucrée et désaltérante au goût boisé authentique.',
      emoji: '🥤',
      whatsappText: "Bonjour, je souhaite commander un Jus de Tchakpalo Maison (1000 FCFA)."
    },
    {
      name: 'Adoyo',
      price: '1 000 FCFA',
      description: 'Une boisson tonique à base de maïs fermenté, citronnelle sauvage et jus de citron vert pressé. Idéale pour se rafraîchir.',
      emoji: '🥤',
      whatsappText: "Bonjour, je souhaite commander un Jus d'Adoyo Maison (1000 FCFA)."
    },
    {
      name: 'Ananas',
      price: '1 300 FCFA',
      description: 'Pur jus d’ananas pain de sucre local, pressé à froid chaque matin. Sans sucre ajouté, naturellement doux.',
      emoji: '🥤',
      whatsappText: "Bonjour, je souhaite commander un Jus d'Ananas Pur (1300 FCFA)."
    },
    {
      name: 'Baobab au lait',
      price: '2 000 FCFA',
      description: 'Jus onctueux extrait du pain de singe (fruit du baobab) mélangé à du lait concentré et parfumé à la vanille.',
      emoji: '🥤',
      whatsappText: "Bonjour, je souhaite commander un Jus de Baobab au lait (2000 FCFA)."
    },
    {
      name: 'Gingembre',
      price: '2 000 FCFA',
      description: 'Un jus piquant et énergisant obtenu à partir de racines de gingembre fraîches pressées et adouci au jus d’ananas.',
      emoji: '🥤',
      whatsappText: "Bonjour, je souhaite commander un Jus de Gingembre Maison (2000 FCFA)."
    }
  ];

  return (
    <section
      id="jus"
      className="bg-pattern-african section-padding-medium"
      style={{
        backgroundColor: '#FFF7EC',
        position: 'relative',
        zIndex: 20
      }}
    >
      <div className="container">
        <div
          className="juices-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Image with details sticker */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              borderRadius: '40px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-medium)',
              border: '8px solid #ffffff',
              height: '560px'
            }}
          >
            <img
              src="/images/jus_naturels.png"
              alt="Jus Naturels Maison"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            {/* Dark gradient blur at the bottom */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(30, 11, 11, 0.7) 0%, rgba(30, 11, 11, 0) 50%)',
                pointerEvents: 'none'
              }}
            />

            {/* Sticker sticker */}
            <div
              className="juice-image-sticker"
              style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                backgroundColor: '#FFC107',
                color: '#2A1616',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                padding: '10px 18px',
                borderRadius: '9999px',
                boxShadow: '0 8px 20px rgba(255, 193, 7, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Sparkles size={14} />
              100% Naturel & Frais
            </div>

            {/* Text on Image overlay */}
            <div
              className="juice-image-overlay"
              style={{
                position: 'absolute',
                bottom: '40px',
                left: '40px',
                right: '40px',
                color: '#FFF7EC'
              }}
            >
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px' }}>
                Jus Pressés du Matin
              </h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.92rem', color: 'rgba(255, 247, 236, 0.85)', margin: 0, lineHeight: 1.5 }}>
                Pas de colorants, pas de conservateurs. Uniquement des fruits mûris au soleil d'Afrique et des infusions de plantes médicinales traditionnelles.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Menu List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
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
              Boissons de la Maison
            </span>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 900,
                color: '#2A1616',
                marginBottom: '36px',
                lineHeight: 1.15
              }}
            >
              Jus Naturels Maison
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              {juices.map((juice, idx) => (
                <motion.div
                  key={juice.name}
                  whileHover={{ x: 8 }}
                  className="juice-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* Emoji badge */}
                    <div
                      style={{
                        fontSize: '1.4rem',
                        backgroundColor: 'rgba(255, 193, 7, 0.12)',
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {juice.emoji}
                    </div>
                    <div>
                      <h4
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: '1.1rem',
                          fontWeight: 800,
                          color: '#2A1616',
                          margin: '0 0 4px 0'
                        }}
                      >
                        {juice.name}
                      </h4>
                      <p
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: '0.82rem',
                          color: '#6B5C5C',
                          lineHeight: 1.4,
                          margin: 0,
                          maxWidth: '280px'
                        }}
                      >
                        {juice.description}
                      </p>
                    </div>
                  </div>

                  <div className="juice-card-right" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '1.1rem',
                        fontWeight: 900,
                        color: '#B31217',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {juice.price}
                    </span>

                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const getJuiceFullName = (name) => {
                          switch (name) {
                            case 'Bissap': return 'Jus de Bissap Maison';
                            case 'Tchakpalo': return 'Jus de Tchakpalo Maison';
                            case 'Adoyo': return "Jus d'Adoyo Maison";
                            case 'Ananas': return "Jus d'Ananas Pur";
                            case 'Baobab au lait': return 'Jus de Baobab au lait';
                            case 'Gingembre': return 'Jus de Gingembre Maison';
                            default: return name;
                          }
                        };
                        addToCart({
                          id: `juice-${juice.name.toLowerCase().replace(/\s+/g, '-')}`,
                          name: getJuiceFullName(juice.name),
                          price: juice.price,
                          emoji: '🥤'
                        });
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: '#B31217',
                        color: '#FFF7EC',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 10px rgba(179, 18, 23, 0.12)'
                      }}
                    >
                      <ShoppingBag size={14} />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS styling for Juices responsiveness */}
      <style>{`
        @media (max-width: 900px) {
          .juices-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .juices-grid > div:first-child {
            height: 290px !important;
            border-radius: 24px !important;
          }
          .juice-image-sticker {
            top: 15px !important;
            right: 15px !important;
            font-size: 0.75rem !important;
            padding: 6px 12px !important;
          }
          .juice-image-overlay {
            bottom: 20px !important;
            left: 20px !important;
            right: 20px !important;
          }
          .juice-image-overlay h3 {
            font-size: 1.4rem !important;
            margin-bottom: 4px !important;
          }
          .juice-image-overlay p {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
          }
        }
      `}</style>
    </section>
  );
}

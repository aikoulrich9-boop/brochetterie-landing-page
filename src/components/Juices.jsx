import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles } from 'lucide-react';

export default function Juices() {
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
      className="bg-pattern-african"
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
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
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '18px 24px',
                    borderRadius: '20px',
                    boxShadow: 'var(--shadow-soft)',
                    border: '1px solid rgba(179, 18, 23, 0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    transition: 'all 0.3s ease'
                  }}
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

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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

                    <motion.a
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      href={`https://wa.me/2290167411124?text=${encodeURIComponent(juice.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: '#B31217',
                        color: '#FFF7EC',
                        textDecoration: 'none',
                        boxShadow: '0 4px 10px rgba(179, 18, 23, 0.12)'
                      }}
                    >
                      <ShoppingBag size={14} />
                    </motion.a>
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
            gap: 40px !important;
          }
          .juices-grid > div:first-child {
            height: 380px !important;
          }
        }
      `}</style>
    </section>
  );
}

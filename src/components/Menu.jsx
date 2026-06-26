import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Menu() {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('all');

  const menuItems = [
    // Autres Spécialités
    {
      id: 'atieke-tilapia',
      name: 'Atiéké + Tilapia Braisé',
      price: '4 500 FCFA',
      category: 'plats',
      description: 'Semoule de manioc cuite à la vapeur, accompagnée d’un tilapia entier braisé juteux, d’alloco et de sa sauce pimentée aux légumes.',
      rating: 4.9,
      whatsappText: "Bonjour, je souhaite commander l'Atiéké + Tilapia Braisé (4500 FCFA)."
    },
    {
      id: 'frites-igname-brochettes',
      name: 'Frites d’igname + 2 brochettes',
      price: '3 000 FCFA',
      category: 'plats',
      description: 'Bâtonnets d’igname croustillants frits maison, servis avec deux brochettes tendres au choix et une sauce tomate épicée.',
      rating: 4.8,
      whatsappText: "Bonjour, je souhaite commander les Frites d'igname + 2 brochettes (3000 FCFA)."
    },
    {
      id: 'riz-aloko-aileron',
      name: 'Riz + Aloko + Aileron',
      price: '2 500 FCFA',
      category: 'plats',
      description: 'Riz parfumé chaud, banane plantain frite dorée (aloko) et ailerons de poulet dorés et croustillants.',
      rating: 4.7,
      whatsappText: "Bonjour, je souhaite commander le Riz + Aloko + Aileron (2500 FCFA)."
    },
    {
      id: 'akassa-tilapia',
      name: 'Akassa + Tilapia',
      price: '3 500 FCFA',
      category: 'plats',
      description: 'Pâte de maïs fermentée traditionnelle servie chaude, accompagnée de tilapia frais cuisiné en sauce ou braisé.',
      rating: 4.8,
      whatsappText: "Bonjour, je souhaite commander l'Akassa + Tilapia (3500 FCFA)."
    },
    {
      id: 'chawarma-viande',
      name: 'Chawarma Viande',
      price: '1 500 FCFA',
      category: 'plats',
      description: 'Pain libanais enroulé garni de viande émincée grillée aux épices, crudités croquantes et sauce ail onctueuse.',
      rating: 4.6,
      whatsappText: "Bonjour, je souhaite commander le Chawarma Viande (1500 FCFA)."
    },
    {
      id: 'hamburger-frites',
      name: 'Hamburger + Frites',
      price: '3 500 FCFA',
      category: 'plats',
      description: 'Pain burger brioché, steak haché grillé maison, fromage fondant, sauce spéciale et frites dorées.',
      rating: 4.7,
      whatsappText: "Bonjour, je souhaite commander l'Hamburger + Frites (3500 FCFA)."
    },
    
    // Grillades
    {
      id: 'brochette-boeuf',
      name: 'Brochette de Bœuf',
      price: '1 000 FCFA',
      category: 'grillades',
      description: 'Morceaux de bœuf marinés aux épices traditionnelles Suya et grillés à la perfection sur braises.',
      rating: 4.9,
      whatsappText: "Bonjour, je souhaite commander la Brochette de Bœuf (1000 FCFA)."
    },
    {
      id: 'brochette-poulet',
      name: 'Brochette de Poulet',
      price: '1 000 FCFA',
      category: 'grillades',
      description: 'Suprêmes de poulet tendres et marinés, enfilés avec poivrons et oignons, grillés de façon juteuse.',
      rating: 4.8,
      whatsappText: "Bonjour, je souhaite commander la Brochette de Poulet (1000 FCFA)."
    },
    {
      id: 'brochette-mouton',
      name: 'Brochette de Mouton',
      price: '1 500 FCFA',
      category: 'grillades',
      description: 'Morceaux de gigot de mouton marinés aux épices locales relevées, grillés de manière fondante.',
      rating: 4.9,
      whatsappText: "Bonjour, je souhaite commander la Brochette de Mouton (1500 FCFA)."
    },
    {
      id: 'tilapia-braise',
      name: 'Tilapia Braisé',
      price: '3 000 FCFA',
      category: 'grillades',
      description: 'Poisson Tilapia entier, assaisonné d’épices locales et grillé lentement au feu de bois.',
      rating: 4.9,
      whatsappText: "Bonjour, je souhaite commander le Tilapia Braisé (3000 FCFA)."
    },
    {
      id: 'poulet-entier',
      name: 'Poulet Entier Grillé',
      price: '5 000 FCFA',
      category: 'grillades',
      description: 'Poulet entier mariné aux herbes africaines et rôti lentement sur notre gril au charbon de bois.',
      rating: 4.8,
      whatsappText: "Bonjour, je souhaite commander le Poulet Entier Grillé (5000 FCFA)."
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeTab);

  return (
    <section
      id="menu"
      className="curved-top bg-white section-padding-medium"
      style={{
        backgroundColor: 'var(--bg-white)',
        position: 'relative',
        zIndex: 20
      }}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
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
            Pour Accompagner Votre Expérience
          </span>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              color: 'var(--text-dark)',
              marginBottom: '20px'
            }}
          >
            Nos Spécialités & Grillades
          </h2>
        </motion.div>

        {/* Gourmet Platter Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="menu-banner-container"
          style={{
            position: 'relative',
            borderRadius: '32px',
            overflow: 'hidden',
            marginBottom: '60px',
            height: '240px',
            boxShadow: 'var(--shadow-soft)'
          }}
        >
          <img
            src="/images/autres_specialites.png"
            alt="Assortiment de grillades"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div
            className="menu-banner-overlay"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(30, 11, 11, 0.95) 30%, rgba(30, 11, 11, 0.4) 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '40px'
            }}
          >
            <span
              style={{
                backgroundColor: 'var(--secondary)',
                color: 'var(--text-dark)',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                padding: '4px 12px',
                borderRadius: '9999px',
                width: 'fit-content',
                marginBottom: '12px'
              }}
            >
              Grillades et Plats Chauds
            </span>
            <h3
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 800,
                color: 'var(--bg-cream)',
                margin: '0 0 8px 0'
              }}
            >
              Le Vrai Goût de la Braise
            </h3>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.92rem',
                color: 'rgba(255, 247, 236, 0.8)',
                maxWidth: '500px',
                margin: 0
              }}
            >
              Découvrez nos accompagnements typiques et nos viandes savamment marinées, grillées au charbon de bois naturel pour un parfum irrésistible.
            </p>
          </div>
        </motion.div>

        {/* Category Filters (Tabs) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '48px',
            flexWrap: 'wrap'
          }}
        >
          {[
            { id: 'all', label: 'Tout le Menu' },
            { id: 'plats', label: 'Accompagnements & Plats' },
            { id: 'grillades', label: 'Nos Grillades Suya' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 700,
                padding: '12px 24px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                backgroundColor: activeTab === tab.id ? '#B31217' : 'rgba(179, 18, 23, 0.05)',
                color: activeTab === tab.id ? 'var(--bg-cream)' : '#B31217',
                boxShadow: activeTab === tab.id ? '0 8px 20px rgba(179, 18, 23, 0.2)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.backgroundColor = 'rgba(179, 18, 23, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.backgroundColor = 'rgba(179, 18, 23, 0.05)';
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid-menu"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                style={{
                  backgroundColor: 'var(--bg-cream)',
                  borderRadius: '24px',
                  padding: '24px',
                  boxShadow: 'var(--shadow-soft)',
                  border: '1px solid rgba(179, 18, 23, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  {/* Rating / Badges */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: 'rgba(255, 193, 7, 0.15)', color: 'var(--secondary)', padding: '4px 8px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 800 }}>
                      <Star size={12} fill="var(--secondary)" />
                      {item.rating}
                    </div>
                    <span 
                      style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: 700, 
                        color: '#B31217', 
                        textTransform: 'uppercase', 
                        letterSpacing: '1px',
                        backgroundColor: 'rgba(179, 18, 23, 0.06)',
                        padding: '4px 8px',
                        borderRadius: '6px'
                      }}
                    >
                      {item.category === 'grillades' ? 'Grillade' : 'Spécialité'}
                    </span>
                  </div>

                  {/* Name */}
                  <h3
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: 'var(--text-dark)',
                      marginBottom: '8px'
                    }}
                  >
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '0.85rem',
                      color: '#6B5C5C',
                      lineHeight: 1.5,
                      marginBottom: '20px'
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Footer of Card */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto',
                    borderTop: '1px solid rgba(42, 22, 22, 0.05)',
                    paddingTop: '14px'
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '1.25rem',
                      fontWeight: 900,
                      color: '#B31217'
                    }}
                  >
                    {item.price}
                  </span>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      emoji: item.category === 'grillades' ? '🥩' : '🍲'
                    })}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: '#B31217',
                      color: 'var(--bg-cream)',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 10px rgba(179, 18, 23, 0.15)'
                    }}
                  >
                    <ShoppingBag size={15} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* CSS responsiveness helper for Menu */}
      <style>{`
        @media (max-width: 768px) {
          .menu-banner-container {
            height: 190px !important;
            border-radius: 20px !important;
            margin-bottom: 30px !important;
          }
          .menu-banner-overlay {
            padding: 24px 20px !important;
            background: linear-gradient(to bottom, rgba(30, 11, 11, 0.9) 0%, rgba(30, 11, 11, 0.95) 100%) !important;
          }
          .menu-banner-overlay h3 {
            font-size: 1.25rem !important;
            margin-bottom: 4px !important;
          }
          .menu-banner-overlay p {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
          }
          .menu-banner-overlay span {
            font-size: 0.7rem !important;
            margin-bottom: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}

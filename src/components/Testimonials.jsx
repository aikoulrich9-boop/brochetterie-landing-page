import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marie L.',
      city: 'Cotonou',
      comment: "L’igname pilée est exceptionnelle. Douce, élastique juste ce qu'il faut, sans aucun grumeau. La sauce graine est parfumée et riche en viande. On commande en famille chaque dimanche !",
      rating: 5,
      initials: 'ML',
      bgGradient: 'linear-gradient(135deg, #B31217, #F5A623)'
    },
    {
      name: 'Koffi A.',
      city: 'Abidjan',
      comment: "On retrouve vraiment le goût traditionnel et authentique du pays. C'est pilonné à la main et cela se sent immédiatement à la texture. La livraison est rapide, le plat arrive très chaud.",
      rating: 5,
      initials: 'KA',
      bgGradient: 'linear-gradient(135deg, var(--secondary), #F5A623)'
    },
    {
      name: 'Amina D.',
      city: 'Cotonou',
      comment: "La meilleure adresse pour l'igname pilée, sans hésitation. Les portions sont extrêmement généreuses et le rapport qualité-prix est imbattable. Le service client WhatsApp est très réactif.",
      rating: 5,
      initials: 'AD',
      bgGradient: 'linear-gradient(135deg, var(--text-dark), #B31217)'
    }
  ];

  return (
    <section
      id="temoignages"
      className="curved-top bg-white"
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
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
          style={{ textAlign: 'center', marginBottom: '60px' }}
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
            Avis Clients
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
            Ce Qu'en Disent Nos Amateurs d'Igname
          </h2>
        </motion.div>

        {/* Grid of Testimonials */}
        <div 
          className="grid-testimonials"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '30px'
          }}
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 20px 40px rgba(179, 18, 23, 0.12)',
                transition: { duration: 0.3 }
              }}
              style={{
                backgroundColor: 'var(--bg-cream)',
                borderRadius: '28px',
                padding: '36px',
                boxShadow: 'var(--shadow-soft)',
                border: '1px solid rgba(179, 18, 23, 0.03)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              {/* Quote Icon Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: '30px',
                  right: '30px',
                  color: 'rgba(179, 18, 23, 0.05)'
                }}
              >
                <Quote size={48} fill="currentColor" />
              </div>

              <div>
                {/* Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--secondary)" color="var(--secondary)" />
                  ))}
                </div>

                {/* Comment Text */}
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '0.98rem',
                    color: 'var(--text-dark)',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    marginBottom: '28px',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  “ {item.comment} ”
                </p>
              </div>

              {/* User Avatar Info */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  borderTop: '1px solid rgba(42, 22, 22, 0.05)',
                  paddingTop: '20px'
                }}
              >
                {/* Avatar Initials with color gradient */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: item.bgGradient,
                    color: 'var(--bg-cream)',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                  }}
                >
                  {item.initials}
                </motion.div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: 'var(--text-dark)',
                      margin: 0
                    }}
                  >
                    {item.name}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '0.8rem',
                      color: '#6B5C5C',
                      margin: 0
                    }}
                  >
                    Gastronome de {item.city}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

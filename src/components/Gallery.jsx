import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    '/images/IMG_2.png',
    '/images/IMG_1.png',
    '/images/IMG_3.png',
    '/images/IMG_4.png'
  ];

  return (
    <section style={{ backgroundColor: '#FFF7EC', padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
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
            Galerie
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
            Plongez Dans Notre Univers
          </h2>
        </motion.div>

        <div className="grid-gallery">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ 
                scale: 1.08, 
                y: -12, 
                rotate: index % 2 === 0 ? 3 : -3,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // Removed frame styles: borderRadius, overflow, boxShadow, aspectRatio
              }}
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '300px',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'drop-shadow(0px 15px 25px rgba(0,0,0,0.15))',
                  animation: `float ${5 + (index % 2) * 1.5}s ease-in-out ${index * 0.3}s infinite`
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Instagram Follow Button */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5, boxShadow: '0 15px 30px rgba(179, 18, 23, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#B31217',
              color: '#FFF7EC',
              padding: '16px 32px',
              borderRadius: '9999px',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '1rem',
              fontWeight: 800,
              textDecoration: 'none',
              boxShadow: 'var(--shadow-medium)',
              transition: 'all 0.3s ease'
            }}
          >
            Suivez-nous sur Instagram
          </motion.a>
        </div>
      </div>
    </section>
  );
}

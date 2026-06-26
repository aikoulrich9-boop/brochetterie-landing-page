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
    <section style={{ backgroundColor: '#FFF7EC', padding: '40px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
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
      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDone(true);
      if (onComplete) {
        setTimeout(onComplete, 600); // Allow exit animation to finish
      }
    }, 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -100,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#2A1616]"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#1E0B0B',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
        >
          {/* Subtle African Pattern Overlay in Loader */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0l40 40-40 40L0 40 40 0zm0 10L10 40l30 30 30-30-30-30z' fill='%23ffc107' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}
          />

          <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Logo image in Loader */}
            <motion.img
              src="/logo.png"
              alt="Logo Brochetterie"
              initial={{ scale: 0.7, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                height: '80px',
                width: 'auto',
                marginBottom: '24px',
                objectFit: 'contain'
              }}
            />

            {/* Logo Text Animation */}
            <motion.h1
              initial={{ letterSpacing: '2px', opacity: 0 }}
              animate={{ letterSpacing: '8px', opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#FFF7EC',
                textTransform: 'uppercase',
                margin: '0 0 8px 0'
              }}
            >
              BROCHETTERIE
            </motion.h1>

            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.95rem',
                color: '#FFC107',
                fontWeight: 600,
                letterSpacing: '3px',
                textTransform: 'uppercase'
              }}
            >
              L'Igname Pilée Traditionnelle
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

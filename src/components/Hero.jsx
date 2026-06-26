import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="accueil"
      className="bg-pattern-african section-padding-hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#FFF7EC'
      }}
    >
      {/* Background Decorative Gradient Blurs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 193, 7, 0.15) 0%, rgba(255, 247, 236, 0) 70%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(179, 18, 23, 0.08) 0%, rgba(255, 247, 236, 0) 70%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div 
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left'
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(179, 18, 23, 0.08)',
                color: '#B31217',
                padding: '6px 16px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '24px',
                fontFamily: "'Outfit', sans-serif"
              }}
            >
              N°1 DE L'IGNAME PILÉE
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                color: '#2A1616',
                marginBottom: '24px'
              }}
            >
              Les Meilleures <span style={{ color: '#B31217' }}>Saveurs Africaines</span> Livrées Chez Vous
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                color: '#6B5C5C',
                lineHeight: 1.7,
                marginBottom: '36px',
                maxWidth: '580px'
              }}
            >
              Retrouvez les saveurs authentiques de l'Afrique avec notre igname pilée préparée chaque jour à la main et servie avec les meilleures sauces traditionnelles.
            </p>

            {/* Buttons & Conversion */}
            <div
              className="hero-btn-container"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center'
              }}
            >
              {/* WhatsApp Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="hero-cta-btn"
                href="https://wa.me/2290167411124"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: '#B31217',
                  color: '#FFF7EC',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  padding: '16px 44px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  boxShadow: '0 10px 25px rgba(179, 18, 23, 0.3)',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#910e12'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B31217'}
              >
                🛵 Commander Maintenant
                <ArrowRight size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Hand & Bowl Image (No frame, large size, aligned to bottom) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-image-container"
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              minHeight: '480px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              alignSelf: 'stretch'
            }}
          >
            {/* Main Transparent Image (floating & positioned absolute at the bottom-right boundary) */}
            <div
              className="floating-image"
              style={{
                position: 'absolute',
                bottom: 'calc(-80px - 26mm)', // Ajusté de 2mm vers le haut pour compenser la réduction de taille
                right: 'calc(-340px + 25mm)', // Décalé de 10mm supplémentaires vers la gauche (15mm + 10mm)
                width: '340%',
                maxWidth: '1600px',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end'
              }}
            >
              <img
                src="/images/hero_new.png"
                alt="Igname Pilée traditionnelle"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />

              {/* Steam Overlays (Aligned precisely over the bowl) */}
              <div className="steam-container" style={{ top: '24%', left: '55%' }}>
                <div className="steam-line" style={{ height: '35px' }} />
                <div className="steam-line" style={{ height: '48px' }} />
                <div className="steam-line" style={{ height: '40px' }} />
              </div>
            </div>

            {/* Floating Food Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="hero-badge-left"
              style={{
                position: 'absolute',
                top: '20%',
                left: '-10px',
                backgroundColor: '#ffffff',
                padding: '12px 18px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                zIndex: 20
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>🔥</span>
              <div>
                <p style={{ fontSize: '0.75rem', color: '#6B5C5C', fontWeight: 600, margin: 0 }}>Plat Star</p>
                <p style={{ fontSize: '0.9rem', fontWeight: 800, color: '#2A1616', margin: 0 }}>Sauce Graine</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
              className="hero-badge-right"
              style={{
                position: 'absolute',
                bottom: '18%',
                right: '40px',
                backgroundColor: '#ffffff',
                padding: '12px 18px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                zIndex: 20
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>🥩</span>
              <div>
                <p style={{ fontSize: '0.75rem', color: '#6B5C5C', fontWeight: 600, margin: 0 }}>Viande au choix</p>
                <p style={{ fontSize: '0.9rem', fontWeight: 800, color: '#2A1616', margin: 0 }}>Braises tendres</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

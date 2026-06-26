import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, ShoppingBag, Truck } from 'lucide-react';

export default function Delivery() {
  return (
    <section
      id="livraison"
      className="curved-top bg-pattern-african-red section-padding-medium"
      style={{
        backgroundColor: '#B31217', // Premium Deep Red
        color: '#FFF7EC',
        position: 'relative',
        zIndex: 20,
        overflow: 'hidden'
      }}
    >
      {/* Background radial glows for premium contrast */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 193, 7, 0.12) 0%, rgba(179, 18, 23, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(179, 18, 23, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div 
          className="delivery-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          {/* Truck Animated Icon */}
          <motion.div
            animate={{ x: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              backgroundColor: '#FFC107',
              color: '#2A1616',
              marginBottom: '32px',
              boxShadow: '0 10px 25px rgba(255, 193, 7, 0.25)'
            }}
          >
            <Truck size={32} />
          </motion.div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              marginBottom: '20px',
              lineHeight: 1.15
            }}
          >
            Votre Igname Pilée Livrée Chez Vous
          </h2>

          {/* Paragraph */}
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255, 247, 236, 0.9)',
              lineHeight: 1.7,
              marginBottom: '48px',
              maxWidth: '650px',
              margin: '0 auto 48px auto'
            }}
          >
            Commandez en quelques clics et recevez votre plat chaud à domicile. Préparé avec amour, livré dans un emballage thermique isotherme pour conserver toute sa saveur et sa chaleur.
          </p>

          {/* Call-to-action Cards grid for high conversion */}
          <div
            className="delivery-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              textAlign: 'left'
            }}
          >
            {/* Card 1: WhatsApp Quick Order */}
            <motion.a
              whileHover={{ y: -8, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
              href="https://wa.me/2290167411124"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 247, 236, 0.15)',
                borderRadius: '24px',
                padding: '28px',
                color: '#FFF7EC',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ backgroundColor: '#FFC107', color: '#2A1616', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                <MessageSquare size={20} fill="#2A1616" />
              </div>
              <div>
                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.2rem', fontWeight: 800, marginBottom: '6px' }}>
                  Via WhatsApp
                </h4>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.85rem', color: 'rgba(255, 247, 236, 0.75)', lineHeight: 1.4, margin: 0 }}>
                  Commandez par message en précisant vos sauces et vos viandes.
                </p>
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFC107', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Ouvrir WhatsApp →
              </span>
            </motion.a>

            {/* Card 2: Phone Call Direct */}
            <motion.a
              whileHover={{ y: -8, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
              href="tel:+2290167411124"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 247, 236, 0.15)',
                borderRadius: '24px',
                padding: '28px',
                color: '#FFF7EC',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ backgroundColor: '#FFC107', color: '#2A1616', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                <Phone size={20} fill="#2A1616" />
              </div>
              <div>
                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.2rem', fontWeight: 800, marginBottom: '6px' }}>
                  Par Téléphone
                </h4>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.85rem', color: 'rgba(255, 247, 236, 0.75)', lineHeight: 1.4, margin: 0 }}>
                  Appelez-nous directement pour une prise de commande vocale immédiate.
                </p>
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFC107', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Appeler : +229 01 67... →
              </span>
            </motion.a>

            {/* Card 3: Quick order button card */}
            <motion.a
              whileHover={{ y: -8, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
              href="https://wa.me/2290167411124?text=Bonjour,%20je%20souhaite%20commander%20l'assiette%20star%20d'Igname%20Pilée."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 247, 236, 0.15)',
                borderRadius: '24px',
                padding: '28px',
                color: '#FFF7EC',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ backgroundColor: '#FFC107', color: '#2A1616', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                <ShoppingBag size={20} />
              </div>
              <div>
                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.2rem', fontWeight: 800, marginBottom: '6px' }}>
                  Formule Express
                </h4>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.85rem', color: 'rgba(255, 247, 236, 0.75)', lineHeight: 1.4, margin: 0 }}>
                  Commandez l'Igname Pilée Signature Sauce Graine Express en un clic.
                </p>
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFC107', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Commander l'Assiette Star →
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* CSS styling for Delivery responsiveness */}
      <style>{`
        @media (max-width: 768px) {
          .delivery-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}

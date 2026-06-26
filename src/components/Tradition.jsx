import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';

export default function Tradition() {
  const containerRef = useRef(null);
  
  // Custom parallax scroll link
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const steps = [
    {
      num: '01',
      title: "Sélection d'Élite",
      desc: "Nous choisissons exclusivement des ignames fraîches de variété noble à chair ferme, pour garantir une pâte d'une blancheur et d'une souplesse incomparables."
    },
    {
      num: '02',
      title: "Pilonnage Rythmé",
      desc: "Le mortier résonne sous le pilon. Un savoir-faire physique, précis et passionné pour aérer la pâte à chaud jusqu'à obtenir une texture aérée et sans aucun grumeau."
    },
    {
      num: '03',
      title: "Service à la Minute",
      desc: "Dressée fumante dans une assiette premium, nappée de votre sauce signature (graine, arachide ou feuille) et accompagnée de vos viandes de braises tendres."
    }
  ];

  return (
    <section
      ref={containerRef}
      id="tradition"
      className="bg-pattern-african section-padding-large"
      style={{
        position: 'relative',
        backgroundColor: '#FFF7EC',
        overflow: 'hidden'
      }}
    >
      {/* Background Decorative Radial glows */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 193, 7, 0.08) 0%, rgba(255, 247, 236, 0) 70%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          className="tradition-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '60px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Image with floating effect (no frame) */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '540px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* Main Transparent Image (floating) */}
            <div
              className="floating-image"
              style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src="/images/tradition_preparation.png"
                alt="Préparation Traditionnelle de l'igname pilée"
                style={{
                  width: '115%',
                  maxWidth: '530px',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>



            {/* Overlaid Fact card */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                right: '10px',
                backgroundColor: 'rgba(255, 247, 236, 0.94)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: '20px 24px',
                borderRadius: '24px',
                boxShadow: 'var(--shadow-medium)',
                border: '1px solid rgba(179, 18, 23, 0.08)',
                zIndex: 25
              }}
            >
              <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.1rem', fontWeight: 800, color: '#B31217', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.3rem' }}>🥁</span> Le Secret du Rythme
              </h4>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.88rem', color: '#2A1616', lineHeight: 1.5, margin: 0 }}>
                Le battement régulier du pilon dans le mortier annonce à tout le quartier qu'un repas généreux et festif se prépare dans le foyer.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Process timeline */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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
              Secrets de Fabrication
            </span>
            
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 900,
                color: '#2A1616',
                marginBottom: '36px',
                lineHeight: 1.15
              }}
            >
              L'Art Singulier du Pilonnage
            </h2>

            {/* Stepper Timeline Container */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '30px', paddingLeft: '8px' }}>
              {/* Connecting Vertical Line */}
              <div 
                style={{
                  position: 'absolute',
                  left: '26px',
                  top: '32px',
                  bottom: '32px',
                  width: '3px',
                  backgroundColor: 'rgba(179, 18, 23, 0.08)',
                  zIndex: 1
                }}
              />

              {steps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
                  whileHover={{ x: 10 }}
                  style={{
                    position: 'relative',
                    zIndex: 5,
                    display: 'flex',
                    gap: '24px',
                    backgroundColor: '#ffffff',
                    padding: '24px',
                    borderRadius: '24px',
                    boxShadow: 'var(--shadow-soft)',
                    border: '1px solid rgba(179, 18, 23, 0.03)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(179, 18, 23, 0.15)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(179, 18, 23, 0.03)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                  }}
                >
                  {/* Step Circular Number Badge */}
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(179, 18, 23, 0.06)',
                      color: '#B31217',
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: 'inset 0 2px 8px rgba(179, 18, 23, 0.04)',
                      transition: 'all 0.3s ease'
                    }}
                    className="step-badge"
                  >
                    {step.num}
                  </div>

                  {/* Step Description */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: '#2A1616',
                        marginBottom: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '0.92rem',
                        color: '#6B5C5C',
                        lineHeight: 1.6,
                        margin: 0
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Global CSS animations helper for Stamp */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .tradition-grid {
            grid-template-columns: 1fr !important;
            gap: 35px !important;
          }
          .tradition-grid > div:first-child {
            height: 290px !important;
          }
          .tradition-grid img {
            width: 100% !important;
            max-width: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}

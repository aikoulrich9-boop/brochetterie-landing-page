import { Phone, MessageSquare, MapPin, Clock, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#1E0B0B', // Rich dark brown/red charcoal
        color: 'var(--bg-cream)',
        paddingTop: '80px',
        paddingBottom: '30px',
        position: 'relative',
        zIndex: 20,
        borderTop: '2px solid rgba(255, 193, 7, 0.1)'
      }}
    >
      {/* Subtle background motif */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0l40 40-40 40L0 40 40 0zm0 10L10 40l30 30 30-30-30-30z' fill='%23ffc107' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div 
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr 1fr',
            gap: '50px',
            marginBottom: '60px'
          }}
        >
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <img 
                src="/logo.png" 
                alt="Logo Brochetterie" 
                style={{ height: '44px', width: 'auto', objectFit: 'contain' }} 
              />
            </div>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.9rem',
                color: 'rgba(255, 247, 236, 0.7)',
                lineHeight: 1.6,
                marginBottom: '28px',
                maxWidth: '320px'
              }}
            >
              La référence incontournable de l’igname pilée traditionnelle et des grillades cuites au feu de bois. Une authenticité garantie à chaque bouchée.
            </p>
            
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { 
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  ), 
                  url: 'https://facebook.com' 
                },
                { 
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ), 
                  url: 'https://instagram.com' 
                },
                { icon: <Send size={18} />, url: 'https://t.me' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 247, 236, 0.05)',
                    color: 'var(--bg-cream)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--secondary)';
                    e.currentTarget.style.color = 'var(--text-dark)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 247, 236, 0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Qualité Garantie Badge */}
            <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'rgba(255, 193, 7, 0.1)', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(255, 193, 7, 0.2)', width: 'fit-content' }}>
              <div style={{ backgroundColor: '#FFC107', borderRadius: '50%', padding: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A1616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.9rem', fontWeight: 700, color: '#FFC107' }}>Qualité 100% Garantie</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '1.15rem',
                fontWeight: 800,
                color: 'var(--secondary)',
                marginBottom: '24px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Plan du Site
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Accueil', href: '#accueil' },
                { name: 'Nos Spécialités', href: '#specialites' },
                { name: 'Tradition Africaine', href: '#tradition' },
                { name: 'Menu & Grillades', href: '#menu' },
                { name: 'Nos Jus Maison', href: '#jus' },
                { name: 'Livraison Rapide', href: '#livraison' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '0.9rem',
                      color: 'rgba(255, 247, 236, 0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 247, 236, 0.7)'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div>
            <h4
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '1.15rem',
                fontWeight: 800,
                color: 'var(--secondary)',
                marginBottom: '24px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Contact & Commandes
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Phone size={18} style={{ color: 'var(--secondary)', marginTop: '3px' }} />
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255, 247, 236, 0.5)', margin: 0 }}>Par téléphone</p>
                  <a href="tel:+2290167411124" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1rem', color: 'var(--bg-cream)', textDecoration: 'none' }}>
                    +229 01 67 41 11 24
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MessageSquare size={18} style={{ color: 'var(--secondary)', marginTop: '3px' }} />
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255, 247, 236, 0.5)', margin: 0 }}>WhatsApp Express</p>
                  <a href="https://wa.me/2290167411124" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1rem', color: 'var(--bg-cream)', textDecoration: 'none' }}>
                    Wa.me/+229 01 67 41 11 24
                  </a>
                </div>
              </div>

              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} style={{ color: 'var(--secondary)', marginTop: '3px' }} />
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255, 247, 236, 0.5)', margin: 0 }}>Adresse</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--bg-cream)', margin: 0 }}>
                    Avenue Jean-Paul II, Cotonou, Bénin
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Clock size={18} style={{ color: '#FFC107', marginTop: '3px' }} />
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255, 247, 236, 0.5)', margin: 0 }}>Horaires d'ouverture</p>
                  <p style={{ fontSize: '0.9rem', color: '#FFF7EC', margin: 0 }}>
                    Lun - Dim : 11h00 - 22h30
                  </p>
                </div>
              </div>

              {/* Delivery Zone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginTop: '8px', padding: '12px', backgroundColor: 'rgba(255, 247, 236, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 247, 236, 0.1)' }}>
                <Send size={18} style={{ color: '#FFC107', marginTop: '2px' }} />
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255, 247, 236, 0.5)', margin: 0 }}>Zone de livraison</p>
                  <p style={{ fontSize: '0.9rem', color: '#FFF7EC', margin: 0, fontWeight: 600 }}>
                    Cotonou, Calavi et environs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 247, 236, 0.08)',
            paddingTop: '30px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.82rem', color: 'rgba(255, 247, 236, 0.5)', margin: 0 }}>
            &copy; {currentYear} BROCHETTERIE. Tous droits réservés.
          </p>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.82rem', color: 'rgba(255, 247, 236, 0.5)', margin: 0 }}>
            Fait avec amour pour la gastronomie africaine.
          </p>
        </div>
      </div>

      {/* CSS styling for Footer responsiveness */}
      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            margin-bottom: 40px !important;
          }
          footer > div > div:last-child {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}

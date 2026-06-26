import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { setIsCartOpen, cartItemsCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Spécialités', href: '#specialites' },
    { name: 'Tradition', href: '#tradition' },
    { name: 'Menu', href: '#menu' },
    { name: 'Nos Jus', href: '#jus' },
    { name: 'Livraison', href: '#livraison' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-nav glass-nav-scrolled py-3' : 'bg-transparent py-5'
      }`}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}
    >
      <div className="container flex items-center justify-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <a 
          href="#accueil" 
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
        >
          <img 
            src="/logo.png" 
            alt="Logo Brochetterie" 
            style={{ height: '52px', width: 'auto', objectFit: 'contain' }} 
          />
        </a>

        {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex items-center gap-8"
          style={{ display: 'flex', gap: '32px', alignItems: 'center' }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                fontSize: '1rem',
                color: '#2A1616',
                textDecoration: 'none',
                padding: '4px 0'
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {/* Cart Icon (Desktop) */}
          <button
            onClick={() => setIsCartOpen(true)}
            style={{
              position: 'relative',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: '#2A1616',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(42, 22, 22, 0.05)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(42, 22, 22, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(42, 22, 22, 0.05)'}
          >
            <ShoppingCart size={20} />
            {cartItemsCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  backgroundColor: '#B31217',
                  color: '#FFF7EC',
                  fontSize: '0.7rem',
                  fontWeight: 900,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #FFF7EC'
                }}
              >
                {cartItemsCount}
              </span>
            )}
          </button>

          <a
            href="https://wa.me/2290167411124"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#B31217',
              color: '#FFF7EC',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: '0.95rem',
              textDecoration: 'none',
              padding: '10px 24px',
              borderRadius: '9999px',
              boxShadow: '0 6px 18px rgba(179, 18, 23, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#910e12';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 22px rgba(179, 18, 23, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#B31217';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(179, 18, 23, 0.2)';
            }}
          >
            <MessageSquare size={16} fill="#FFF7EC" />
            WhatsApp
          </a>
        </div>

        {/* Mobile controls group (Cart + Hamburger) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="md:hidden">
          {/* Cart Icon (Mobile) */}
          <button
            onClick={() => setIsCartOpen(true)}
            style={{
              position: 'relative',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: '#2A1616',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(42, 22, 22, 0.05)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              transition: 'background-color 0.2s'
            }}
          >
            <ShoppingCart size={20} />
            {cartItemsCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  backgroundColor: '#B31217',
                  color: '#FFF7EC',
                  fontSize: '0.7rem',
                  fontWeight: 900,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #FFF7EC'
                }}
              >
                {cartItemsCount}
              </span>
            )}
          </button>

          {/* Mobile Toggle */}
          <button
            className="p-2 text-[#2A1616]"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: '#2A1616',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#FFF7EC] border-b border-[#B31217]/10"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: '#FFF7EC',
              borderBottom: '1px solid rgba(179, 18, 23, 0.1)',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              zIndex: 99
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  color: '#2A1616',
                  textDecoration: 'none',
                  padding: '8px 0'
                }}
              >
                {item.name}
              </a>
            ))}
            <hr style={{ border: '0', borderTop: '1px solid rgba(179, 18, 23, 0.1)', margin: '8px 0' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="https://wa.me/2290167411124"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: '#B31217',
                  color: '#FFF7EC',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  padding: '12px',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}
              >
                <MessageSquare size={18} />
                Commander sur WhatsApp
              </a>
              <a
                href="tel:+2290167411124"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: '#FFF7EC',
                  color: '#2A1616',
                  border: '2px solid #2A1616',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  padding: '12px',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}
              >
                <Phone size={18} />
                Appeler Directement
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS responsive styling helper for Header */}
      <style>{`
        @media (max-width: 768px) {
          .nav-link { display: none !important; }
          .md\\:flex { display: none !important; }
          .mobile-menu-toggle { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}

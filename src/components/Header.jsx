import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ShoppingCart, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { setIsCartOpen, cartItemsCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Theme state
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

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
                color: 'var(--text-dark)',
                textDecoration: 'none',
                padding: '4px 0'
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Icons (Desktop & Mobile) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: 'var(--text-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--primary-light)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              transition: 'background-color 0.2s'
            }}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Cart Icon */}
          <button
            onClick={() => setIsCartOpen(true)}
            style={{
              position: 'relative',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: 'var(--text-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--primary-light)',
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
                  backgroundColor: 'var(--primary)',
                  color: 'var(--bg-white)',
                  fontSize: '0.7rem',
                  fontWeight: 900,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid var(--bg-white)'
                }}
              >
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* CSS responsive styling helper for Header */}
      <style>{`
        @media (max-width: 768px) {
          .nav-link { display: none !important; }
          .md\\:flex { display: none !important; }
        }
      `}</style>
    </header>
  );
}

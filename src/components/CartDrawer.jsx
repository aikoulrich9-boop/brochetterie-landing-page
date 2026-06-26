import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowLeft, Send } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice, parsePrice } from '../utils/price';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    cartItemsCount
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Espèces');
  const [customerNotes, setCustomerNotes] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  const handleCheckout = () => {
    setIsCheckingOut(true);
  };

  const handleFinalCheckout = () => {
    if (!customerName.trim() || !customerPhone.trim() || !customerAddress.trim()) {
      alert("Veuillez remplir tous les champs obligatoires (*).");
      return;
    }

    let message = `*✨ NOUVELLE COMMANDE - BROCHETTERIE ✨*\n\n`;
    message += `👤 *Client :* ${customerName}\n`;
    message += `📞 *Téléphone :* ${customerPhone}\n`;
    message += `📍 *Adresse de livraison :* ${customerAddress}\n`;
    message += `💳 *Moyen de paiement :* ${paymentMethod}\n`;
    if (customerNotes.trim()) {
      message += `📝 *Notes :* ${customerNotes}\n`;
    }
    
    message += `\n----------------------------------\n`;
    message += `🛒 *DÉTAILS DU PANIER :*\n`;
    
    cart.forEach((item) => {
      const itemTotal = parsePrice(item.price) * item.quantity;
      message += `• ${item.quantity} x ${item.name} (${formatPrice(itemTotal)})\n`;
    });

    message += `----------------------------------\n`;
    message += `💰 *TOTAL À PAYER : ${formatPrice(cartTotal)}*\n\n`;
    message += `Merci de confirmer ma commande ! 🛵`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2290167411124?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const inputStyle = (fieldName) => ({
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    border: focusedField === fieldName ? '2px solid #B31217' : '2px solid rgba(42, 22, 22, 0.1)',
    backgroundColor: 'var(--bg-white)',
    color: 'var(--text-dark)',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    marginTop: '6px'
  });

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          key="cart-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#000000',
            zIndex: 999,
            cursor: 'pointer'
          }}
        />
      )}

      {isCartOpen && (
        <motion.div
          key="cart-panel"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            maxWidth: '450px',
            backgroundColor: 'var(--bg-cream)',
            boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.15)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '24px',
              borderBottom: '1px solid rgba(42, 22, 22, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'var(--bg-white)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {isCheckingOut ? (
                <button
                  onClick={() => setIsCheckingOut(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(42, 22, 22, 0.05)',
                    color: 'var(--text-dark)',
                    marginRight: '8px',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(42, 22, 22, 0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(42, 22, 22, 0.05)'}
                >
                  <ArrowLeft size={18} />
                </button>
              ) : (
                <ShoppingBag size={22} color="#B31217" />
              )}
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: 'var(--text-dark)',
                  margin: 0
                }}
              >
                {isCheckingOut ? 'Vos Coordonnées' : `Votre Panier (${cartItemsCount})`}
              </h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(42, 22, 22, 0.05)',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(42, 22, 22, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(42, 22, 22, 0.05)'}
            >
              <X size={20} color="var(--text-dark)" />
            </button>
          </div>

          {/* Body Content */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {isCheckingOut ? (
              // Checkout Coordinates Form
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Koffi Mensah"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    style={inputStyle('name')}
                    required
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                    Numéro de Téléphone *
                  </label>
                  <input
                    type="tel"
                    placeholder="Ex: +229 01 00 00 00"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    style={inputStyle('phone')}
                    required
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                    Quartier & Adresse de livraison *
                  </label>
                  <textarea
                    placeholder="Ex: Cotonou, Haie Vive, Rue 125, Maison à côté de la pharmacie"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    onFocus={() => setFocusedField('address')}
                    onBlur={() => setFocusedField(null)}
                    rows={3}
                    style={{
                      ...inputStyle('address'),
                      resize: 'none',
                      lineHeight: 1.4
                    }}
                    required
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px', display: 'block' }}>
                    Moyen de Paiement préféré
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                    {[
                      { id: 'MTN Mobile Money', name: 'MTN Momo', icon: '📲', color: '#ffcc00' },
                      { id: 'Moov Money', name: 'Moov Money', icon: '💸', color: '#0066cc' },
                      { id: 'Wave', name: 'Wave', icon: '🌊', color: '#4da6ff' },
                      { id: 'Espèces', name: 'Espèces', icon: '💵', color: '#2eb82e' }
                    ].map((method) => {
                      const isSelected = paymentMethod === method.id;
                      return (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPaymentMethod(method.id)}
                          style={{
                            padding: '12px',
                            borderRadius: '12px',
                            border: isSelected ? '2px solid #B31217' : '1px solid rgba(42, 22, 22, 0.08)',
                            backgroundColor: isSelected ? 'rgba(179, 18, 23, 0.05)' : 'var(--bg-white)',
                            color: 'var(--text-dark)',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '6px',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '0.85rem',
                            fontWeight: isSelected ? 700 : 500,
                            transition: 'all 0.2s',
                          }}
                        >
                          <span style={{ fontSize: '1.4rem' }}>{method.icon}</span>
                          <span>{method.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                    Notes spéciales (Optionnel)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Piment bien fort, igname bien chaude..."
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    onFocus={() => setFocusedField('notes')}
                    onBlur={() => setFocusedField(null)}
                    style={inputStyle('notes')}
                  />
                </div>
              </div>
            ) : (
              // Standard Cart Items List
              cart.length === 0 ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center',
                    gap: '16px',
                    color: '#6B5C5C',
                    padding: '0 20px'
                  }}
                >
                  <span style={{ fontSize: '3rem' }}>🍲</span>
                  <h4
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--text-dark)',
                      margin: 0
                    }}
                  >
                    Votre panier est vide
                  </h4>
                  <p style={{ fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
                    Laissez-vous tenter par notre délicieuse igname pilée traditionnelle ou nos grillades savoureuses.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsCartOpen(false)}
                    style={{
                      backgroundColor: '#B31217',
                      color: 'var(--bg-cream)',
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: '9999px',
                      cursor: 'pointer',
                      marginTop: '8px',
                      boxShadow: '0 4px 12px rgba(179, 18, 23, 0.15)'
                    }}
                  >
                    Découvrir le Menu
                  </motion.button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      backgroundColor: 'var(--bg-white)',
                      borderRadius: '16px',
                      padding: '16px',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      border: '1px solid rgba(42, 22, 22, 0.03)'
                    }}
                  >
                    {/* Visual / Emoji */}
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 193, 7, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.6rem',
                        flexShrink: 0
                      }}
                    >
                      {item.emoji || '🍲'}
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1 }}>
                      <h4
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: '0.98rem',
                          fontWeight: 700,
                          color: 'var(--text-dark)',
                          margin: '0 0 4px 0',
                          lineHeight: 1.3
                        }}
                      >
                        {item.name}
                      </h4>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginTop: '8px'
                        }}
                      >
                        {/* Price */}
                        <span
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: '0.95rem',
                            fontWeight: 800,
                            color: '#B31217'
                          }}
                        >
                          {formatPrice(parsePrice(item.price) * item.quantity)}
                        </span>

                        {/* Controls */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            backgroundColor: 'rgba(42, 22, 22, 0.05)',
                            padding: '4px 10px',
                            borderRadius: '9999px'
                          }}
                        >
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            style={{
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: '2px',
                              color: '#6B5C5C'
                            }}
                          >
                            <Minus size={14} />
                          </button>
                          <span
                            style={{
                              fontSize: '0.85rem',
                              fontWeight: 700,
                              color: 'var(--text-dark)',
                              minWidth: '16px',
                              textAlign: 'center'
                            }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            style={{
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: '2px',
                              color: '#6B5C5C'
                            }}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Delete */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#a3a3a3',
                        transition: 'color 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#B31217'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#a3a3a3'}
                    >
                      <Trash2 size={16} />
                    </button>
                  </motion.div>
                ))
              )
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div
              style={{
                padding: '24px',
                borderTop: '1px solid rgba(42, 22, 22, 0.08)',
                backgroundColor: 'var(--bg-white)',
                boxShadow: '0 -4px 20px rgba(0,0,0,0.02)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px'
                }}
              >
                <span style={{ fontSize: '1rem', color: '#6B5C5C', fontWeight: 600 }}>Sous-total</span>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '1.5rem',
                    fontWeight: 950,
                    color: 'var(--text-dark)'
                  }}
                >
                  {formatPrice(cartTotal)}
                </span>
              </div>

              {isCheckingOut ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleFinalCheckout}
                  style={{
                    width: '100%',
                    backgroundColor: '#B31217',
                    color: 'var(--bg-cream)',
                    border: 'none',
                    padding: '16px 20px',
                    borderRadius: '9999px',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 8px 24px rgba(179, 18, 23, 0.25)'
                  }}
                >
                  <Send size={18} />
                  Confirmer sur WhatsApp
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  style={{
                    width: '100%',
                    backgroundColor: '#B31217',
                    color: 'var(--bg-cream)',
                    border: 'none',
                    padding: '16px 20px',
                    borderRadius: '9999px',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 8px 24px rgba(179, 18, 23, 0.25)'
                  }}
                >
                  <span>🛵</span>
                  Saisir mes Coordonnées
                </motion.button>
              )}
              <p
                style={{
                  textAlign: 'center',
                  fontSize: '0.75rem',
                  color: '#9E8E8E',
                  marginTop: '12px',
                  marginBottom: 0
                }}
              >
                Votre commande sera transmise et finalisée sur WhatsApp.
              </p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

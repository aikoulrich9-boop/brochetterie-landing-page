import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, ChefHat, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export default function Catering() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('50');
  const [eventType, setEventType] = useState('Mariage / Réception');
  const [menuType, setMenuType] = useState('Buffet Traditionnel');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const eventTypes = [
    'Mariage / Réception',
    'Événement Corporate',
    'Dîner Privé',
    'Anniversaire / Fête'
  ];

  const menuTypes = [
    'Buffet Traditionnel (Igname Pilée, Sauces)',
    'Grillades Premium (Brochettes, Aloko, Frites)',
    'Cocktail Dînatoire & Assortiments'
  ];

  const handleCateringSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !date || !guests) {
      alert("Veuillez remplir les champs obligatoires (*).");
      return;
    }

    let message = `*✨ DEMANDE DE DEVIS TRAITEUR - BROCHETTERIE ✨*\n\n`;
    message += `👤 *Client :* ${name}\n`;
    message += `📞 *Contact :* ${phone}\n`;
    message += `📅 *Date prévue :* ${date}\n`;
    message += `👥 *Nombre de convives :* ${guests} personnes\n`;
    message += `🎉 *Type d'événement :* ${eventType}\n`;
    message += `🍽️ *Formule Souhaitée :* ${menuType}\n`;
    if (notes.trim()) {
      message += `📝 *Notes / Demandes spéciales :* ${notes}\n`;
    }
    message += `\nMerci de me recontacter pour me proposer un devis personnalisé ! 🥂`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2290167411124?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  const inputStyle = (fieldName) => ({
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    border: focusedField === fieldName ? '2px solid var(--primary)' : '1px solid rgba(42, 22, 22, 0.1)',
    backgroundColor: 'var(--bg-white)',
    color: 'var(--text-dark)',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    marginTop: '6px'
  });

  return (
    <section
      id="traiteur"
      className="bg-cream section-padding-medium"
      style={{
        backgroundColor: 'var(--bg-cream)',
        position: 'relative',
        zIndex: 20,
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            Prestations Événementielles
          </span>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              color: 'var(--text-dark)',
              marginBottom: '20px'
            }}
          >
            Le Service Traiteur de la Brochetterie
          </h2>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              maxWidth: '650px',
              margin: '0 auto'
            }}
          >
            Mariages, banquets, réunions d'affaires ou réceptions privées : offrez à vos convives l'excellence d'un buffet authentique et de nos grillades feu de bois.
          </p>
        </motion.div>

        {/* Dynamic Presentation & Form Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            alignItems: 'start'
          }}
          className="grid-catering-desktop"
        >
          {/* Left Column: Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                title: 'Mariages & Grandes Réceptions',
                icon: <Sparkles size={24} color="#FFC107" />,
                description: 'Un accompagnement sur mesure avec des buffets majestueux, des entrées colorées et nos plus beaux pilons d\'igname pour marquer votre journée.',
                details: 'Inclus : serveurs qualifiés, dressage haut de gamme et pilonnage en direct.'
              },
              {
                title: 'Événements d\'Entreprise',
                icon: <ChefHat size={24} color="#B31217" />,
                description: 'Déjeuners d\'affaires, cocktails ou fêtes de fin d\'année. Offrez un moment de convivialité authentique et chaleureux à vos collaborateurs.',
                details: 'Options de service rapide pour s\'adapter à vos contraintes de temps.'
              },
              {
                title: 'Dîners & Fêtes Privées',
                icon: <Users size={24} color="#B31217" />,
                description: 'Pour un anniversaire ou une réunion de famille à domicile. Nous installons nos barbecues et nos pilons directement chez vous.',
                details: 'Idéal de 20 à 150 personnes. Ambiance conviviale garantie.'
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                style={{
                  backgroundColor: 'var(--bg-white)',
                  borderRadius: '24px',
                  padding: '24px',
                  boxShadow: 'var(--shadow-soft)',
                  border: '1px solid rgba(42, 22, 22, 0.03)',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start'
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(179, 18, 23, 0.05)',
                    padding: '12px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: 'var(--text-dark)',
                      marginBottom: '8px'
                    }}
                  >
                    {card.title}
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '8px' }}>
                    {card.description}
                  </p>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', opacity: 0.8 }}>
                    {card.details}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Premium Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              backgroundColor: 'var(--bg-white)',
              borderRadius: '32px',
              padding: '32px',
              boxShadow: 'var(--shadow-medium)',
              border: '1px solid rgba(179, 18, 23, 0.05)',
              position: 'relative'
            }}
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="catering-form"
                  onSubmit={handleCateringSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  <h3
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '1.5rem',
                      fontWeight: 900,
                      color: 'var(--text-dark)',
                      marginBottom: '10px',
                      textAlign: 'center'
                    }}
                  >
                    Demander un Devis Gratuit
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }} className="grid-form-fields-mobile">
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                        Votre Nom *
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Marc Mensah"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        style={inputStyle('name')}
                        required
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                        Téléphone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        placeholder="Ex: +229 97 00 00 00"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        style={inputStyle('phone')}
                        required
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }} className="grid-form-fields-mobile">
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                        Date Prévue *
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        onFocus={() => setFocusedField('date')}
                        onBlur={() => setFocusedField(null)}
                        style={inputStyle('date')}
                        required
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                        Nombre d'invités *
                      </label>
                      <input
                        type="number"
                        placeholder="Ex: 50"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        onFocus={() => setFocusedField('guests')}
                        onBlur={() => setFocusedField(null)}
                        style={inputStyle('guests')}
                        min="10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '6px', display: 'block' }}>
                      Type d'événement
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      style={{
                        ...inputStyle('eventType'),
                        appearance: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      {eventTypes.map((type) => (
                        <option key={type} value={type} style={{ backgroundColor: 'var(--bg-white)', color: 'var(--text-dark)' }}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '6px', display: 'block' }}>
                      Formule de Menu souhaitée
                    </label>
                    <select
                      value={menuType}
                      onChange={(e) => setMenuType(e.target.value)}
                      style={{
                        ...inputStyle('menuType'),
                        appearance: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      {menuTypes.map((type) => (
                        <option key={type} value={type} style={{ backgroundColor: 'var(--bg-white)', color: 'var(--text-dark)' }}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                      Détails ou demandes spéciales (Optionnel)
                    </label>
                    <textarea
                      placeholder="Ex: Préférences d'accompagnement, demandes d'installations..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      onFocus={() => setFocusedField('notes')}
                      onBlur={() => setFocusedField(null)}
                      rows={3}
                      style={{
                        ...inputStyle('notes'),
                        resize: 'none',
                        lineHeight: 1.4
                      }}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    style={{
                      backgroundColor: '#B31217',
                      color: '#FFF7EC',
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
                      boxShadow: '0 8px 24px rgba(179, 18, 23, 0.25)',
                      marginTop: '10px'
                    }}
                  >
                    <Send size={18} />
                    Envoyer ma demande WhatsApp
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="catering-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px 0',
                    textAlign: 'center',
                    gap: '16px'
                  }}
                >
                  <CheckCircle2 size={64} color="#2eb82e" />
                  <h3
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '1.6rem',
                      fontWeight: 900,
                      color: 'var(--text-dark)',
                      margin: 0
                    }}
                  >
                    Demande de devis générée !
                  </h3>
                  <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                    Votre demande a été mise en forme et votre application WhatsApp s'est ouverte pour l'envoyer.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    style={{
                      background: 'none',
                      border: '1px solid rgba(42, 22, 22, 0.2)',
                      padding: '10px 20px',
                      borderRadius: '9999px',
                      color: 'var(--text-dark)',
                      cursor: 'pointer',
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      marginTop: '12px',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(42, 22, 22, 0.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    Refaire une demande
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Dynamic desktop styling using standard React style block */}
      <style>{`
        @media (min-width: 992px) {
          .grid-catering-desktop {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
        @media (max-width: 576px) {
          .grid-form-fields-mobile {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

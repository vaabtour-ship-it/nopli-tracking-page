import { useState } from 'react'
import './App.css'

// 1. Dictionnaire contenant les traductions (Français et Anglais)
const translations = {
  fr: {
    title: "Suivre mon colis",
    subtitle: "Entrez votre numéro de suivi pour connaître l'état de votre commande",
    placeholder: "Ex : FR123456789",
    btnSearch: "Suivre",
    alertEmpty: "Veuillez entrer un numéro de suivi.",
    btnBack: "← Retour à la recherche",
    progressTitle: "Progression de votre colis",
    trackingNum: "Numéro de suivi :",
    step1: "1. Commande reçue",
    step2: "2. Expédiée",
    step3: "3. En transit",
    step4: "4. Livrée",
    statusText: "Votre colis est actuellement en transit vers sa destination."
  },
  en: {
    title: "Track your parcel",
    subtitle: "Enter your tracking number to know the status of your order",
    placeholder: "E.g.: FR123456789",
    btnSearch: "Track",
    alertEmpty: "Please enter a tracking number.",
    btnBack: "← Back to search",
    progressTitle: "Your parcel progression",
    trackingNum: "Tracking number:",
    step1: "1. Order received",
    step2: "2. Shipped",
    step3: "3. In transit",
    step4: "4. Delivered",
    statusText: "Your parcel is currently in transit to its destination."
  }
};

function App() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSearched, setIsSearched] = useState(false);
  
  // 2. État pour la langue active ('fr' par défaut)
  const [lang, setLang] = useState('fr');

  // Raccourci pour récupérer les textes de la langue choisie
  const t = translations[lang];

  const handleSearch = () => {
    if (!trackingNumber.trim()) {
      alert(t.alertEmpty); // Alerte traduite
      return;
    }
    setIsSearched(true);
  };

  const handleGoBack = () => {
    setIsSearched(false);
    setTrackingNumber('');
  };

  return (
    <>
      {/* 3. Boutons de changement de langue en haut de l'écran */}
      <div className="language-selector">
        <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>🇫🇷 FR</button>
        <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>🇬🇧 EN</button>
      </div>

      <section id="center">
        
        {/* ÉCRAN DE RECHERCHE */}
        {!isSearched ? (
          <div className="search-container">
            <div className="hero"></div>
            
            <div className="search-text">
              <h1>{t.title}</h1>
              <p>{t.subtitle}</p>
            </div>

            <div className="search-box">
              <input
                type="text"
                placeholder={t.placeholder}
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />
              <button className="btn-suivre" onClick={handleSearch}>
                {t.btnSearch}
              </button>
            </div>
          </div>
        ) : (
          /* ÉCRAN DE SUIVI (RÉSULTATS) */
          <div className="tracking-page-container">
            
            <div style={{ marginBottom: '20px', textAlign: 'left', width: '100%', maxWidth: '650px' }}>
              <button className="btn-retour" onClick={handleGoBack}>
                {t.btnBack}
              </button>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h1 style={{ color: '#ffffff', margin: 0 }}>{t.progressTitle}</h1>
            </div>

            <div className="tracking-card">
              <div className="tracking-number">
                {t.trackingNum} <strong>{trackingNumber}</strong>
              </div>

              <div className="progress">
                <div className="progress-bar"></div>
              </div>

              <div className="steps">
                <div className="step">
                  <div className="circle">✓</div>
                  <p>{t.step1}</p>
                </div>
                <div className="step">
                  <div className="circle">✓</div>
                  <p>{t.step2}</p>
                </div>
                <div className="step">
                  <div className="circle">✓</div>
                  <p>{t.step3}</p>
                </div>
                <div className="step">
                  <div className="circle gray">4</div>
                  <p>{t.step4}</p>
                </div>
              </div>

              <div className="status">
                📦 {t.statusText}
              </div>
            </div>

          </div>
        )}

      </section>
    </>
  )
}

export default App
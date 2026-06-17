import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

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
  },
  es: {
    title: "Rastrear mi paquete",
    subtitle: "Ingresa tu número de seguimiento para saber el estado de tu pedido",
    placeholder: "E.g.: FR123456789",
    btnSearch: "Pista",
    alertEmpty: "Por favor, ingresa un número de seguimiento.",
    btnBack: "← Volver a buscar",
    progressTitle: "El seguimiento de tu paquete",
    trackingNum: "Número de seguimiento:",
    step1: "1. Pedido recibido",
    step2: "2. Enviada",
    step3: "3. En tránsito",
    step4: "4. Entregada",
    statusText: "Tu paquete está actualmente en tránsito hacia su destino."
  }
};

function App() {
  const [count, setCount] = useState(0)
  
  // 1. On utilise cet état pour stocker ce que l'utilisateur écrit
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSearched, setIsSearched] = useState(false);
  const [lang, setLang] = useState('fr');

  const t = translations[lang];

  // 2. Cette fonction ouvre le suivi de La Poste avec le bon numéro
  const handleSearch = () => {
    if (!trackingNumber.trim()) {
      alert(t.alertEmpty);
      return;
    }
    
    // Ouvre le site de La Poste dans un nouvel onglet avec le numéro tapé
    const urlLaPoste = `https://www.laposte.fr/outils/suivre-un-envoi?code=${trackingNumber}`;
    window.open(urlLaPoste, '_blank');
    
    setIsSearched(true);
  };

  return (
    <>
      <div className="language-selector">
        <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>🇫🇷 FR</button>
        <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>🇬🇧 EN</button>
        <button className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')}>🇪🇸 ES</button>
      </div>
      
      <section id="center">
        
        {/* --- BLOC RECHERCHE --- */}
        <div className="search-container">
          <div className="hero"></div>
          
          <div className="search-text">
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
          </div>

          <div className="search-box">
            {/* AJOUT : value et onChange pour écouter le texte tapé */}
            <input
              type="text"
              placeholder={t.placeholder}
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            {/* AJOUT : onClick pour déclencher la redirection */}
            <button className="btn-suivre" onClick={handleSearch}>
              {t.btnSearch}
            </button>
          </div>
        </div>

        {/* --- PARTIE RÉSULTATS --- */}
        <div style={{ marginTop: '40px' }}>
          <h1 style={{ color: '#ffffff' }}>{t.progressTitle}</h1>
        </div>

        <div className="tracking-card">
          <div className="tracking-number">
            {t.trackingNum} {trackingNumber || "FR123456789"}
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
              <div className="circle">4</div>
              <p>{t.step4}</p>
            </div>
          </div>

          <div className="status">
            📦 {t.statusText}
          </div>
        </div>

      </section>
    </>
  )
}

export default App
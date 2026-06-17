import { useState } from 'react'
import { useNavigate } from 'react-router-dom' // AJOUT : Pour la navigation interne
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
    progressTitle: "Vista previa de su pedido",
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
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSearched, setIsSearched] = useState(false);
  const [lang, setLang] = useState('fr');

  const t = translations[lang];
  
  // AJOUT : Initialisation du système de redirection vers ta nouvelle page
  const navigate = useNavigate();

  // MODIFICATION : On change la langue et on la mémorise pour la page suivante
  const changeLanguage = (e, newLang) => {
    e.preventDefault();
    setLang(newLang);
    localStorage.setItem('appLang', newLang); 
  };

  // MODIFICATION : Gère la redirection locale vers ton autre page créée à côté
  const handleSearch = () => {
    if (!trackingNumber.trim()) {
      alert(t.alertEmpty);
      return;
    }
    
    // 1. Sauvegarde le numéro en mémoire locale pour la page d'après
    localStorage.setItem('trackingNumber', trackingNumber);
    // 2. Sauvegarde la langue actuelle pour que le résultat soit traduit
    localStorage.setItem('appLang', lang);
    
    // 3. Redirection instantanée vers ta page "/suivi"
    navigate('/suivi');
  };

  return (
    <div className="app-container">
      {/* MODIFICATION : Boutons nettoyés et sécurisés avec la classe .active */}
      <div className="language-selector">
        <button className={lang === 'fr' ? 'active' : ''} onClick={(e) => changeLanguage(e, 'fr')}>FR</button>
        <button className={lang === 'en' ? 'active' : ''} onClick={(e) => changeLanguage(e, 'en')}>EN</button>
        <button className={lang === 'es' ? 'active' : ''} onClick={(e) => changeLanguage(e, 'es')}>ES</button>
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

        {/* --- PARTIE RÉSULTATS (Aperçu sur l'accueil) --- */}
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
    </div>
  )
}

export default App
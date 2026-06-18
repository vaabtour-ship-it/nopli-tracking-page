import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' 
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
    statusText: "Votre colis est actuellement en transit vers sa destination."
  },
  en: {
    title: "Track your parcel",
    subtitle: "Enter your tracking number to know the status of your order",
    placeholder: "Ex : FR123456789",
    btnSearch: "Track",
    alertEmpty: "Please enter a tracking number.",
    btnBack: "← Back to search",
    progressTitle: "Your parcel progression",
    trackingNum: "Tracking number:",
    statusText: "Your parcel is currently in transit to its destination."
  },
  es: {
    title: "Rastrear mi paquete",
    subtitle: "Ingresa tu número de seguimiento para saber el estado de tu pedido",
    placeholder: "Ex : FR123456789",
    btnSearch: "Pista",
    alertEmpty: "Por favor, ingresa un número de seguimiento.",
    btnBack: "← Volver a buscar",
    progressTitle: "Vista previa de su pedido",
    trackingNum: "Número de seguimiento:",
    statusText: "Tu paquete está actualmente en tránsito hacia su destino."
  },
  it: {
    title: "Segui il mio pacco",
    subtitle: "Inserisci il tuo numero di tracciamento per conoscere lo stato del tuo ordine",
    placeholder: "Ex : FR123456789",
    btnSearch: "Seguire",
    alertEmpty: "Per favore inserisci un numero di tracciamento.",
    btnBack: "← Torna alla ricerca",
    progressTitle: "Avanzamento del tuo pacco",
    trackingNum: "Numero di tracciamento :",
    statusText: "Votre colis est actuellement en transit vers sa destination."
  },
  de: {
    title: "Mein Paket verfolgen",
    subtitle: "Gib deine Sendungsnummer ein, um den Status deiner Bestellung zu erfahren",
    placeholder: "Ex : FR123456789",
    btnSearch: "Folgen",
    alertEmpty: "Bitte gib eine Sendungsnummer ein.",
    btnBack: "← Zurück zur Suche",
    progressTitle: "Fortschritt Ihres Pakets",
    trackingNum: "Sendungsnummer :",
    statusText: "Ihr Paket ist gerade auf dem Weg zu seinem Ziel."
  },
};

function App() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [lang, setLang] = useState('fr');
  
  // AJOUT : Initialisation de l'état du mode sombre depuis le stockage local
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  const t = translations[lang];
  const navigate = useNavigate();

  // AJOUT : Gestionnaire d'effet pour appliquer/retirer la classe CSS du mode sombre
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const changeLanguage = (e, newLang) => {
    e.preventDefault();
    setLang(newLang);
    localStorage.setItem('appLang', newLang); 
  };

  const handleSearch = () => {
    if (!trackingNumber.trim()) {
      alert(t.alertEmpty);
      return;
    }
    
    localStorage.setItem('trackingNumber', trackingNumber);
    localStorage.setItem('appLang', lang);

    if (trackingNumber.includes('31')) {
      navigate('/suivi');
    } 
    else if (trackingNumber.includes('07')) {
      navigate('/marque-b');
    } 
    else {
      alert("Numéro de suivi non reconnu.");
    }
  };

  return (
    <div className="app-container">
      
      {/* AJOUT : Bouton Switch Mode Sombre / Mode Clair */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          padding: '10px 16px',
          borderRadius: '20px',
          border: '1px solid var(--text-color, #1d2d44)',
          background: 'var(--card-bg, #ffffff)',
          color: 'var(--text-color, #1d2d44)',
          cursor: 'pointer',
          fontWeight: 'bold',
          zIndex: 1000,
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>

      <div className="language-selector">
        <button className={lang === 'fr' ? 'active' : ''} onClick={(e) => changeLanguage(e, 'fr')}>FR</button>
        <button className={lang === 'en' ? 'active' : ''} onClick={(e) => changeLanguage(e, 'en')}>EN</button>
        <button className={lang === 'es' ? 'active' : ''} onClick={(e) => changeLanguage(e, 'es')}>ES</button>
        <button className={lang === 'it' ? 'active' : ''} onClick={(e) => changeLanguage(e, 'it')}>IT</button>
        <button className={lang === 'de' ? 'active' : ''} onClick={(e) => changeLanguage(e, 'de')}>DE</button>
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

        {/* --- PARTIE RÉSULTATS --- */}
        <div className="tracking-card">
          <div className="tracking-number">
            {t.trackingNum} {trackingNumber || "FR123456789"}
          </div>
        </div>

      </section>
    </div>
  )
}

export default App
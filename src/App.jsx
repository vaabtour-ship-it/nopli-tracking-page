import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom' // <-- CORRECTION : Ajout de useLocation ici
import './App.css'

const translations = {
  fr: {
    title: "Suivre mon colis",
    subtitle: "Entrez votre numéro de suivi pour connaître l'état de votre commande",
    placeholder: "Ex : FR123456789",
    btnSearch: "Suivre",
    alertEmpty: "Veuillez entrer un numéro de suivi.",
    errorUnrecognized: "Numéro de suivi non reconnu. Vérifiez la saisie.",
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
    errorUnrecognized: "Tracking number not recognized. Please check your entry.",
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
    errorUnrecognized: "Número de seguimiento no reconocido. Verifique la entrada.",
    btnBack: "← Volver a buscar",
    progressTitle: "Vista previa de su pedido",
    trackingNum: "Número de seguimiento:",
    statusText: "Tu paquete está actuellement en tránsito hacia su destino."
  },
  it: {
    title: "Segui il mio pacco",
    subtitle: "Inserisci il tuo numero di tracciamento per conoscere lo stato del tuo ordine",
    placeholder: "Ex : FR123456789",
    btnSearch: "Seguire",
    alertEmpty: "Per favore inserisci un numero di tracciamento.",
    errorUnrecognized: "Numero di tracciamento non riconosciuto. Controlla il dato.",
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
    errorUnrecognized: "Sendungsnummer nicht erkannt. Bitte Eingabe prüfen.",
    btnBack: "← Zurück zur Suche",
    progressTitle: "Fortschritt Ihres Pakets",
    trackingNum: "Sendungsnummer :",
    statusText: "Ihr Paket ist gerade auf dem Weg zu seinem Ziel."
  },
};

function App() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [lang, setLang] = useState('fr');
  const [error, setError] = useState('');
  
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  const t = translations[lang];
  const navigate = useNavigate();
  const location = useLocation(); // <-- CORRECTION : Stockage de la localisation de la page

  // CORRECTION : Effet qui écoute si le GestionnaireSuivi renvoie une erreur
  useEffect(() => {
    if (location.state && location.state.error) {
      setError(location.state.error);
      // On nettoie l'historique pour éviter que l'erreur reste au rafraîchissement
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const redirectionLogique = useCallback((number) => {
    setError(''); 
    
    localStorage.setItem('trackingNumber', number);
    localStorage.setItem('appLang', lang);

    if (number.includes('0731') || number.includes('07')) {
      navigate('/marque-b');
    } 
    else if (number.includes('3107') || number.includes('31')) {
      navigate('/suivi');
    } 
    else {
      setError('unrecognized');
    }
  }, [navigate, lang]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const trackingFromUrl = queryParams.get('suivi');

    if (trackingFromUrl) {
      const cleanNumber = trackingFromUrl.trim();
      setTrackingNumber(cleanNumber);
      redirectionLogique(cleanNumber);
    }
  }, [redirectionLogique]);

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
    setError(''); 
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();

    if (!trackingNumber.trim()) {
      setError('empty');
      return;
    }

    const cleanNumber = trackingNumber.trim();

    localStorage.setItem('trackingNumber', cleanNumber);
    localStorage.setItem('appLang', lang);

    navigate(`/${cleanNumber}`);
  };

  const renderErrorText = () => {
    if (error === 'empty') return t.alertEmpty;
    if (error === 'unrecognized') return t.errorUnrecognized;
    return null;
  };
  

  return (
    <div className="app-container">
      
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
          gap: '8px',
          transition: 'all 0.3s ease'
        }}
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>

      <div className="language-dropdown">
        <button className="dropdown-btn">
          🌐 {lang.toUpperCase()} ▾
        </button>
        <ul className="dropdown-content">
          <li><a href="#" className={lang === 'fr' ? 'active' : ''} onClick={(e) => changeLanguage(e, 'fr')}>Français</a></li>
          <li><a href="#" className={lang === 'en' ? 'active' : ''} onClick={(e) => changeLanguage(e, 'en')}>English</a></li>
          <li><a href="#" className={lang === 'es' ? 'active' : ''} onClick={(e) => changeLanguage(e, 'es')}>Español</a></li>
          <li><a href="#" className={lang === 'it' ? 'active' : ''} onClick={(e) => changeLanguage(e, 'it')}>Italiano</a></li>
          <li><a href="#" className={lang === 'de' ? 'active' : ''} onClick={(e) => changeLanguage(e, 'de')}>Deutsch</a></li>
        </ul>
      </div>
      
      <section id="center">
        <div className="search-container">
          <div className="hero"></div>
          
          <div className="search-text">
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
          </div>

          <div className={`search-box ${error ? 'has-error' : ''}`}>
            <input
              type="text"
              placeholder={t.placeholder}
              value={trackingNumber}
              onChange={(e) => {
                setTrackingNumber(e.target.value);
                if (error) setError(''); 
              }}
            />
            <button className="btn-suivre" onClick={handleSearch}>
              {t.btnSearch}
            </button>
          </div>

          {error && <p className="error-message">⚠️ {renderErrorText()}</p>}
        </div>
      </section>
    </div>
  )
}

export default App;
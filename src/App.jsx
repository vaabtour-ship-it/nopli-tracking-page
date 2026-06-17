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
    statusText: "Votre colis est actuellement en transit vers sa destination."
  },
  en: {
    title: "Track your parcel",
    subtitle: "Enter your tracking number to know the status of your order",
    placeholder: "E.g.: EN123456789",
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
    placeholder: "E.g.: ES123456789",
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
    placeholder: "E.g. : IT123456789",
    btnSearch: "Seguire",
    alertEmpty: "Per favore inserisci un numero di tracciamento.",
    btnBack: "← Torna alla ricerca",
    progressTitle: "Avanzamento del tuo pacco",
    trackingNum: "Numero di tracciamento :",
    statusText: "Votre colis est actuellement en transit vers sa destination."
  },
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
    
    localStorage.setItem('trackingNumber', trackingNumber);
    localStorage.setItem('appLang', lang);

    // CONDITION 1 : Si le numéro contient "31" -> On va sur la page Tuffery
    if (trackingNumber.includes('31')) {
      navigate('/suivi');
    } 
    
    // CONDITION 2 : Si le numéro contient "99" -> On va sur la page de la Marque B
    else if (trackingNumber.includes('07')) {
      navigate('/marque-b');
    } 
    
    // Si aucun des deux
    else {
      alert("Numéro de suivi non reconnu.");
    }
  };

  return (
    <div className="app-container">
      {/* MODIFICATION : Boutons nettoyés et sécurisés avec la classe .active */}
      <div className="language-selector">
        <button className={lang === 'fr' ? 'active' : ''} onClick={(e) => changeLanguage(e, 'fr')}>FR</button>
        <button className={lang === 'en' ? 'active' : ''} onClick={(e) => changeLanguage(e, 'en')}>EN</button>
        <button className={lang === 'es' ? 'active' : ''} onClick={(e) => changeLanguage(e, 'es')}>ES</button>
        <button className={lang === 'it' ? 'active' : ''} onClick={(e) => changeLanguage(e, 'it')}>IT</button>
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
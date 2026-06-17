import { useState } from 'react'
import './App.css'

function App() {
  // 1. On crée une variable pour stocker le numéro de suivi tapé
  const [trackingNumber, setTrackingNumber] = useState('');

  // 2. La fonction qui s'exécute lors du clic sur le bouton
  const handleSearch = () => {
    if (!trackingNumber.trim()) {
      alert('Veuillez entrer un numéro de suivi valide.');
      return;
    }

    // EXEMPLE avec le site de La Poste (Suivi Courrier/Colis)
    // On crée l'URL de suivi en y collant le numéro tapé par l'utilisateur
    const urlSuivi = `https://www.laposte.fr/outils/suivre-un-envoi?code=${trackingNumber}`;

    // Ouvre le vrai suivi dans un nouvel onglet du navigateur
    window.open(urlSuivi, '_blank');
  };

  return (
    <>
      <section id="center">
        
        <div className="search-container">
          <div className="hero"></div>
          
          <div className="search-text">
            <h1>Suivre mon colis</h1>
            <p>
              Entrez votre numéro de suivi pour connaître l'état de votre commande
            </p>
          </div>

          <div className="search-box">
            {/* 3. On relie l'input à notre variable trackingNumber */}
            <input
              type="text"
              placeholder="Ex : FR123456789"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            {/* 4. On ajoute l'événement onClick sur le bouton */}
            <button className="btn-suivre" onClick={handleSearch}>
              Suivre
            </button>
          </div>
        </div>

        {/* --- PARTIE RÉSULTATS (Visuelle pour le design de votre site) --- */}
        <div style={{ marginTop: '40px' }}>
          <h1 style={{ color: '#ffffff' }}>Aperçu rapide du colis</h1>
        </div>

        <div className="tracking-card">
          <div className="tracking-number">
            Numéro de suivi affiché : {trackingNumber || "FR123456789"}
          </div>

          <div className="progress">
            <div className="progress-bar"></div>
          </div>

          <div className="steps">
            <div className="step"><div className="circle">✓</div><p>1. Reçue</p></div>
            <div className="step"><div className="circle">✓</div><p>2. Expédiée</p></div>
            <div className="step"><div className="circle">✓</div><p>3. En transit</p></div>
            <div className="step"><div className="circle">4</div><p>4. Livrée</p></div>
          </div>

          <div className="status">
            📦 Entrez un numéro pour ouvrir la page officielle de livraison.
          </div>
        </div>

      </section>
    </>
  )
}

export default App
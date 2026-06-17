import { useState } from 'react'
import './App.css'

function App() {
  const [trackingNumber, setTrackingNumber] = useState('');
  // Cet état va savoir si on doit afficher la page de suivi (true) ou non (false)
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = () => {
    if (!trackingNumber.trim()) {
      alert('Veuillez entrer un numéro de suivi.');
      return;
    }
    // L'utilisateur a tapé un numéro, on bascule l'affichage
    setIsSearched(true);
  };

  const handleGoBack = () => {
    // Pour revenir à la page de recherche
    setIsSearched(false);
    setTrackingNumber('');
  };

  return (
    <>
      <section id="center">
        
        {/* ÉTAPE 1 : SI L'UTILISATEUR N'A PAS ENCORE CHERCHÉ, ON AFFICHE LA RECHERCHE */}
        {!isSearched ? (
          <div className="search-container">
            <div className="hero"></div>
            
            <div className="search-text">
              <h1>Suivre mon colis</h1>
              <p>
                Entrez votre numéro de suivi pour connaître l'état de votre commande
              </p>
            </div>

            <div className="search-box">
              <input
                type="text"
                placeholder="Ex : FR123456789"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />
              <button className="btn-suivre" onClick={handleSearch}>
                Suivre
              </button>
            </div>
          </div>
        ) : (
          /* ÉTAPE 2 : SINON (S'IL A CLIQUÉ), ON AFFICHE LA PAGE DE SUIVI PERSO */
          <div className="tracking-page-container">
            
            <div style={{ marginBottom: '20px', textAlign: 'left', width: '100%', maxWidth: '650px' }}>
              <button className="btn-retour" onClick={handleGoBack}>
                ← Retour à la recherche
              </button>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h1 style={{ color: '#ffffff', margin: 0 }}>Progression de votre colis</h1>
            </div>

            <div className="tracking-card">
              <div className="tracking-number">
                Numéro de suivi : <strong>{trackingNumber}</strong>
              </div>

              <div className="progress">
                <div className="progress-bar"></div>
              </div>

              <div className="steps">
                <div className="step">
                  <div className="circle">✓</div>
                  <p>1. Commande reçue</p>
                </div>

                <div className="step">
                  <div className="circle">✓</div>
                  <p>2. Expédiée</p>
                </div>

                <div className="step">
                  <div className="circle">✓</div>
                  <p>3. En transit</p>
                </div>

                <div className="step">
                  <div className="circle gray">4</div>
                  <p>4. Livrée</p>
                </div>
              </div>

              <div className="status">
                📦 Votre colis ({trackingNumber}) est actuellement en transit vers sa destination.
              </div>
            </div>

          </div>
        )}

      </section>
    </>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        
        {/* --- BLOC RECHERCHE AGRANDI ET TEXTES EN NOIR --- */}
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
            />
            <button className="btn-suivre">
              Suivre
            </button>
          </div>
        </div>

        {/* --- PARTIE RÉSULTATS (SUIVI) --- */}
        <div style={{ marginTop: '40px' }}>
          <h1 style={{ color: '#ffffff' }}>Progression de votre colis</h1> {/* Laissé en blanc pour contraster avec le fond sombre */}
        </div>

        <div className="tracking-card">
          <div className="tracking-number">
            Numéro de suivi : FR123456789
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
              <div className="circle">4</div>
              <p>4. Livrée</p>
            </div>
          </div>

          <div className="status">
            📦 Votre colis est actuellement en transit vers sa destination.
          </div>
        </div>

      </section>
    </>
  )
}

export default App
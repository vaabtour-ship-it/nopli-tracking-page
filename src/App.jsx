import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Tout est maintenant regroupé dans cette unique section qui aura le dégradé */}
      <section id="center">
        
        {/* --- PARTIE 1 : RECHERCHE --- */}
        <div className="hero">
          {/* Vous pouvez insérer une image ici si besoin : <img src={heroImg} alt="Hero" /> */}
        </div>
        
        <div>
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
          <button>
            Suivre
          </button>
        </div>

        {/* --- PARTIE 2 : RÉSULTATS (SUIVI) --- */}
        <div style={{ marginTop: '40px' }}> {/* Optionnel : ajoute un peu d'espace entre les deux blocs */}
          <h1>Progression de votre colis</h1>
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
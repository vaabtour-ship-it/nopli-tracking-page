import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD
    <> 
    <body>
=======
    <>
>>>>>>> parent of 33ad4d0 (change color)
        <section id="center">
        <div className="hero">
          <img src="images/logo-nopli.png" alt="Logo Nopli" width="350"></img>
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
         </section>
      <div className="ticks"></div>
     <section id="next-steps">
     </section>
      <div> <h1> Progression du colis</h1>
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
          <p>Commande reçue</p>
        </div>

        <div className="step">
          <div className="circle">✓</div>
          <p>Expédiée</p>
        </div>

        <div className="step">
          <div className="circle">✓</div>
          <p>En transit</p>
        </div>

        <div className="step">
          <div className="circle">4</div>
          <p>Livrée</p>
        </div>

      </div>

      <div className="status">
        📦 Votre colis est actuellement en transit vers sa destination.
      </div>

    </div>
        

      <div className="ticks"></div>
      <section id="spacer"></section>
      </body>
    </>
  )
}

export default App
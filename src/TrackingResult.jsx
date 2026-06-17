import { useNavigate } from 'react-router-dom';
import './App.css'; // On utilise le même CSS pour le fond dégradé

function TrackingResult() {
  const navigate = useNavigate();

  // On récupère le numéro que l'utilisateur a tapé sur l'accueil
  const trackingNumber = localStorage.getItem('trackingNumber') || "FR123456789";

  return (
    <div className="app-container">
      <section id="center">
        
        <div style={{ width: '100%', maxWidth: '650px', textAlign: 'left' }}>
          <button className="btn-suivre" onClick={() => navigate('/')}>
            ← Retour
          </button>
        </div>

        <div className="tracking-card">
          <div className="tracking-number">
            Numéro de suivi : {trackingNumber}
          </div>

          <div className="progress">
            <div className="progress-bar"></div>
          </div>

          <div className="steps">
            <div className="step"><div className="circle">✓</div><p>1. Reçu</p></div>
            <div className="step"><div className="circle">✓</div><p>2. Expédié</p></div>
            <div className="step"><div className="circle">✓</div><p>3. En transit</p></div>
            <div className="step"><div className="circle">4</div><p>4. Livré</p></div>
          </div>

          <div className="status">
            📦 Votre colis est actuellement en transit.
          </div>
        </div>

      </section>
    </div>
  );
}

export default TrackingResult;
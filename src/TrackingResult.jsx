import { useNavigate } from 'react-router-dom';
import './App.css';

function TrackingResult() {
  const navigate = useNavigate();

  // Récupération de la langue et du numéro de suivi
  const currentLang = localStorage.getItem('appLang') || 'fr';
  const trackingNumber = localStorage.getItem('trackingNumber') || "AT-74291-FR";

  // Textes traduits pour correspondre au style Atelier Tuffery
  const content = {
    fr: {
      back: "← Retour à l'Atelier",
      title: "Suivi de votre commande",
      subtitle: "Chaque pièce est confectionnée avec soin dans nos ateliers lozériens.",
      labelNum: "Numéro de suivi Atelier :",
      step1: "Confection en cours",
      step2: "Contrôle qualité & Emballage",
      step3: "En cours d'acheminement",
      step4: "Livré chez vous",
      status: "Votre colis a quitté Florac. Il est actuellement pris en charge par notre transporteur écoresponsable."
    },
    en: {
      back: "← Back to the Workshop",
      title: "Track your order",
      subtitle: "Each piece is carefully crafted in our workshop in Lozère.",
      labelNum: "Atelier Tracking Number:",
      step1: "Crafting in progress",
      step2: "Quality check & Packaging",
      step3: "In transit",
      step4: "Delivered to you",
      status: "Your parcel has left Florac. It is currently handled by our eco-responsible carrier."
    },
    es: {
      back: "← Volver al Taller",
      title: "Seguimiento de su pedido",
      subtitle: "Cada pieza está cuidadosamente confeccionada en nuestro taller de Lozère.",
      labelNum: "Número de seguimiento:",
      step1: "Confección en curso",
      step2: "Control de calidad y embalaje",
      step3: "En tránsito",
      step4: "Entregado",
      status: "Su paquete ha salido de Florac. Actualmente está en manos de nuestro transportista eco-responsable."
    }
  };

  const t = content[currentLang] || content.fr;

  return (
    <div className="app-container">
      <section id="center">
        
        {/* Bouton Retour élégant */}
        <div style={{ width: '100%', maxWidth: '650px', textAlign: 'left' }}>
          <button 
            className="btn-suivre" 
            style={{ 
              background: 'transparent', 
              color: '#ffffff', 
              border: '1px solid rgba(255,255,255,0.4)',
              padding: '8px 16px',
              fontSize: '14px',
              borderRadius: '4px',
              marginBottom: '10px'
            }} 
            onClick={() => navigate('/')}
          >
            {t.back}
          </button>
        </div>

        {/* Conteneur principal style Tuffery */}
        <div className="tracking-card" style={{
          background: '#fcfbfa', /* Blanc écru artisanal */
          borderTop: '5px solid #1a2a40', /* Ligne supérieure Bleu Indigo */
          borderRadius: '12px',
          padding: '35px',
          color: '#1a1a1a',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}>
          
          {/* En-tête de la carte */}
          <div style={{ marginBottom: '30px', textAlign: 'center' }}>
            {/* Logo textuel minimaliste rappelant la marque */}
            <h2 style={{ 
              fontFamily: 'serif', 
              letterSpacing: '3px', 
              textTransform: 'uppercase', 
              fontSize: '20px',
              margin: '0 0 10px 0',
              color: '#1a2a40' 
            }}>
              Atelier Tuffery
            </h2>
            <div style={{ width: '40px', height: '1px', background: '#c8a27c', margin: '0 auto 15px' }}></div>
            <h3 style={{ fontSize: '24px', fontWeight: '500', margin: '0 0 5px 0' }}>{t.title}</h3>
            <p style={{ color: '#666', fontSize: '14px', fontStyle: 'italic' }}>{t.subtitle}</p>
          </div>

          {/* Numéro de suivi style étiquette de jean */}
          <div className="tracking-number" style={{ 
            background: '#f3ece5', /* Couleur lin/cuir clair */
            color: '#7c533c', /* Brun cuir */
            padding: '10px',
            borderRadius: '6px',
            fontWeight: '600',
            fontSize: '14px',
            letterSpacing: '1px',
            borderLeft: '3px solid #c8a27c',
            marginBottom: '30px'
          }}>
            {t.labelNum} <span style={{ fontFamily: 'monospace', fontSize: '15px' }}>{trackingNumber}</span>
          </div>

          {/* Barre de progression Bleu Denim */}
          <div className="progress" style={{ background: '#e0e5eb', height: '6px', borderRadius: '3px' }}>
            <div className="progress-bar" style={{ background: '#1a2a40', width: '70%', borderRadius: '3px' }}></div>
          </div>

          {/* Étapes de fabrication et livraison */}
          <div className="steps" style={{ marginTop: '25px' }}>
            <div className="step">
              <div className="circle" style={{ background: '#1a2a40', color: '#fff', border: 'none' }}>✓</div>
              <p style={{ fontWeight: '500', color: '#1a2a40', fontSize: '13px', marginTop: '8px' }}>{t.step1}</p>
            </div>

            <div className="step">
              <div className="circle" style={{ background: '#1a2a40', color: '#fff', border: 'none' }}>✓</div>
              <p style={{ fontWeight: '500', color: '#1a2a40', fontSize: '13px', marginTop: '8px' }}>{t.step2}</p>
            </div>

            <div className="step">
              <div className="circle" style={{ background: '#1a2a40', color: '#fff', border: 'none' }}>✓</div>
              <p style={{ fontWeight: '600', color: '#1a2a40', fontSize: '13px', marginTop: '8px' }}>{t.step3}</p>
            </div>

            <div className="step">
              {/* Étape future en blanc ajouré */}
              <div className="circle" style={{ background: '#fff', color: '#ccc', border: '2px solid #e0e5eb' }}>4</div>
              <p style={{ fontWeight: '400', color: '#999', fontSize: '13px', marginTop: '8px' }}>{t.step4}</p>
            </div>
          </div>

          {/* Statut détaillé */}
          <div className="status" style={{ 
            background: '#eef2f6', 
            color: '#1a2a40', 
            border: 'none', 
            borderRadius: '8px', 
            padding: '16px', 
            fontSize: '14px',
            lineHeight: '1.5',
            marginTop: '30px',
            textAlign: 'left'
          }}>
            🧵 <strong>Maison fondée en 1892 :</strong> {t.status}
          </div>

        </div>
      </section>
    </div>
  );
}

export default TrackingResult;
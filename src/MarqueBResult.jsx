import { useNavigate } from 'react-router-dom';
import './App.css';

function MarqueBResult() {
  const navigate = useNavigate();

  // Récupération de la langue et du numéro de suivi
  const currentLang = localStorage.getItem('appLang') || 'fr';
  const trackingNumber = localStorage.getItem('trackingNumber') || "SPD-9942-X";

  // Textes traduits pour l'univers Spider
  const content = {
    fr: {
      back: "← Retour au Hub",
      title: "Statut de l'expédition",
      subtitle: "Votre équipement Spider est en route vers votre zone de largage.",
      labelNum: "Code Traçabilité SPIDER :",
      step1: "Commande Validée",
      step2: "Préparation & Conditionnement",
      step3: "Expédié / En Transit",
      step4: "Livré / Objectif Atteint",
      status: "Le colis a quitté notre centre logistique principal. Livraison express activée."
    },
    en: {
      back: "← Back to Hub",
      title: "Shipment Status",
      subtitle: "Your Spider gear is on its way to your drop zone.",
      labelNum: "SPIDER Tracking Code:",
      step1: "Order Verified",
      step2: "Preparation & Packing",
      step3: "Shipped / In Transit",
      step4: "Delivered / Mission Accomplished",
      status: "The package has left our central logistics hub. Express delivery activated."
    },
    es: {
      back: "← Volver al Hub",
      title: "Estado del Envío",
      subtitle: "Tu equipamiento Spider está en camino a tu zone de entrega.",
      labelNum: "Código de Rastreo SPIDER:",
      step1: "Pedido Verificado",
      step2: "Preparación y Embalaje",
      step3: "En Tránsito",
      step4: "Entregado / Misión Cumplida",
      status: "El paquete ha salido de nuestro centro logístico central. Entrega exprés activada."
    },
    it: {
      back: "← Ritorno all'Hub",
      title: "Stato della spedizione",
      subtitle: "Il tuo equipaggiamento Spider sta arrivando alla tua zona di lancio.",
      labelNum: "Codice di tracciabilità SPIDER :",
      step1: "Comando Validato",
      step2: "Preparazione e Confezionamento",
      step3: "Spedito/In Transito",
      step4: "Raggiungiti/Obiettivo Raggiunto",
      status: "Il pacco è uscito dal nostro centro logistico principale. Consegna espressa abilitata."
    },
    de: {
      back: "← Zurück zum Hub",
      title: "Versandstatus",
      subtitle: "Deine Spider-Ausrüstung ist auf dem Weg zu deiner Absprungszone.",
      labelNum: "SPIDER-Tracking-Code :",
      step1: "Validierte Reihenfolge",
      step2: "Vorbereitung & Verpackung",
      step3: "Versendet / Unterwegs",
      step4: "Geliefert / Ziel erreicht",
      status: "Das Paket hat unser Hauptlogistikzentrum verlassen. Expresszustellung aktiviert."
    },
  };

  const t = content[currentLang] || content.fr;
  return (
    <div className="app-container">
      <section id="center">
        
        {/* Bouton Retour Cyber/Futuriste */}
        <div style={{ width: '100%', maxWidth: '650px', textAlign: 'left' }}>
          <button 
            className="btn-suivre" 
            style={{ 
              background: 'rgba(255, 0, 60, 0.1)', 
              color: '#ff003c', 
              border: '1px solid #ff003c',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              borderRadius: '4px',
              marginBottom: '15px',
              cursor: 'pointer'
            }} 
            onClick={() => navigate('/')}
          >
            {t.back}
          </button>
        </div>

        {/* Carte de Suivi Premium Spider */}
        <div className="tracking-card" style={{
          background: '#0d0d11', /* Fond noir carbone très sombre */
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderTop: '4px solid #ff003c', /* Ligne supérieure Rouge Flash */
          borderRadius: '8px',
          padding: '35px',
          color: '#ffffff',
          boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
        }}>
          
          {/* En-tête de la carte */}
          <div style={{ marginBottom: '35px', textAlign: 'center' }}>
            <h2 style={{ 
              fontFamily: 'Impact, sans-serif', 
              letterSpacing: '4px', 
              textTransform: 'uppercase', 
              fontSize: '26px',
              margin: '0 0 5px 0',
              color: '#ff003c' /* Rouge */
            }}>
              SPIDER
            </h2>
            <p style={{ color: '#0c0c0d', fontSize: '14px', letterSpacing: '0.5px', margin: '0' }}>
              {t.subtitle}
            </p>
          </div>

          {/* Numéro de suivi style Bloc Technique militaire */}
          <div className="tracking-number" style={{ 
            background: '#16161f', /* Gris très sombre */
            color: '#ffffff', 
            padding: '12px',
            borderRadius: '4px',
            fontWeight: 'bold',
            fontSize: '13px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            borderLeft: '4px solid #ff003c',
            marginBottom: '35px',
            textAlign: 'left'
          }}>
            {t.labelNum} <span style={{ color: '#ff003c', fontFamily: 'monospace', fontSize: '15px' }}>{trackingNumber}</span>
          </div>

          {/* Barre de progression Tech */}
          <div className="progress" style={{ background: '#22222b', height: '4px', borderRadius: '2px' }}>
            <div className="progress-bar" style={{ background: '#ff003c', width: '75%', borderRadius: '2px', boxShadow: '0 0 10px #ff003c' }}></div>
          </div>

          {/* Étapes du déploiement - LIST-STYLE NONE CORRIGÉ ICI */}
          <div className="steps" style={{ marginTop: '30px', listStyle: 'none', padding: '0' }}>
            <div className="step" style={{ listStyleType: 'none' }}>
              <div className="circle" style={{ background: '#ff003c', color: '#fff', border: 'none', boxShadow: '0 0 8px #ff003c' }}>✓</div>
              <p style={{ fontWeight: 'bold', color: '#ff003c', fontSize: '12px', marginTop: '10px', textTransform: 'uppercase' }}>{t.step1}</p>
            </div>

            <div className="step" style={{ listStyleType: 'none' }}>
              <div className="circle" style={{ background: '#ff003c', color: '#fff', border: 'none', boxShadow: '0 0 8px #ff003c' }}>✓</div>
              <p style={{ fontWeight: 'bold', color: '#ff003c', fontSize: '12px', marginTop: '10px', textTransform: 'uppercase' }}>{t.step2}</p>
            </div>

            <div className="step" style={{ listStyleType: 'none' }}>
              <div className="circle" style={{ background: '#ff003c', color: '#fff', border: 'none', boxShadow: '0 0 8px #ff003c' }}>✓</div>
              <p style={{ fontWeight: 'bold', color: '#ff003c', fontSize: '12px', marginTop: '10px', textTransform: 'uppercase' }}>{t.step3}</p>
            </div>

            <div className="step" style={{ listStyleType: 'none' }}>
              <div className="circle" style={{ background: '#ff003c', color: '#fff', border: 'none', boxShadow: '0 0 8px #ff003c' }}>4</div>
              <p style={{ fontWeight: 'normal', color: '#ff003c', fontSize: '12px', marginTop: '10px', textTransform: 'uppercase' }}>{t.step4}</p>
            </div>
          </div>

          {/* Section Statut Militaire/Tech */}
          <div className="status" style={{ 
            background: 'rgba(255, 255, 255, 0.03)', 
            color: '#ffffff', 
            border: '1px dashed rgba(255, 255, 255, 0.1)', 
            borderRadius: '4px', 
            padding: '16px', 
            fontSize: '13px',
            lineHeight: '1.6',
            marginTop: '35px',
            textAlign: 'left'
          }}>
            ⚡ <strong>SYSTEM LOG :</strong> {t.status}
          </div>

        </div>
      </section>
    </div>
  );
}

export default MarqueBResult;
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import App from './App.jsx'
import TrackingResult from './TrackingResult.jsx'
import MarqueBResult from './MarqueBResult.jsx' 
import './index.css'

// Composant qui choisit le bon affichage TOUT EN GARDANT le numéro dans l'URL
function GestionnaireSuivi() {
  const { suiviId } = useParams();

  if (!suiviId) return <App />;

  const number = suiviId.trim();

  // On sauvegarde quand même dans le localStorage au cas où vos composants en dépendent
  localStorage.setItem('trackingNumber', number);

  // On affiche le composant correspondant SANS changer l'URL de la barre d'adresse
  if (number.includes('0731') || number.includes('07')) {
    return <MarqueBResult />;
  } 
  else if (number.includes('3107') || number.includes('31')) {
    return <TrackingResult />;
  } 
  else {
    // Si le numéro n'est pas reconnu, on peut réafficher l'accueil (ou une page 404)
    return <App defaultError="unrecognized" />;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Page d'accueil classique */}
        <Route path="/" element={<App />} />
        
        {/* L'URL dynamique qui va gérer l'affichage de Spider ou Tuffery directement */}
        <Route path="/:suiviId" element={<GestionnaireSuivi />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
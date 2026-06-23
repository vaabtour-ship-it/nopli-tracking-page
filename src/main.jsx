import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom'
import App from './App.jsx'
import TrackingResult from './TrackingResult.jsx'
import MarqueBResult from './MarqueBResult.jsx' 
import './index.css'

function GestionnaireSuivi() {
  const { suiviId } = useParams();

  if (!suiviId) return <App />;

  const number = suiviId.trim();
  localStorage.setItem('trackingNumber', number);

  if (number.includes('0731') || number.includes('07')) {
    return <MarqueBResult />;
  } 
  else if (number.includes('3107') || number.includes('31')) {
    return <TrackingResult />;
  } 
  else {
    // Si le numéro est mauvais, on redirige vers l'accueil en passant le message rouge
    return <Navigate to="/" state={{ error: 'unrecognized' }} replace />;
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
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import TrackingResult from './TrackingResult.jsx' // On importe notre nouvelle page
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* L'adresse de base "/" chargera ton formulaire actuel */}
        <Route path="/" element={<App />} />
        
        {/* L'adresse "/suivi" chargera ta nouvelle page de résultat */}
        <Route path="/suivi" element={<TrackingResult />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
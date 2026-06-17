import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import TrackingResult from './TrackingResult.jsx'
import MarqueBResult from './MarqueBResult.jsx' 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/suivi" element={<TrackingResult />} />
        <Route path="/marque-b" element={<MarqueBResult />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
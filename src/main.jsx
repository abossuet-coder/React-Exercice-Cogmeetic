import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Accueil from './pages/Accueil.jsx'
import Profil from './pages/Profil.jsx'
import Match from './pages/Match.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> {  /* J'ai ajouté cette ligne parce que sans elle y'arien qui s'affiche, jsp si y'a une autre solution ou pas */}
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/match" element={<Match />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

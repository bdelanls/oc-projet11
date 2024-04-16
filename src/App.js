import './styles/App.scss'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Fiche from './pages/Fiche'
import Erreur404 from './pages/Erreur404'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/fiche/:id" element={<Fiche />} />
        <Route path="/erreur404" element={<Erreur404 />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

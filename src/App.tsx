import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LegalNoticePage from './pages/LegalNoticePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiesPolicyPage from './pages/CookiesPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/proceso" element={<ProcessPage />} />
          <Route path="/planes" element={<PricingPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/aviso-legal" element={<LegalNoticePage />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicyPage />} />
          <Route path="/politica-cookies" element={<CookiesPolicyPage />} />
          <Route path="/terminos-condiciones" element={<TermsAndConditionsPage />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
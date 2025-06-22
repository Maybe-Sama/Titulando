import React from 'react';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-24">
        <Contact />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage; 
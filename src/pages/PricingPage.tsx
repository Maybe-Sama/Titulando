import React from 'react';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-24">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage; 
import React from 'react';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import ReferralOffer from '../components/ReferralOffer';
import AdditionalServices from '../components/AdditionalServices';

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-24">
        <Pricing />
        <AdditionalServices />
        <ReferralOffer />
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage; 
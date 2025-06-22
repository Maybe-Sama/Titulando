import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-24">
        <WhyChooseUs />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage; 
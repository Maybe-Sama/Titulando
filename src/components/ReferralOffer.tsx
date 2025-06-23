import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReferralOffer = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative bg-gradient-to-br from-primary-600 to-accent-500 p-10 md:p-16 rounded-3xl shadow-soft-lg overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center">
            <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-12 text-center">
              <div className="bg-white/20 p-6 rounded-full inline-block shadow-soft">
                <Gift className="h-20 w-20 text-white" />
              </div>
            </div>
            <div className="text-white text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Consigue un Descuento de 50€
              </h3>
              <p className="text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
                Por cada persona que llegue referida y contrate un servicio, se aplicará un descuento de 50€ en tu propio proyecto. Una oportunidad para que ambas partes salgan beneficiadas.
              </p>
              <Link 
                to="/contacto"
                className="inline-flex items-center space-x-3 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neutral-light hover:text-primary-600 transition-all duration-300 group shadow-md hover:shadow-lg"
              >
                <span>Informar sobre un referido</span>
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralOffer; 
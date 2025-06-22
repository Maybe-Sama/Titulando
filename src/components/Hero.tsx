import React from 'react';
import { ArrowRight, CheckCircle, Sparkles, Target, Lightbulb, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background with organic shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-light via-white to-mint-500/20"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-mint-500/10 to-primary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary-500" />
              <span className="text-sm font-medium text-primary-600">Asesoramiento Académico Profesional</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-neutral-dark mb-6 leading-tight">
              ¿Estancado con tu 
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent block">
                TFG o TFM?
              </span>
              <span className="text-2xl lg:text-3xl text-primary-500 font-medium block mt-4 flex items-center justify-center lg:justify-start">
                <Target className="h-8 w-8 mr-2 text-accent-500" />
                Nosotros te impulsamos hacia el éxito
              </span>
            </h1>
            
            <p className="text-xl text-neutral-dark/80 mb-8 leading-relaxed max-w-2xl">
              Ofrecemos asesoramiento experto y tutorización personalizada para que superes 
              tu proyecto final con confianza y originalidad.
            </p>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
              {[
                { icon: CheckCircle, text: "100% Legal y Ético" },
                { icon: Lightbulb, text: "Expertos Cualificados" },
                { icon: CheckCircle, text: "Confidencialidad Total" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
                  <benefit.icon className="h-5 w-5 text-primary-500" />
                  <span className="text-neutral-dark font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/contacto"
                className="group bg-gradient-to-r from-accent-500 to-accent-400 text-neutral-dark px-8 py-4 rounded-2xl hover:shadow-accent transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <span>Solicita tu Presupuesto Gratuito</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                to="/servicios"
                className="border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-2xl hover:bg-primary-500 hover:text-white transition-all duration-300 font-semibold text-lg backdrop-blur-sm text-center"
              >
                Conocer Servicios
              </Link>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative animate-slide-up">
            <div className="relative bg-gradient-to-br from-white to-neutral-light rounded-3xl p-8 shadow-soft-lg">
              {/* Abstract illustration representing academic success */}
              <div className="aspect-square flex items-center justify-center relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10">
                {/* Central success symbol */}
                <div className="relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-soft-lg animate-pulse-soft">
                    <GraduationCap className="h-16 w-16 text-white" />
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-400 rounded-2xl flex items-center justify-center shadow-soft animate-float">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                
                <div className="absolute bottom-8 right-8 w-20 h-20 bg-gradient-to-br from-mint-500 to-primary-500/50 rounded-2xl flex items-center justify-center shadow-soft animate-float" style={{ animationDelay: '0.5s' }}>
                  <Target className="h-10 w-10 text-white" />
                </div>
                
                <div className="absolute top-1/2 right-4 w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full flex items-center justify-center shadow-soft animate-float" style={{ animationDelay: '1s' }}>
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <path
                    d="M100 100 Q200 150 300 100"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse-soft"
                  />
                  <path
                    d="M100 300 Q200 250 300 300"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse-soft"
                    style={{ animationDelay: '0.5s' }}
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B79B2" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#FFDDAA" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#D0E8DD" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#8B79B2" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Success indicators */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-soft-lg border border-neutral-light">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-primary-500" />
                  <span className="font-semibold text-neutral-dark">Éxito Garantizado</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-soft-lg border border-neutral-light">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">95%</div>
                  <div className="text-sm text-neutral-dark font-medium">Tasa de Éxito</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
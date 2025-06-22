import React from 'react';
import { Check, Star, Crown, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: "Plan Básico",
      subtitle: "Guía Inicial",
      icon: Users,
      idealFor: "Proyectos de hasta 20 páginas (ej. marco teórico, introducción)",
      price: "Desde 150€",
      features: [
        "2 sesiones de tutoría online",
        "Revisión de estilo y formato básico",
        "Guía metodológica",
        "Soporte por email",
        "Plazo de entrega estándar"
      ],
      popular: false,
      gradient: "from-neutral-light to-white",
      borderColor: "border-neutral-light hover:border-primary-500/30",
      iconColor: "from-primary-500 to-primary-600"
    },
    {
      name: "Plan Estándar",
      subtitle: "Apoyo Completo",
      icon: Star,
      idealFor: "Proyectos de 21 a 50 páginas (la mayoría de TFG/TFM)",
      price: "Desde 350€",
      features: [
        "4 sesiones de tutoría online",
        "Revisión avanzada de estilo y coherencia",
        "Apoyo en análisis de datos",
        "Informe antiplagio",
        "Soporte prioritario",
        "Plataforma privada de seguimiento"
      ],
      popular: true,
      gradient: "from-primary-500/10 to-accent-500/10",
      borderColor: "border-primary-500 shadow-soft-lg",
      iconColor: "from-accent-500 to-accent-400"
    },
    {
      name: "Plan Premium",
      subtitle: "Integral",
      icon: Crown,
      idealFor: "Proyectos de más de 50 páginas o tesis complejas",
      price: "Desde 650€",
      features: [
        "6+ sesiones de tutoría online",
        "Revisión exhaustiva",
        "Preparación para la defensa",
        "Soporte prioritario 24/7",
        "Informe antiplagio detallado",
        "Simulacro de defensa",
        "Garantía de satisfacción"
      ],
      popular: false,
      gradient: "from-mint-500/10 to-primary-500/10",
      borderColor: "border-neutral-light hover:border-mint-500/50",
      iconColor: "from-mint-500 to-primary-500"
    }
  ];



  return (
    <section id="planes" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-500/5 to-accent-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-mint-500/5 to-primary-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-600">Planes Flexibles</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-neutral-dark mb-8">
            Planes de Asesoramiento:
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent block">
              Flexible y Adaptado a Ti
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-neutral-dark/80 leading-relaxed mb-6">
              Ofrecemos paquetes de asesoramiento que se ajustan a la extensión y complejidad de tu proyecto. 
              El precio final se determinará con un presupuesto personalizado tras una consulta inicial, 
              considerando tus necesidades específicas y la envergadura del trabajo.
            </p>
            <p className="text-lg text-primary-500 italic font-medium">
              Los rangos por página son una guía para facilitar la orientación de tu inversión.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div 
                key={index}
                className={`relative rounded-3xl p-8 border-2 transition-all duration-500 hover:shadow-soft-lg animate-slide-up ${
                  plan.popular 
                    ? `${plan.borderColor} scale-105 bg-gradient-to-br ${plan.gradient}` 
                    : `${plan.borderColor} bg-gradient-to-br ${plan.gradient} hover:scale-105`
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-accent-500 to-accent-400 text-neutral-dark px-6 py-2 rounded-full text-sm font-semibold shadow-soft flex items-center space-x-1">
                      <Sparkles className="h-4 w-4" />
                      <span>Más Popular</span>
                    </div>
                  </div>
                )}
                
                <div className={`bg-gradient-to-br ${plan.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-soft`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-neutral-dark mb-2">{plan.name}</h3>
                <p className="text-lg text-primary-500 font-medium mb-6">{plan.subtitle}</p>
                
                <div className="mb-6">
                  <p className="text-sm text-neutral-dark/60 mb-2 font-medium">Ideal para:</p>
                  <p className="text-neutral-dark leading-relaxed">{plan.idealFor}</p>
                </div>
                
                <div className="mb-8">
                  <span className="text-3xl font-display font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">{plan.price}</span>
                  <p className="text-sm text-neutral-dark/60 mt-1">(Solicita tu presupuesto personalizado)</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-full p-1 mt-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-neutral-dark leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contacto"
                  className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-soft-lg'
                      : 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
                  }`}
                >
                  Quiero mi Presupuesto
                </Link>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Sparkles className="h-6 w-6 text-primary-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
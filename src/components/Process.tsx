import React from 'react';
import { MessageCircle, FileCheck, UserCheck, Users, CheckCircle, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Process = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Consulta Gratuita",
      description: "Contacta sin compromiso y cuéntanos sobre tu proyecto. Analizaremos tus necesidades.",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: FileCheck,
      title: "Propuesta a Medida",
      description: "Recibe un presupuesto detallado y una propuesta de trabajo personalizada, sin costes ocultos.",
      color: "from-accent-500 to-accent-400"
    },
    {
      icon: UserCheck,
      title: "Tutor Asignado",
      description: "Te asignamos un experto cualificado en tu disciplina para un acompañamiento especializado.",
      color: "from-mint-500 to-primary-500"
    },
    {
      icon: Users,
      title: "Colaboración Activa",
      description: "Trabaja mano a mano con tu tutor a través de nuestra plataforma privada, con entregas progresivas.",
      color: "from-primary-600 to-accent-500"
    },
    {
      icon: CheckCircle,
      title: "Revisión y Feedback",
      description: "Recibe retroalimentación constante para pulir tu trabajo y asegurar tu comprensión.",
      color: "from-accent-400 to-mint-500"
    },
    {
      icon: Trophy,
      title: "Entrega Final",
      description: "Prepárate para presentar tu TFG/TFM con total seguridad y confianza.",
      color: "from-primary-500 to-accent-500"
    }
  ];



  return (
    <section id="proceso" className="py-20 lg:py-32 bg-gradient-to-br from-neutral-light via-white to-mint-500/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-mint-500/10 to-primary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-neutral-dark mb-8">
            Proceso de Trabajo:
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent block">
              Simple, Transparente y Efectivo
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Connector Line - only show on desktop and not for last item */}
                {index < steps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 z-0">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500/30 to-accent-500/30 transform translate-x-4"></div>
                    <ArrowRight className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-2 h-4 w-4 text-primary-500/50" />
                  </div>
                )}
                
                <div className="relative bg-white p-8 rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-500 border border-neutral-light hover:border-primary-500/30 group-hover:scale-105 z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 bg-gradient-to-br from-accent-500 to-accent-400 text-neutral-dark w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg shadow-soft">
                    {index + 1}
                  </div>
                  
                  <div className={`bg-gradient-to-br ${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:shadow-soft-lg transition-all duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold text-neutral-dark mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-neutral-dark/70 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Decorative gradient line */}
                  <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link 
            to="/contacto"
            className="group bg-gradient-to-r from-accent-500 to-accent-400 text-neutral-dark px-10 py-4 rounded-2xl hover:shadow-accent transition-all duration-300 font-semibold text-lg flex items-center space-x-2 mx-auto"
          >
            <span>Empieza Hoy tu Proyecto</span>
            <Trophy className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Process;
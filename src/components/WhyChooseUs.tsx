import React from 'react';
import { Award, Lock, FileCheck, Headphones, MessageSquare, Users, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Asesores Cualificados",
      description: "Acceso a tutores con experiencia en diversas disciplinas universitarias.",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Lock,
      title: "Confidencialidad Total",
      description: "Se garantiza la máxima discreción y protección de los datos del estudiante.",
      color: "from-accent-500 to-accent-400"
    },
    {
      icon: FileCheck,
      title: "Originalidad y Calidad",
      description: "Guía para asegurar que el trabajo sea 100% original y de alta calidad académica.",
      color: "from-mint-500 to-primary-500"
    },
    {
      icon: Headphones,
      title: "Soporte Personalizado",
      description: "Atención individualizada y adaptada a los tiempos y necesidades de cada estudiante.",
      color: "from-primary-600 to-accent-500"
    },
    {
      icon: MessageSquare,
      title: "Comunicación Fluida",
      description: "Plataforma privada para una interacción constante con el tutor asignado.",
      color: "from-accent-400 to-mint-500"
    },
    {
      icon: Users,
      title: "Experiencia Comprobada",
      description: "Metodología probada con cientos de estudiantes que han logrado el éxito.",
      color: "from-mint-500 to-accent-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Proyectos Completados", icon: FileCheck },
    { number: "95%", label: "Tasa de Éxito", icon: TrendingUp },
    { number: "50+", label: "Disciplinas Cubiertas", icon: Award },
    { number: "24/7", label: "Soporte Disponible", icon: Headphones }
  ];



  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-gradient-to-br from-primary-500/5 via-neutral-light to-accent-500/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-mint-500/10 to-primary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-soft">
            <Sparkles className="h-4 w-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-600">Características del Servicio</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-neutral-dark mb-8">
            El Éxito del Estudiante es
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent block">
              la Prioridad
            </span>
          </h2>
          <p className="text-xl text-neutral-dark/80 max-w-3xl mx-auto leading-relaxed">
            El servicio se diferencia por el compromiso con la excelencia académica y 
            el acompañamiento integral durante todo el proceso de investigación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-500 border border-white/50 hover:border-primary-500/30 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${reason.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:shadow-soft-lg transition-all duration-300 group-hover:scale-110`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-display font-semibold text-neutral-dark mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-neutral-dark/70 leading-relaxed">
                  {reason.description}
                </p>
                
                {/* Decorative element */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="h-4 w-4 text-accent-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-soft-lg mb-16 border border-white/50 animate-fade-in">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-soft-lg transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-4xl font-display font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-neutral-dark font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/contacto"
            className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-10 py-4 rounded-2xl hover:shadow-soft-lg transition-all duration-300 font-semibold text-lg flex items-center space-x-2 mx-auto"
          >
            <span>Solicitar Información</span>
            <Users className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
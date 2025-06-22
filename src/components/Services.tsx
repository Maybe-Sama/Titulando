import React from 'react';
import { BookOpen, Users, FileText, BarChart3, Presentation, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Asesoramiento Metodológico",
      description: "Guía en la estructura, elección de tema, búsqueda bibliográfica y planteamiento de hipótesis.",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Users,
      title: "Tutorización Personalizada",
      description: "Sesiones individuales con profesionales expertos en cada área para resolver dudas y optimizar el progreso.",
      color: "from-accent-500 to-accent-400"
    },
    {
      icon: FileText,
      title: "Revisión y Corrección de Estilo",
      description: "Revisión y mejora de la redacción, gramática y adaptación del formato (APA, Vancouver, etc.).",
      color: "from-mint-500 to-primary-500"
    },
    {
      icon: BarChart3,
      title: "Apoyo en Análisis de Datos",
      description: "Asistencia en el uso de herramientas estadísticas y la interpretación de resultados cualitativos y cuantitativos.",
      color: "from-primary-600 to-accent-500"
    },
    {
      icon: Presentation,
      title: "Preparación para la Defensa",
      description: "Consejos prácticos y simulación para dominar la exposición oral y responder con seguridad.",
      color: "from-accent-400 to-primary-500"
    },
    {
      icon: Shield,
      title: "Informe Antiplagio (Turnitin)",
      description: "Provisión de un informe para verificar la originalidad del contenido y evitar sorpresas.",
      color: "from-mint-500 to-accent-500"
    }
  ];



  return (
    <section id="servicios" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-neutral-light/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-600">Servicios Especializados</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-neutral-dark mb-8">
            Tu Apoyo Académico 
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent block">
              Personalizado
            </span>
          </h2>
          <p className="text-xl text-neutral-dark/80 max-w-4xl mx-auto leading-relaxed">
            Se ofrece una gama de servicios diseñados para asistir al estudiante en cada etapa de su TFG o TFM, 
            garantizando que el proceso sea claro y el resultado, impecable. El enfoque es la guía, 
            la revisión y el acompañamiento para el desarrollo de un proyecto propio con excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white p-8 rounded-3xl border border-neutral-light hover:border-primary-500/30 hover:shadow-soft-lg transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:shadow-soft-lg transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold text-neutral-dark mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-neutral-dark/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Decorative element */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="h-4 w-4 text-accent-500" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link 
            to="/planes"
            className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-10 py-4 rounded-2xl hover:shadow-soft-lg transition-all duration-300 font-semibold text-lg flex items-center space-x-2 mx-auto"
          >
            <span>Ver Todos los Planes</span>
            <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
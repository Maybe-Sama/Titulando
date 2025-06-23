import React from 'react';
import { Presentation, Clapperboard, Medal, Info } from 'lucide-react';

const AdditionalServices = () => {
  const services = [
    {
      icon: Clapperboard,
      title: "Guion para Vídeo de Defensa",
      price: "30€",
      description: "Estructura y contenido clave para una presentación impactante.",
    },
    {
      icon: Presentation,
      title: "Diseño de Diapositivas (PPT)",
      price: "30€",
      description: "Creación de un soporte visual profesional y claro para la exposición.",
    },
    {
      icon: Medal,
      title: "Pack Guion + Diapositivas",
      price: "50€",
      description: "La combinación perfecta para una defensa sobresaliente, a un precio reducido.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-neutral-light/60">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-5xl font-display font-bold text-neutral-dark mb-6">
            Servicios Complementarios
          </h3>
          <p className="text-lg text-neutral-dark/80 max-w-3xl mx-auto">
            Para una presentación final de alto impacto, se ofrecen los siguientes apoyos adicionales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl border border-transparent hover:border-primary-500/30 transition-all duration-300 shadow-soft"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-br from-mint-500 to-primary-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-soft-sm group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-semibold text-neutral-dark group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h4>
                </div>
              </div>
              <p className="text-neutral-dark/70 mb-6">{service.description}</p>
              <div className="text-3xl font-display font-bold text-neutral-dark">
                {service.price}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 p-8 rounded-3xl border border-primary-500/20">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                <Info className="h-8 w-8 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-display font-semibold text-neutral-dark mb-2">
                Asesoramiento Gratuito para la Grabación
              </h4>
              <p className="text-neutral-dark/80">
                Al contratar cualquier servicio para la defensa, se incluye orientación sin coste sobre cómo grabarte: plano adecuado, expresión corporal, y otros consejos para quienes no tienen experiencia previa frente a la cámara.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices; 
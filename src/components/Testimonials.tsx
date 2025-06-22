import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, GraduationCap, Quote, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "M. Sánchez",
      degree: "Grado en Psicología",
      university: "Universidad Complutense de Madrid",
      rating: 5,
      text: "Gracias a su asesoramiento, mi TFG fue un éxito. La guía fue clave para estructurar correctamente mi investigación y los tutores fueron muy profesionales en todo momento.",
      color: "from-primary-500 to-primary-600"
    },
    {
      name: "L. García",
      degree: "Máster en Marketing",
      university: "Universidad de Barcelona",
      rating: 5,
      text: "Me ayudaron a estructurar mi TFM y a entender cada paso del proceso de investigación. Muy profesionales y siempre disponibles para resolver mis dudas.",
      color: "from-accent-500 to-accent-400"
    },
    {
      name: "A. Rodríguez",
      degree: "Grado en Ingeniería Informática",
      university: "Universidad Politécnica de Madrid",
      rating: 5,
      text: "El apoyo en el análisis de datos fue fundamental para mi TFG. Sin su ayuda no habría podido completar la parte estadística de manera tan precisa.",
      color: "from-mint-500 to-primary-500"
    },
    {
      name: "C. Martín",
      degree: "Máster en Recursos Humanos",
      university: "Universidad de Valencia",
      rating: 5,
      text: "La preparación para la defensa fue excepcional. Me dieron consejos muy útiles y practiqué con ellos hasta sentirme completamente segura.",
      color: "from-primary-600 to-accent-500"
    },
    {
      name: "J. López",
      degree: "Grado en Administración y Dirección de Empresas",
      university: "Universidad de Sevilla",
      rating: 5,
      text: "Servicio completamente legal y ético. Me enseñaron a desarrollar mi propio trabajo con calidad académica. Lo recomiendo totalmente.",
      color: "from-accent-400 to-mint-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-neutral-light/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-primary-500/5 to-accent-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-600">Testimonios Reales</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-neutral-dark mb-8">
            Lo Que Dicen
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent block">
              Nuestros Estudiantes
            </span>
          </h2>
          <p className="text-xl text-neutral-dark/80 max-w-3xl mx-auto">
            La satisfacción de nuestros estudiantes es nuestro mayor logro. 
            Descubre cómo hemos ayudado a cientos de universitarios a alcanzar sus metas académicas.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-gradient-to-br from-white to-neutral-light/50 rounded-3xl p-8 lg:p-12 shadow-soft-lg border border-white/50 backdrop-blur-sm animate-fade-in">
            <div className="text-center mb-8">
              {/* Quote icon */}
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                <Quote className="h-8 w-8 text-white" />
              </div>
              
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-accent-500 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-neutral-dark leading-relaxed mb-8 italic font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className={`bg-gradient-to-br ${testimonials[currentTestimonial].color} p-3 rounded-2xl shadow-soft`}>
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-display font-semibold text-neutral-dark text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-primary-500 font-medium">
                    {testimonials[currentTestimonial].degree}
                  </div>
                  <div className="text-neutral-dark/60 text-sm">
                    {testimonials[currentTestimonial].university}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:bg-primary-500/10 border border-white/50"
          >
            <ChevronLeft className="h-6 w-6 text-primary-500" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:bg-primary-500/10 border border-white/50"
          >
            <ChevronRight className="h-6 w-6 text-primary-500" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 scale-125' 
                    : 'bg-neutral-light hover:bg-primary-500/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Secondary Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-accent-500 fill-current" />
                ))}
              </div>
              
              <p className="text-neutral-dark/80 mb-4 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center space-x-3">
                <div className={`bg-gradient-to-br ${testimonial.color} p-2 rounded-xl shadow-soft`}>
                  <GraduationCap className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-display font-semibold text-neutral-dark">{testimonial.name}</div>
                  <div className="text-sm text-primary-500 font-medium">{testimonial.degree}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
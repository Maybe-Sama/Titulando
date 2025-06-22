import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Es legal vuestro servicio?",
      answer: "Absolutamente. Ofrecemos un servicio de asesoramiento, tutorización y apoyo académico, no vendemos trabajos. Nuestro objetivo es guiarte para que elabores tu propio TFG/TFM, cumpliendo con los estándares de calidad y originalidad de tu universidad. La responsabilidad de la entrega final es siempre del estudiante."
    },
    {
      question: "¿Garantizáis la aprobación de mi TFG/TFM?",
      answer: "Te proporcionamos las herramientas y el acompañamiento para maximizar tus posibilidades de éxito. La aprobación final depende de tu dedicación, la calidad de tu trabajo y la evaluación de tu universidad. Nuestro enfoque es educativo y de apoyo académico."
    },
    {
      question: "¿Cómo garantizáis la originalidad?",
      answer: "Te ayudamos a desarrollar contenido original y proporcionamos un informe de similitud (Turnitin) como herramienta de verificación para que tengas la tranquilidad de que tu trabajo es único. Todo el contenido se desarrolla bajo tu supervisión y autoría."
    },
    {
      question: "¿Cómo se asigna el tutor?",
      answer: "Asignamos a un experto en tu área de estudio y temática específica, buscando la mejor afinidad para tu proyecto. Consideramos tu disciplina, metodología de investigación y preferencias para garantizar el mejor acompañamiento académico."
    },
    {
      question: "¿Cuál es el coste final de mi proyecto?",
      answer: "El coste se calcula mediante un presupuesto personalizado, valorando la extensión, complejidad, área de estudio y tiempo de entrega. Solicita tu presupuesto gratuito para una estimación precisa. No hay costes ocultos y te informaremos de todo por adelantado."
    },
    {
      question: "¿Es confidencial mi información?",
      answer: "Sí, garantizamos total confidencialidad sobre tus datos y el contenido de tu proyecto. Cumplimos con la normativa de protección de datos (RGPD) y nunca compartimos información personal o académica con terceros."
    },
    {
      question: "¿Qué incluye el seguimiento personalizado?",
      answer: "Incluye sesiones de tutoría online, acceso a una plataforma privada para comunicación constante, revisión de entregas parciales, feedback continuo y apoyo durante todo el proceso de desarrollo de tu proyecto."
    },
    {
      question: "¿Cuánto tiempo toma completar el asesoramiento?",
      answer: "El tiempo depende de la complejidad de tu proyecto y tus necesidades específicas. Generalmente, el proceso completo puede tomar entre 4-12 semanas, pero nos adaptamos a tus plazos y disponibilidad académica."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-neutral-light via-white to-primary-500/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-bl from-primary-500/10 to-accent-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-mint-500/10 to-primary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-soft">
            <HelpCircle className="h-4 w-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-600">Preguntas Frecuentes</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-neutral-dark mb-8">
            Resolvemos
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent block">
              Tus Dudas
            </span>
          </h2>
          <p className="text-xl text-neutral-dark/80 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más frecuentes sobre nuestros servicios 
            de asesoramiento académico y cómo podemos ayudarte con tu TFG o TFM.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 mb-4 overflow-hidden hover:shadow-soft-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-primary-500/5 transition-colors duration-300"
              >
                <h3 className="text-lg font-display font-semibold text-neutral-dark pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-2 rounded-xl">
                      <ChevronUp className="h-4 w-4 text-white" />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-neutral-light to-white p-2 rounded-xl border border-neutral-light">
                      <ChevronDown className="h-4 w-4 text-primary-500" />
                    </div>
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-primary-500/10 pt-6">
                    <p className="text-neutral-dark/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-neutral-dark/70 mb-6 text-lg">
            ¿No encuentras la respuesta que buscas?
          </p>
          <Link 
            to="/contacto"
            className="group bg-gradient-to-r from-accent-500 to-accent-400 text-neutral-dark px-10 py-4 rounded-2xl hover:shadow-accent transition-all duration-300 font-semibold text-lg flex items-center space-x-2 mx-auto"
          >
            <span>Contacta con Nosotros</span>
            <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
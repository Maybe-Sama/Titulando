import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Este servicio es como 'comprar un TFG'?",
      answer: "En absoluto. Esas prácticas son contrarias a la ética académica. El servicio consiste en ofrecer clases particulares y asesoramiento. Se proporcionan las herramientas para investigar, redactar y estructurar el trabajo, de modo que la autoría y el mérito sean siempre del estudiante."
    },
    {
      question: "¿Cómo se asegura la originalidad del trabajo?",
      answer: "La originalidad se garantiza porque el trabajo es desarrollado por el propio estudiante. La guía se centra en enseñar a citar correctamente y evitar el plagio. Se pueden usar herramientas como Turnitin como apoyo, pero la clave del proceso es el aprendizaje para crear contenido 100% original."
    },
    {
      question: "¿Qué ocurre si la calificación no es la esperada?",
      answer: "El objetivo es proporcionar todas las herramientas y conocimientos para obtener la mejor calificación posible. La nota final depende del esfuerzo del estudiante y del criterio de la universidad. Si el resultado no es el esperado, se ofrece apoyo para analizar la situación y encontrar soluciones."
    },
    {
      question: "¿Quién imparte el asesoramiento?",
      answer: "Se asigna un profesional experto en el campo de estudio. No solo una persona con conocimiento en la materia, sino con experiencia específica en trabajos académicos, para ofrecer el apoyo más adecuado a cada proyecto."
    },
    {
      question: "¿Los datos y el tema del trabajo son confidenciales?",
      answer: "Sí. La confidencialidad es un pilar fundamental del servicio. Toda la información del proyecto y los datos personales se tratan con la máxima discreción, en cumplimiento riguroso con la Ley de Protección de Datos (RGPD)."
    },
    {
      question: "¿Cuál es el coste del proceso?",
      answer: "El coste depende de las necesidades de cada proyecto. No hay dos trabajos iguales. Por ello, el primer paso es una consulta gratuita para valorar el caso y preparar un presupuesto cerrado, claro y sin sorpresas."
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
            Encuentra respuestas a las preguntas más frecuentes sobre el servicio 
            de asesoramiento académico y cómo puede ayudarte con tu TFG o TFM.
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
            <span>Contactar para más Información</span>
            <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
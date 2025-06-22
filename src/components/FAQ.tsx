import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Vuestro servicio es como 'comprar un TFG'?",
      answer: "Para nada. De hecho, estamos totalmente en contra de esas prácticas. Nuestro trabajo es darte clases particulares y asesoramiento. Te enseñamos a investigar, a redactar y a estructurar tu trabajo para que seas tú quien lo cree, con nuestra guía y apoyo. El mérito y la autoría son siempre tuyos."
    },
    {
      question: "¿Cómo sé que mi trabajo será original?",
      answer: "Porque lo escribirás tú. Nosotros te guiaremos en cómo citar correctamente y evitar el plagio. Además, podemos usar herramientas como Turnitin para revisar borradores, pero son solo una ayuda. La clave es que, con nuestro acompañamiento, aprenderás a crear contenido 100% original."
    },
    {
      question: "¿Qué pasa si suspendo?",
      answer: "Nuestro objetivo es darte todas las herramientas y conocimientos para que apruebes con nota. La nota final depende de ti y del criterio de tu universidad, pero nos comprometemos a fondo contigo. Si algo no sale bien, seguiremos aquí para ayudarte a analizar qué pasó y cómo solucionarlo."
    },
    {
      question: "¿Quién será mi tutor?",
      answer: "Te asignaremos un profesional experto en tu campo. No es solo alguien que sabe del tema, sino una persona con experiencia en trabajos académicos, que entiende lo que necesitas y te hablará de tú a tú para que saques lo mejor de tu proyecto."
    },
    {
      question: "¿Mis datos y el tema de mi trabajo son confidenciales?",
      answer: "Totalmente. La confidencialidad es sagrada para nosotros. Todo lo que hables con tu tutor y la información de tu proyecto se trata con la máxima discreción, cumpliendo rigurosamente la Ley de Protección de Datos (RGPD)."
    },
    {
      question: "¿Cuánto me va a costar todo el proceso?",
      answer: "Depende de lo que necesites. No hay dos proyectos iguales. Por eso, primero hablamos contigo, entendemos tu caso y te preparamos un presupuesto cerrado, claro y sin sorpresas. La primera consulta para valorar tu caso es siempre gratuita."
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
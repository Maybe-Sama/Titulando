import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Send, CheckCircle, Sparkles, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    subject: '',
    pages: '',
    deadline: '',
    message: '',
    privacy: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-neutral-light/30 to-transparent"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-bl from-primary-500/10 to-accent-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-mint-500/10 to-primary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 px-4 py-2 rounded-full mb-6">
            <MessageSquare className="h-4 w-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-600">Contacto</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-neutral-dark mb-8">
            ¿Listo para
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent block">
              Empezar?
            </span>
          </h2>
          <p className="text-xl text-neutral-dark/80 max-w-3xl mx-auto">
            Solicita un presupuesto personalizado sin compromiso 
            para tu proyecto académico. El servicio está diseñado para ayudarte a alcanzar el éxito.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-display font-bold text-neutral-dark mb-8">
              Información de Contacto
            </h3>
            
            <div className="space-y-6 mb-8">
              {[
                { icon: Phone, title: "Teléfono", content: "+34 655 90 92 17", href: "tel:+34655909217", color: "from-primary-500 to-primary-600" },
                { icon: Mail, title: "Email", content: "titulando@gmail.com", href: "mailto:titulando@gmail.com", color: "from-accent-500 to-accent-400" },
                { icon: Clock, title: "Horario de Atención", content: "Lunes a Viernes: 9:00 - 20:00", color: "from-mint-500 to-primary-500" },
                { icon: MapPin, title: "Servicio", content: "Online a Nivel Nacional\nToda España", color: "from-primary-600 to-accent-500" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className={`bg-gradient-to-br ${item.color} p-3 rounded-2xl shadow-soft group-hover:shadow-soft-lg transition-all duration-300`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-neutral-dark mb-1">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-primary-500 hover:text-primary-600 transition-colors font-medium">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-neutral-dark/70 whitespace-pre-line">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-br from-primary-500/5 to-accent-500/5 p-6 rounded-2xl border border-primary-500/10 backdrop-blur-sm">
              <h4 className="font-display font-semibold text-neutral-dark mb-4 flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-primary-500" />
                <span>Garantías del Servicio</span>
              </h4>
              <div className="space-y-3">
                {[
                  "Respuesta en menos de 24 horas",
                  "Presupuesto gratuito y sin compromiso",
                  "Confidencialidad total garantizada"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-full p-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-neutral-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-neutral-light/50 to-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-soft-lg border border-white/50">
              <h3 className="text-2xl font-display font-bold text-neutral-dark mb-6 flex items-center space-x-2">
                <Send className="h-6 w-6 text-primary-500" />
                <span>Solicitar Presupuesto Gratuito</span>
              </h3>
              
              {isSubmitted ? (
                <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-2xl p-6 text-center backdrop-blur-sm">
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-display font-semibold text-primary-600 mb-2">¡Solicitud Enviada!</h4>
                  <p className="text-neutral-dark/80">
                    Gracias por contactarnos. Te responderemos en menos de 24 horas con tu presupuesto personalizado.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-light rounded-2xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-light rounded-2xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark mb-2">
                        Teléfono (Opcional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-light rounded-2xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="+34 655 90 92 17"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-neutral-dark mb-2">
                        Tipo de Trabajo *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-light rounded-2xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="TFG">TFG (Trabajo de Fin de Grado)</option>
                        <option value="TFM">TFM (Trabajo de Fin de Máster)</option>
                        <option value="Tesis">Tesis Doctoral</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-dark mb-2">
                      Temática/Área de Estudio *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-light rounded-2xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="Ej: Psicología, Marketing, Ingeniería, etc."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="pages" className="block text-sm font-medium text-neutral-dark mb-2">
                        Número Estimado de Páginas
                      </label>
                      <input
                        type="number"
                        id="pages"
                        name="pages"
                        value={formData.pages}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-light rounded-2xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="Ej: 50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="deadline" className="block text-sm font-medium text-neutral-dark mb-2">
                        Fecha Límite (Aproximada)
                      </label>
                      <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-light rounded-2xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-2">
                      Describe tus Necesidades
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-light rounded-2xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm"
                      placeholder="Cuéntanos más detalles sobre tu proyecto y qué tipo de ayuda necesitas..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      checked={formData.privacy}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-primary-500 focus:ring-primary-500/50 border-neutral-light rounded"
                    />
                    <label htmlFor="privacy" className="text-sm text-neutral-dark/80">
                      He leído y acepto la{' '}
                      <a href="#" className="text-primary-500 hover:text-primary-600 font-medium">Política de Privacidad</a>{' '}
                      y los{' '}
                      <a href="#" className="text-primary-500 hover:text-primary-600 font-medium">Términos y Condiciones</a> *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-accent-500 to-accent-400 text-neutral-dark px-8 py-4 rounded-2xl hover:shadow-accent transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 group"
                  >
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Enviar Solicitud de Presupuesto</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
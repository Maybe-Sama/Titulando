import React from 'react';
import { GraduationCap, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-neutral-dark to-primary-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-bl from-primary-500/10 to-accent-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-mint-500/10 to-primary-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6 group">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-2xl shadow-soft">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-accent-500 animate-pulse-soft" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold">Titulando</h3>
                <p className="text-white/70">Asesoramiento académico para TFG y TFM</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Somos especialistas en asesoramiento académico para TFG y TFM. 
              Ofrecemos apoyo legal, ético y profesional para que desarrolles 
              tu proyecto final con excelencia y originalidad.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 flex items-center space-x-2">
              <Phone className="h-5 w-5 text-accent-500" />
              <span>Contacto</span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-2 rounded-xl">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <a href="tel:+34655909217" className="text-white/80 hover:text-white transition-colors">
                  +34 655 90 92 17
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-accent-500 to-primary-500 p-2 rounded-xl">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <a href="mailto:titulando@gmail.com" className="text-white/80 hover:text-white transition-colors">
                  titulando@gmail.com
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-display font-semibold mb-2 text-accent-500">Horario de Atención</h5>
              <p className="text-white/70 text-sm">Lunes a Viernes: 9:00 - 20:00</p>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-accent-500" />
              <span>Enlaces Legales</span>
            </h4>
            <div className="space-y-3">
              {[
                { label: 'Aviso Legal', path: '/aviso-legal' },
                { label: 'Política de Privacidad', path: '/politica-privacidad' },
                { label: 'Política de Cookies', path: '/politica-cookies' },
                { label: 'Términos y Condiciones', path: '/terminos-condiciones' }
              ].map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="block text-white/80 hover:text-white transition-colors hover:translate-x-1 duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="mt-6">
              <h5 className="font-display font-semibold mb-2 text-accent-500">Servicios</h5>
              <div className="space-y-2">
                {['Asesoramiento TFG', 'Tutorización TFM', 'Apoyo Académico'].map((service, index) => (
                  <p key={index} className="text-white/70 text-sm">{service}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              © {currentYear} Titulando. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-white/70">
              <span>Servicio Online Nacional</span>
              <span>•</span>
              <span>Asesoramiento Legal y Ético</span>
              <span>•</span>
              <span>Confidencialidad Garantizada</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/5">
            <p className="text-xs text-white/60 text-center leading-relaxed">
              Importante: El servicio consiste en asesoramiento, tutorización y apoyo académico. 
              No se realizan ni venden trabajos académicos. El objetivo es guiar al estudiante para que desarrolle 
              su propio TFG/TFM con originalidad y calidad académica. La responsabilidad de la entrega 
              final y su evaluación corresponde exclusivamente al estudiante.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
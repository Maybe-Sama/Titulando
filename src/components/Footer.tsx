import React from 'react';
import { GraduationCap, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Sparkles } from 'lucide-react';

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
                <h3 className="text-2xl font-display font-bold">Tu TFG Éxito</h3>
                <p className="text-white/70">Tu guía experta para un TFG/TFM de sobresaliente</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Somos especialistas en asesoramiento académico para TFG y TFM. 
              Ofrecemos apoyo legal, ético y profesional para que desarrolles 
              tu proyecto final con excelencia y originalidad.
            </p>
            
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 transition-all duration-300 group"
                >
                  <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
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
                <a href="tel:+34900123456" className="text-white/80 hover:text-white transition-colors">
                  +34 900 123 456
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-accent-500 to-primary-500 p-2 rounded-xl">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <a href="mailto:info@tutfgexito.com" className="text-white/80 hover:text-white transition-colors">
                  info@tutfgexito.com
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-display font-semibold mb-2 text-accent-500">Horario de Atención</h5>
              <p className="text-white/70 text-sm">Lunes a Viernes: 9:00 - 20:00</p>
              <p className="text-white/70 text-sm">Sábados: 10:00 - 14:00</p>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-accent-500" />
              <span>Enlaces Legales</span>
            </h4>
            <div className="space-y-3">
              {['Aviso Legal', 'Política de Privacidad', 'Política de Cookies', 'Términos y Condiciones'].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-white/80 hover:text-white transition-colors hover:translate-x-1 duration-300"
                >
                  {link}
                </a>
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
              © {currentYear} Tu TFG Éxito. Todos los derechos reservados.
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
              Importante: Nuestro servicio es de asesoramiento, tutorización y apoyo académico. 
              No vendemos trabajos académicos. El objetivo es guiar al estudiante para que desarrolle 
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
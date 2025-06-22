import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-soft border-b border-neutral-light' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-2xl shadow-soft group-hover:shadow-soft-lg transition-all duration-300">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-accent-500 animate-pulse-soft" />
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-neutral-dark">Titulando</h1>
              <p className="text-sm text-primary-500 font-medium">Asesoramiento experto para un TFG/TFM de sobresaliente</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { path: '/', label: 'Inicio' },
              { path: '/servicios', label: 'Servicios' },
              { path: '/proceso', label: 'Cómo Trabajamos' },
              { path: '/planes', label: 'Planes' },
              { path: '/nosotros', label: 'El Servicio' },
              { path: '/contacto', label: 'Contacto' }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`relative text-neutral-dark hover:text-primary-500 transition-all duration-300 font-medium group ${
                  isActive(item.path) ? 'text-primary-500' : ''
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
                  isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link 
            to="/contacto"
            className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-accent-500 to-accent-400 text-neutral-dark px-6 py-3 rounded-2xl hover:shadow-accent transition-all duration-300 font-semibold group"
          >
            <span>Presupuesto Gratuito</span>
            <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-neutral-light transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-neutral-dark" /> : <Menu className="h-6 w-6 text-neutral-dark" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 py-6 border-t border-neutral-light animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {[
                { path: '/', label: 'Inicio' },
                { path: '/servicios', label: 'Servicios' },
                { path: '/proceso', label: 'Cómo Trabajamos' },
                { path: '/planes', label: 'Planes' },
                { path: '/nosotros', label: 'El Servicio' },
                { path: '/contacto', label: 'Contacto' }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`text-left text-neutral-dark hover:text-primary-500 transition-colors duration-300 py-2 font-medium ${
                    isActive(item.path) ? 'text-primary-500' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                to="/contacto"
                onClick={closeMenu}
                className="bg-gradient-to-r from-accent-500 to-accent-400 text-neutral-dark px-6 py-3 rounded-2xl hover:shadow-accent transition-all duration-300 font-semibold mt-4 flex items-center justify-center space-x-2"
              >
                <span>Presupuesto Gratuito</span>
                <Sparkles className="h-4 w-4" />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
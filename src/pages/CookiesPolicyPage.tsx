import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';
import Footer from '../components/Footer';

const CookiesPolicyPage = () => {
  return (
    <>
      <LegalPageLayout title="Política de Cookies">
        <h3>1. ¿Qué son las cookies?</h3>
        <p>
          Una cookie es un fichero que se descarga en tu ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
        </p>

        <h3>2. ¿Qué tipos de cookies utiliza este sitio web?</h3>
        <p>
          Este sitio web utiliza principalmente cookies técnicas y de personalización, que son esenciales para el funcionamiento del sitio y para recordar las preferencias del usuario (por ejemplo, el idioma). No se utilizan cookies de análisis de terceros ni cookies publicitarias.
        </p>
        <ul>
          <li><strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existan.</li>
          <li><strong>Cookies de personalización:</strong> Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario.</li>
        </ul>

        <h3>3. Desactivación o eliminación de cookies</h3>
        <p>
          Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador. Al desactivar cookies, algunos de los servicios disponibles podrían dejar de estar operativos.
        </p>
      </LegalPageLayout>
      <Footer />
    </>
  );
};

export default CookiesPolicyPage; 
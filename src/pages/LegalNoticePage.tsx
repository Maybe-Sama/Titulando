import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';
import Footer from '../components/Footer';

const LegalNoticePage = () => {
  return (
    <>
      <LegalPageLayout title="Aviso Legal">
        <p>
          De conformidad con la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los siguientes datos de información general de este sitio web:
        </p>
        <ul>
          <li><strong>Titular:</strong> [Tu Nombre o Nombre de la Empresa]</li>
          <li><strong>Email de contacto:</strong> titulando@gmail.com</li>
        </ul>

        <h3>1. Objeto</h3>
        <p>
          El presente aviso legal regula el uso del sitio web Titulando (en adelante, "el sitio web"). El titular del sitio web ofrece servicios de asesoramiento y tutorización académica para la elaboración de Trabajos de Fin de Grado (TFG), Trabajos de Fin de Máster (TFM) y proyectos similares. Nuestros servicios consisten en una guía y apoyo educativo, y en ningún caso implican la redacción o venta de trabajos académicos.
        </p>

        <h3>2. Condiciones de Uso</h3>
        <p>
          El acceso y uso del sitio web le atribuye la condición de usuario, y supone la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que el titular ofrece a través de su portal y con carácter enunciativo pero no limitativo, a no emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe y al ordenamiento legal.
        </p>

        <h3>3. Propiedad Intelectual</h3>
        <p>
          Todos los derechos de propiedad intelectual del contenido de este sitio web y su diseño gráfico son propiedad exclusiva del titular, a quien corresponde el ejercicio exclusivo de los derechos de explotación de los mismos. Queda prohibida su reproducción, distribución, comunicación pública, transformación, total o parcial, sin la autorización expresa del titular.
        </p>

        <h3>4. Responsabilidad</h3>
        <p>
          El titular no se hace responsable del contenido de los sitios web de terceros a los que se pueda acceder a través de enlaces en el sitio web. El servicio prestado es de asesoramiento y guía, y la responsabilidad sobre el contenido, la originalidad y la defensa del trabajo final recae exclusivamente en el estudiante.
        </p>
        
        <h3>5. Legislación Aplicable</h3>
        <p>
          El presente Aviso Legal se regirá e interpretará de acuerdo con las leyes de España.
        </p>
      </LegalPageLayout>
      <Footer />
    </>
  );
};

export default LegalNoticePage; 
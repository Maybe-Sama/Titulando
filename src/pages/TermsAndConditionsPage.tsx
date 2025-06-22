import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';
import Footer from '../components/Footer';

const TermsAndConditionsPage = () => {
  return (
    <>
      <LegalPageLayout title="Términos y Condiciones de Contratación">
        <h3>1. Objeto del Servicio</h3>
        <p>
          Titulando ofrece un servicio de asesoramiento y tutorización académica para estudiantes que estén realizando su TFG, TFM o proyectos similares. El servicio es una guía educativa y de apoyo. No se realizan, redactan ni venden trabajos académicos.
        </p>

        <h3>2. Proceso de Contratación</h3>
        <p>
          El proceso comienza con una consulta gratuita en la que el estudiante expone sus necesidades. A continuación, se elabora un presupuesto personalizado. La aceptación de dicho presupuesto y el pago inicial (si aplica) formalizan el inicio del servicio.
        </p>

        <h3>3. Obligaciones del Estudiante</h3>
        <p>
          El estudiante es el único autor y responsable de su trabajo. Se compromete a utilizar el asesoramiento de manera ética y a no presentar como propio ningún contenido que no haya elaborado. El estudiante es responsable de cumplir los plazos y directrices de su universidad.
        </p>
        
        <h3>4. Precios y Forma de Pago</h3>
        <p>
          Los precios se establecen en el presupuesto personalizado. Las formas de pago se acordarán entre el titular y el estudiante.
        </p>

        <h3>5. Política de Desistimiento y Reembolsos</h3>
        <p>
          Dado que se trata de un servicio de prestación intelectual personalizado, una vez iniciado el servicio, no se realizarán reembolsos. Si el estudiante desea desistir, deberá comunicarlo por escrito.
        </p>
      </LegalPageLayout>
      <Footer />
    </>
  );
};

export default TermsAndConditionsPage; 
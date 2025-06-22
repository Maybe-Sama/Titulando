import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <>
      <LegalPageLayout title="Política de Privacidad">
        <h3>1. ¿Quién es el responsable del tratamiento de tus datos?</h3>
        <ul>
            <li><strong>Titular:</strong> [Tu Nombre o Nombre de la Empresa]</li>
            <li><strong>Email de contacto:</strong> titulando@gmail.com</li>
        </ul>

        <h3>2. ¿Con qué finalidad tratamos tus datos personales?</h3>
        <p>
          Tratamos la información que nos facilitas con el fin de prestarte el servicio de asesoramiento solicitado, realizar la facturación del mismo y gestionar la relación contractual. Los datos proporcionados a través del formulario de contacto se utilizarán exclusivamente para responder a tu consulta y proporcionarte un presupuesto.
        </p>

        <h3>3. ¿Por cuánto tiempo conservaremos tus datos?</h3>
        <p>
          Los datos se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales.
        </p>
        
        <h3>4. ¿Cuál es la legitimación para el tratamiento de tus datos?</h3>
        <p>
          La base legal para el tratamiento de tus datos es la ejecución del contrato de servicios que has solicitado, así como el consentimiento que nos otorgas al contactarnos.
        </p>

        <h3>5. ¿A qué destinatarios se comunicarán tus datos?</h3>
        <p>
          Tus datos no se cederán a terceros, salvo obligación legal. Garantizamos la máxima confidencialidad.
        </p>
        
        <h3>6. ¿Cuáles son tus derechos cuando nos facilitas tus datos?</h3>
        <p>
          Tienes derecho a obtener confirmación sobre si estamos tratando tus datos personales. Tienes derecho a acceder a tus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. Para ejercer tus derechos, puedes contactarnos a través de nuestro email.
        </p>
      </LegalPageLayout>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage; 
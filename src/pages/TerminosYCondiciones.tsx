import React from 'react';
import { useNavigate } from 'react-router-dom';

function TerminosYCondiciones() {
  const navigate = useNavigate();

  const handleAcceptTerms = () => {
    // Here you would typically store the acceptance in localStorage or send to backend
    localStorage.setItem('tecnoslab_terms_accepted', 'true');
    localStorage.setItem('tecnoslab_terms_acceptance_date', new Date().toISOString());
    alert('Términos y condiciones aceptados correctamente.');
    navigate('/');
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white">
      {/* Header with navigation */}
      <header className="bg-blue-800 py-4 print:hidden">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => navigate('/')}
              className="text-white hover:text-blue-200 transition-colors"
            >
              ← Volver al sitio web
            </button>
            <button 
              onClick={handlePrint}
              className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
            >
              🖨️ Imprimir
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-8 py-12">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          TÉRMINOS Y CONDICIONES DE USO
        </h1>

        {/* Last updated */}
        <div className="text-center mb-12">
          <p className="text-blue-200">
            Última actualización: 15 de enero de 2025
          </p>
        </div>

        {/* Navigation Index */}
        <nav className="bg-blue-800 p-6 rounded-lg mb-12 print:hidden" aria-label="Índice de contenidos">
          <h2 className="text-xl font-bold mb-4">Índice de Contenidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              { id: 'seccion-1', title: '1. Objeto y Ámbito de Aplicación' },
              { id: 'seccion-2', title: '2. Definiciones' },
              { id: 'seccion-3', title: '3. Aceptación de los Términos' },
              { id: 'seccion-4', title: '4. Servicios Ofrecidos' },
              { id: 'seccion-5', title: '5. Obligaciones del Usuario' },
              { id: 'seccion-6', title: '6. Obligaciones de Tecnoslab' },
              { id: 'seccion-7', title: '7. Propiedad Intelectual' },
              { id: 'seccion-8', title: '8. Privacidad y Protección de Datos' },
              { id: 'seccion-9', title: '9. Limitación de Responsabilidad' },
              { id: 'seccion-10', title: '10. Indemnización' },
              { id: 'seccion-11', title: '11. Modificaciones' },
              { id: 'seccion-12', title: '12. Disposiciones Generales' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-blue-200 hover:text-white hover:underline transition-colors p-2 rounded hover:bg-blue-700"
              >
                {item.title}
              </button>
            ))}
          </div>
        </nav>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          <section id="seccion-1" className="scroll-mt-4">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-300 pb-2">
              1. OBJETO Y ÁMBITO DE APLICACIÓN
            </h2>
            <p className="mb-4 leading-relaxed">
              Los presentes Términos y Condiciones de Uso (en adelante, "los Términos") regulan el acceso y uso 
              del sitio web de TECNOSLAB, S.A. DE C.V. (en adelante, "Tecnoslab", "la Empresa", "nosotros" o "nuestro"), 
              así como los servicios ofrecidos a través del mismo.
            </p>
            <p className="mb-4 leading-relaxed">
              Estos Términos constituyen un acuerdo legalmente vinculante entre usted (en adelante, "el Usuario", 
              "usted" o "su") y Tecnoslab. El uso de nuestro sitio web y servicios implica la aceptación plena y 
              sin reservas de todos los términos aquí establecidos.
            </p>
            <p className="leading-relaxed">
              El ámbito de aplicación de estos Términos se extiende a todos los usuarios del sitio web, 
              independientemente de su ubicación geográfica, y a todos los servicios, productos y contenidos 
              ofrecidos por Tecnoslab a través de cualquier medio digital.
            </p>
          </section>

          <section id="seccion-2" className="scroll-mt-4">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-300 pb-2">
              2. DEFINICIONES
            </h2>
            <p className="mb-4 leading-relaxed">
              Para los efectos de estos Términos, los siguientes términos tendrán el significado que a 
              continuación se indica:
            </p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li><strong>"Sitio Web":</strong> La plataforma digital de Tecnoslab accesible a través de la dirección web correspondiente.</li>
              <li><strong>"Servicios":</strong> Los servicios de instalación, mantenimiento, reparación y consultoría de pisos industriales ofrecidos por Tecnoslab.</li>
              <li><strong>"Contenido":</strong> Toda información, texto, gráficos, imágenes, videos, software y demás materiales disponibles en el Sitio Web.</li>
              <li><strong>"Usuario Registrado":</strong> Persona física o moral que ha completado el proceso de registro en el Sitio Web.</li>
              <li><strong>"Datos Personales":</strong> Cualquier información concerniente a una persona física identificada o identificable.</li>
              <li><strong>"Cookies":</strong> Pequeños archivos de texto que se almacenan en el dispositivo del Usuario para mejorar la experiencia de navegación.</li>
            </ul>
          </section>

          <section id="seccion-3" className="scroll-mt-4">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-300 pb-2">
              3. ACEPTACIÓN DE LOS TÉRMINOS
            </h2>
            <p className="mb-4 leading-relaxed">
              El acceso y uso del Sitio Web implica la aceptación expresa e inequívoca de estos Términos y 
              Condiciones, así como de la Política de Privacidad de Tecnoslab. Si usted no está de acuerdo 
              con alguno de estos términos, deberá abstenerse de utilizar el Sitio Web.
            </p>
            <p className="mb-4 leading-relaxed">
              La aceptación de estos Términos se considera perfeccionada en el momento en que el Usuario 
              accede al Sitio Web por primera vez o utiliza cualquiera de los servicios ofrecidos. Para 
              Usuarios Registrados, la aceptación se formaliza mediante el proceso de registro.
            </p>
            <p className="leading-relaxed">
              Tecnoslab se reserva el derecho de requerir la aceptación expresa de estos Términos mediante 
              mecanismos adicionales, incluyendo pero no limitándose a casillas de verificación, formularios 
              de aceptación digital o confirmación por correo electrónico.
            </p>
          </section>

          <section id="seccion-4" className="scroll-mt-4">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-300 pb-2">
              4. SERVICIOS OFRECIDOS
            </h2>
            <p className="mb-4 leading-relaxed">
              Tecnoslab ofrece a través de su Sitio Web información detallada sobre los siguientes servicios:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li>Instalación de pisos industriales de alta planicidad</li>
              <li>Mantenimiento preventivo y correctivo de pisos industriales</li>
              <li>Reparación especializada de superficies industriales</li>
              <li>Consultoría técnica en pisos industriales</li>
              <li>Medición y certificación de planicidad</li>
              <li>Diseño y especificación de proyectos</li>
            </ul>
            <p className="mb-4 leading-relaxed">
              La información proporcionada en el Sitio Web tiene carácter informativo y no constituye una 
              oferta comercial vinculante. Las condiciones específicas de cada servicio se establecerán 
              mediante contratos independientes entre Tecnoslab y el cliente.
            </p>
            <p className="leading-relaxed">
              Tecnoslab se reserva el derecho de modificar, suspender o discontinuar cualquier servicio 
              en cualquier momento, sin previo aviso, y sin incurrir en responsabilidad hacia el Usuario 
              o terceros.
            </p>
          </section>

          <section id="seccion-5" className="scroll-mt-4">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-300 pb-2">
              5. OBLIGACIONES DEL USUARIO
            </h2>
            <p className="mb-4 leading-relaxed">
              El Usuario se compromete a utilizar el Sitio Web de manera lícita y conforme a estos Términos, 
              la legislación aplicable y las buenas costumbres. En particular, el Usuario se obliga a:
            </p>
            <ul className="list-disc list-inside space-y-3 ml-4 mb-6">
              <li>Proporcionar información veraz, exacta y actualizada en todos los formularios del Sitio Web</li>
              <li>Mantener la confidencialidad de sus credenciales de acceso, si las hubiere</li>
              <li>No utilizar el Sitio Web para fines ilegales, fraudulentos o no autorizados</li>
              <li>No interferir con el funcionamiento normal del Sitio Web o los servidores que lo alojan</li>
              <li>No transmitir virus, malware o código malicioso de cualquier tipo</li>
              <li>Respetar los derechos de propiedad intelectual de Tecnoslab y terceros</li>
              <li>No realizar ingeniería inversa, descompilación o desmontaje del Sitio Web</li>
            </ul>
            <p className="leading-relaxed">
              El incumplimiento de estas obligaciones facultará a Tecnoslab para suspender o terminar 
              el acceso del Usuario al Sitio Web, sin perjuicio de las acciones legales que correspondan.
            </p>
          </section>

          <section id="seccion-6" className="scroll-mt-4">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-300 pb-2">
              6. OBLIGACIONES DE TECNOSLAB
            </h2>
            <p className="mb-4 leading-relaxed">
              Tecnoslab se compromete a mantener el Sitio Web disponible las 24 horas del día, los 365 días 
              del año, salvo por interrupciones por mantenimiento programado, fallas técnicas o causas de 
              fuerza mayor.
            </p>
            <p className="mb-4 leading-relaxed">
              Tecnoslab se esforzará por mantener la información del Sitio Web actualizada y precisa, 
              pero no garantiza la exactitud, integridad o actualidad de toda la información proporcionada.
            </p>
            <p className="mb-4 leading-relaxed">
              La Empresa implementará medidas de seguridad técnicas y organizativas apropiadas para proteger 
              los datos personales de los Usuarios, conforme a la legislación aplicable en materia de 
              protección de datos personales.
            </p>
            <p className="leading-relaxed">
              Tecnoslab se reserva el derecho de realizar mantenimientos, actualizaciones o modificaciones 
              al Sitio Web que puedan resultar en interrupciones temporales del servicio, procurando 
              notificar con anticipación cuando sea posible.
            </p>
          </section>

          <section id="seccion-7" className="scroll-mt-4">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-300 pb-2">
              7. PROPIEDAD INTELECTUAL
            </h2>
            <p className="mb-4 leading-relaxed">
              Todos los derechos de propiedad intelectual del Sitio Web, incluyendo pero no limitándose a 
              textos, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales, 
              compilaciones de datos y software, son propiedad exclusiva de Tecnoslab o de sus licenciantes.
            </p>
            <p className="mb-4 leading-relaxed">
              El Contenido del Sitio Web está protegido por las leyes de derechos de autor, marcas 
              registradas y otras leyes de propiedad intelectual de México y tratados internacionales. 
              Queda prohibida la reproducción, distribución, comunicación pública o transformación del 
              Contenido sin autorización expresa de Tecnoslab.
            </p>
            <p className="mb-4 leading-relaxed">
              Las marcas comerciales "TECNOSLAB", "TecnoMG", "TecnoCM" y cualquier otra marca, nombre 
              comercial o signo distintivo utilizado en el Sitio Web son propiedad exclusiva de Tecnoslab 
              y están protegidas por las leyes aplicables.
            </p>
            <p className="leading-relaxed">
              Se concede al Usuario una licencia limitada, no exclusiva, no transferible y revocable para 
              acceder y utilizar el Sitio Web únicamente para fines personales y no comerciales, conforme 
              a estos Términos.
            </p>
          </section>

          <section id="seccion-8" className="scroll-mt-4">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-300 pb-2">
              8. PRIVACIDAD Y PROTECCIÓN DE DATOS
            </h2>
            <p className="mb-4 leading-relaxed">
              El tratamiento de datos personales por parte de Tecnoslab se rige por su 
              <a href="/politica-privacidad" className="text-blue-300 underline hover:text-blue-200">
                Política de Privacidad
              </a>, 
              que forma parte integral de estos Términos y se encuentra disponible en el Sitio Web.
            </p>
            <p className="mb-4 leading-relaxed">
              Tecnoslab cumple con la Ley Federal de Protección de Datos Personales en Posesión de los 
              Particulares y su Reglamento, así como con las disposiciones emitidas por el Instituto 
              Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI).
            </p>
            <p className="mb-4 leading-relaxed">
              El Usuario tiene derecho al acceso, rectificación, cancelación y oposición (derechos ARCO) 
              respecto de sus datos personales, conforme a los procedimientos establecidos en la Política 
              de Privacidad.
            </p>
            <p className="leading-relaxed">
              El Sitio Web puede utilizar cookies y tecnologías similares para mejorar la experiencia 
              del Usuario. La información sobre el uso de cookies se encuentra detallada en la Política 
              de Privacidad.
            </p>
          </section>

          <section id="seccion-9" className="scroll-mt-4">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-300 pb-2">
              9. LIMITACIÓN DE RESPONSABILIDAD
            </h2>
            <p className="mb-4 leading-relaxed">
              En la máxima medida permitida por la ley aplicable, Tecnoslab no será responsable por 
              daños directos, indirectos, incidentales, especiales, consecuenciales o punitivos que 
              resulten del uso o la imposibilidad de usar el Sitio Web.
            </p>
            <p className="mb-4 leading-relaxed">
              Tecnoslab no garantiza que el Sitio Web estará libre de errores, virus u otros componentes 
              dañinos, ni que las fallas serán corregidas. El Usuario asume el riesgo de cualquier daño 
              a su sistema informático que resulte del acceso al Sitio Web.
            </p>
            <p className="mb-4 leading-relaxed">
              La responsabilidad total de Tecnoslab hacia el Usuario por cualquier concepto no excederá 
              el monto efectivamente pagado por el Usuario a Tecnoslab, si lo hubiere, por el servicio 
              específico que dio origen al reclamo.
            </p>
            <p className="leading-relaxed">
              Estas limitaciones no aplicarán en caso de dolo, culpa grave o violaciones a los derechos 
              fundamentales del Usuario por parte de Tecnoslab, conforme a la legislación aplicable.
            </p>
          </section>

          <section id="seccion-10" className="scroll-mt-4">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-300 pb-2">
              10. INDEMNIZACIÓN
            </h2>
            <p className="mb-4 leading-relaxed">
              El Usuario acepta indemnizar, defender y mantener en paz y a salvo a Tecnoslab, sus 
              directivos, empleados, agentes y representantes, de y contra todas las reclamaciones, 
              demandas, pérdidas, responsabilidades, costos y gastos (incluyendo honorarios razonables 
              de abogados) que surjan de:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li>El uso del Sitio Web por parte del Usuario</li>
              <li>La violación de estos Términos por parte del Usuario</li>
              <li>La violación de cualquier derecho de terceros por parte del Usuario</li>
              <li>Cualquier información o contenido proporcionado por el Usuario</li>
            </ul>
            <p className="leading-relaxed">
              Esta obligación de indemnización sobrevivirá a la terminación de estos Términos y del 
              uso del Sitio Web por parte del Usuario.
            </p>
          </section>

          <section id="seccion-11" className="scroll-mt-4">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-300 pb-2">
              11. MODIFICACIONES
            </h2>
            <p className="mb-4 leading-relaxed">
              Tecnoslab se reserva el derecho de modificar estos Términos en cualquier momento, a su 
              sola discreción. Las modificaciones entrarán en vigor inmediatamente después de su 
              publicación en el Sitio Web.
            </p>
            <p className="mb-4 leading-relaxed">
              Las modificaciones sustanciales serán notificadas a los Usuarios Registrados por correo 
              electrónico con al menos 15 días de anticipación a su entrada en vigor. Para otros 
              Usuarios, la notificación se realizará mediante aviso prominente en el Sitio Web.
            </p>
            <p className="mb-4 leading-relaxed">
              El uso continuado del Sitio Web después de la publicación de las modificaciones constituirá 
              la aceptación de los nuevos términos. Si el Usuario no está de acuerdo con las modificaciones, 
              deberá cesar el uso del Sitio Web.
            </p>
            <p className="leading-relaxed">
              Se recomienda a los Usuarios revisar periódicamente estos Términos para mantenerse 
              informados sobre cualquier cambio.
            </p>
          </section>

          <section id="seccion-12" className="scroll-mt-4">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-300 pb-2">
              12. DISPOSICIONES GENERALES
            </h2>
            <p className="mb-4 leading-relaxed">
              <strong>12.1 Ley Aplicable y Jurisdicción:</strong> Estos Términos se regirán por las 
              leyes de México. Cualquier controversia que surja en relación con estos Términos será 
              sometida a la jurisdicción exclusiva de los tribunales competentes de Querétaro, Querétaro.
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>12.2 Divisibilidad:</strong> Si cualquier disposición de estos Términos es 
              declarada inválida o inejecutable, las disposiciones restantes permanecerán en pleno 
              vigor y efecto.
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>12.3 Acuerdo Completo:</strong> Estos Términos, junto con la Política de 
              Privacidad, constituyen el acuerdo completo entre el Usuario y Tecnoslab respecto 
              al uso del Sitio Web.
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>12.4 Cesión:</strong> El Usuario no podrá ceder o transferir sus derechos u 
              obligaciones bajo estos Términos sin el consentimiento previo y por escrito de Tecnoslab.
            </p>
            <p className="leading-relaxed">
              <strong>12.5 Supervivencia:</strong> Las disposiciones que por su naturaleza deban 
              sobrevivir a la terminación de estos Términos, incluidas las relativas a propiedad 
              intelectual, limitación de responsabilidad e indemnización, continuarán en vigor.
            </p>
          </section>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-800 p-8 rounded-lg mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">INFORMACIÓN DE CONTACTO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2">TECNOSLAB, S.A. DE C.V.</h3>
              <p className="mb-2">RFC: TEC123456789</p>
              <p className="mb-2">Av. Industria 245, Parque Industrial</p>
              <p className="mb-2">Querétaro, QRO 76120, México</p>
            </div>
            <div>
              <p className="mb-2"><strong>Teléfono:</strong> +52 (442) 123-4567</p>
              <p className="mb-2"><strong>Email Legal:</strong> legal@tecnoslab.mx</p>
              <p className="mb-2"><strong>Email General:</strong> info@tecnoslab.mx</p>
              <p><strong>Horario:</strong> Lunes a Viernes, 8:00 - 18:00 hrs</p>
            </div>
          </div>
        </div>

        {/* Accept Terms Button */}
        <div className="text-center mt-12 print:hidden">
          <button
            onClick={handleAcceptTerms}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
          >
            ✓ Acepto los Términos y Condiciones
          </button>
          <p className="mt-4 text-blue-200 text-sm">
            Al hacer clic en "Acepto", confirma que ha leído, entendido y acepta estos términos y condiciones.
          </p>
        </div>
      </main>
    </div>
  );
}

export default TerminosYCondiciones;
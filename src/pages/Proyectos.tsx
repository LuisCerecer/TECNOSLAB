import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function Proyectos() {
  const location = useLocation();
  const boschRef = useRef<HTMLDivElement>(null);
  const cysRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash) {
      let targetElement: HTMLElement | null = null;
      
      switch (location.hash) {
        case '#bosch':
          targetElement = boschRef.current;
          break;
        case '#cys':
          targetElement = cysRef.current;
          break;
        default: 
          break;
      }
      
      if (targetElement) {
        // Calculate offset to position title at top (accounting for fixed header)
        const headerHeight = 144; // pt-36 = 144px
        const elementTop = targetElement.offsetTop - headerHeight;
        window.scrollTo({ 
          top: Math.max(0, elementTop), 
          behavior: 'auto' 
        });
      }
    } else {
      // Scroll to top if no hash is present
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location]);

  return (
    <div className="pt-36 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Proyectos</h1>
          <p className="text-xl text-gray-700 mb-16 text-center leading-relaxed">
            Descubre nuestras especializaciones a través de los proyectos más destacados que hemos realizado para clientes de diversos sectores. Cada proyecto demuestra nuestro compromiso con la excelencia y la precisión.
          </p>

          <div ref={boschRef} id="bosch" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              BOSCH Ciudad Juárez
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Proyecto integral que incluyó la ingeniería y supervisión de una losa para soportar un sistema AutoStore® así como la medición y certificación de planicidad para las instalaciones de BOSCH en Ciudad Juárez. 
Se realizó la corrección de planicidad para cumplir con la norma de planicidad de AutoStore AS-50997 y emitir el certificado de cumplimiento
                  </p>
                  <h3 className="text-lg font-semibold mb-3 text-blue-800">Especificaciones del Proyecto</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>Area total de la losa 1,300 m2</li>
                    <li>Solución técnica considerando dos secciones de 650 m2 cada una con una combinación de refuerzos de varilla y fibras metálicas</li>
                    <li>Losa con espesor de 20 cm requiriendo un concreto con f’C 350</li>
                    <li>Medición de planicidad con el perfilógrafo ALL-IN-ONE de FACE CONSULTANTS para determinar el cumplimiento de la norma de planicidad</li>
                    <li>•	Corrección por desbaste mecánico de los puntos fuera de especificación</li>
                  </ul>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    El proyecto incluyó la medición y corrección de un área dentro de una nave existente en la cual se instalaría un puente de comunicación con el área nueva. En el área existente se instalaron los puertos de carga y descarga de materiales por lo que fue necesario la corrección de planicidad solamente sobre las huellas de las columnas del puente. 
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="https://res.cloudinary.com/dy089iwsg/image/upload/v1751399679/Bosch_oxxjr4.jpg" 
                    alt="BOSCH Ciudad Juárez" 
                    className="w-full h-auto object-cover rounded-lg shadow-md max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div ref={cysRef} id="cys" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              CYS Querétaro
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Proyecto medición y corrección de pasillos VNA para la operación de un montacargas de 4 ruedas con racks con altura de 11.20 cm especificándose el cumplimiento de un FMIN70
                  </p>
                  <h3 className="text-lg font-semibold mb-3 text-blue-800">Características del Proyecto</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>Losa de concreto construida con un sistema de piso convencional con juntas de control a cada 4 metros.</li>
                    <li>9 pasillos totales con una longitud de 30 metros cada uno</li>
                    <li>Considerando las dimensiones del montacargas y el FMIN70 se cumplieron las siguientes tolerancias:</li>
                      <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                          <li>Elevación transversal: 2.47 mm</li>
                          <li>Elevación longitudinal: 3.10 mm</li>
                          <li>Tasa de cambio: 1.4 mm @ 30 cm</li>
                        </ul>
                  </ul>
                  <p className="text-gray-700 text-lg leading-relaxed">
El proceso de medición y corrección se realizó en un tiempo récord de 10 días. Se utilizó el perfilógrafo ALL-IN-ONE de FACE CONSULTANTS configurado en un arreglo para montacargas de 4 ruedas.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="https://res.cloudinary.com/dy089iwsg/image/upload/v1751399679/CYS_ianrni.jpg" 
                    alt="CYS Querétaro" 
                    className="w-full h-auto object-cover rounded-lg shadow-md max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function Productos() {
  const location = useLocation();
  const tecnoMGRef = useRef<HTMLDivElement>(null);
  const tecnoCMRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash) {
      switch (location.hash) {
        case '#tecnomg':
          tecnoMGRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#tecnocm':
          tecnoCMRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        default:
          break;
      }
    }
  }, [location]);

  return (
    <div className="pt-36 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Productos</h1>
          <p className="text-xl text-gray-700 mb-16 text-center leading-relaxed">
            Ofrecemos una amplia gama de servicios especializados para pisos industriales que van desde la ingeniería hasta la certificación de planicidad. A través de nuestra alianza con CoGri GESPaP, contamos con la tecnología más avanzada del mercado para la medición de planicidad en pisos para sistemas robóticos y pasillos VNA.
          </p>

          <div ref={tecnoMGRef} id="tecnomg" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              TecnoMG
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Sistema especializado para pisos de alta planicidad con tecnología alemana,
                ideal para almacenes automatizados y centros de distribución.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Características Principales</h3>
                  <p className="text-gray-700">
                    Planicidad excepcional para operaciones VNA y sistemas robotizados.
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Aplicaciones</h3>
                  <p className="text-gray-700">
                    Centros logísticos, almacenes automatizados y áreas de alta precisión.
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Beneficios</h3>
                  <p className="text-gray-700">
                    Mayor eficiencia operativa y reducción de costos de mantenimiento.
                  </p>
                </div>
              </div>
              <img 
                src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="TecnoMG Sistema" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          <div ref={tecnoCMRef} id="tecnocm" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              TecnoCM
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Sistema avanzado de control y monitoreo para garantizar la calidad y durabilidad
                de los pisos industriales durante todo su ciclo de vida.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Características Principales</h3>
                  <p className="text-gray-700">
                    Monitoreo continuo y control de calidad avanzado para máxima precisión.
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Aplicaciones</h3>
                  <p className="text-gray-700">
                    Sistemas de sensores para detección temprana y prevención de problemas.
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Beneficios</h3>
                  <p className="text-gray-700">
                    Herramientas de análisis para asegurar cumplimiento de especificaciones.
                  </p>
                </div>
              </div>
              <img 
                src="https://images.pexels.com/photos/1668928/pexels-photo-1668928.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="TecnoCM Sistema" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productos;
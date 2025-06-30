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
                Sistema de reparación de piso industrial a base de óxido de magnesio
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Características Principales</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Alta resistencia al desgaste y a productos químicos.</li>
                    <li>Aplicación rápida y curado en poco tiempo.</li>
                    <li>Superficie lisa y nivelada para operaciones exigentes.</li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Aplicaciones</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Naves industriales y centros logísticos.</li>
                    <li>Almacenes automatizados y de alta precisión.</li>
                    <li>Áreas de tránsito frecuente de maquinaria pesada.</li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Beneficios</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Reducción de costos de mantenimiento.</li>
                    <li>Mayor eficiencia y seguridad operativa.</li>
                    <li>Prolonga la vida útil del piso industrial.</li>
                  </ul>
                </div>
              </div>
              <img 
                src="https://res.cloudinary.com/dy089iwsg/image/upload/v1751255497/MG_fqrsrb.png" 
                alt="TecnoMG Sistema" 
                className="w-full h-80 object-cover rounded-lg shadow-md"
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
                src="https://res.cloudinary.com/dy089iwsg/image/upload/v1751255686/CM_uxmuqt.png" 
                alt="TecnoCM Sistema" 
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productos;
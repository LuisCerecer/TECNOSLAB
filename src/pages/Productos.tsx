import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle, Target, Settings } from 'lucide-react';

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
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">Alta resistencia al desgaste y a productos químicos</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">Aplicación rápida y curado en poco tiempo</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">Superficie lisa y nivelada para operaciones exigentes</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Aplicaciones</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">Naves industriales y centros logísticos</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">Almacenes automatizados y de alta precisión</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">Áreas de tránsito frecuente de maquinaria pesada</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Beneficios</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Settings className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">Reducción de costos de mantenimiento</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Settings className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">Mayor eficiencia y seguridad operativa</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Settings className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">Prolonga la vida útil del piso industrial</span>
                    </div>
                  </div>
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
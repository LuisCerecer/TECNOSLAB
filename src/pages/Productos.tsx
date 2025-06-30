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
        <h1 className="text-3xl font-bold text-gray-800 mb-5">Productos</h1>
        <p className="text-lg text-gray-700 mb-10">
          Ofrecemos una amplia gama de servicios especializados para pisos industriales que van desde la ingeniería hasta la certificación de planicidad. A través de nuestra alianza con CoGri GESPaP, contamos con la tecnología más avanzada del mercado para la medición de planicidad en pisos para sistemas robóticos y pasillos VNA.
        </p>

        <div ref={tecnoMGRef} id="tecnomg" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-3 border-blue-700 pl-3">
            TecnoMG
          </h2>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-700 mb-5">
              Sistema especializado para pisos de alta planicidad con tecnología alemana,
              ideal para almacenes automatizados y centros de distribución.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
              <div className="bg-gray-100 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Características Principales</h3>
                <p className="text-gray-700">
                  Planicidad excepcional para operaciones VNA y sistemas robotizados.
                </p>
              </div>
              <div className="bg-gray-100 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Aplicaciones</h3>
                <p className="text-gray-700">
                  Centros logísticos, almacenes automatizados y áreas de alta precisión.
                </p>
              </div>
              <div className="bg-gray-100 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Beneficios</h3>
                <p className="text-gray-700">
                  Mayor eficiencia operativa y reducción de costos de mantenimiento.
                </p>
              </div>
            </div>
            <img 
              src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="TecnoMG Sistema" 
              className="w-full h-51 object-cover rounded-lg"
            />
          </div>
        </div>

        <div ref={tecnoCMRef} id="tecnocm" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-3 border-blue-700 pl-3">
            TecnoCM
          </h2>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-700 mb-5">
              Sistema avanzado de control y monitoreo para garantizar la calidad y durabilidad
              de los pisos industriales durante todo su ciclo de vida.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <img 
                  src="https://images.pexels.com/photos/1668928/pexels-photo-1668928.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Sistema TecnoCM" 
                  className="w-full h-38 object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-semibold mb-2">Monitoreo Continuo</h3>
                <p className="text-gray-700">
                  Sistema de sensores y monitoreo en tiempo real para detectar y prevenir problemas.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Control de Calidad" 
                  className="w-full h-38 object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-semibold mb-2">Control de Calidad Avanzado</h3>
                <p className="text-gray-700">
                  Herramientas de análisis y control para asegurar el cumplimiento de especificaciones.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-blue-800">Asesoría Especializada</h3>
              <p className="text-gray-700">
                Nuestros expertos pueden ayudarte a determinar el tipo de juntas más adecuadas 
                para tu proyecto, considerando factores como cargas, tráfico y condiciones ambientales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productos;
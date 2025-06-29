import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function Proyectos() {
  const location = useLocation();
  const medicionesRef = useRef<HTMLDivElement>(null);
  const desvastesRef = useRef<HTMLDivElement>(null);
  const logisticosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash) {
      switch (location.hash) {
        case '#mediciones':
          medicionesRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#desvastes':
          desvastesRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#logisticos':
          logisticosRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        default:
          break;
      }
    }
  }, [location]);

  return (
    <div className="pt-36 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">Proyectos</h1>
        <p className="text-lg text-gray-700 mb-10">
          Descubre nuestras especializaciones a través de los proyectos más destacados que hemos 
          realizado para clientes de diversos sectores. Cada proyecto demuestra nuestro 
          compromiso con la excelencia y la precisión.
        </p>

        <div ref={medicionesRef} id="mediciones" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-3 border-blue-700 pl-3">
            Mediciones
          </h2>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-700 mb-6">
              Ofrecemos servicios especializados de medición de planicidad y nivelación de pisos industriales, 
              utilizando tecnología de última generación para garantizar el cumplimiento de los estándares más exigentes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Medición de Planicidad" 
                  className="w-full h-51 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">Medición con Láser 3D</h3>
                  <p className="text-gray-700 mb-2">
                    Medición precisa de planicidad utilizando tecnología láser 3D para 
                    verificación de estándares TR34 y ASTM.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Láser 3D</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">TR34 Certified</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">ASTM F2678</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Certificación de Planicidad" 
                  className="w-full h-51 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">Certificación y Reporte</h3>
                  <p className="text-gray-700 mb-2">
                    Generación de certificados oficiales de planicidad con respaldo 
                    técnico y validez internacional.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Certificación Oficial</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Reporte Técnico</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Validez Internacional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={desvastesRef} id="desvastes" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-3 border-blue-700 pl-3">
            Desvastes
          </h2>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-700 mb-6">
              Servicios especializados de desvaste y preparación de superficies para pisos industriales, 
              utilizando técnicas avanzadas para lograr la textura y adherencia óptimas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Medición Lego" 
                  className="w-full h-51 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">Medición Lego</h3>
                  <p className="text-gray-700 mb-2">
                    Proyecto especializado de medición y desvaste para instalaciones 
                    de alta precisión con estándares internacionales.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Medición Precisa</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Desvaste Controlado</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Alta Precisión</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/210137/pexels-photo-210137.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Desvaste Especializado" 
                  className="w-full h-51 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">Desvaste Especializado</h3>
                  <p className="text-gray-700 mb-2">
                    Técnicas avanzadas de desvaste mecánico y químico para 
                    preparación perfecta de superficies industriales.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Desvaste Mecánico</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Tratamiento Químico</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Adherencia Óptima</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={logisticosRef} id="logisticos" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-3 border-blue-700 pl-3">
            Centros de logística
          </h2>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-700 mb-6">
              Nuestros pisos para centros logísticos están diseñados para soportar el tráfico 
              intenso de montacargas y sistemas automatizados, garantizando la máxima eficiencia operativa.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Super Repuestos" 
                  className="w-full h-58 object-cover rounded-lg shadow-md mb-5"
                />
                <h3 className="text-lg font-semibold mb-2">Super Repuestos</h3>
                <p className="text-gray-700">
                  Instalación de 30,000 m² de piso superplano para centro de distribución 
                  de repuestos automotrices con estanterías VNA y sistemas automatizados.
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Superflat FM1</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Repuestos Automotrices</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">VNA</span>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-gray-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Especificaciones Técnicas</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="font-medium">Planicidad:</span>
                    <span className="text-gray-700">TR34 FM1 / ASTM F2678</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="font-medium">Resistencia:</span>
                    <span className="text-gray-700">40 MPa / 5800 PSI</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="font-medium">Espesor:</span>
                    <span className="text-gray-700">200mm / 8 pulgadas</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="font-medium">Refuerzo:</span>
                    <span className="text-gray-700">Fibra metálica 40 kg/m³</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="font-medium">Carga máxima:</span>
                    <span className="text-gray-700">9,000 kg por poste</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="font-medium">Juntas:</span>
                    <span className="text-gray-700">Armadas + sellado PU</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Acabado:</span>
                    <span className="text-gray-700">Endurecedor mineral</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold mb-1 text-blue-800 text-sm">Ventajas Logísticas</h4>
                  <p className="text-gray-700 text-sm">
                    La planicidad milimétrica del piso permitió al cliente prepararse adecuadamente para la instalación del sistema automatizado AutoStore, lo que se traducirá en una reducción de costos operativos, mejora de la eficiencia logística y disminución en los tiempos de entrega.
                  </p>
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
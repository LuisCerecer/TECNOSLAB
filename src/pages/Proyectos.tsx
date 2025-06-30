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
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Proyectos</h1>
          <p className="text-xl text-gray-700 mb-16 text-center leading-relaxed">
            Descubre nuestras especializaciones a través de los proyectos más destacados que hemos 
            realizado para clientes de diversos sectores. Cada proyecto demuestra nuestro 
            compromiso con la excelencia y la precisión.
          </p>

          <div ref={medicionesRef} id="mediciones" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              Mediciones
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Ofrecemos servicios especializados de medición de planicidad y nivelación de pisos industriales, 
                    utilizando tecnología de última generación para garantizar el cumplimiento de los estándares más exigentes.
                  </p>
                  <div className="bg-blue-50 p-5 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-blue-800">Tecnología de Medición</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Medición precisa con tecnología láser 3D</li>
                      <li>Verificación de estándares TR34 y ASTM</li>
                      <li>Certificación oficial de planicidad</li>
                      <li>Reportes técnicos detallados</li>
                      <li>Mapas de calor de irregularidades</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Generamos certificados oficiales de planicidad con respaldo técnico y validez internacional, 
                    garantizando el cumplimiento de las especificaciones más exigentes del mercado.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Medición de Planicidad" 
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div ref={desvastesRef} id="desvastes" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              Desvastes
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <img 
                    src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Medición Lego" 
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Servicios especializados de desvaste y preparación de superficies para pisos industriales, 
                    utilizando técnicas avanzadas para lograr la textura y adherencia óptimas.
                  </p>
                  <div className="bg-green-50 p-5 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-green-800">Proyecto Medición Lego</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Medición precisa para instalaciones de alta precisión</li>
                      <li>Desvaste controlado con estándares internacionales</li>
                      <li>Preparación perfecta de superficies industriales</li>
                      <li>Técnicas avanzadas de desbaste mecánico y químico</li>
                      <li>Adherencia óptima para recubrimientos especializados</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Proyecto especializado de medición y desvaste para instalaciones de alta precisión, 
                    donde cada milímetro cuenta para el funcionamiento óptimo de sistemas automatizados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div ref={logisticosRef} id="logisticos" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              Centros de logística
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Nuestros pisos para centros logísticos están diseñados para soportar el tráfico 
                    intenso de montacargas y sistemas automatizados, garantizando la máxima eficiencia operativa.
                  </p>
                  <div className="bg-purple-50 p-5 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-purple-800">Proyecto Super Repuestos</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>30,000 m² de piso superplano instalado</li>
                      <li>Especificación TR34 FM1 / ASTM F2678</li>
                      <li>Diseño para estanterías VNA y sistemas automatizados</li>
                      <li>Resistencia de 40 MPa / 5800 PSI</li>
                      <li>Preparación para sistema AutoStore</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    La planicidad milimétrica del piso permitió al cliente prepararse adecuadamente para la 
                    instalación del sistema automatizado, traduciendo en reducción de costos operativos y 
                    mejora de la eficiencia logística.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Super Repuestos" 
                    className="w-full h-auto object-cover rounded-lg shadow-md"
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
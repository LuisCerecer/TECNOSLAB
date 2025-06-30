import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function Proyectos() {
  const location = useLocation();
  const boschRef = useRef<HTMLDivElement>(null);
  const cysRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash) {
      switch (location.hash) {
        case '#bosch':
          boschRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#cys':
          cysRef.current?.scrollIntoView({ behavior: 'smooth' });
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
                    Proyecto de medición y certificación de planicidad para las instalaciones de BOSCH en Ciudad Juárez, utilizando tecnología de última generación para garantizar el cumplimiento de los estándares más exigentes.
                  </p>
                  <div className="bg-blue-50 p-5 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-blue-800">Especificaciones del Proyecto</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Medición precisa con tecnología láser 3D</li>
                      <li>Verificación de estándares TR34 y ASTM F2678</li>
                      <li>Certificación oficial de planicidad</li>
                      <li>Reportes técnicos detallados con mapas de calor</li>
                      <li>Área total medida: 25,000 m²</li>
                      <li>Tolerancia alcanzada: TR34 FM1</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    El proyecto incluyó la medición completa de las áreas de producción y almacenamiento, garantizando las condiciones óptimas para los sistemas automatizados de BOSCH.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800" 
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
                <div className="flex justify-center lg:order-1">
                  <img 
                    src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="CYS Querétaro" 
                    className="w-full h-auto object-cover rounded-lg shadow-md max-w-md"
                  />
                </div>
                <div className="lg:order-2">
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Proyecto integral de instalación de pisos industriales de alta planicidad para CYS en Querétaro, diseñado para soportar operaciones logísticas intensivas y sistemas automatizados.
                  </p>
                  <div className="bg-blue-50 p-5 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-blue-800">Características del Proyecto</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Instalación de 18,500 m² de piso superplano</li>
                      <li>Especificación TR34 FM2 / ASTM F2678</li>
                      <li>Diseño para sistemas de estanterías automatizadas</li>
                      <li>Resistencia de 45 MPa / 6500 PSI</li>
                      <li>Juntas armadas con sellado especializado</li>
                      <li>Acabado endurecido con agregados minerales</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    La instalación fue completada en tiempo récord manteniendo los más altos estándares de calidad, permitiendo a CYS optimizar sus operaciones logísticas desde el primer día.
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
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function Servicios() {
  const location = useLocation();
  const traficoAleatorioRef = useRef<HTMLDivElement>(null);
  const traficoDefinidoRef = useRef<HTMLDivElement>(null);
  const disenoIngenieriaRef = useRef<HTMLDivElement>(null);
  const correccionDesbasteRef = useRef<HTMLDivElement>(null);
  const correccionRecubrimientosRef = useRef<HTMLDivElement>(null);
  const reparacionJuntasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash) {
      switch (location.hash) {
        case '#trafico-aleatorio':
          traficoAleatorioRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#trafico-definido':
          traficoDefinidoRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#diseno-ingenieria':
          disenoIngenieriaRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#correccion-desbaste':
          correccionDesbasteRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#correccion-recubrimientos':
          correccionRecubrimientosRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#reparacion-juntas':
          reparacionJuntasRef.current?.scrollIntoView({ behavior: 'smooth' });
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
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Servicios</h1>
          <p className="text-xl text-gray-700 mb-16 text-center leading-relaxed">
            Ofrecemos servicios especializados de medición, diseño, corrección y reparación para pisos industriales, 
            utilizando la más avanzada tecnología y estándares internacionales para garantizar la máxima precisión y calidad.
          </p>

          <div ref={traficoAleatorioRef} id="trafico-aleatorio" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              Medición de Planicidad - Tráfico Aleatorio
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Servicio especializado de medición de planicidad para pisos industriales con patrones de tráfico 
                    aleatorio, cumpliendo con estándares internacionales TR34 y ASTM F2678.
                  </p>
                  <div className="bg-blue-50 p-5 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-blue-800">Características del Servicio</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Medición con equipos láser de alta precisión</li>
                      <li>Análisis estadístico completo de irregularidades</li>
                      <li>Certificación según normas TR34 FM1, FM2, FM3</li>
                      <li>Reporte técnico detallado con mapas de calor</li>
                      <li>Recomendaciones específicas de corrección</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Ideal para almacenes, centros de distribución y áreas industriales con movimiento 
                    de montacargas en múltiples direcciones.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Medición de Planicidad - Tráfico Aleatorio" 
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div ref={traficoDefinidoRef} id="trafico-definido" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              Medición de Planicidad - Tráfico Definido
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <img 
                    src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Medición de Planicidad - Tráfico Definido" 
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Medición especializada para sistemas automatizados y pasillos VNA (Very Narrow Aisle) 
                    donde el tráfico sigue patrones específicos y predefinidos.
                  </p>
                  <div className="bg-green-50 p-5 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-green-800">Aplicaciones Específicas</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Sistemas automatizados de almacenamiento</li>
                      <li>Pasillos VNA para estanterías de gran altura</li>
                      <li>Líneas de producción automatizadas</li>
                      <li>Sistemas robóticos de picking</li>
                      <li>AGV (Automated Guided Vehicles) paths</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Cumple con las más estrictas tolerancias requeridas por sistemas automatizados, 
                    garantizando operación segura y eficiente.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div ref={disenoIngenieriaRef} id="diseno-ingenieria" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              Diseño e Ingeniería de Pisos Industriales
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Desarrollo de soluciones integrales de ingeniería para pisos industriales, desde el análisis 
                inicial hasta la especificación técnica completa del proyecto.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">Análisis Estructural</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Estudio de cargas y solicitaciones</li>
                    <li>Análisis del suelo y cimentación</li>
                    <li>Cálculo de espesores óptimos</li>
                    <li>Diseño de sistemas de refuerzo</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">Especificaciones Técnicas</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Selección de materiales</li>
                    <li>Diseño de juntas y sistemas</li>
                    <li>Especificación de tolerancias</li>
                    <li>Procedimientos de instalación</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">Documentación</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Planos técnicos detallados</li>
                    <li>Especificaciones para licitación</li>
                    <li>Programas de control de calidad</li>
                    <li>Manuales de mantenimiento</li>
                  </ul>
                </div>
              </div>
              
              <img 
                src="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Diseño e Ingeniería de Pisos Industriales" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          <div ref={correccionDesbasteRef} id="correccion-desbaste" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              Corrección de Planicidad por Desbaste
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Técnica especializada de corrección de irregularidades mediante desbaste controlado 
                    de concreto para lograr las tolerancias de planicidad requeridas.
                  </p>
                  <div className="bg-orange-50 p-5 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-orange-800">Proceso de Desbaste</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Mapeo detallado de irregularidades</li>
                      <li>Marcado de áreas a corregir</li>
                      <li>Desbaste controlado con equipo especializado</li>
                      <li>Verificación continua de tolerancias</li>
                      <li>Limpieza y preparación final</li>
                      <li>Medición de verificación</li>
                    </ol>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Ideal para pisos existentes que requieren alcanzar especificaciones de planicidad 
                    para sistemas automatizados sin rehacer completamente el piso.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="https://images.pexels.com/photos/210137/pexels-photo-210137.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Corrección de Planicidad por Desbaste" 
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div ref={correccionRecubrimientosRef} id="correccion-recubrimientos" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              Corrección de Planicidad por Recubrimientos
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <img 
                    src="https://images.pexels.com/photos/1668928/pexels-photo-1668928.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Corrección de Planicidad por Recubrimientos" 
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Aplicación de recubrimientos especializados para corregir irregularidades superficiales 
                    y lograr las tolerancias de planicidad requeridas.
                  </p>
                  <div className="bg-purple-50 p-5 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-purple-800">Tipos de Recubrimientos</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Morteros autonivelantes de alta resistencia</li>
                      <li>Sistemas epoxi de nivelación</li>
                      <li>Recubrimientos poliuretano cemento</li>
                      <li>Sistemas híbridos para casos especiales</li>
                      <li>Recubrimientos con agregados especiales</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Solución versátil que permite corregir irregularidades mientras se mejoran 
                    las propiedades superficiales del piso como resistencia química y durabilidad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div ref={reparacionJuntasRef} id="reparacion-juntas" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              Reparación de Juntas
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Servicio especializado de reparación y mantenimiento de sistemas de juntas en pisos industriales, 
                garantizando su funcionamiento óptimo y prolongando la vida útil del piso.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-red-800">Problemas Comunes en Juntas</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Deterioro del material sellante</li>
                    <li>Despostillamientos en bordes</li>
                    <li>Infiltración de humedad y contaminantes</li>
                    <li>Pérdida de adherencia del sellador</li>
                    <li>Movimientos estructurales excesivos</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-green-800">Soluciones de Reparación</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Remoción y reemplazo de selladores</li>
                    <li>Reparación de bordes con resinas epoxi</li>
                    <li>Instalación de sistemas armados</li>
                    <li>Sellado con materiales poliuretano</li>
                    <li>Refuerzo estructural de juntas críticas</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-lg font-semibold mb-3">Tipos de Juntas que Reparamos</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-sm">Juntas de Contracción</h4>
                      <p className="text-gray-700 text-sm">Control de fisuramiento por retracción del concreto</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-sm">Juntas de Construcción</h4>
                      <p className="text-gray-700 text-sm">Unión entre diferentes vaciados de concreto</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-sm">Juntas de Aislamiento</h4>
                      <p className="text-gray-700 text-sm">Separación de elementos estructurales</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-sm">Juntas Armadas</h4>
                      <p className="text-gray-700 text-sm">Sistemas de alta resistencia para tráfico pesado</p>
                    </div>
                  </div>
                </div>
                <img 
                  src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Reparación de Juntas" 
                  className="md:w-1/2 rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
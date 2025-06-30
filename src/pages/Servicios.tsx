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
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-md mb-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">¿En qué consiste?</h3>
                      <p className="text-gray-700 mb-4">
                        Medición precisa de irregularidades superficiales utilizando equipos láser de alta tecnología 
                        para determinar el cumplimiento con estándares internacionales de planicidad.
                      </p>
                      
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">Casos de Uso / Aplicaciones</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                        <li>Almacenes con tráfico multidireccional</li>
                        <li>Centros de distribución</li>
                        <li>Áreas industriales con montacargas convencionales</li>
                        <li>Espacios de carga y descarga</li>
                      </ul>
                      
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">Beneficios para tu Operación</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Certificación oficial de cumplimiento normativo</li>
                        <li>Reducción de vibraciones en equipos</li>
                        <li>Mayor vida útil de montacargas</li>
                        <li>Optimización de operaciones logísticas</li>
                      </ul>
                    </div>
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
                <div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Medición especializada para sistemas automatizados y pasillos VNA (Very Narrow Aisle) 
                    donde el tráfico sigue patrones específicos y predefinidos.
                  </p>
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-md mb-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">¿En qué consiste?</h3>
                      <p className="text-gray-700 mb-4">
                        Medición ultra-precisa en rutas específicas donde operan sistemas automatizados, 
                        garantizando tolerancias extremadamente estrictas para el funcionamiento óptimo de robots y AGVs.
                      </p>
                      
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">Casos de Uso / Aplicaciones</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                        <li>Sistemas automatizados de almacenamiento</li>
                        <li>Pasillos VNA para estanterías de gran altura</li>
                        <li>Líneas de producción automatizadas</li>
                        <li>Sistemas robóticos de picking</li>
                        <li>Rutas de AGV (Automated Guided Vehicles)</li>
                      </ul>
                      
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">Beneficios para tu Operación</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Operación segura de sistemas automatizados</li>
                        <li>Máxima eficiencia en pasillos estrechos</li>
                        <li>Reducción de errores en picking automatizado</li>
                        <li>Cumplimiento de especificaciones de fabricantes</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Cumple con las más estrictas tolerancias requeridas por sistemas automatizados, 
                    garantizando operación segura y eficiente.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Medición de Planicidad - Tráfico Definido" 
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div ref={disenoIngenieriaRef} id="diseno-ingenieria" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              Diseño e Ingeniería de Pisos Industriales
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Desarrollo de soluciones integrales de ingeniería para pisos industriales, desde el análisis 
                    inicial hasta la especificación técnica completa del proyecto.
                  </p>
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-md mb-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">¿En qué consiste?</h3>
                      <p className="text-gray-700 mb-4">
                        Desarrollo completo de proyectos de pisos industriales desde la conceptualización hasta 
                        la especificación técnica, incluyendo análisis estructural, cálculos de carga y diseño de sistemas.
                      </p>
                      
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">Casos de Uso / Aplicaciones</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                        <li>Nuevas construcciones industriales</li>
                        <li>Ampliaciones de almacenes existentes</li>
                        <li>Modernización de instalaciones</li>
                        <li>Proyectos con requerimientos especiales</li>
                        <li>Instalaciones con cargas pesadas</li>
                      </ul>
                      
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">Beneficios para tu Operación</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Soluciones personalizadas y optimizadas</li>
                        <li>Cumplimiento garantizado de especificaciones</li>
                        <li>Reducción de costos a largo plazo</li>
                        <li>Máxima durabilidad y resistencia</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Soluciones personalizadas que consideran cargas operativas, condiciones ambientales 
                    y requisitos específicos de cada aplicación industrial.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Diseño e Ingeniería de Pisos Industriales" 
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
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
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-md mb-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">¿En qué consiste?</h3>
                      <p className="text-gray-700 mb-4">
                        Proceso de remoción controlada de material mediante equipos especializados de desbaste, 
                        eliminando irregularidades superficiales para alcanzar las tolerancias de planicidad requeridas.
                      </p>
                      
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">Casos de Uso / Aplicaciones</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                        <li>Pisos existentes con irregularidades</li>
                        <li>Preparación para sistemas automatizados</li>
                        <li>Corrección de defectos de construcción</li>
                        <li>Nivelación de juntas desalineadas</li>
                        <li>Eliminación de protuberancias</li>
                      </ul>
                      
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">Beneficios para tu Operación</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Solución económica vs. reemplazo total</li>
                        <li>Mínima interrupción operativa</li>
                        <li>Resultados inmediatos y verificables</li>
                        <li>Compatibilidad con sistemas existentes</li>
                      </ul>
                    </div>
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
                <div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Aplicación de recubrimientos especializados para corregir irregularidades superficiales 
                    y lograr las tolerancias de planicidad requeridas.
                  </p>
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-md mb-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">¿En qué consiste?</h3>
                      <p className="text-gray-700 mb-4">
                        Aplicación de sistemas de recubrimiento autonivelantes de alta tecnología que corrigen 
                        irregularidades mientras mejoran las propiedades superficiales del piso.
                      </p>
                      
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">Casos de Uso / Aplicaciones</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                        <li>Pisos con depresiones menores</li>
                        <li>Superficies con desgaste irregular</li>
                        <li>Mejora de resistencia química</li>
                        <li>Renovación de pisos antiguos</li>
                        <li>Preparación para nuevos usos</li>
                      </ul>
                      
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">Beneficios para tu Operación</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Mejora simultánea de planicidad y propiedades</li>
                        <li>Mayor resistencia al desgaste</li>
                        <li>Facilidad de limpieza y mantenimiento</li>
                        <li>Aplicación rápida y eficiente</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Solución versátil que permite corregir irregularidades mientras se mejoran 
                    las propiedades superficiales del piso como resistencia química y durabilidad.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="https://images.pexels.com/photos/1668928/pexels-photo-1668928.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Corrección de Planicidad por Recubrimientos" 
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div ref={reparacionJuntasRef} id="reparacion-juntas" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              Reparación de Juntas
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Servicio especializado de reparación y mantenimiento de sistemas de juntas en pisos industriales, 
                    garantizando su funcionamiento óptimo y prolongando la vida útil del piso.
                  </p>
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-md mb-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">¿En qué consiste?</h3>
                      <p className="text-gray-700 mb-4">
                        Reparación integral de sistemas de juntas incluyendo remoción de materiales deteriorados, 
                        preparación de superficies y aplicación de nuevos sistemas de sellado de alta calidad.
                      </p>
                      
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">Casos de Uso / Aplicaciones</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                        <li>Juntas de contracción deterioradas</li>
                        <li>Sistemas de juntas armadas dañadas</li>
                        <li>Selladores agrietados o desprendidos</li>
                        <li>Juntas de construcción defectuosas</li>
                        <li>Mantenimiento preventivo programado</li>
                      </ul>
                      
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">Beneficios para tu Operación</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Prevención de daños mayores al piso</li>
                        <li>Reducción de vibraciones y ruido</li>
                        <li>Mayor vida útil del sistema de piso</li>
                        <li>Mejora en la seguridad operativa</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Atendemos todos los tipos de juntas: contracción, construcción, aislamiento 
                    y juntas armadas, utilizando materiales de la más alta calidad.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Reparación de Juntas" 
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

export default Servicios;
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-blue-700">Características del Servicio</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Medición con equipos láser de alta precisión</li>
                          <li>Análisis estadístico completo de irregularidades</li>
                          <li>Certificación según normas TR34 FM1, FM2, FM3</li>
                          <li>Reporte técnico detallado con mapas de calor</li>
                          <li>Recomendaciones específicas de corrección</li>
                        </ul>
                      </div>
                      <div>
                        <img 
                          src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=400" 
                          alt="Medición láser de precisión" 
                          className="w-full h-32 object-cover rounded-lg shadow-sm"
                        />
                      </div>
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-blue-700">Aplicaciones Específicas</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Sistemas automatizados de almacenamiento</li>
                          <li>Pasillos VNA para estanterías de gran altura</li>
                          <li>Líneas de producción automatizadas</li>
                          <li>Sistemas robóticos de picking</li>
                          <li>AGV (Automated Guided Vehicles) paths</li>
                        </ul>
                      </div>
                      <div>
                        <img 
                          src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400" 
                          alt="Sistemas automatizados" 
                          className="w-full h-32 object-cover rounded-lg shadow-sm"
                        />
                      </div>
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-blue-700">Servicios de Ingeniería</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Análisis estructural y cálculo de cargas</li>
                          <li>Estudio de suelos y cimentaciones</li>
                          <li>Diseño de sistemas de refuerzo</li>
                          <li>Especificaciones técnicas detalladas</li>
                          <li>Planos de construcción y detalles</li>
                        </ul>
                      </div>
                      <div>
                        <img 
                          src="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=400" 
                          alt="Ingeniería y diseño" 
                          className="w-full h-32 object-cover rounded-lg shadow-sm"
                        />
                      </div>
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-blue-700">Proceso de Desbaste</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Mapeo detallado de irregularidades</li>
                          <li>Desbaste controlado con equipo especializado</li>
                          <li>Verificación continua de tolerancias</li>
                          <li>Limpieza y preparación final</li>
                          <li>Medición de verificación final</li>
                        </ul>
                      </div>
                      <div>
                        <img 
                          src="https://images.pexels.com/photos/210137/pexels-photo-210137.jpeg?auto=compress&cs=tinysrgb&w=400" 
                          alt="Proceso de desbaste" 
                          className="w-full h-32 object-cover rounded-lg shadow-sm"
                        />
                      </div>
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-blue-700">Tipos de Recubrimientos</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Morteros autonivelantes de alta resistencia</li>
                          <li>Sistemas epoxi de nivelación</li>
                          <li>Recubrimientos poliuretano cemento</li>
                          <li>Sistemas híbridos para casos especiales</li>
                          <li>Recubrimientos con agregados especiales</li>
                        </ul>
                      </div>
                      <div>
                        <img 
                          src="https://images.pexels.com/photos/1668928/pexels-photo-1668928.jpeg?auto=compress&cs=tinysrgb&w=400" 
                          alt="Recubrimientos especializados" 
                          className="w-full h-32 object-cover rounded-lg shadow-sm"
                        />
                      </div>
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-blue-700">Servicios de Reparación</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Remoción y reemplazo de selladores</li>
                          <li>Reparación de bordes con resinas epoxi</li>
                          <li>Instalación de sistemas armados</li>
                          <li>Sellado con materiales poliuretano</li>
                          <li>Refuerzo estructural de juntas críticas</li>
                        </ul>
                      </div>
                      <div>
                        <img 
                          src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=400" 
                          alt="Reparación de juntas" 
                          className="w-full h-32 object-cover rounded-lg shadow-sm"
                        />
                      </div>
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
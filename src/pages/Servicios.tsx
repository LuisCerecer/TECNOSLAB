import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function Servicios() {
  const location = useLocation();
  const instalacionRef = useRef<HTMLDivElement>(null);
  const mantenimientoRef = useRef<HTMLDivElement>(null);
  const reparacionRef = useRef<HTMLDivElement>(null);
  const consultoriaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash) {
      switch (location.hash) {
        case '#instalacion':
          instalacionRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#mantenimiento':
          mantenimientoRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#reparacion':
          reparacionRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#consultoria':
          consultoriaRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        default:
          break;
      }
    }
  }, [location]);

  return (
    <div className="pt-36 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">Servicios</h1>
        <p className="text-lg text-gray-700 mb-10">
          Ofrecemos servicios integrales para la instalación, mantenimiento y reparación de 
          pisos industriales, garantizando la máxima calidad y durabilidad con la más 
          avanzada tecnología disponible en el mercado.
        </p>

        <div ref={instalacionRef} id="instalacion" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-3 border-blue-700 pl-3">
            Instalación
          </h2>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-700 mb-5">
              Nuestra especialidad es la instalación de pisos continuos de alta planicidad, 
              cumpliendo con los estándares internacionales más exigentes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <img 
                src="https://images.pexels.com/photos/210137/pexels-photo-210137.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Instalación de Pisos" 
                className="w-full h-51 object-cover rounded-lg shadow-md"
              />
              <div>
                <h3 className="text-lg font-semibold mb-3">Proceso de Instalación</h3>
                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                  <li>Evaluación y preparación del terreno</li>
                  <li>Colocación de armado y refuerzos</li>
                  <li>Vertido y nivelación del concreto</li>
                  <li>Alisado y acabado de precisión</li>
                  <li>Curado controlado</li>
                  <li>Corte de juntas</li>
                  <li>Sellado y protección final</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-blue-800">Tipos de Instalación</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded shadow">
                  <h4 className="font-semibold mb-1 text-sm">Pisos Superplanos</h4>
                  <p className="text-gray-700 text-sm">Para almacenes automatizados y centros de distribución con estanterías de gran altura.</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <h4 className="font-semibold mb-1 text-sm">Pisos Industriales Estándar</h4>
                  <p className="text-gray-700 text-sm">Para fábricas, talleres y áreas de producción con tráfico pesado.</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <h4 className="font-semibold mb-1 text-sm">Pisos Decorativos</h4>
                  <p className="text-gray-700 text-sm">Para áreas comerciales y showrooms con requisitos estéticos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={mantenimientoRef} id="mantenimiento" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-3 border-blue-700 pl-3">
            Mantenimiento
          </h2>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-700 mb-5">
              Un mantenimiento adecuado es esencial para prolongar la vida útil de los pisos 
              industriales y mantener sus propiedades intactas a lo largo del tiempo.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
              <div className="border border-gray-200 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Mantenimiento Preventivo</h3>
                <p className="text-gray-700 mb-3">
                  Programa regular de inspecciones y tratamientos para prevenir problemas antes de que ocurran.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Limpieza especializada</li>
                  <li>Renovación de selladores</li>
                  <li>Inspección de juntas</li>
                  <li>Tratamiento anti-polvo</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Mantenimiento Correctivo</h3>
                <p className="text-gray-700 mb-3">
                  Soluciones rápidas y efectivas para problemas detectados en inspecciones o reportados por el cliente.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Reparación de grietas</li>
                  <li>Restauración de juntas</li>
                  <li>Nivelación de áreas irregulares</li>
                  <li>Corrección de desgastes</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Planes de Mantenimiento</h3>
                <p className="text-gray-700 mb-3">
                  Programas personalizados según las necesidades específicas de cada cliente.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Plan Básico: trimestral</li>
                  <li>Plan Estándar: bimestral</li>
                  <li>Plan Premium: mensual</li>
                  <li>Soluciones a medida</li>
                </ul>
              </div>
            </div>
            
            <img 
              src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Mantenimiento de Pisos" 
              className="w-full h-51 object-cover rounded-lg"
            />
          </div>
        </div>

        <div ref={reparacionRef} id="reparacion" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-3 border-blue-700 pl-3">
            Reparación
          </h2>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-700 mb-5">
              Contamos con soluciones efectivas para la reparación de pisos industriales dañados 
              por uso intensivo, impactos o problemas estructurales.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Problemas Comunes</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2 mt-1 text-xs">✓</span>
                    <div>
                      <h4 className="font-semibold text-sm">Grietas</h4>
                      <p className="text-gray-700">Reparación con inyección de resinas epoxi de alta resistencia.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2 mt-1 text-xs">✓</span>
                    <div>
                      <h4 className="font-semibold text-sm">Desportilladuras</h4>
                      <p className="text-gray-700">Reparación con morteros especiales de alta resistencia.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2 mt-1 text-xs">✓</span>
                    <div>
                      <h4 className="font-semibold text-sm">Delaminación</h4>
                      <p className="text-gray-700">Remoción del material suelto y aplicación de nuevo recubrimiento adherente.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2 mt-1 text-xs">✓</span>
                    <div>
                      <h4 className="font-semibold text-sm">Juntas dañadas</h4>
                      <p className="text-gray-700">Reconstrucción y sellado con materiales elásticos de larga duración.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <img 
                src="https://images.pexels.com/photos/1668928/pexels-photo-1668928.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Reparación de Pisos" 
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            
            <div className="bg-yellow-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-yellow-800">Ventajas de Nuestras Reparaciones</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded shadow">
                  <h4 className="font-semibold text-center mb-1 text-sm">Rapidez</h4>
                  <p className="text-gray-700 text-sm text-center">Mínima interrupción de operaciones</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <h4 className="font-semibold text-center mb-1 text-sm">Durabilidad</h4>
                  <p className="text-gray-700 text-sm text-center">Materiales de alta resistencia</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <h4 className="font-semibold text-center mb-1 text-sm">Estética</h4>
                  <p className="text-gray-700 text-sm text-center">Acabado integrado con el piso existente</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <h4 className="font-semibold text-center mb-1 text-sm">Garantía</h4>
                  <p className="text-gray-700 text-sm text-center">Respaldo de calidad en cada reparación</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={consultoriaRef} id="consultoria" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-3 border-blue-700 pl-3">
            Consultoría
          </h2>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-700 mb-5">
              Nuestro equipo de expertos ofrece servicios de consultoría para ayudarte a 
              seleccionar la mejor solución para tu proyecto, considerando todos los factores 
              relevantes para garantizar resultados óptimos.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Servicios de Consultoría</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold mb-2 text-sm">Evaluación y Diagnóstico</h4>
                  <p className="text-gray-700 text-sm">
                    Análisis detallado del estado actual de pisos existentes o evaluación 
                    de requisitos para nuevas instalaciones.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold mb-2 text-sm">Especificaciones Técnicas</h4>
                  <p className="text-gray-700 text-sm">
                    Desarrollo de especificaciones detalladas para licitaciones o 
                    contratación directa de servicios.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold mb-2 text-sm">Supervisión de Obra</h4>
                  <p className="text-gray-700 text-sm">
                    Verificación de que la instalación cumpla con los estándares 
                    y especificaciones acordadas.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold mb-2 text-sm">Optimización de Diseño</h4>
                  <p className="text-gray-700 text-sm">
                    Recomendaciones para mejorar el diseño, reducir costos y 
                    maximizar la vida útil del piso.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/2">
                <h3 className="text-lg font-semibold mb-3">¿Por qué elegirnos como consultores?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-1">✓</span>
                    Más de 15 años de experiencia especializada
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-1">✓</span>
                    Conocimiento profundo de estándares internacionales
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-1">✓</span>
                    Equipo de ingenieros certificados
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-1">✓</span>
                    Enfoque imparcial orientado a resultados
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-1">✓</span>
                    Soporte técnico continuo durante todo el proyecto
                  </li>
                </ul>
              </div>
              <img 
                src="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800" 
                alt="Consultoría de Pisos Industriales" 
                className="md:w-1/2 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
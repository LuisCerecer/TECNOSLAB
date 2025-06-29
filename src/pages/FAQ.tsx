import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function FAQ() {
  const location = useLocation();
  const preguntasComunesRef = useRef<HTMLDivElement>(null);
  const garantiasRef = useRef<HTMLDivElement>(null);
  const mantenimientoRef = useRef<HTMLDivElement>(null);
  const soporteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash) {
      switch (location.hash) {
        case '#preguntas-comunes':
          preguntasComunesRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#garantias':
          garantiasRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#mantenimiento':
          mantenimientoRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#soporte':
          soporteRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        default:
          break;
      }
    }
  }, [location]);

  return (
    <div className="pt-36 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">FAQ</h1>
        <p className="text-lg text-gray-700 mb-10">
          Encuentra respuestas a las preguntas más frecuentes sobre nuestros servicios, 
          tecnologías y procesos. Si no encuentras lo que buscas, no dudes en contactarnos.
        </p>

        <div ref={preguntasComunesRef} id="preguntas-comunes" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-3 border-blue-700 pl-3">
            Preguntas Comunes
          </h2>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="space-y-5">
              <div className="border-b border-gray-200 pb-5">
                <h3 className="text-lg font-semibold mb-2 text-blue-700">¿Qué es un piso de alta planicidad?</h3>
                <p className="text-gray-700">
                  Un piso de alta planicidad es aquel que cumple con estándares específicos de nivelación 
                  y regularidad superficial, medidos según normas internacionales como TR34, DIN o ASTM. 
                  Estos pisos son esenciales para operaciones logísticas con estanterías de gran altura 
                  o sistemas automatizados, ya que minimizan vibraciones y permiten un funcionamiento 
                  óptimo de los equipos.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-5">
                <h3 className="text-lg font-semibold mb-2 text-blue-700">¿Cuánto tiempo dura la instalación de un piso industrial?</h3>
                <p className="text-gray-700">
                  El tiempo de instalación depende de varios factores como el área a cubrir, el tipo de 
                  piso, las condiciones del sitio y los requerimientos específicos. Como referencia:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 ml-3">
                  <li>Proyectos pequeños (hasta 1,000 m²): 1-2 semanas</li>
                  <li>Proyectos medianos (1,000 - 5,000 m²): 2-4 semanas</li>
                  <li>Proyectos grandes (más de 5,000 m²): 4-8 semanas</li>
                </ul>
              </div>
              
              <div className="border-b border-gray-200 pb-5">
                <h3 className="text-lg font-semibold mb-2 text-blue-700">¿Qué diferencia hay entre un piso industrial estándar y uno superplano?</h3>
                <p className="text-gray-700">
                  La principal diferencia radica en las tolerancias de planicidad y nivelación:
                </p>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold mb-1 text-sm">Piso Estándar</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>- Tolerancia FF/FL: 25/20</li>
                      <li>- Adecuado para tráfico general</li>
                      <li>- Montacargas convencionales</li>
                      <li>- Altura de estanterías hasta 6m</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold mb-1 text-sm">Piso Superplano</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>- Tolerancia FF/FL: 50/50 o superior</li>
                      <li>- Específico para VNA (Very Narrow Aisle)</li>
                      <li>- Sistemas automatizados</li>
                      <li>- Estanterías de gran altura (+12m)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-blue-700">¿Se puede instalar un piso nuevo sobre uno existente?</h3>
                <p className="text-gray-700">
                  Sí, es posible instalar ciertos tipos de pisos sobre superficies existentes, siempre que 
                  se cumplan determinadas condiciones:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 ml-3">
                  <li>La base existente debe estar estructuralmente sana</li>
                  <li>Se requiere una evaluación previa para determinar compatibilidad</li>
                  <li>Es necesaria una preparación adecuada de la superficie</li>
                  <li>Existen limitaciones en cuanto a planicidad y capacidad de carga</li>
                </ul>
                <p className="mt-2 text-gray-700">
                  Recomendamos una consulta técnica para evaluar cada caso específico.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div ref={garantiasRef} id="garantias" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-3 border-blue-700 pl-3">
            Garantías
          </h2>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-700 mb-6">
              En Tecnoslab, respaldamos la calidad de nuestro trabajo con garantías sólidas que 
              brindan tranquilidad a nuestros clientes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-3 text-blue-700">Garantía Estructural</h3>
                <div className="flex items-center mb-3">
                  <span className="text-2xl font-bold text-blue-700 mr-2">5</span>
                  <span className="text-gray-700">años de garantía contra defectos estructurales como hundimientos, fisuras o problemas de soporte.</span>
                </div>
                <ul className="text-gray-700 space-y-1">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-1">✓</span>
                    <span>Cubre daños no atribuibles al uso normal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-1">✓</span>
                    <span>Incluye revisiones anuales preventivas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-1">✓</span>
                    <span>Reparación sin costo en caso de fallas</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-3 text-blue-700">Garantía de Acabados</h3>
                <div className="flex items-center mb-3">
                  <span className="text-2xl font-bold text-blue-700 mr-2">2</span>
                  <span className="text-gray-700">años de garantía en recubrimientos y acabados superficiales.</span>
                </div>
                <ul className="text-gray-700 space-y-1">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-1">✓</span>
                    <span>Protección contra desprendimientos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-1">✓</span>
                    <span>Conservación del color y textura</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-1">✓</span>
                    <span>Retoques anuales incluidos</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg mb-5">
              <h3 className="text-lg font-semibold mb-2 text-blue-800">Garantía de Planicidad</h3>
              <p className="text-gray-700 mb-3">
                Garantizamos el cumplimiento de las especificaciones de planicidad contratadas 
                según estándares TR34, DIN 18202 o ASTM E1155.
              </p>
              <div className="flex flex-col md:flex-row gap-3">
                <div className="bg-white p-3 rounded shadow md:w-1/3">
                  <h4 className="font-semibold mb-1 text-sm">Verificación</h4>
                  <p className="text-sm text-gray-700">
                    Entregamos certificado de medición realizado con equipos calibrados.
                  </p>
                </div>
                <div className="bg-white p-3 rounded shadow md:w-1/3">
                  <h4 className="font-semibold mb-1 text-sm">Corrección</h4>
                  <p className="text-sm text-gray-700">
                    En caso de no cumplir, realizamos correcciones sin costo adicional.
                  </p>
                </div>
                <div className="bg-white p-3 rounded shadow md:w-1/3">
                  <h4 className="font-semibold mb-1 text-sm">Duración</h4>
                  <p className="text-sm text-gray-700">
                    Garantía válida durante toda la vida estructural del piso.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-5">
              <h3 className="text-lg font-semibold mb-3">Preguntas Frecuentes sobre Garantías</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-700 text-sm">¿Qué no cubre la garantía?</h4>
                  <p className="text-gray-700">
                    Daños por mal uso, impactos severos, desastres naturales, modificaciones no autorizadas 
                    o falta de mantenimiento recomendado.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 text-sm">¿Cómo activar la garantía?</h4>
                  <p className="text-gray-700">
                    La garantía se activa automáticamente al finalizar la instalación. Recomendamos 
                    guardar la documentación del proyecto para futura referencia.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 text-sm">¿Se puede extender la garantía?</h4>
                  <p className="text-gray-700">
                    Sí, ofrecemos programas de extensión de garantía mediante contratos de mantenimiento preventivo.
                  </p>
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
            <p className="text-gray-700 mb-6">
              El mantenimiento adecuado es fundamental para preservar la funcionalidad y 
              apariencia de los pisos industriales a lo largo del tiempo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-700">Recomendaciones Generales</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2 mt-1 text-xs">1</span>
                    <div>
                      <p className="font-medium text-sm">Limpieza Regular</p>
                      <p className="text-sm">
                        Limpieza diaria con equipos adecuados según el tipo de piso. 
                        Evitar productos químicos agresivos no recomendados.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2 mt-1 text-xs">2</span>
                    <div>
                      <p className="font-medium text-sm">Inspección Periódica</p>
                      <p className="text-sm">
                        Revisar regularmente juntas, grietas incipientes o áreas con desgaste 
                        para intervenir antes de que el problema se agrave.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2 mt-1 text-xs">3</span>
                    <div>
                      <p className="font-medium text-sm">Protección contra Impactos</p>
                      <p className="text-sm">
                        Utilizar protectores en áreas vulnerables como esquinas, columnas o 
                        zonas de carga y descarga.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2 mt-1 text-xs">4</span>
                    <div>
                      <p className="font-medium text-sm">Sellado Periódico</p>
                      <p className="text-sm">
                        Reaplicar selladores según las recomendaciones específicas para 
                        cada tipo de piso y condiciones de uso.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <img 
                src="https://images.pexels.com/photos/210137/pexels-photo-210137.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Mantenimiento de Pisos" 
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg mt-6">
              <h3 className="text-lg font-semibold mb-3">Programas de Mantenimiento</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white p-4 rounded-lg shadow border-t-3 border-blue-500">
                  <h4 className="font-semibold mb-2 text-blue-700 text-sm">Plan Básico</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-1">✓</span>
                      <span>Inspección trimestral</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-1">✓</span>
                      <span>Limpieza profunda anual</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-1">✓</span>
                      <span>Reparaciones menores</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-1">✓</span>
                      <span>Reporte de condiciones</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border-t-3 border-blue-700">
                  <h4 className="font-semibold mb-2 text-blue-700 text-sm">Plan Estándar</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-1">✓</span>
                      <span>Todo el plan básico</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-1">✓</span>
                      <span>Inspección bimestral</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-1">✓</span>
                      <span>Limpieza profunda semestral</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-1">✓</span>
                      <span>Sellado anual de juntas</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border-t-3 border-blue-900">
                  <h4 className="font-semibold mb-2 text-blue-700 text-sm">Plan Premium</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-1">✓</span>
                      <span>Todo el plan estándar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-1">✓</span>
                      <span>Inspección mensual</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-1">✓</span>
                      <span>Reparaciones ilimitadas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-1">✓</span>
                      <span>Atención 24/7 para emergencias</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={soporteRef} id="soporte" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-3 border-blue-700 pl-3">
            Soporte
          </h2>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-700 mb-6">
              Ofrecemos soporte técnico especializado para resolver cualquier problema 
              o duda relacionada con nuestros productos y servicios.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-blue-700">Canales de Soporte</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-700 text-lg">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Línea Directa</h4>
                      <p className="text-gray-700">+52 (55) 1234-5678</p>
                      <p className="text-gray-500 text-sm">Lunes a Viernes 8:00 - 18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-700 text-lg">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Correo Electrónico</h4>
                      <p className="text-gray-700">soporte@tecnoslab.mx</p>
                      <p className="text-gray-500 text-sm">Respuesta en menos de 24 horas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-700 text-lg">💬</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Chat en Línea</h4>
                      <p className="text-gray-700">Disponible en nuestro sitio web</p>
                      <p className="text-gray-500 text-sm">Atención inmediata en horario laboral</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-700 text-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-5">Servicio de Emergencia 24/7</h3>
                <p className="mb-5">
                  Para clientes con contratos de mantenimiento Premium, ofrecemos 
                  atención de emergencias las 24 horas, los 365 días del año.
                </p>
                <div className="bg-blue-600 p-3 rounded-lg mb-5">
                  <p className="font-semibold text-sm">Línea de Emergencia:</p>
                  <p className="text-xl font-bold">+52 (55) 9876-5432</p>
                </div>
                <p className="text-sm">
                  Tiempo de respuesta telefónica: Inmediato<br />
                  Tiempo de llegada al sitio: 4-8 horas (dependiendo de la ubicación)
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold mb-3">Recursos de Soporte</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="border border-gray-200 p-3 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2 text-blue-700 text-sm">Biblioteca Técnica</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Accede a manuales, fichas técnicas y guías de mantenimiento para todos nuestros productos.
                  </p>
                  <button className="text-blue-700 font-medium hover:underline text-sm">
                    Ver Documentación →
                  </button>
                </div>
                
                <div className="border border-gray-200 p-3 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2 text-blue-700 text-sm">Videos Instructivos</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Tutoriales sobre cuidado, limpieza y mantenimiento básico de los diferentes tipos de pisos.
                  </p>
                  <button className="text-blue-700 font-medium hover:underline text-sm">
                    Ver Videos →
                  </button>
                </div>
                
                <div className="border border-gray-200 p-3 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2 text-blue-700 text-sm">FAQ Técnico</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Respuestas detalladas a preguntas técnicas frecuentes sobre instalación y mantenimiento.
                  </p>
                  <button className="text-blue-700 font-medium hover:underline text-sm">
                    Consultar FAQ →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
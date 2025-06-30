import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function AcercaDeNosotros() {
  const location = useLocation();
  const historiaRef = useRef<HTMLDivElement>(null);
  const misionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const valoresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash) {
      switch (location.hash) {
        case '#historia':
          historiaRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#mision':
          misionRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#vision':
          visionRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#valores':
          valoresRef.current?.scrollIntoView({ behavior: 'smooth' });
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
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Acerca de nosotros</h1>
          <p className="text-xl text-gray-700 mb-16 text-center leading-relaxed">
            En Tecnoslab, nos especializamos en pisos continuos 
            de alta planicidad para aplicaciones industriales exigentes. Nuestra experiencia y tecnología 
            nos posicionan como líderes en el mercado mexicano.
          </p>

          <div ref={historiaRef} id="historia" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              Historia
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Fundada en 2023, TECNOSLAB surge como respuesta a la creciente necesidad de pisos industriales 
                    de altas especificaciones en México para satisfacer los requerimientos de los sistemas automatizados 
                    que están siendo implementados en la industria logística.
                  </p>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    A lo largo de los años, hemos perfeccionado nuestras técnicas y expandido nuestra presencia en todo el país.
                  </p>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Nuestra alianza con CoGri GesPaP, parte de CoGri Group, en 2024 marcó un antes y después en nuestra historia, 
                    permitiéndonos implementar tecnologías de vanguardia y estándares internacionales para el diseño e ingeniería 
                    de pisos de altas especificaciones, medición y corrección de planicidad para sistemas automáticos de manejo 
                    de materiales y mercancías.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Hoy contamos con importantes proyectos completados exitosamente y un equipo de expertos 
                    comprometidos con la excelencia.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://res.cloudinary.com/dy089iwsg/image/upload/v1748985492/Logo_cqr9ul.svg" 
                    alt="Historia de Tecnoslab" 
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div ref={misionRef} id="mision" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              Misión
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-xl rounded-xl">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Proporcionar soluciones innovadoras y de alta calidad en pisos industriales de altas especificaciones, 
                  garantizando la satisfacción total de nuestros clientes a través de la excelencia técnica y el 
                  compromiso con los más altos estándares internacionales.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Nos especializamos en el desarrollo de pisos que satisfacen los requerimientos de sistemas automatizados 
                  y tecnologías de vanguardia para la industria logística moderna.
                </p>
              </div>
            </div>
          </div>

          <div ref={visionRef} id="vision" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              Visión
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 shadow-xl rounded-xl">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Ser reconocidos como el líder indiscutible en el mercado mexicano de pisos industriales 
                  de altas especificaciones, estableciendo nuevos estándares de calidad y servicio en la industria.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Aspiramos a expandir nuestra presencia a nivel internacional, llevando la excelencia técnica 
                  y la innovación mexicana a mercados globales, mientras contribuimos al desarrollo de la 
                  industria logística automatizada.
                </p>
              </div>
            </div>
          </div>

          <div ref={valoresRef} id="valores" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              Valores
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md">
                  <h4 className="font-bold mb-3 text-xl text-blue-800">Excelencia</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Buscamos la perfección en cada proyecto que realizamos, aplicando los más altos 
                    estándares de calidad en todos nuestros procesos.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md">
                  <h4 className="font-bold mb-3 text-xl text-purple-800">Innovación</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Adoptamos las últimas tecnologías y métodos para mejorar constantemente 
                    nuestros servicios y mantenernos a la vanguardia.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md">
                  <h4 className="font-bold mb-3 text-xl text-green-800">Integridad</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Actuamos con honestidad y transparencia en todas nuestras operaciones, 
                    construyendo relaciones de confianza duraderas.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-md">
                  <h4 className="font-bold mb-3 text-xl text-orange-800">Compromiso</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Nos dedicamos a superar las expectativas de nuestros clientes, 
                    ofreciendo soluciones personalizadas y soporte integral.
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

export default AcercaDeNosotros;
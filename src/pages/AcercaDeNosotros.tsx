import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function AcercaDeNosotros() {
  const location = useLocation();
  const historiaRef = useRef<HTMLDivElement>(null);
  const misionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash) {
      let targetElement: HTMLElement | null = null;
      
      switch (location.hash) {
        case '#historia':
          targetElement = historiaRef.current;
          break;
        case '#mision':
          targetElement = misionRef.current;
          break;
        case '#vision':
          targetElement = visionRef.current;
          break;
        default:
          break;
      }
      
      if (targetElement) {
        // Calculate offset to position title at top (accounting for fixed header)
        const headerHeight = 144; // pt-36 = 144px
        const elementTop = targetElement.offsetTop - headerHeight;
        window.scrollTo({ 
          top: Math.max(0, elementTop), 
          behavior: 'auto' 
        });
      }
    } else {
      // Scroll to top if no hash is present
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location]);

  return (
    <div className="pt-36 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Acerca de nosotros</h1>
          <p className="text-xl text-gray-700 mb-16 text-center leading-relaxed">
            En TECNOSLAB, nos especializamos en pisos continuos 
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
                <div className="flex justify-center">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <img 
                      src="https://res.cloudinary.com/dy089iwsg/image/upload/v1748985492/Logo_cqr9ul.svg" 
                      alt="TECNOSLAB - Pisos Continuos de Alta Planicidad" 
                      className="w-full max-w-sm h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={misionRef} id="mision" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              Misión
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
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

          <div ref={visionRef} id="vision" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-700 pl-4">
              Visión
            </h2>
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Ser reconocidos como el líder indiscutible en el mercado mexicano de pisos industriales 
                de altas especificaciones, estableciendo nuevos estándares de calidad y servicio en la industria.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Aspiramos ampliar nuestra presencia en el mercado mexicano, impulsando la excelencia técnica y la innovación para contribuir al desarrollo de la industria logística automatizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcercaDeNosotros;
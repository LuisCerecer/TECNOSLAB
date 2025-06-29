import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function AcercaDeNosotros() {
  const location = useLocation();
  const historiaRef = useRef<HTMLDivElement>(null);
  const misionVisionValoresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash) {
      switch (location.hash) {
        case '#historia':
          historiaRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '#mision-vision-valores':
          misionVisionValoresRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        default:
          break;
      }
    }
  }, [location]);

  return (
    <div className="pt-36 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">Acerca de nosotros</h1>
        <p className="text-lg text-gray-700 mb-10">
          En Tecnoslab, nos especializamos en la instalación y mantenimiento de pisos continuos 
          de alta planicidad para aplicaciones industriales exigentes. Nuestra experiencia y tecnología 
          nos posicionan como líderes en el mercado mexicano.
        </p>

        <div ref={historiaRef} id="historia" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-3 border-blue-700 pl-3">
            Historia
          </h2>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-700 mb-3">
              Fundada en 2005, Tecnoslab surgió como respuesta a la creciente necesidad de pisos industriales 
              de alta calidad en México. A lo largo de los años, hemos perfeccionado nuestras técnicas y 
              expandido nuestra presencia en todo el país.
            </p>
            <p className="text-gray-700 mb-3">
              Nuestra asociación con CoGri Group en 2010 marcó un antes y después en nuestra historia, 
              permitiéndonos implementar tecnologías de vanguardia y estándares internacionales.
            </p>
            <img 
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Historia de Tecnoslab" 
              className="w-full h-51 object-cover rounded-lg my-5"
            />
            <p className="text-gray-700">
              Hoy contamos con más de 1,000 proyectos completados exitosamente y un equipo de expertos 
              comprometidos con la excelencia.
            </p>
          </div>
        </div>

        <div ref={misionVisionValoresRef} id="mision-vision-valores" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-3 border-blue-700 pl-3">
            Misión, Visión y Valores
          </h2>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Misión</h3>
                <p className="text-gray-700">
                  Proporcionar soluciones innovadoras y de alta calidad en pisos industriales, 
                  garantizando la satisfacción total de nuestros clientes a través de la 
                  excelencia técnica y el compromiso con los más altos estándares internacionales.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Visión</h3>
                <p className="text-gray-700">
                  Ser reconocidos como el líder indiscutible en el mercado mexicano de 
                  pisos industriales, estableciendo nuevos estándares de calidad y 
                  servicio en la industria.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Valores</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">Excelencia</h4>
                    <p className="text-gray-700">Buscamos la perfección en cada proyecto que realizamos.</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">Innovación</h4>
                    <p className="text-gray-700">Adoptamos las últimas tecnologías y métodos para mejorar constantemente.</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">Integridad</h4>
                    <p className="text-gray-700">Actuamos con honestidad y transparencia en todas nuestras operaciones.</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">Compromiso</h4>
                    <p className="text-gray-700">Nos dedicamos a superar las expectativas de nuestros clientes.</p>
                  </div>
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
import React from 'react';
import { Link } from 'react-router-dom';

function NuestraInformacion() {
  return (
    <div className="pt-44 min-h-screen bg-gray-50">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Nuestra información</h1>
        <p className="text-xl text-gray-700 mb-12">
          Encuentra toda la información de contacto y ubicación de nuestras oficinas.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 shadow-lg rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-700 pl-4">
              Información de Contacto
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-700 text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Oficinas Centrales</h3>
                  <p className="text-gray-700">
                    Av. Industria 245, Parque Industrial<br />
                    Querétaro, QRO 76120, México
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-700 text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Teléfono</h3>
                  <p className="text-gray-700">+52 (442) 123-4567</p>
                  <p className="text-gray-500 text-sm">Lunes a Viernes, 8:00 - 18:00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-700 text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-700">info@tecnoslab.mx</p>
                  <p className="text-gray-700">ventas@tecnoslab.mx</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-700 text-xl">🔗</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/in/martincerecer/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline transition-colors"
                  >
                    linkedin.com/in/martincerecer/
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Solicitudes Específicas</h3>
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <h4 className="font-semibold text-blue-700">Solicitar Cotización</h4>
                <p className="text-gray-700 text-sm">
                  Para proyectos específicos, envía los detalles a cotizaciones@tecnoslab.mx
                </p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h4 className="font-semibold text-blue-700">Agendar Visita</h4>
                <p className="text-gray-700 text-sm">
                  Coordina una visita técnica llamando al +52 (442) 123-4567 ext. 102
                </p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h4 className="font-semibold text-blue-700">Soporte Técnico</h4>
                <p className="text-gray-700 text-sm">
                  Para asistencia técnica escribe a soporte@tecnoslab.mx
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700">Información General</h4>
                <p className="text-gray-700 text-sm">
                  Para información general contacta a info@tecnoslab.mx
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              ¿Quieres contactarnos directamente? Visita nuestras opciones de contacto:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contactanos" 
                className="inline-block px-6 py-3 bg-blue-100 hover:bg-blue-200 rounded-lg text-blue-800 font-medium transition-colors"
              >
                Formulario General
              </Link>
              <Link 
                to="/comunicacion-llamada-correo" 
                className="inline-block px-6 py-3 bg-blue-100 hover:bg-blue-200 rounded-lg text-blue-800 font-medium transition-colors"
              >
                Agenda una videollamada
              </Link>
              <Link 
                to="/unete-a-nuestra-lista" 
                className="inline-block px-6 py-3 bg-blue-100 hover:bg-blue-200 rounded-lg text-blue-800 font-medium transition-colors"
              >
                Únete a nuestra lista
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuestraInformacion;
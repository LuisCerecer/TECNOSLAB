import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UneteANuestraLista() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // Show success animation
    setShowSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        nombre: '',
        empresa: '',
        email: '',
      });
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="pt-44 min-h-screen bg-gray-50">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6"></h1>
        <p className="text-xl text-gray-700 mb-12">
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-700 pl-4">
              Únete a nuestra lista
            </h2>
            <div className="relative">
              {/* Success Animation */}
              {showSuccess && (
                <div className="absolute inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center rounded-lg z-10 animate-fade-in">
                  <div className="w-16 h-16 mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-500 text-4xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-600 mb-2">¡Gracias por suscribirte!</h3>
                  <p className="text-gray-600">Hemos recibido tu información correctamente.</p>
                </div>
              )}
              
              <form 
                className="bg-white p-8 shadow-lg rounded-lg"
                onSubmit={handleSubmit}
              >
                <div className="mb-6">
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      required
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Acepto recibir comunicaciones de Tecnoslab y la política de privacidad *
                    </span>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="bg-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors w-full md:w-auto"
                >
                  Suscribirme
                </button>
              </form>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-600">
                ¿Buscas otra forma de contacto? Visita nuestras otras opciones:
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <Link 
                  to="/contactanos" 
                  className="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
                >
                  Formulario General
                </Link>
                <Link 
                  to="/comunicacion-llamada-correo" 
                  className="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
                >
                  Agenda una videollamada
                </Link>
                <Link 
                  to="/nuestra-informacion" 
                  className="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
                >
                  Nuestra información
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default UneteANuestraLista;
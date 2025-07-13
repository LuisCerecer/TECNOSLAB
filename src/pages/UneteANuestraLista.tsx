import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle } from 'lucide-react';

function UneteANuestraLista() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaLoading, setCaptchaLoading] = useState(false);

  const verifyCaptcha = async () => {
    setCaptchaLoading(true);
    try {
      // Execute reCAPTCHA v3
      const token = await new Promise<string>((resolve, reject) => {
        if (window.grecaptcha) {
          window.grecaptcha.execute('6LcvAoIrAAAAABy7b9fwvDHJFlZzBuEMhuE3AlcA', { action: 'newsletter_signup_page' })
            .then(resolve)
            .catch(reject);
        } else {
          reject(new Error('reCAPTCHA not loaded'));
        }
      });

      // In a real implementation, you would send this token to your backend for verification
      // For now, we'll simulate a successful verification
      if (token) {
        setCaptchaVerified(true);
      }
    } catch (error) {
      console.error('CAPTCHA verification failed:', error);
      alert('Verificación de seguridad fallida. Por favor, intenta de nuevo.');
    } finally {
      setCaptchaLoading(false);
    }
  };
  
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
              
              <div className="bg-white p-8 shadow-lg rounded-lg">
                {!captchaVerified ? (
                  <div className="text-center py-16">
                    <div className="mb-8">
                      <Shield className="w-20 h-20 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Verificación de Seguridad
                      </h3>
                      <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        Para proteger nuestro sistema de suscripción contra bots y spam, 
                        necesitamos verificar que eres una persona real.
                      </p>
                    </div>
                    
                    <button
                      onClick={verifyCaptcha}
                      disabled={captchaLoading}
                      className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 text-lg rounded-lg disabled:opacity-50 transition-colors"
                    >
                      {captchaLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2 inline-block"></div>
                          Verificando...
                        </>
                      ) : (
                        <>
                          <Shield className="w-5 h-5 mr-2 inline-block" />
                          Verificar y Continuar
                        </>
                      )}
                    </button>
                    
                    <p className="text-sm text-gray-500 mt-4">
                      Protegido por reCAPTCHA v3. Se aplican los{' '}
                      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Términos de Servicio
                      </a>{' '}
                      y la{' '}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Política de Privacidad
                      </a>{' '}
                      de Google.
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-green-700 text-sm">
                        Verificación completada. Ahora puedes suscribirte a nuestra lista.
                      </span>
                    </div>
                    <form 
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
                )}
              </div>
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
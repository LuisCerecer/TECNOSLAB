import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, CheckCircle, MapPin, Globe } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  tipoProyecto: string;
  mensaje: string;
}

type ActiveTab = 'form' | 'contactInfo' | 'videoCall' | 'newsletter';

// Declare Turnstile type for TypeScript
declare global {
  interface Window {
    turnstile: {
      render: (element: string | HTMLElement, options: any) => string;
      reset: (widgetId?: string) => void;
      getResponse: (widgetId?: string) => string;
    };
  }
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    empresa: '',
    email: '',
    tipoProyecto: '',
    mensaje: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<ActiveTab>('form');
  const [newsletterData, setNewsletterData] = useState({
    nombre: '',
    empresa: '',
    email: ''
  });
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [captchaTokens, setCaptchaTokens] = useState({
    general: '',
    newsletter: '',
    videoCall: ''
  });

  const validateCaptcha = async (token: string): Promise<boolean> => {
    if (!token) {
      alert('Por favor, completa la verificación CAPTCHA.');
      return false;
    }

    try {
      // In a real implementation, this should be done server-side
      // For now, we'll just validate that the token exists
      const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: '0x4AAAAAABk-KFv8EOJLH9fvLVdnWvZX_0I',
          response: token,
        }),
      });

      const result = await response.json();
      return result.success;
    } catch (error) {
      console.error('CAPTCHA validation error:', error);
      alert('Error al validar CAPTCHA. Por favor, inténtalo de nuevo.');
      return false;
    }
  };
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate CAPTCHA before proceeding
    const isValidCaptcha = await validateCaptcha(captchaTokens.general);
    if (!isValidCaptcha) {
      return;
    }

    setShowSuccess(true);
    
    // Reset CAPTCHA
    if (window.turnstile) {
      window.turnstile.reset();
      setCaptchaTokens(prev => ({ ...prev, general: '' }));
    }
    
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        nombre: '',
        empresa: '',
        email: '',
        tipoProyecto: '',
        mensaje: ''
      });
    }, 3000);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate CAPTCHA before proceeding
    const isValidCaptcha = await validateCaptcha(captchaTokens.newsletter);
    if (!isValidCaptcha) {
      return;
    }

    setNewsletterSuccess(true);
    
    // Reset CAPTCHA
    if (window.turnstile) {
      window.turnstile.reset();
      setCaptchaTokens(prev => ({ ...prev, newsletter: '' }));
    }
    
    setTimeout(() => {
      setNewsletterSuccess(false);
      setNewsletterData({
        nombre: '',
        empresa: '',
        email: ''
      });
    }, 3000);
  };

  const handleVideoCallSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate CAPTCHA before proceeding
    const isValidCaptcha = await validateCaptcha(captchaTokens.videoCall);
    if (!isValidCaptcha) {
      return;
    }

    // Handle video call form submission here
    alert('Solicitud de videollamada enviada correctamente.');
    
    // Reset CAPTCHA
    if (window.turnstile) {
      window.turnstile.reset();
      setCaptchaTokens(prev => ({ ...prev, videoCall: '' }));
    }
  };
  const tiposProyecto = [
    { value: 'ingenieria', label: 'Ingeniería de piso' },
    { value: 'medicion', label: 'Medición del piso' },
    { value: 'reparacion', label: 'Reparación del piso' },
    { value: 'otra', label: 'Otra consulta' }
  ];

  const contactInfo = {
    correo: 'martincerecer@tecnoslab.com',
    numero: '+52 33 1726 4826',
    redesSociales: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/martincerecer/', icon: <Globe className="w-5 h-5" /> }
    ]
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Contáctanos</h1>

      <div className="flex flex-wrap justify-center gap-5 mb-10 w-full max-w-5xl">
        <Button
          variant={activeTab === 'form' ? 'default' : 'outline'}
          className={`flex-1 min-w-[144px] py-3 text-base ${activeTab === 'form' ? 'bg-blue-600 text-white' : 'text-gray-700 border-gray-300 hover:bg-blue-600 hover:text-white'}`}
          onClick={() => setActiveTab('form')}
        >
          Formulario general
        </Button>
        <Button
          variant={activeTab === 'newsletter' ? 'default' : 'outline'}
          className={`flex-1 min-w-[144px] py-3 text-base ${activeTab === 'newsletter' ? 'bg-blue-600 text-white' : 'text-gray-700 border-gray-300 hover:bg-blue-600 hover:text-white'}`}
          onClick={() => setActiveTab('newsletter')}
        >
          Únete a nuestra lista
        </Button>
        <Button
          variant={activeTab === 'videoCall' ? 'default' : 'outline'}
          className={`flex-1 min-w-[144px] py-3 text-base ${activeTab === 'videoCall' ? 'bg-blue-600 text-white' : 'text-gray-700 border-gray-300 hover:bg-blue-600 hover:text-white'}`}
          onClick={() => setActiveTab('videoCall')}
        >
          Agenda una videollamada
        </Button>
        <Button
          variant={activeTab === 'contactInfo' ? 'default' : 'outline'}
          className={`flex-1 min-w-[144px] py-3 text-base ${activeTab === 'contactInfo' ? 'bg-blue-600 text-white' : 'text-gray-700 border-gray-300 hover:bg-blue-600 hover:text-white'}`}
          onClick={() => setActiveTab('contactInfo')}
        >
          Nuestra información
        </Button>
      </div>

      <Card className="w-full max-w-4xl mx-auto relative bg-white border-blue-200 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800 py-3">
            {activeTab === 'form' && 'Formulario general'}
            {activeTab === 'newsletter' && 'Únete a nuestra lista'}
            {activeTab === 'contactInfo' && 'Nuestra Información de Contacto'}
            {activeTab === 'videoCall' && 'Agenda tu Videollamada'}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-10">
          <AnimatePresence mode="wait">
            {activeTab === 'form' && (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-6"
                name="contact-general"
                method="POST"
                data-netlify="true"
                data-netlify-recaptcha="true"
              >
                <input type="hidden" name="form-name" value="contact-general" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-base font-medium text-gray-700">
                      Nombre *
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      value={formData.nombre}
                      onChange={(e) => handleInputChange('nombre', e.target.value)}
                      className="w-full h-10 text-base"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="empresa" className="text-base font-medium text-gray-700">
                      Empresa *
                    </Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      type="text"
                      value={formData.empresa}
                      onChange={(e) => handleInputChange('empresa', e.target.value)}
                      className="w-full h-10 text-base"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium text-gray-700">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full h-10 text-base"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tipoProyecto" className="text-base font-medium text-gray-700">
                      Tipo de Proyecto
                    </Label>
                    <select
                      name="tipoProyecto"
                      value={formData.tipoProyecto}
                      onChange={(e) => handleInputChange('tipoProyecto', e.target.value)}
                      className="w-full h-10 text-base px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Selecciona un tipo de proyecto</option>
                      {tiposProyecto.map((tipo) => (
                        <option key={tipo.value} value={tipo.value}>
                          {tipo.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="text-base font-medium text-gray-700">
                    Mensaje
                  </Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={(e) => handleInputChange('mensaje', e.target.value)}
                    className="w-full min-h-[120px] text-base"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-base font-medium text-gray-700">
                    Verificación de seguridad *
                  </Label>
                  <div 
                    className="cf-turnstile" 
                    data-sitekey="0x4AAAAAABk-KKQ_hSlVOnyk"
                    data-callback={(token: string) => setCaptchaTokens(prev => ({ ...prev, general: token }))}
                  ></div>
                </div>
                <div data-netlify-recaptcha="true"></div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 h-11 text-lg"
                  size="lg"
                >
                  Enviar
                </Button>
              </motion.form>
            )}

            {activeTab === 'newsletter' && (
              <motion.form
                key="newsletter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleNewsletterSubmit}
                className="space-y-6"
                name="newsletter-signup"
                method="POST"
                data-netlify="true"
                data-netlify-recaptcha="true"
              >
                <input type="hidden" name="form-name" value="newsletter-signup" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="newsletter-nombre" className="text-base font-medium text-gray-700">
                      Nombre *
                    </Label>
                    <Input
                      id="newsletter-nombre"
                      name="nombre"
                      type="text"
                      value={newsletterData.nombre}
                      onChange={(e) => setNewsletterData(prev => ({ ...prev, nombre: e.target.value }))}
                      className="w-full h-10 text-base"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newsletter-empresa" className="text-base font-medium text-gray-700">
                      Empresa *
                    </Label>
                    <Input
                      id="newsletter-empresa"
                      name="empresa"
                      type="text"
                      value={newsletterData.empresa}
                      onChange={(e) => setNewsletterData(prev => ({ ...prev, empresa: e.target.value }))}
                      className="w-full h-10 text-base"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newsletter-email" className="text-base font-medium text-gray-700">
                    Email *
                  </Label>
                  <Input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    value={newsletterData.email}
                    onChange={(e) => setNewsletterData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full h-10 text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-base font-medium text-gray-700">
                    Verificación de seguridad *
                  </Label>
                  <div 
                    className="cf-turnstile" 
                    data-sitekey="0x4AAAAAABk-KKQ_hSlVOnyk"
                    data-callback={(token: string) => setCaptchaTokens(prev => ({ ...prev, newsletter: token }))}
                  ></div>
                </div>
                <div data-netlify-recaptcha="true"></div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 h-11 text-lg"
                  size="lg"
                >
                  Suscribirme
                </Button>
              </motion.form>
            )}

            {activeTab === 'videoCall' && (
              <motion.div
                key="videoCall"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <form onSubmit={handleVideoCallSubmit} className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">
                      Solicitar Videollamada
                    </h3>
                    <p className="text-gray-700">
                      Completa el formulario y nos pondremos en contacto contigo para agendar una videollamada 
                      en el horario que mejor te convenga.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-base font-medium text-gray-700">
                        Nombre *
                      </Label>
                      <Input
                        type="text"
                        className="w-full h-10 text-base"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-base font-medium text-gray-700">
                        Empresa *
                      </Label>
                      <Input
                        type="text"
                        className="w-full h-10 text-base"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-base font-medium text-gray-700">
                        Email *
                      </Label>
                      <Input
                        type="email"
                        className="w-full h-10 text-base"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-base font-medium text-gray-700">
                        Teléfono *
                      </Label>
                      <Input
                        type="tel"
                        className="w-full h-10 text-base"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-base font-medium text-gray-700">
                      Motivo de la consulta *
                    </Label>
                    <Textarea
                      className="w-full min-h-[120px] text-base"
                      placeholder="Describe brevemente el motivo de tu consulta..."
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-base font-medium text-gray-700">
                      Verificación de seguridad *
                    </Label>
                    <div 
                      className="cf-turnstile" 
                      data-sitekey="0x4AAAAAABk-KKQ_hSlVOnyk"
                      data-callback={(token: string) => setCaptchaTokens(prev => ({ ...prev, videoCall: token }))}
                    ></div>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 h-11 text-lg"
                    size="lg"
                  >
                    Solicitar Videollamada
                  </Button>
                </form>
              </motion.div>
            )}

            {activeTab === 'contactInfo' && (
              <motion.div
                key="contactInfo"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-lg">Correo Electrónico</h3>
                    <p className="text-base">{contactInfo.correo}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-lg">Número de Teléfono</h3>
                    <p className="text-base">{contactInfo.numero}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg flex items-center space-x-2">
                    <Globe className="w-6 h-6 text-blue-600" />
                    <span>Redes Sociales</span>
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {contactInfo.redesSociales.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-5 py-2 border border-blue-300 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors duration-200 text-base"
                      >
                        {social.icon}
                        <span>{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Success Animation for General Form */}
          {showSuccess && (
            <div className="absolute inset-0 bg-blue-50 bg-opacity-95 flex flex-col items-center justify-center rounded-lg z-10">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <div className="w-22 h-22 mb-6 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-13 h-13 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-3">¡Mensaje Enviado!</h3>
                <p className="text-gray-600 text-center max-w-lg text-base">Hemos recibido tu información correctamente. Nos pondremos en contacto contigo pronto.</p>
              </motion.div>
            </div>
          )}

          {/* Newsletter Success Animation */}
          {newsletterSuccess && (
            <div className="absolute inset-0 bg-blue-50 bg-opacity-95 flex flex-col items-center justify-center rounded-lg z-10">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <div className="w-22 h-22 mb-6 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-13 h-13 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-3">¡Te has suscrito!</h3>
                <p className="text-gray-600 text-center max-w-lg text-base">Te has unido exitosamente a nuestra lista. Recibirás nuestras actualizaciones pronto.</p>
              </motion.div>
            </div>
          )}

        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
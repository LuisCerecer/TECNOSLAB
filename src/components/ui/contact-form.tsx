import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, CheckCircle, MapPin, Globe } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { submitContactForm, ContactSubmission } from '@/lib/supabase';
import Cal, { getCalApi } from "@calcom/embed-react";

const RECAPTCHA_SITE_KEY = '6Lc7UHIrAAAAAM8gcBjNJMejkGO4eDO3TjgT2F2h';

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  tipoProyecto: string;
  mensaje: string;
}

type ActiveTab = 'form' | 'contactInfo' | 'videoCall' | 'newsletter';

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
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterData, setNewsletterData] = useState({
    nombre: '',
    empresa: '',
    email: ''
  });
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterRecaptchaToken, setNewsletterRecaptchaToken] = useState<string | null>(null);
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);

  // Cal.com configuration effect
  useEffect(() => {
    if (activeTab === 'videoCall') {
      (async function () {
        const cal = await getCalApi({"namespace":"30min"});
        cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#292929"},"dark":{"cal-brand":"#fafafa"}},"hideEventTypeDetails":false,"layout":"month_view"});
      })();
    }
  }, [activeTab]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      alert('Por favor, completa la verificación reCAPTCHA');
      return;
    }
    
    setIsSubmitting(true);
    
    const submitData = async () => {
      try {
        const submissionData: ContactSubmission = {
          type: 'general',
          name: formData.nombre,
          email: formData.email,
          company: formData.empresa,
          project_type: formData.tipoProyecto,
          message: formData.mensaje
        };

        await submitContactForm(submissionData);
        
        setShowSuccess(true);
        setRecaptchaToken(null);
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
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
      } finally {
        setIsSubmitting(false);
      }
    };

    submitData();
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsletterRecaptchaToken) {
      alert('Por favor, completa la verificación reCAPTCHA');
      return;
    }
    
    setIsNewsletterSubmitting(true);
    
    const submitNewsletterData = async () => {
      try {
        const submissionData: ContactSubmission = {
          type: 'newsletter',
          name: newsletterData.nombre,
          email: newsletterData.email,
          company: newsletterData.empresa
        };

        await submitContactForm(submissionData);
        
        setNewsletterSuccess(true);
        setNewsletterRecaptchaToken(null);
        setTimeout(() => {
          setNewsletterSuccess(false);
          setNewsletterData({
            nombre: '',
            empresa: '',
            email: ''
          });
        }, 3000);
      } catch (error) {
        console.error('Error submitting newsletter:', error);
        alert('Error al suscribirse. Por favor, inténtalo de nuevo.');
      } finally {
        setIsNewsletterSubmitting(false);
      }
    };

    submitNewsletterData();
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
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/martincerecer/', icon: <Globe className="w-5 h-5" /> },
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
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-base font-medium text-gray-700">
                      Nombre *
                    </Label>
                    <Input
                      id="nombre"
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
                    <Select onValueChange={(value) => handleInputChange('tipoProyecto', value)} value={formData.tipoProyecto}>
                      <SelectTrigger className="w-full h-10 text-base">
                        <SelectValue placeholder="Selecciona un tipo de proyecto" />
                      </SelectTrigger>
                      <SelectContent>
                        {tiposProyecto.map((tipo) => (
                          <SelectItem key={tipo.value} value={tipo.value}>
                            {tipo.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="text-base font-medium text-gray-700">
                    Mensaje
                  </Label>
                  <Textarea
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={(e) => handleInputChange('mensaje', e.target.value)}
                    className="w-full min-h-[120px] text-base"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <div className="flex justify-center">
                  <ReCAPTCHA
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={(token) => setRecaptchaToken(token)}
                    onExpired={() => setRecaptchaToken(null)}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 h-11 text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                  size="lg"
                  disabled={!recaptchaToken || isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
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
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="newsletter-nombre" className="text-base font-medium text-gray-700">
                      Nombre *
                    </Label>
                    <Input
                      id="newsletter-nombre"
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
                    type="email"
                    value={newsletterData.email}
                    onChange={(e) => setNewsletterData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full h-10 text-base"
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <ReCAPTCHA
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={(token) => setNewsletterRecaptchaToken(token)}
                    onExpired={() => setNewsletterRecaptchaToken(null)}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 h-11 text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                  size="lg"
                  disabled={!newsletterRecaptchaToken || isNewsletterSubmitting}
                >
                  {isNewsletterSubmitting ? 'Suscribiendo...' : 'Suscribirme'}
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
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <p className="text-gray-600 text-lg mb-4">
                    Selecciona una fecha y hora que te convenga para nuestra videollamada.
                  </p>
                  <p className="text-gray-500 text-base">
                    📅 Disponible: Lunes a Viernes<br />
                    🕒 Horario: 11:00 AM - 6:00 PM (GMT-6)
                  </p>
                </div>
                
                {/* Cal.com React Component */}
                <div className="w-full border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                  <Cal 
                    namespace="30min"
                    calLink="testing-luis-c/30min"
                    style={{width:"90%",height:"90%",overflow:"scroll"}}
                    config={{"layout":"month_view"}}
                  />
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-center text-sm text-gray-600">
                    <p className="font-medium mb-2">🎯 ¿Qué incluye tu videollamada?</p>
                    <ul className="text-left max-w-md mx-auto space-y-1">
                      <li>• Consulta personalizada sobre tu proyecto</li>
                      <li>• Recomendaciones técnicas específicas</li>
                      <li>• Estimación preliminar de costos</li>
                      <li>• Enlace de Zoom enviado por email</li>
                    </ul>
                  </div>
                </div>
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

          {/* Success Animation */}
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
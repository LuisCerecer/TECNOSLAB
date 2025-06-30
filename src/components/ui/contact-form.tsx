import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, CheckCircle, Globe } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

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
    mensaje: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<ActiveTab>('form');
  const [newsletterData, setNewsletterData] = useState({
    nombre: '',
    empresa: '',
    email: '',
  });
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  /* --------------- submit handlers (unchanged) --------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        nombre: '',
        empresa: '',
        email: '',
        tipoProyecto: '',
        mensaje: '',
      });
    }, 3000);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterSuccess(false);
      setNewsletterData({ nombre: '', empresa: '', email: '' });
    }, 3000);
  };
  /* ----------------------------------------------------------- */

  const tiposProyecto = [
    { value: 'ingenieria', label: 'Ingeniería de piso' },
    { value: 'medicion', label: 'Medición del piso' },
    { value: 'reparacion', label: 'Reparación del piso' },
    { value: 'otra', label: 'Otra consulta' },
  ];

  const contactInfo = {
    correo: 'martincerecer@tecnoslab.com',
    numero: '+52 33 1726 4826',
    redesSociales: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/martincerecer/',
        icon: <Globe className="w-5 h-5" />,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Contáctanos</h1>

      {/* ---------- tab buttons ---------- */}
      <div className="flex flex-wrap justify-center gap-5 mb-10 w-full max-w-5xl">
        <Button
          variant={activeTab === 'form' ? 'default' : 'outline'}
          className={`flex-1 min-w-[144px] py-3 text-base ${
            activeTab === 'form'
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 border-gray-300 hover:bg-blue-600 hover:text-white'
          }`}
          onClick={() => setActiveTab('form')}
        >
          Formulario general
        </Button>
        <Button
          variant={activeTab === 'newsletter' ? 'default' : 'outline'}
          className={`flex-1 min-w-[144px] py-3 text-base ${
            activeTab === 'newsletter'
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 border-gray-300 hover:bg-blue-600 hover:text-white'
          }`}
          onClick={() => setActiveTab('newsletter')}
        >
          Únete a nuestra lista
        </Button>
        <Button
          variant={activeTab === 'videoCall' ? 'default' : 'outline'}
          className={`flex-1 min-w-[144px] py-3 text-base ${
            activeTab === 'videoCall'
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 border-gray-300 hover:bg-blue-600 hover:text-white'
          }`}
          onClick={() => setActiveTab('videoCall')}
        >
          Agenda una videollamada
        </Button>
        <Button
          variant={activeTab === 'contactInfo' ? 'default' : 'outline'}
          className={`flex-1 min-w-[144px] py-3 text-base ${
            activeTab === 'contactInfo'
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 border-gray-300 hover:bg-blue-600 hover:text-white'
          }`}
          onClick={() => setActiveTab('contactInfo')}
        >
          Nuestra información
        </Button>
      </div>

      {/* ---------- card ---------- */}
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
            {/* --------------------------- FORM TAB (unchanged) --------------------------- */}
            {activeTab === 'form' && (
              /* … tu código de formulario original … */
              <></>
            )}

            {/* ----------------------- NEWSLETTER TAB (unchanged) ----------------------- */}
            {activeTab === 'newsletter' && (
              /* … tu código de newsletter original … */
              <></>
            )}

            {/* -------------------  ✅  UPDATED VIDEOCALL TAB  ✅  ------------------- */}
            {activeTab === 'videoCall' && (
              <motion.div
                key="videoCall"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* --- Cal.com inline embed only --- */}
                <div
                  style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                  id="my-cal-inline-30min"
                ></div>
                <script
                  type="text/javascript"
                  dangerouslySetInnerHTML={{
                    __html: `(function (C, A, L) {
  let p = function (a, ar) { a.q.push(ar); };
  let d = C.document;
  C.Cal = C.Cal || function () {
    let cal = C.Cal; let ar = arguments;
    if (!cal.loaded) {
      cal.ns = {}; cal.q = cal.q || [];
      d.head.appendChild(d.createElement("script")).src = A;
      cal.loaded = true;
    }
    if (ar[0] === L) {
      const api = function () { p(api, arguments); };
      const namespace = ar[1]; api.q = api.q || [];
      if (typeof namespace === "string") {
        cal.ns[namespace] = cal.ns[namespace] || api;
        p(cal.ns[namespace], ar);
        p(cal, ["initNamespace", namespace]);
      } else p(cal, ar);
      return;
    }
    p(cal, ar);
  };
})(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "30min", { origin: "https://app.cal.com" });
Cal.ns["30min"]("inline", {
  elementOrSelector: "#my-cal-inline-30min",
  config: { "layout": "month_view" },
  calLink: "testing-luis-c/30min",
});
Cal.ns["30min"]("ui", {
  cssVarsPerTheme: {
    light: { "cal-brand": "#292929" },
    dark: { "cal-brand": "#fafafa" }
  },
  hideEventTypeDetails: false,
  layout: "month_view"
});`,
                  }}
                />
              </motion.div>
            )}

            {/* --------------------- CONTACT INFO TAB (unchanged) --------------------- */}
            {activeTab === 'contactInfo' && (
              /* … tu código de información de contacto original … */
              <></>
            )}
          </AnimatePresence>

          {/* ------- success overlays (unchanged) ------- */}
          {/* … overlays originales … */}
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;

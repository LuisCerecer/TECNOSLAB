/* ContactForm.tsx */
import React, { useEffect, useState } from 'react';
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

/* ------------------------------------------------------------------- */
/* ↓↓↓ helper component that really embeds Cal.com                      */
/* ------------------------------------------------------------------- */
const CalInline30Min: React.FC = () => {
  useEffect(() => {
    // 1. Load Cal.com's embed script once
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;

    // 2. After the loader finishes, initialise the calendar
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Cal: any = (window as any).Cal;
      if (!Cal) return;

      Cal('init', '30min', { origin: 'https://app.cal.com' });

      Cal.ns['30min']('inline', {
        elementOrSelector: '#my-cal-inline-30min',
        config: { layout: 'month_view' },
        // 👇 change this to your real event-type URL if different
        calLink: 'testing-luis-c/30min',
      });

      Cal.ns['30min']('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#292929' },
          dark: { 'cal-brand': '#fafafa' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    };

    document.head.appendChild(script);

    // 3. Optional clean-up
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
      const holder = document.getElementById('my-cal-inline-30min');
      if (holder) holder.innerHTML = '';
    };
  }, []);

  /* Holder div—Cal.com will inject the iframe into it */
  return (
    <div
      id="my-cal-inline-30min"
      style={{ width: '100%', height: '600px', overflow: 'auto' }}
    />
  );
};
/* ------------------------------------------------------------------- */

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  tipoProyecto: string;
  mensaje: string;
}

type ActiveTab = 'form' | 'contactInfo' | 'videoCall' | 'newsletter';

const ContactForm: React.FC = () => {
  /* --------------- state --------------- */
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

  /* --------------- handlers --------------- */
  const handleInputChange = (field: keyof FormData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
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

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterSuccess(false);
      setNewsletterData({ nombre: '', empresa: '', email: '' });
    }, 3000);
  };

  /* --------------- static data --------------- */
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

  /* =============================================================== */
  /* ===================== component render ======================== */
  /* =============================================================== */
  return (
    <div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Contáctanos</h1>

      {/* ---------- tab buttons ---------- */}
      <div className="flex flex-wrap justify-center gap-5 mb-10 w-full max-w-5xl">
        {([
          ['form', 'Formulario general'],
          ['newsletter', 'Únete a nuestra lista'],
          ['videoCall', 'Agenda una videollamada'],
          ['contactInfo', 'Nuestra información'],
        ] as [ActiveTab, string][]).map(([key, label]) => (
          <Button
            key={key}
            variant={activeTab === key ? 'default' : 'outline'}
            className={`flex-1 min-w-[144px] py-3 text-base ${
              activeTab === key
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 border-gray-300 hover:bg-blue-600 hover:text-white'
            }`}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </Button>
        ))}
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
            {/* ---------------------- 1. FORM TAB ---------------------- */}
            {activeTab === 'form' && (
              /* --------------- your original <form> stays here --------------- */
              /* (omitted for brevity – keep exactly what you had) */
              <></>
            )}

            {/* ------------------ 2. NEWSLETTER TAB ------------------ */}
            {activeTab === 'newsletter' && (
              /* --------------- your newsletter form (unchanged) --------------- */
              <></>
            )}

            {/* ----------------- 3. VIDEOCALL TAB (NEW) ----------------- */}
            {activeTab === 'videoCall' && (
              <motion.div
                key="videoCall"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <CalInline30Min />
              </motion.div>
            )}

            {/* ---------------- 4. CONTACT INFO TAB ---------------- */}
            {activeTab === 'contactInfo' && (
              /* --------------- your original contact-info block --------------- */
              <></>
            )}
          </AnimatePresence>

          {/* ---------- success overlays (unchanged) ---------- */}
          {/* keep your two overlay blocks here */}
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;

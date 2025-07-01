import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

// Import pages
import AcercaDeNosotros from './pages/AcercaDeNosotros';
import Productos from './pages/Productos';
import Servicios from './pages/Servicios';
import Proyectos from './pages/Proyectos';
import FAQ from './pages/FAQ';
import Contactanos from './pages/Contactanos';
import UneteANuestraLista from './pages/UneteANuestraLista';
import ComunicacionPorLlamadaOCorreo from './pages/ComunicacionPorLlamadaOCorreo';
import NuestraInformacion from './pages/NuestraInformacion';
import TerminosYCondiciones from './pages/TerminosYCondiciones';

// Import components
import NavMenu from './components/NavMenu';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Fade-in animation for elements as they load
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
      // Remove visible class first to reset animation
      element.classList.remove('visible');
      setTimeout(() => {
        element.classList.add('visible');
      }, 100 * index);
    });
  }, [location.pathname]);

  // Handle logo click
  const handleLogoClick = (e: React.MouseEvent) => {
    // Always scroll to top when clicking logo
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    if (location.pathname === '/') {
      // If already on home page, prevent navigation
      e.preventDefault();
    }
  };

  // Handle scroll to top when navigating to home page
  useEffect(() => {
    if (location.pathname === '/' && !location.hash) {
      // Scroll to top when on home page without hash
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  // Trigger fade-in animation when on home page
  useEffect(() => {
    if (location.pathname === '/') {
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach((element, index) => {
        element.classList.remove('visible');
        setTimeout(() => {
          element.classList.add('visible');
        }, 100 * index);
      });
    }
  }, [location.pathname]);

  // Handle initial fade-in animation on component mount
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
      element.classList.remove('visible');
      setTimeout(() => {
        element.classList.add('visible');
      }, 100 * index);
    });
  }, [location.pathname]);

  // Navigation items data
  const navItems = [
    {
      name: 'Acerca de nosotros',
      path: '/acerca-de-nosotros',
      items: [
        { name: 'Historia', hash: '#historia' },
        { name: 'Misión', hash: '#mision' },
        { name: 'Visión', hash: '#vision' }
      ],
      title: 'Acerca de nosotros',
      featured: {
        title: 'Nuestra Misión',
        image: 'https://res.cloudinary.com/dy089iwsg/image/upload/v1748985492/Logo_cqr9ul.svg',
        description: 'Construyendo el futuro con calidad'
      }
    },
    {
      name: 'Productos',
      path: '/productos',
      items: [
        { name: 'TecnoMG', hash: '#tecnomg' },
        { name: 'TecnoCM', hash: '#tecnocm' }
      ],
      title: 'Productos',
      featured: {
        title: 'Pisos Industriales',
        image: 'https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Soluciones de alta durabilidad'
      }
    },
    {
      name: 'Servicios',
      path: '/servicios',
      items: [
        { name: 'Medición de Planicidad - Tráfico Aleatorio', hash: '#trafico-aleatorio' },
        { name: 'Medición de Planicidad - Tráfico Definido', hash: '#trafico-definido' },
        { name: 'Diseño e Ingeniería de Pisos Industriales', hash: '#diseno-ingenieria' },
        { name: 'Corrección de Planicidad por Desbaste', hash: '#correccion-desbaste' },
        { name: 'Corrección de Planicidad por Recubrimientos', hash: '#correccion-recubrimientos' },
        { name: 'Reparación de Juntas', hash: '#reparacion-juntas' }
      ],
      title: 'Servicios',
      featured: {
        title: 'Instalación Profesional',
        image: 'https://images.pexels.com/photos/210137/pexels-photo-210137.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Instalación con los más altos estándares'
      }
    },
    {
      name: 'Proyectos',
      path: '/proyectos',
      items: [
        { name: 'BOSCH Ciudad Juárez', hash: '#bosch' },
        { name: 'CYS Querétaro', hash: '#cys' }
      ],
      title: 'Proyectos',
      featured: {
        title: 'BOSCH Ciudad Juárez',
        image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Proyectos ejecutados con precisión'
      }
    }
  ];

  // Contact dropdown data
  // Render the Home content
  const HomePage = () => (
    <>
      {/* Hero Section */}
      <section className="relative pt-36 h-[75vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dy089iwsg/image/upload/v1749174888/Inicial_zwmyya.png" 
            alt="Industrial Flooring" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-xl bg-white bg-opacity-90 p-10 fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-5">
              Pisos Industriales de Alta Calidad y Precisión
            </h1>
            <p className="text-[1.4rem] text-gray-700 mb-6">
              Soluciones de pisos continuos con la más alta tecnología y estándares internacionales para la industria en México.
            </p>
            <Link to="/contactanos" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 text-base transition-all duration-300 transform hover:scale-105 inline-block">
              Contáctanos
            </Link>
          </div>
        </div>
        
        {/* LinkedIn Icon */}
        <a 
          href="https://linkedin.com/in/martincerecer/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-20"
          title="Visitar perfil de LinkedIn"
        >
          <Linkedin size={22} />
        </a>
      </section>

      {/* Partnerships Block */}
      <section className="bg-white py-16 fade-in">
        <div className="container mx-auto px-6">
          {/* Professional Header Section */}
          <div className="text-center mb-13">
            <h2 className="text-[3.6rem] font-bold text-gray-900 mb-6 leading-tight">
              Representantes en México
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-[1.8rem] text-gray-700 mb-5 leading-relaxed">
                Somos <span className="font-semibold text-blue-700">representantes exclusivos en México</span> de 
                <span className="font-semibold text-blue-700"> COGRI GESPAP</span>, parte del prestigioso 
                <span className="font-semibold text-blue-700"> COGRI GROUP</span>.
              </p>
              <p className="text-[1.5rem] text-gray-600 leading-relaxed">
                Líderes mundiales en <span className="font-medium">diseño, ingeniería, medición de planicidad y certificación</span> 
                de pisos industriales para <span className="font-medium">sistemas robóticos y pasillos VNA</span>.
              </p>
            </div>
          </div>

          {/* Logo Section with LinkedIn */}
          <div className="relative">
            <div className="flex justify-center items-center flex-wrap gap-17">
              {/* COGRI GROUP Logo */}
              <div className="group cursor-pointer">
                <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="h-[240px] w-[320px]">
                    <img 
                      src="https://res.cloudinary.com/dy089iwsg/image/upload/v1749175470/COGRI_Gr_f8od78.png" 
                      alt="CoGri Group - Líderes mundiales en pisos industriales" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* COGRI GESPAP Logo */}
              <div className="group cursor-pointer">
                <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="h-[240px] w-[320px]">
                    <img 
                      src="https://res.cloudinary.com/dy089iwsg/image/upload/v1749176708/COGRI_Gespapa_GPT_isngfw.png" 
                      alt="COGRI GESPAP - Tecnología avanzada en pisos industriales" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="mt-13 flex justify-center">
              <div className="w-19 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 fade-in">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-13 text-gray-800">Proyectos Destacados</h2>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "BOSCH Ciudad Juárez",
                image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200",
                section: "bosch"
              },
              {
                title: "CYS Querétaro",
                image: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1200",
                section: "cys"
              }
            ].map((project, index) => (
              <motion.div 
                key={index} 
                className="project-card overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] h-[320px] relative"
                onClick={() => {
                  navigate(`/proyectos#${project.section}`);
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 text-white p-5">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-[100]">
        <div className="container mx-auto px-6 py-1 flex justify-between items-center">
          <Link to="/" className="h-16" onClick={handleLogoClick}>
            <img 
              src="/Tecnosbal logo.png" 
              alt="TECNOSLAB" 
              className="h-full object-contain" 
            />
          </Link>
          
          <NavMenu navItems={navItems} />
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/acerca-de-nosotros" element={<AcercaDeNosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/unete-a-nuestra-lista" element={<UneteANuestraLista />} />
          <Route path="/comunicacion-llamada-correo" element={<ComunicacionPorLlamadaOCorreo />} />
          <Route path="/nuestra-informacion" element={<NuestraInformacion />} />
          <Route path="/terminos-y-condiciones" element={<TerminosYCondiciones />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 fade-in">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-6">
            <div className="h-16">
              <img 
                src="/Tecnosbal logo.png" 
                alt="TECNOSLAB" 
                className="h-full object-contain"
              />
            </div>
            <div className="text-right">
              <p>© {new Date().getFullYear()} TECNOSLAB</p>
              <p>Pisos Continuos de Alta Planicidad</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-5">
            <div className="flex justify-center space-x-6 text-sm">
              <Link 
                to="/terminos-y-condiciones" 
                className="text-gray-300 hover:text-white underline transition-colors"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
import React, { useState } from 'react';  
import { motion, AnimatePresence } from 'framer-motion';  
import LogoHeader from './components/LogoHeader';  
import SearchBar from './components/SearchBar';  
import NormativeMegaCard from './components/NormativeMegaCard';  
import StandardsMegaCard from './components/StandardsMegaCard';  
import MegaGlossary from './components/MegaGlossary';  
import MegaPrivacySection from './components/MegaPrivacySection';  
import Watermark from './components/Watermark';  
import { Shield, FileText, Scale, AlertTriangle, Globe, Settings, Database, AlertCircle } from 'lucide-react';  
import TabNavigation from './components/TabNavigation';  

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('leyes');

  const laws = [  
    {  
      title: 'Ley General de Protección de Datos Personales de México',  
      description: 'La normativa principal para salvaguardar la información personal en el país, aplicable a entidades públicas y privadas.',  
      whatIs: 'Es una ley federal promulgada en 2010 que establece las bases para el tratamiento lícito de datos personales, definiendo obligaciones para responsables y derechos para los titulares.',  
      forWhat: 'Sirve para prevenir el mal uso de datos sensibles, promover la transparencia, garantizar el consentimiento informado y permitir a los individuos ejercer control sobre su información personal, evitando sanciones por incumplimiento.',  
      link: 'https://www.dof.gob.mx/nota_detalle.php?codigo=5279751&fecha=05/07/2010',  
      type: 'law',  
      logoIcon: Shield  
    },  
    {  
      title: 'Ley de Propiedad Industrial',  
      description: 'Regula la protección de invenciones, marcas y diseños en el ámbito industrial y comercial mexicano.',  
      whatIs: 'Es la ley que otorga derechos exclusivos sobre patentes, modelos de utilidad, diseños industriales y nombres comerciales, administrada por el IMPI.',  
      forWhat: 'Sirve para incentivar la innovación tecnológica y creativa, prevenir la competencia desleal mediante copias, y resolver disputas legales relacionadas con la propiedad intelectual industrial.',  
      link: 'https://www.sep.gob.mx/work/models/sep1/Resource/7dc3f003-329b-42ba-abb3-b7921ad2eda6/ley_propiedad_industrial.pdf',  
      type: 'law',  
      logoIcon: FileText  
    },  
    {  
      title: 'Ley Federal de Derechos de Autor',  
      description: 'Protege las creaciones literarias, artísticas, científicas y software en México contra usos no autorizados.',  
      whatIs: 'Normativa que cubre obras originales desde su creación, incluyendo derechos morales y patrimoniales, gestionada por el INDAUTOR.',  
      forWhat: 'Sirve para fomentar la producción cultural e intelectual, establecer límites al uso justo (fair use), y aplicar sanciones por piratería, reproducción ilegal o distribución sin permiso.',  
      link: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFDA.pdf',  
      type: 'law',  
      logoIcon: Scale  
    },  
    {  
      title: 'Código Penal Federal',  
      description: 'Incluye disposiciones sobre delitos cibernéticos y violaciones al manejo de información en el ámbito federal.',  
      whatIs: 'Es el conjunto de leyes penales nacionales que tipifica delitos como el acceso ilícito a sistemas (art. 211 bis), revelación de secretos y fraude informático.',  
      forWhat: 'Sirve para castigar conductas delictivas relacionadas con datos, como el robo de información personal o ataques a infraestructuras digitales, con penas de hasta 15 años de prisión y multas elevadas.',  
      link: 'https://mexico.justia.com/federales/codigos/codigo-penal-federal/',  
      type: 'law',  
      logoIcon: AlertTriangle  
    }  
  ];  

  const standards = [  
    {  
      title: 'ISO 27001',  
      description: 'Estándar internacional para la gestión de la seguridad de la información en organizaciones.',  
      whatIs: 'Es un marco normativo que define requisitos para establecer, implementar, mantener y mejorar un Sistema de Gestión de Seguridad de la Información (SGSI).',  
      forWhat: 'Sirve para identificar y tratar riesgos de seguridad, certificar cumplimiento y demostrar a stakeholders que se protegen activos informáticos de manera sistemática y efectiva.',  
      link: 'https://www.iso.org/standard/27001',  
      type: 'standard',  
      logoIcon: Globe  
    },  
    {  
      title: 'ISO 17799 (ahora ISO 27002)',  
      description: 'Guía detallada de controles y prácticas para la seguridad de la información.',  
      whatIs: 'Es un código de práctica que proporciona recomendaciones para 14 dominios de control de seguridad, desde políticas hasta cumplimiento legal.',  
      forWhat: 'Sirve para implementar medidas prácticas como control de acceso, criptografía y respuesta a incidentes, ayudando a organizaciones a mitigar amenazas diarias en el manejo de datos.',  
      link: 'https://www.iso.org/standard/75652.html',  
      type: 'standard',  
      logoIcon: Settings  
    },  
    {  
      title: 'COBIT',  
      description: 'Marco de gobernanza y gestión de TI enfocado en el control empresarial.',  
      whatIs: 'Desarrollado por ISACA, es un conjunto de procesos que ayudan a las empresas a gobernar y gestionar su TI de forma alineada con objetivos de negocio.',  
      forWhat: 'Sirve para evaluar madurez de procesos TI, asegurar cumplimiento normativo y optimizar recursos, especialmente en auditorías y alineación estratégica de información.',  
      link: 'https://www.isaca.org/resources/cobit',  
      type: 'standard',  
      logoIcon: Database  
    },  
    {  
      title: 'NIST',  
      description: 'Framework de ciberseguridad del Instituto Nacional de Estándares y Tecnología de EE.UU.',  
      whatIs: 'Es un marco voluntario con cinco funciones principales: Identificar, Proteger, Detectar, Responder y Recuperar ante ciberriesgos.',  
      forWhat: 'Sirve para gestionar y reducir riesgos cibernéticos en la información, adaptable a cualquier organización, y es referencia global para políticas de seguridad digital.',  
      link: 'https://www.nist.gov/cyberframework',  
      type: 'standard',  
      logoIcon: Shield  
    },  
    {  
      title: 'ITIL',  
      description: 'Biblioteca de Infraestructura de TI para la gestión de servicios.',  
      whatIs: 'Es un conjunto de prácticas para la alineación de TI con necesidades del negocio, cubriendo ciclos de vida de servicios desde diseño hasta mejora continua.',  
      forWhat: 'Sirve para estandarizar procesos como gestión de incidentes, cambios y problemas en el manejo de información, mejorando eficiencia y calidad de servicios TI.',  
      link: 'https://www.axelos.com/certifications/itil-service-management',  
      type: 'standard',  
      logoIcon: Settings  
    }  
  ];  

  const filterItems = (items, query) => {
    if (!query.trim()) return items;
    
    const searchTerm = query.toLowerCase().trim();
    return items.filter(item => 
      Object.values(item)
        .filter(value => typeof value === 'string')
        .some(value => value.toLowerCase().includes(searchTerm))
    );
  };

  const filteredLaws = filterItems(laws, searchQuery);
  const filteredStandards = filterItems(standards, searchQuery);

  const NoResultsAlert = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-slate-800/50 backdrop-blur-xl border border-amber-500/20 rounded-xl p-4 mb-8 flex items-center text-amber-400"
    >
      <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
      <span>No se encontraron resultados para "{searchQuery}". Intenta con otros términos.</span>
    </motion.div>
  );

  const renderContent = () => {  
    switch (activeTab) {  
      case 'leyes':  
        return (  
          <motion.div  
            initial={{ opacity: 0, y: 20 }}  
            animate={{ opacity: 1, y: 0 }}  
            exit={{ opacity: 0, y: -20 }}  
          >  
            <section className="section mb-16">  
              <h2>Leyes Mexicanas Aplicables</h2>  
              <AnimatePresence>
                {searchQuery && filteredLaws.length === 0 ? (
                  <NoResultsAlert />
                ) : (
                  <div className="grid">
                    {filteredLaws.map((law, index) => (
                      <NormativeMegaCard
                        key={index}
                        {...law}
                        transition={{ delay: index * 0.1 }}
                      />
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </section>  
          </motion.div>  
        );  
      
      case 'estandares':  
        return (  
          <motion.div  
            initial={{ opacity: 0, y: 20 }}  
            animate={{ opacity: 1, y: 0 }}  
            exit={{ opacity: 0, y: -20 }}  
          >  
            <section className="section mb-16">  
              <h2>Estándares Internacionales</h2>  
              <AnimatePresence>
                {searchQuery && filteredStandards.length === 0 ? (
                  <NoResultsAlert />
                ) : (
                  <div className="grid">
                    {filteredStandards.map((std, index) => (
                      <StandardsMegaCard
                        key={index}
                        {...std}
                        transition={{ delay: index * 0.1 }}
                      />
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </section>  
          </motion.div>  
        );  
      
      case 'glosario':  
        return (  
          <motion.div  
            initial={{ opacity: 0, y: 20 }}  
            animate={{ opacity: 1, y: 0 }}  
            exit={{ opacity: 0, y: -20 }}  
          >  
            <MegaGlossary />  
          </motion.div>  
        );  
      
      case 'recursos':  
        return (  
          <motion.div  
            initial={{ opacity: 0, y: 20 }}  
            animate={{ opacity: 1, y: 0 }}  
            exit={{ opacity: 0, y: -20 }}  
          >  
            <MegaPrivacySection />  
          </motion.div>  
        );  
      
      default:  
        return null;  
    }  
  };  

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    setActiveTab('recursos');
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black font-sans">
      <Watermark />
      <motion.div
        className="container mx-auto max-w-7xl px-6 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <LogoHeader />
        <SearchBar 
          onSearch={setSearchQuery} 
          laws={laws} 
          standards={standards}
        />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />  
        
        <AnimatePresence mode="wait">  
          {renderContent()}  
        </AnimatePresence>  

        <footer className="bg-black/80 py-8 mt-16 border-t border-white/10">  
          <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">  
            <span>&copy; 2025 Normateca Elite. Todos los derechos reservados.</span>  
            <span>  
              <a 
                href="#contacto" 
                onClick={handlePrivacyClick}
                className="hover:text-cyan-400 underline"
              >
                Contacto
              </a>
              {' | '}
              <a 
                href="#privacidad" 
                onClick={handlePrivacyClick}
                className="hover:text-cyan-400 underline"
              >
                Aviso de Privacidad
              </a>
            </span>  
          </div>  
        </footer>  
      </motion.div>  
    </div>  
  );  
};  

export default App;
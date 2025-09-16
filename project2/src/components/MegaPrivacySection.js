import React, { useState } from 'react';  
import { motion, AnimatePresence } from 'framer-motion';  
import { Mail, Globe, Shield, FileText, ExternalLink, Info, Lock, UserCheck, Calendar, X, ChevronRight } from 'lucide-react';  

const MegaPrivacySection = () => {  
  const [activeSection, setActiveSection] = useState('general');
  const [showFullPrivacy, setShowFullPrivacy] = useState(false);

  const privacyContent = {
    general: {
      title: 'Información General',
      content: 'Normateca Elite, comercialmente conocido como Normateca Elite, con domicilio en Dolores Hidalgo, es el responsable del uso y protección de sus datos personales.',
      icon: Info
    },
    finalidades: {
      title: 'Finalidades Primarias',
      content: [
        'Respuesta a mensajes del formulario de contacto',
        'Prestación de cualquier servicio solicitado'
      ],
      icon: Shield
    },
    datos: {
      title: 'Datos Personales Recabados',
      content: 'Para las finalidades señaladas, podemos recabar sus datos de identificación y contacto, datos biométricos, datos laborales, datos académicos.',
      icon: UserCheck
    },
    derechosArco: {
      title: 'Derechos ARCO',
      content: 'Usted tiene derecho a conocer qué datos personales tenemos de usted (Acceso), solicitar su corrección (Rectificación), eliminación (Cancelación), u oponerse a su uso (Oposición). La respuesta a su solicitud será atendida en un plazo máximo de 10 días hábiles.',
      icon: Lock
    },
    datosWeb: {
      title: 'Datos Recabados por el Sitio Web',
      content: [
        'Identificadores, nombre de usuario y contraseñas de sesión',
        'Región en la que se encuentra el usuario',
        'Fecha y hora del inicio y final de una sesión de un usuario',
        'Páginas web visitadas por un usuario',
        'Búsquedas realizadas por un usuario'
      ],
      icon: Globe
    }
  };

  const fullPrivacyText = `
    AVISO DE PRIVACIDAD

    Normateca Elite, comercialmente conocido como Normateca Elite, con domicilio en Dolores Hidalgo, es el responsable del uso y protección de sus datos personales.

    FINALIDADES PRIMARIAS
    Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
    • Respuesta a mensajes del formulario de contacto
    • Prestación de cualquier servicio solicitado

    DATOS PERSONALES RECABADOS
    Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos de identificación y contacto, datos biométricos, datos laborales, datos académicos.

    DERECHOS ARCO
    Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.

    Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través de los medios especificados. La respuesta a su solicitud será atendida en un plazo máximo de 10 días hábiles.

    DATOS RECABADOS POR EL SITIO WEB
    Nuestro sitio web recaba automáticamente los siguientes datos:
    • Identificadores, nombre de usuario y contraseñas de sesión
    • Región en la que se encuentra el usuario
    • Fecha y hora del inicio y final de una sesión de un usuario
    • Páginas web visitadas por un usuario
    • Búsquedas realizadas por un usuario

    CONTACTO
    Para más información sobre este aviso de privacidad, puede contactarnos en:
    Correo electrónico: consultas@normatecaelite.com
    Sitio web: www.normatecaelite.com

    Última actualización: 15/9/2025
  `;

  return (
    <>
      <motion.div  
        className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-purple-500/20 relative overflow-hidden"  
        initial={{ opacity: 0, y: 50 }}  
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.8 }}  
      >  
        <div className="absolute top-4 left-4 text-purple-400 opacity-80">  
          <Shield className="w-8 h-8" />  
        </div>  
        <div className="relative z-10">  
          <h2 className="text-4xl font-bold text-white mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">  
            Aviso de Privacidad  
          </h2>  

          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            {Object.keys(privacyContent).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2
                  ${activeSection === section 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-slate-800/50 text-gray-300 hover:bg-purple-500/20'}`}
              >
                {React.createElement(privacyContent[section].icon, { size: 16 })}
                <span>{privacyContent[section].title}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/20"
          >
            <div className="flex items-center mb-4">
              {React.createElement(privacyContent[activeSection].icon, { 
                className: "w-6 h-6 text-purple-400 mr-3" 
              })}
              <h3 className="text-xl font-bold text-white">
                {privacyContent[activeSection].title}
              </h3>
            </div>
            
            {Array.isArray(privacyContent[activeSection].content) ? (
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {privacyContent[activeSection].content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-300">
                {privacyContent[activeSection].content}
              </p>
            )}
          </motion.div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="flex items-center p-4 bg-slate-800/50 rounded-2xl border border-purple-500/20">
              <Mail className="w-6 h-6 text-purple-400 mr-3" />
              <div>
                <strong className="text-white text-lg">Contacto:</strong>
                <p className="text-gray-300">consultas@normatecaelite.com</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-slate-800/50 rounded-2xl border border-purple-500/20">
              <Calendar className="w-6 h-6 text-purple-400 mr-3" />
              <div>
                <strong className="text-white text-lg">Última actualización:</strong>
                <p className="text-gray-300">15/9/2025</p>
              </div>
            </div>
          </div>
        </div>

        <motion.button
          onClick={() => setShowFullPrivacy(true)}
          className="mt-8 w-full flex items-center justify-center px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-xl text-purple-300 transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FileText className="w-5 h-5 mr-2" />
          Ver Aviso de Privacidad Completo
          <ChevronRight className="w-5 h-5 ml-2" />
        </motion.button>
      </motion.div>  

      <AnimatePresence>
        {showFullPrivacy && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={() => setShowFullPrivacy(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-10 bg-slate-900 rounded-3xl p-6 md:p-8 z-50 overflow-y-auto border border-purple-500/20"
            >
              <button
                onClick={() => setShowFullPrivacy(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-8 h-8 mr-3 text-purple-400" />
                Aviso de Privacidad Completo
              </h2>
              
              <div className="prose prose-invert prose-purple max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-gray-300 leading-relaxed">
                  {fullPrivacyText}
                </pre>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setShowFullPrivacy(false)}
                  className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-xl text-white transition-all duration-300"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );  
};

export default MegaPrivacySection;
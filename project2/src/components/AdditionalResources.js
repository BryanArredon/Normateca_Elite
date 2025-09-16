import React from 'react';  
import { motion } from 'framer-motion';  
import { Link2 } from 'lucide-react';  

const AdditionalResources = () => {  
  const resources = [  
    { name: 'INAI - Instituto Nacional de Transparencia', url: 'https://www.inai.org.mx/', desc: 'Autoridad en protección de datos en México.' },  
    { name: 'IMPI - Instituto Mexicano de la Propiedad Industrial', url: 'https://www.gob.mx/impi', desc: 'Registro de marcas y patentes.' },  
    { name: 'Guía de Ciberseguridad NIST', url: 'https://www.nist.gov/cyberframework', desc: 'Recursos gratuitos para seguridad.' }  
  ];  

  return (  
    <motion.div  
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"  
      initial={{ opacity: 0 }}  
      animate={{ opacity: 1 }}  
      transition={{ delay: 0.4 }}  
    >  
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">  
        <Link2 className="w-5 h-5 mr-2 text-green-500" /> Recursos Adicionales  
      </h3>  
      <ul className="space-y-3">  
        {resources.map((res, index) => (  
          <motion.li  
            key={index}  
            className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"  
            initial={{ opacity: 0, scale: 0.95 }}  
            animate={{ opacity: 1, scale: 1 }}  
            transition={{ delay: index * 0.1 + 0.5 }}  
          >  
            <div>  
              <a href={res.url} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:underline">{res.name}</a>  
              <p className="text-sm text-gray-600">{res.desc}</p>  
            </div>  
            <Link2 className="w-4 h-4 text-gray-400" />  
          </motion.li>  
        ))}  
      </ul>  
    </motion.div>  
  );  
};  

export default AdditionalResources;
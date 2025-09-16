import React from 'react';  
import { motion } from 'framer-motion';  
import { BookOpen } from 'lucide-react';  

const Glossary = () => {  
  const terms = [  
    { term: 'Protección de Datos', def: 'Marco legal que salvaguarda la información personal contra usos indebidos.' },  
    { term: 'Propiedad Intelectual', def: 'Derechos sobre creaciones originales como invenciones y obras artísticas.' },  
    { term: 'Ciberseguridad', def: 'Prácticas para proteger sistemas y datos contra amenazas digitales.' },  
    { term: 'SGSI', def: 'Sistema de Gestión de Seguridad de la Información, como ISO 27001.' }  
  ];  

  return (  
    <motion.div  
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"  
      initial={{ opacity: 0 }}  
      animate={{ opacity: 1 }}  
      transition={{ delay: 0.3 }}  
    >  
      <div className="flex items-center mb-4">  
        <BookOpen className="w-6 h-6 text-blue-500 mr-2" />  
        <h3 className="text-lg font-bold text-gray-800">Glosario Rápido</h3>  
      </div>  
      <div className="grid md:grid-cols-2 gap-4">  
        {terms.map((item, index) => (  
          <motion.div  
            key={index}  
            className="bg-gray-50 p-3 rounded-lg"  
            initial={{ opacity: 0, x: -20 }}  
            animate={{ opacity: 1, x: 0 }}  
            transition={{ delay: index * 0.1 }}  
          >  
            <strong className="text-blue-600">{item.term}:</strong> {item.def}  
          </motion.div>  
        ))}  
      </div>  
    </motion.div>  
  );  
};  

export default Glossary;
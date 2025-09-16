import React from 'react';  
import { motion } from 'framer-motion';  
import { Shield, Download, ExternalLink } from 'lucide-react';  

const NormativeCard = ({ title, description, whatIs, forWhat, link, type = 'law' }) => {  
  const Icon = type === 'law' ? Shield : ExternalLink;  
  const color = type === 'law' ? 'from-blue-500 to-indigo-600' : 'from-green-500 to-emerald-600';  

  return (  
    <motion.div  
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"  
      whileHover={{ y: -5, scale: 1.02 }}  
      initial={{ opacity: 0, y: 20 }}  
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.5 }}  
    >  
      <div className="flex items-start justify-between mb-4">  
        <div className={`p-3 rounded-xl bg-gradient-to-r ${color} text-white`}>  
          <Icon className="w-5 h-5" />  
        </div>  
        <motion.button  
          className="text-gray-500 hover:text-blue-600"  
          whileHover={{ scale: 1.1 }}  
          whileTap={{ scale: 0.95 }}  
        >  
          <ExternalLink className="w-5 h-5" />  
        </motion.button>  
      </div>  
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>  
      <p className="text-gray-600 mb-4">{description}</p>  
      <div className="space-y-2 text-sm">  
        <p><strong>¿Qué es?</strong> {whatIs}</p>  
        <p><strong>¿Para qué sirve?</strong> {forWhat}</p>  
      </div>  
      <a  
        href={link}  
        target="_blank"  
        rel="noopener noreferrer"  
        className="inline-flex items-center mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"  
      >  
        <Download className="w-4 h-4 mr-2" />  
        Acceder/Descargar  
      </a>  
    </motion.div>  
  );  
};  

export default NormativeCard;
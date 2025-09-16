import React from 'react';  
import { motion } from 'framer-motion';  
import { Globe, FileText, ExternalLink, AlertCircle, Scale, Settings } from 'lucide-react';  

const StandardsMegaCard = ({ title, description, whatIs, forWhat, link, logoIcon: Icon }) => {  
  return (  
    <motion.div  
      className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"  
      whileHover={{ y: -10, scale: 1.02 }}  
      initial={{ opacity: 0, y: 50 }}  
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.6 }}  
    >  
      <div className="absolute top-4 right-4 opacity-80">  
        <motion.div  
          className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white"  
          whileHover={{ scale: 1.1 }}  
        >  
          {Icon ? <Icon className="w-6 h-6" /> : <Globe className="w-6 h-6" />}  
        </motion.div>  
      </div>  
      <div className="relative z-10">  
        <h3 className="text-3xl font-bold text-white mb-4 flex items-center">  
          {title}  
          <ExternalLink className="w-6 h-6 ml-2 text-emerald-400" />  
        </h3>  
        <p className="text-gray-300 text-lg mb-6 leading-relaxed">{description}</p>  
        <div className="space-y-6 mb-8">  
          <div className="bg-slate-800/50 p-6 rounded-2xl border-l-4 border-emerald-500">  
            <div className="flex items-start mb-2">  
              <AlertCircle className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />  
              <strong className="text-xl text-emerald-400">¿Qué es?</strong>  
            </div>  
            <p className="text-gray-300 text-base">{whatIs}</p>  
          </div>  
          <div className="bg-slate-800/50 p-6 rounded-2xl border-l-4 border-teal-500">  
            <div className="flex items-start mb-2">  
              <Scale className="w-5 h-5 text-teal-400 mt-0.5 mr-3 flex-shrink-0" />  
              <strong className="text-xl text-teal-400">¿Para qué sirve?</strong>  
            </div>  
            <p className="text-gray-300 text-base">{forWhat}</p>  
          </div>  
        </div>  
        <a  
          href={link}  
          target="_blank"  
          rel="noopener noreferrer"  
          className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"  
        >  
          <FileText className="w-5 h-5 mr-3" />
          Más Información y Recursos Oficiales  
        </a>  
      </div>  
    </motion.div>  
  );  
};  

export default StandardsMegaCard;
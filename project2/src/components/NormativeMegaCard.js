import React from 'react';  
import { motion } from 'framer-motion';  
import { Scale, FileText, ExternalLink, AlertCircle, Gavel, BookOpen, Download } from 'lucide-react';  

const NormativeMegaCard = ({ title, description, whatIs, forWhat, link, type = 'law', logoIcon: Icon }) => {  
  return (  
    <motion.div  
      className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"  
      whileHover={{ y: -10, scale: 1.02 }}  
      initial={{ opacity: 0, y: 50 }}  
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.6 }}  
    >  
      <div className="absolute top-4 right-4 opacity-80">  
        <motion.div  
          className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white"  
          whileHover={{ scale: 1.1 }}  
        >  
          {Icon ? <Icon className="w-6 h-6" /> : <Gavel className="w-6 h-6" />}  
        </motion.div>  
      </div>  
      <div className="relative z-10">  
        <h3 className="text-3xl font-bold text-white mb-4 flex items-center">  
          {title}  
          <BookOpen className="w-6 h-6 ml-2 text-cyan-400" />  
        </h3>  
        <p className="text-gray-300 text-lg mb-6 leading-relaxed">{description}</p>  
        <div className="space-y-6 mb-8">  
          <div className="bg-slate-800/50 p-6 rounded-2xl border-l-4 border-cyan-500">  
            <div className="flex items-start mb-2">  
              <AlertCircle className="w-5 h-5 text-cyan-400 mt-0.5 mr-3 flex-shrink-0" />  
              <strong className="text-xl text-cyan-400">¿Qué es?</strong>  
            </div>  
            <p className="text-gray-300 text-base">{whatIs}</p>  
          </div>  
          <div className="bg-slate-800/50 p-6 rounded-2xl border-l-4 border-purple-500">  
            <div className="flex items-start mb-2">  
              <Scale className="w-5 h-5 text-purple-400 mt-0.5 mr-3 flex-shrink-0" />  
              <strong className="text-xl text-purple-400">¿Para qué sirve?</strong>  
            </div>  
            <p className="text-gray-300 text-base">{forWhat}</p>  
          </div>  
        </div>  
        <a  
          href={link}  
          target="_blank"  
          rel="noopener noreferrer"  
          className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"  
        >  
          <Download className="w-5 h-5 mr-3" />  
          Acceder al Documento Oficial  
        </a>  
      </div>  
    </motion.div>  
  );  
};  

export default NormativeMegaCard;
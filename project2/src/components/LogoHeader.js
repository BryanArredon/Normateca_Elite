import React from 'react';  
import { motion } from 'framer-motion';  
import { Shield, Book, Scale } from 'lucide-react';  

const LogoHeader = () => {  
  return (  
    <motion.div  
      className="text-center mb-16 relative overflow-hidden"  
      initial={{ opacity: 0, scale: 0.8 }}  
      animate={{ opacity: 1, scale: 1 }}  
      transition={{ duration: 1, type: "spring" }}  
    >  
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-20"></div>  
      <motion.div  
        className="relative z-10 flex justify-center items-center mb-8"  
        whileHover={{ scale: 1.05 }}  
      >  
        <div className="p-4 bg-slate-900/50 backdrop-blur-sm rounded-full border border-cyan-500/30">  
          <Shield className="w-12 h-12 text-cyan-400 mx-2" />  
          <Book className="w-12 h-12 text-cyan-400 mx-2" />  
          <Scale className="w-12 h-12 text-cyan-400 mx-2" />  
        </div>  
      </motion.div>  
      <motion.h1  
        className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl"  
        initial={{ y: -50 }}  
        animate={{ y: 0 }}  
        transition={{ duration: 0.8, delay: 0.2 }}  
      >  
        Normateca Elite  
      </motion.h1>  
      <motion.p  
        className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4"  
        initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }}  
        transition={{ duration: 0.8, delay: 0.4 }}  
      >  
        Tu portal definitivo para normativas éticas y legales en el manejo de la información. Explora leyes mexicanas, estándares globales y protege tus datos con estilo.  
      </motion.p>  
    </motion.div>  
  );  
};  

export default LogoHeader;
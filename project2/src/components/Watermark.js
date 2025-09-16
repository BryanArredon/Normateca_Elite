import React from 'react';  
import { motion } from 'framer-motion';  

const Watermark = () => {  
  return (  
    <motion.div  
      className="fixed bottom-6 right-6 opacity-20 text-cyan-400 text-2xl font-bold rotate-[-12deg] pointer-events-none z-50"  
      initial={{ opacity: 0, scale: 0.5 }}  
      animate={{ opacity: 0.2, scale: 1 }}  
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}  
    >  
      <div className="bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-cyan-500/30">  
        <p className="tracking-widest drop-shadow-lg">Normateca Elite © 2023</p>  
        <p className="text-xs mt-1">Legal Shield Activated</p>  
      </div>  
    </motion.div>  
  );  
};  

export default Watermark;
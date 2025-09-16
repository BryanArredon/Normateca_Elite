import React, { useState, useEffect, useRef } from 'react';  
import { motion, AnimatePresence } from 'framer-motion';  
import { BookOpen, Search, X, ArrowRight, AlertCircle } from 'lucide-react';  

const MegaGlossary = () => {  
  const [searchQuery, setSearchQuery] = useState('');  
  const [isFocused, setIsFocused] = useState(false);  
  const [suggestions, setSuggestions] = useState([]);  
  const searchRef = useRef(null);  

  const terms = [  
    { term: 'Aspectos Éticos del Manejo de Información', def: 'Principios morales que guían el uso responsable de datos, evitando daños y promoviendo transparencia en el tratamiento de información personal y corporativa.' },  
    { term: 'Ley General de Protección de Datos Personales', def: 'Normativa mexicana que regula la recolección, uso y protección de datos personales en posesión de particulares y obligados, asegurando derechos ARCO (Acceso, Rectificación, Cancelación, Oposición).', },  
    { term: 'Propiedad Industrial', def: 'Derechos exclusivos sobre invenciones, marcas registradas y diseños que protegen la innovación técnica y comercial contra copias no autorizadas.' },  
    { term: 'Derecho de Autor', def: 'Protección legal para obras creativas originales, como libros, software y arte, que impide reproducciones o distribuciones sin permiso del creador.' },  
    { term: 'Código Penal Federal en Ciberseguridad', def: 'Artículos que penalizan delitos como el acceso ilícito a sistemas, robo de datos y violaciones a la privacidad digital, con penas que van de multas a prisión.' },  
    { term: 'ISO 27001', def: 'Estándar internacional para Sistemas de Gestión de Seguridad de la Información (SGSI), que certifica procesos para mitigar riesgos en la protección de datos.' },  
    { term: 'COBIT', def: 'Marco de control y gobernanza de TI que alinea procesos tecnológicos con objetivos empresariales, enfocado en auditorías y cumplimiento.' },  
    { term: 'NIST Framework', def: 'Guía de ciberseguridad de EE.UU. que estructura la identificación, protección, detección, respuesta y recuperación ante amenazas informáticas.' }  
  ];  

  // Función de filtrado  
  const filteredTerms = terms.filter(item =>  
    searchQuery.trim() === '' ? true :  
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||  
    item.def.toLowerCase().includes(searchQuery.toLowerCase())  
  );  

  // Manejo de sugerencias  
  useEffect(() => {  
    if (searchQuery.trim().length > 1) {  
      const matches = terms  
        .filter(item =>  
          item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||  
          item.def.toLowerCase().includes(searchQuery.toLowerCase())  
        )  
        .slice(0, 5);  
      setSuggestions(matches);  
    } else {  
      setSuggestions([]);  
    }  
  }, [searchQuery]);  

  // Cerrar sugerencias al hacer clic fuera  
  useEffect(() => {  
    const handleClickOutside = (event) => {  
      if (searchRef.current && !searchRef.current.contains(event.target)) {  
        setIsFocused(false);  
      }  
    };  

    document.addEventListener('mousedown', handleClickOutside);  
    return () => document.removeEventListener('mousedown', handleClickOutside);  
  }, []);  

  const handleSuggestionClick = (term) => {  
    setSearchQuery(term.term);  
    setIsFocused(false);  
    setSuggestions([]);  
  };  

  const NoResultsAlert = () => (  
    <motion.div  
      initial={{ opacity: 0, y: -20 }}  
      animate={{ opacity: 1, y: 0 }}  
      exit={{ opacity: 0, y: -20 }}  
      className="bg-slate-800/50 backdrop-blur-xl border border-amber-500/20 rounded-xl p-4 mb-8 flex items-center text-amber-400"  
    >  
      <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />  
      <span>No se encontraron términos para "{searchQuery}". Intenta con otra palabra.</span>  
    </motion.div>  
  );  

  return (  
    <motion.div  
      className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-cyan-500/20"  
      initial={{ opacity: 0, x: -50 }}  
      animate={{ opacity: 1, x: 0 }}  
      transition={{ duration: 0.7 }}  
    >  
      <div className="flex items-center mb-8">  
        <BookOpen className="w-8 h-8 text-cyan-400 mr-4" />  
        <h3 className="text-3xl font-bold text-white">Glosario Completo de Términos Clave</h3>  
      </div>  

      {/* Barra de búsqueda */}  
      <div ref={searchRef} className="relative max-w-2xl mx-auto mb-8">  
        <div className={`relative transition-all duration-300 ${  
          isFocused ? 'shadow-2xl shadow-cyan-500/20 ring-2 ring-cyan-500/50' : 'shadow-lg'  
        }`}>  
          <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 transition-colors ${  
            isFocused ? 'text-cyan-400' : 'text-gray-400'  
          }`} />  
          <input  
            type="text"  
            value={searchQuery}  
            onChange={(e) => setSearchQuery(e.target.value)}  
            onFocus={() => setIsFocused(true)}  
            placeholder="Buscar términos en el glosario..."  
            className="w-full pl-12 pr-12 py-4 bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-xl focus:outline-none focus:border-cyan-500/50 text-white placeholder-gray-400 font-medium"  
          />  
          {searchQuery && (  
            <button  
              onClick={() => setSearchQuery('')}  
              className="absolute right-4 top-1/2 transform -translate-y-1/2"  
            >  
              <X className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors" />  
            </button>  
          )}  
        </div>  

        {/* Sugerencias */}  
        <AnimatePresence>  
          {isFocused && suggestions.length > 0 && (  
            <motion.div  
              initial={{ opacity: 0, y: -10 }}  
              animate={{ opacity: 1, y: 0 }}  
              exit={{ opacity: 0, y: -10 }}  
              className="absolute w-full mt-2 bg-slate-800/95 backdrop-blur-xl rounded-xl border border-cyan-500/20 shadow-2xl overflow-hidden z-50"  
            >  
              {suggestions.map((term, index) => (  
                <motion.button  
                  key={index}  
                  onClick={() => handleSuggestionClick(term)}  
                  className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-cyan-500/10 border-b border-cyan-500/10 last:border-none transition-colors duration-200"  
                  initial={{ opacity: 0, x: -20 }}  
                  animate={{ opacity: 1, x: 0 }}  
                  transition={{ delay: index * 0.05 }}  
                >  
                  <div className="flex-1">  
                    <h4 className="text-white font-medium">{term.term}</h4>  
                    <p className="text-sm text-gray-400 truncate">{term.def}</p>  
                  </div>  
                  <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0 ml-2" />  
                </motion.button>  
              ))}  
            </motion.div>  
          )}  
        </AnimatePresence>  
      </div>  

      {/* Resultados */}  
      <AnimatePresence>  
        {searchQuery && filteredTerms.length === 0 ? (  
          <NoResultsAlert />  
        ) : (  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">  
            {filteredTerms.map((item, index) => (  
              <motion.div  
                key={index}  
                className="bg-slate-800/50 p-6 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"  
                initial={{ opacity: 0, scale: 0.9 }}  
                animate={{ opacity: 1, scale: 1 }}  
                transition={{ delay: index * 0.05, duration: 0.5 }}  
                whileHover={{ scale: 1.02 }}  
              >  
                <h4 className="text-lg font-semibold text-cyan-400 mb-2 flex items-center">  
                  <Search className="w-4 h-4 mr-2" /> {item.term}  
                </h4>  
                <p className="text-gray-300 text-sm leading-relaxed">{item.def}</p>  
              </motion.div>  
            ))}  
          </div>  
        )}  
      </AnimatePresence>  
    </motion.div>  
  );  
};  

export default MegaGlossary;
import React, { useState, useEffect, useRef } from 'react';  
import { motion, AnimatePresence } from 'framer-motion';  
import { Search, X, ArrowRight } from 'lucide-react';  

const SearchBar = ({ onSearch, laws, standards }) => {  
  const [query, setQuery] = useState('');  
  const [isFocused, setIsFocused] = useState(false);  
  const [suggestions, setSuggestions] = useState([]);  
  const searchRef = useRef(null);  

  useEffect(() => {  
    if (query.trim().length > 1) {  
      const allItems = [...laws, ...standards];  
      const matches = allItems.filter(item =>   
        item.title.toLowerCase().includes(query.toLowerCase()) ||  
        item.description.toLowerCase().includes(query.toLowerCase())  
      ).slice(0, 5); // Limitamos a 5 sugerencias  
      setSuggestions(matches);  
    } else {  
      setSuggestions([]);  
    }  
  }, [query, laws, standards]);  

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

  const handleSubmit = (e) => {  
    e.preventDefault();  
    onSearch(query);  
    setIsFocused(false);  
  };  

  const handleSuggestionClick = (suggestion) => {  
    setQuery(suggestion.title);  
    onSearch(suggestion.title);  
    setIsFocused(false);  
    setSuggestions([]);  
  };  

  const clearSearch = () => {  
    setQuery('');  
    onSearch('');  
    setSuggestions([]);  
  };  

  return (  
    <div ref={searchRef} className="relative max-w-2xl mx-auto mb-12">  
      <motion.form  
        onSubmit={handleSubmit}  
        initial={{ scale: 0.95, opacity: 0 }}  
        animate={{ scale: 1, opacity: 1 }}  
        transition={{ duration: 0.5 }}  
      >  
        <div className={`relative transition-all duration-300 ${  
          isFocused ? 'shadow-2xl shadow-cyan-500/20 ring-2 ring-cyan-500/50' : 'shadow-lg'  
        }`}>  
          <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 transition-colors ${  
            isFocused ? 'text-cyan-400' : 'text-gray-400'  
          }`} />  
          <input  
            type="text"  
            value={query}  
            onChange={(e) => setQuery(e.target.value)}  
            onFocus={() => setIsFocused(true)}  
            placeholder="Busca leyes, estándares o términos éticos..."  
            className="w-full pl-12 pr-12 py-4 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl focus:outline-none focus:border-cyan-500/50 text-white placeholder-gray-400 font-medium text-lg"  
          />  
          {query && (  
            <button  
              type="button"  
              onClick={clearSearch}  
              className="absolute right-4 top-1/2 transform -translate-y-1/2"  
            >  
              <X className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors" />  
            </button>  
          )}  
        </div>  
      </motion.form>  

      <AnimatePresence>  
        {isFocused && suggestions.length > 0 && (  
          <motion.div  
            initial={{ opacity: 0, y: -10 }}  
            animate={{ opacity: 1, y: 0 }}  
            exit={{ opacity: 0, y: -10 }}  
            className="absolute w-full mt-2 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-cyan-500/20 shadow-2xl overflow-hidden z-50"  
          >  
            {suggestions.map((suggestion, index) => (  
              <motion.button  
                key={index}  
                onClick={() => handleSuggestionClick(suggestion)}  
                className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-cyan-500/10 border-b border-cyan-500/10 last:border-none transition-colors duration-200"  
                initial={{ opacity: 0, x: -20 }}  
                animate={{ opacity: 1, x: 0 }}  
                transition={{ delay: index * 0.05 }}  
              >  
                <div className="flex-1">  
                  <h4 className="text-white font-medium">{suggestion.title}</h4>  
                  <p className="text-sm text-gray-400 truncate">{suggestion.description}</p>  
                </div>  
                <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0 ml-2" />  
              </motion.button>  
            ))}  
          </motion.div>  
        )}  
      </AnimatePresence>  
    </div>  
  );  
};  

export default SearchBar;
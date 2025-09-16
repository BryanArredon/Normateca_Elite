import React from 'react';
import { motion } from 'framer-motion';
import { Book, Shield, Globe, Info } from 'lucide-react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'leyes', label: 'Leyes Mexicanas', icon: Shield },
    { id: 'estandares', label: 'Estándares', icon: Globe },
    { id: 'glosario', label: 'Glosario', icon: Book },
    { id: 'recursos', label: 'Recursos', icon: Info },
  ];

  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl flex justify-between items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center space-x-2 px-6 py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-300 ${
                isActive ? 'text-white' : 'text-gray-400 hover:text-white/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center space-x-2">
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default TabNavigation;
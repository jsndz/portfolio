import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator: React.FC = () => {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ 
        repeat: Infinity, 
        duration: 2,
        ease: "easeInOut"
      }}
      className="flex flex-col items-center cursor-pointer"
      onClick={() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      <span className="text-xs uppercase mb-2 opacity-50">Scroll</span>
      <ChevronDown size={20} className="opacity-70" />
    </motion.div>
  );
};

export default ScrollIndicator;
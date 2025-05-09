import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  isMobile?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isMobile = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'about', number: '01', label: 'About' },
    { id: 'works', number: '02', label: 'Works' },
    { id: 'awards', number: '03', label: 'Awards' },
    { id: 'expertise', number: '04', label: 'Expertise' },
    { id: 'contact', number: '05', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMobile) setIsMenuOpen(false);
    }
  };

  if (isMobile) {
    return (
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl">JM</div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-background shadow-md"
            >
              <nav className="p-5">
                <ul className="space-y-4">
                  {menuItems.map((item) => (
                    <li key={item.id} className="flex items-center space-x-4">
                      <span className="text-sm opacity-50">{item.number}</span>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-lg font-medium hover:text-accent transition-colors"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <nav className="p-8 h-screen flex flex-col justify-center">
      <div className="mb-12">
        <div className="font-bold text-xl mb-2">JM</div>
        <div className="text-sm text-tertiary">Portfolio 2025</div>
      </div>
      
      <ul className="space-y-8">
        {menuItems.map((item) => (
          <li key={item.id} className="flex items-center space-x-4">
            <span className="text-sm opacity-50">{item.number}</span>
            <button
              onClick={() => scrollToSection(item.id)}
              className="text-lg font-medium hover:text-accent transition-colors relative group"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto pt-8">
        <div className="text-sm text-tertiary">© 2025 John Moore</div>
      </div>
    </nav>
  );
};

export default Navigation;
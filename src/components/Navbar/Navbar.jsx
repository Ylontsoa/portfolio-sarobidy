import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiUser, FiCpu, FiBriefcase, FiFolder, FiMail, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import profileImage from '../../assets/images/profile-sarobidy.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'About', to: 'about', icon: FiUser },
    { name: 'Skills', to: 'skills', icon: FiCpu },
    { name: 'Background', to: 'background', icon: FiBriefcase },
    { name: 'Projects', to: 'projects', icon: FiFolder },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? isDarkMode 
            ? 'bg-[#0A1128]/95 backdrop-blur-xl border-b border-blue-500/10 shadow-lg' 
            : 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo avec photo de profil */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500/50 group-hover:border-blue-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                <img 
                  src={profileImage} 
                  alt="Sarobidy"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0A1128]" />
            </div>
            <span className={`text-xl font-bold font-poppins transition-colors duration-300 ${
              isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'
            }`}>
              Sarobidy
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={`#${item.to}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 font-inter text-sm font-medium ${
                  isDarkMode 
                    ? 'text-[#94A3B8] hover:text-white hover:bg-white/5' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <item.icon size={16} />
                {item.name}
              </motion.a>
            ))}
            
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`ml-2 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-white/5 text-[#94A3B8] hover:bg-white/10 hover:text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </motion.button>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 flex items-center gap-2 px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 font-inter"
            >
              <FiMail size={16} />
              Contact
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isDarkMode ? 'bg-white/5 text-[#94A3B8]' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${isDarkMode ? 'text-[#94A3B8]' : 'text-gray-600'}`}
            >
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden backdrop-blur-xl border-t ${
          isDarkMode ? 'bg-[#0A1128]/95 border-blue-500/10' : 'bg-white/95 border-gray-200'
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          <div className="flex items-center gap-3 px-4 py-3 mb-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500/50">
              <img 
                src={profileImage} 
                alt="Sarobidy"
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`font-semibold font-poppins ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Sarobidy
            </span>
          </div>
          
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.to}`}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isDarkMode 
                  ? 'text-[#94A3B8] hover:text-white hover:bg-white/5' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <item.icon size={18} />
              <span className="font-inter text-sm">{item.name}</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 bg-blue-500 text-white rounded-xl font-medium text-sm"
          >
            <FiMail size={18} />
            Contact
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
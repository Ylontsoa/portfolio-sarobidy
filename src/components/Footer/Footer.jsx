import React from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDarkMode } = useTheme();

  const footerLinks = [
    { name: 'Accueil', to: 'home' },
    { name: 'À propos', to: 'about' },
    { name: 'Compétences', to: 'skills' },
    { name: 'Parcours', to: 'background' },
    { name: 'Projets', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <footer className={`border-t transition-colors duration-300 ${
      isDarkMode ? 'bg-[#0D1B2A] border-blue-500/10' : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500/50">
                <img 
                  src={require('../../assets/images/profile-sarobidy.png')} 
                  alt="Sarobidy"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className={`text-xl font-bold font-poppins ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                VS<span className="text-blue-400">.dev</span>
              </span>
            </div>
            <p className={`text-sm font-inter leading-relaxed ${isDarkMode ? 'text-[#94A3B8]' : 'text-gray-600'}`}>
              Développeur Full Stack Web & Mobile. Étudiant en L3 à l'ENI, Fianarantsoa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className={`font-semibold font-poppins mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={`#${link.to}`} 
                    className={`transition-colors text-sm font-inter ${
                      isDarkMode ? 'text-[#94A3B8] hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={`font-semibold font-poppins mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact
            </h3>
            <div className="space-y-3 text-sm font-inter">
              <a 
                href="mailto:sarobidy.vetsotiana@gmail.com" 
                className={`flex items-center gap-2 transition-colors ${
                  isDarkMode ? 'text-[#94A3B8] hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <FiMail size={14} />
                sarobidy.vetsotiana@gmail.com
              </a>
              <p className={`flex items-center gap-2 ${isDarkMode ? 'text-[#94A3B8]' : 'text-gray-600'}`}>
                <FiMail size={14} />
                034 44 130 51
              </p>
              
              {/* Réseaux sociaux */}
              <div className="flex gap-3 mt-4">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/vetsotiana-sarobidy-7b1bb9390"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-white/5 border-white/10 text-[#94A3B8] hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30' 
                      : 'bg-gray-50 border-gray-200 text-gray-400 hover:text-blue-500 hover:bg-blue-50 hover:border-blue-300'
                  }`}
                >
                  <FiLinkedin size={18} />
                </a>
                
                {/* GitHub */}
                <a
                  href="https://github.com/Ylontsoa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-white/5 border-white/10 text-[#94A3B8] hover:text-white hover:bg-white/10 hover:border-white/20' 
                      : 'bg-gray-50 border-gray-200 text-gray-400 hover:text-gray-700 hover:bg-gray-100 hover:border-gray-300'
                  }`}
                >
                  <FiGithub size={18} />
                </a>
                
                {/* Email */}
                <a
                  href="mailto:sarobidy.vetsotiana@gmail.com"
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-white/5 border-white/10 text-[#94A3B8] hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/30' 
                      : 'bg-gray-50 border-gray-200 text-gray-400 hover:text-red-500 hover:bg-red-50 hover:border-red-300'
                  }`}
                >
                  <FiMail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`border-t pt-8 ${isDarkMode ? 'border-blue-500/10' : 'border-gray-200'}`}>
          <p className={`text-center text-sm font-inter ${isDarkMode ? 'text-[#94A3B8]' : 'text-gray-500'}`}>
            &copy; {currentYear} FANILONTSOA Vetsotiana Sarobidy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiLinkedin, FiGithub, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { technologies } from '../../data/skills';
import { Link } from 'react-scroll';
import { useTheme } from '../../context/ThemeContext';
import profilePhoto from '../../assets/images/profile-sarobidy.png';

const Hero = () => {
  const { isDarkMode } = useTheme();

  const socialLinks = [
    { 
      icon: FiLinkedin, 
      href: "https://linkedin.com/in/vetsotiana-sarobidy-7b1bb9390", 
      label: "LinkedIn" 
    },
    { 
      icon: FiGithub, 
      href: "https://github.com/Ylontsoa", 
      label: "GitHub" 
    },
    { 
      icon: FiMail, 
      href: "mailto:sarobidy.vetsotiana@gmail.com", 
      label: "Email" 
    },
  ];

  return (
    <section id="home" className={`min-h-screen flex items-center relative overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-[#0A1128]' : 'bg-[#F8FAFC]'}`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className={`inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-medium mb-6 font-inter ${
                isDarkMode 
                  ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' 
                  : 'bg-blue-50 border border-blue-200 text-blue-600'
              }`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Étudiant en L3 à l'ENI - Disponible pour projets
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-4xl lg:text-6xl font-bold mb-4 font-poppins leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              FANILONTSOA{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                Vetsotiana Sarobidy
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-xl lg:text-2xl font-medium mb-6 font-poppins ${isDarkMode ? 'text-[#94A3B8]' : 'text-gray-500'}`}
            >
              Développeur Full Stack — Web & Mobile
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-lg leading-relaxed mb-4 max-w-xl font-inter ${isDarkMode ? 'text-[#94A3B8]' : 'text-gray-600'}`}
            >
              Jeune développeur Full Stack passionné par la création de solutions 
              logicielles innovantes. Spécialisé en développement web et mobile, 
              je conçois des applications modernes et performantes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className={`flex flex-wrap gap-4 mb-6 text-sm font-inter ${isDarkMode ? 'text-[#94A3B8]' : 'text-gray-500'}`}
            >
              <span className="flex items-center gap-2">
                <FiPhone size={14} className="text-blue-400" />
                034 44 130 51
              </span>
              <span className="flex items-center gap-2">
                <FiMail size={14} className="text-blue-400" />
                sarobidy.vetsotiana@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <FiMapPin size={14} className="text-blue-400" />
                Fianarantsoa, Madagascar
              </span>
            </motion.div>

            {/* Technologies Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all duration-300 font-inter ${
                    isDarkMode 
                      ? 'bg-white/5 border border-white/10 text-[#94A3B8] hover:border-blue-500/30 hover:text-blue-400' 
                      : 'bg-gray-100 border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600'
                  }`}
                  style={{ borderLeft: `2px solid ${tech.color}` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tech.color }} />
                  {tech.name}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link to="projects" spy={true} smooth={true} offset={-80} duration={800}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 font-inter group"
                >
                  Voir mes projets
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
              </Link>

              <motion.a
                href="/CV_Sarobidy_FullstackWebMobile.pdf"
                download="CV_Sarobidy_FullstackWebMobile.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-8 py-4 border-2 rounded-xl font-semibold transition-all duration-300 font-inter group ${
                  isDarkMode 
                    ? 'border-blue-500/30 text-blue-400 hover:border-blue-500 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-500/10' 
                    : 'border-blue-300 text-blue-600 hover:border-blue-500 hover:shadow-lg'
                }`}
              >
                <FiDownload className="group-hover:translate-y-0.5 transition-transform" size={20} />
                Télécharger CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                    isDarkMode 
                      ? 'border-white/10 text-[#94A3B8] hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30' 
                      : 'border-gray-200 text-gray-400 hover:text-blue-500 hover:bg-blue-50 hover:border-blue-300'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-blue-500/10"
              />
              
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-1">
                  <div className={`w-full h-full rounded-full flex items-center justify-center border-2 border-blue-500/30 overflow-hidden ${isDarkMode ? 'bg-[#0A1128]' : 'bg-white'}`}>
                    <img
                      src={profilePhoto}
                      alt="FANILONTSOA Vetsotiana Sarobidy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl -z-10" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -right-4 w-16 h-16 bg-blue-500/10 backdrop-blur-xl rounded-2xl border border-blue-500/20 flex items-center justify-center"
              >
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 relative"
        >
          <div className={`h-48 rounded-3xl border overflow-hidden relative ${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border-blue-500/10' 
              : 'bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 border-blue-200'
          }`}>
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }} />
            
            <div className="relative h-full flex items-center justify-center px-8">
              <div className="text-center">
                <p className={`text-3xl font-bold font-poppins mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Full Stack Developer
                </p>
                <p className={`font-inter ${isDarkMode ? 'text-[#94A3B8]' : 'text-gray-600'}`}>
                  Web & Mobile — Création de solutions innovantes et évolutives
                </p>
              </div>
            </div>

            <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFolder, FiX, FiEye, FiAlertCircle, FiCheckCircle, FiClock } from 'react-icons/fi';
import { projects } from '../../data/projects';
import { useTheme } from '../../context/ThemeContext';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const { isDarkMode } = useTheme();
  
  const filters = ['All', 'Stage', 'Académique', 'Personnel'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="projects" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-[#0D1B2A]' : 'bg-gray-50'}`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium font-inter ${
              isDarkMode ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' : 'bg-blue-50 border border-blue-200 text-blue-600'
            }`}>
              <FiFolder size={14} />
              Portfolio
            </span>
            <h2 className={`text-4xl lg:text-5xl font-bold mt-6 mb-8 font-poppins ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Projets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Réalisés</span>
            </h2>

            <div className="flex flex-wrap gap-3 justify-center">
              {filters.map((f) => (
                <motion.button
                  key={f}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2.5 rounded-xl font-inter text-sm font-medium transition-all duration-300 ${
                    filter === f
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : isDarkMode
                        ? 'bg-white/5 text-[#94A3B8] hover:bg-white/10 border border-white/10'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {f}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -5 }}
                  onClick={() => openProjectDetails(project)}
                  className={`group rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    isDarkMode 
                      ? 'bg-white/5 border border-white/10 hover:border-blue-500/30' 
                      : 'bg-white border border-gray-200 hover:border-blue-300 shadow-sm'
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] to-transparent opacity-60" />
                    <div className="absolute top-3 right-3">
                      <span className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
                        project.status === 'Terminé' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {project.status === 'Terminé' ? <FiCheckCircle size={12} /> : <FiClock size={12} />}
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FiFolder className="text-blue-400" size={18} />
                      <span className="text-xs text-blue-400 font-inter font-medium">{project.category}</span>
                    </div>
                    
                    <h3 className={`text-lg font-bold font-poppins mb-2 group-hover:text-blue-400 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm font-inter mb-4 line-clamp-2 ${isDarkMode ? 'text-[#94A3B8]' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 rounded-lg text-xs font-inter ${
                            isDarkMode 
                              ? 'bg-white/5 border border-white/10 text-[#94A3B8]' 
                              : 'bg-gray-100 border border-gray-200 text-gray-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className={`px-2 py-1 rounded-lg text-xs font-inter ${
                          isDarkMode ? 'bg-white/5 border border-white/10 text-[#94A3B8]' : 'bg-gray-100 border border-gray-200 text-gray-600'
                        }`}>
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <button className={`mt-4 flex items-center gap-2 text-sm font-medium ${
                      isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                    }`}>
                      <FiEye size={16} />
                      Voir les détails
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal Détails Projet */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeProjectDetails}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl ${
                isDarkMode ? 'bg-[#0A1128] border border-blue-500/20' : 'bg-white border border-gray-200'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={closeProjectDetails}
                className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  isDarkMode ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <FiX size={24} />
              </button>

              {/* Images Carousel */}
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                <img 
                  src={selectedProject.images[0]} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A1128] to-transparent h-32" />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDarkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'
                      }`}>
                        {selectedProject.category}
                      </span>
                      <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                        selectedProject.status === 'Terminé' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {selectedProject.status === 'Terminé' ? <FiCheckCircle size={12} /> : <FiClock size={12} />}
                        {selectedProject.status}
                      </span>
                    </div>
                    <h2 className={`text-2xl lg:text-3xl font-bold font-poppins ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {selectedProject.title}
                    </h2>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {selectedProject.githubLink ? (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                          isDarkMode 
                            ? 'bg-white/10 text-white hover:bg-white/20' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <FiGithub size={18} />
                        Code source
                      </a>
                    ) : (
                      <span className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium ${
                        isDarkMode ? 'bg-white/5 text-gray-500' : 'bg-gray-50 text-gray-400'
                      }`}>
                        <FiAlertCircle size={18} />
                        Code non disponible
                      </span>
                    )}

                    {selectedProject.demoLink ? (
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm font-medium transition-all duration-300"
                      >
                        <FiExternalLink size={18} />
                        Démo live
                      </a>
                    ) : (
                      <span className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium ${
                        isDarkMode ? 'bg-white/5 text-gray-500' : 'bg-gray-50 text-gray-400'
                      }`}>
                        <FiAlertCircle size={18} />
                        Démo non disponible
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className={`text-lg font-semibold mb-3 font-poppins ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Description
                  </h3>
                  <p className={`leading-relaxed font-inter ${isDarkMode ? 'text-[#94A3B8]' : 'text-gray-600'}`}>
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className={`text-lg font-semibold mb-3 font-poppins ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Fonctionnalités
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <FiCheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                        <span className={`text-sm font-inter ${isDarkMode ? 'text-[#94A3B8]' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className={`text-lg font-semibold mb-3 font-poppins ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Technologies utilisées
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 rounded-lg text-sm font-inter ${
                          isDarkMode 
                            ? 'bg-white/5 border border-white/10 text-[#94A3B8]' 
                            : 'bg-gray-100 border border-gray-200 text-gray-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Images Gallery */}
                {selectedProject.images.length > 1 && (
                  <div>
                    <h3 className={`text-lg font-semibold mb-3 font-poppins ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Captures d'écran
                    </h3>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedProject.images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${selectedProject.title} - Capture ${index + 1}`}
                          className="w-full h-40 object-cover rounded-xl"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
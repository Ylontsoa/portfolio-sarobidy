import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiBriefcase, FiBook, FiCalendar, FiMapPin, FiArrowRight, FiAward,
  FiStar, FiCheckCircle
} from 'react-icons/fi';
import { experiences, education } from '../../data/skills';

const Background = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Expérience', icon: FiBriefcase },
    { id: 'education', label: 'Formation', icon: FiBook },
  ];

  return (
    <section id="background" className="py-24 bg-[#0A1128] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium font-inter">
            <FiAward size={14} />
            Parcours
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6 font-poppins">
            Expérience &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Formation
            </span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 rounded-xl p-1 border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-inter text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500/60 transition-colors duration-300"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 bg-blue-500 rounded-full -translate-x-[7px]" />
                  
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className="flex items-center gap-2 text-blue-400 text-sm font-inter">
                        <FiCalendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2 text-[#94A3B8] text-sm font-inter">
                        <FiMapPin size={14} />
                        {exp.company}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white font-poppins mb-2 flex items-center gap-2">
                      <FiStar className="text-yellow-400" size={20} />
                      {exp.title}
                    </h3>
                    <p className="text-[#94A3B8] text-sm font-inter mb-4">
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[#94A3B8] text-sm font-inter">
                          <FiCheckCircle className="text-green-400 mt-1 flex-shrink-0" size={14} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-cyan-500/30 hover:border-cyan-500/60 transition-colors duration-300"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 bg-cyan-500 rounded-full -translate-x-[7px]" />
                  
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className="flex items-center gap-2 text-cyan-400 text-sm font-inter">
                        <FiCalendar size={14} />
                        {edu.period}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white font-poppins mb-2 flex items-center gap-2">
                      <FiAward className="text-cyan-400" size={20} />
                      {edu.degree}
                    </h3>
                    <p className="text-[#94A3B8] text-sm font-inter mb-1">
                      {edu.school}
                    </p>
                    <p className="text-[#94A3B8] text-sm font-inter mb-4">
                      {edu.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[#94A3B8] text-sm font-inter">
                          <FiArrowRight className="text-cyan-400 mt-1 flex-shrink-0" size={14} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Background;
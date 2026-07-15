import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';
import { 
  FiCpu, FiServer, FiDatabase, FiCode, FiMonitor
} from 'react-icons/fi';
import { 
  FaReact, FaLaravel, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare
} from 'react-icons/fa';
import { 
  SiTypescript, SiPostgresql, SiFirebase, SiMysql, SiMongodb,
  SiReact
} from 'react-icons/si';

const Skills = () => {
  const categoryIcons = {
    "Frontend Development": FiMonitor,
    "Backend Development": FiServer,
    "Base de données & Outils": FiDatabase,
  };

  const categoryColors = {
    "Frontend Development": "#61DAFB",
    "Backend Development": "#FF2D20",
    "Base de données & Outils": "#4479A1",
  };

  // Mapping des icônes pour chaque compétence
  const skillIcons = {
    "React.js": FaReact,
    "HTML / CSS": FaHtml5,
    "JavaScript": FaJsSquare,
    "TypeScript": SiTypescript,
    "Node.js": FaNodeJs,
    "Laravel": FaLaravel,
    "REST APIs": FiCode,
    "Firebase": SiFirebase,
    "MySQL / PostgreSQL": SiPostgresql,
    "MongoDB": SiMongodb,
    "Git / GitHub": FaGitAlt,
    "VS Code": FiCode, // Utilisation de FiCode comme icône générique pour VS Code
  };

  return (
    <section id="skills" className="py-24 bg-[#0D1B2A] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium font-inter">
            <FiCpu size={14} />
            Compétences
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6 font-poppins">
            Stack Technique &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Expertise
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const IconComponent = categoryIcons[category.title] || FiCpu;
            const categoryColor = categoryColors[category.title] || "#3B82F6";
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${categoryColor}15` }}
                  >
                    <IconComponent size={24} style={{ color: categoryColor }} />
                  </div>
                  <h3 className="text-xl font-bold text-white font-poppins">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, index) => {
                    const SkillIcon = skillIcons[skill.name] || FiCode;
                    
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[#94A3B8] text-sm font-inter flex items-center gap-2">
                            <SkillIcon size={16} className="text-blue-400" />
                            {skill.name}
                          </span>
                          <span className="text-blue-400 text-sm font-inter font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
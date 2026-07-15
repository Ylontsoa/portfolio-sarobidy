import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, FiSmartphone, FiServer, FiDatabase, FiBook,
  FiUser, FiHeart, FiTarget, FiAward 
} from 'react-icons/fi';
import { 
  FaReact, FaLaravel, FaNodeJs, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiTypescript, SiPostgresql, SiFirebase, SiMysql 
} from 'react-icons/si';
import { objective, languages } from '../../data/skills';

const About = () => {
  const highlights = [
    { icon: FiCode, title: "Frontend", description: "React.js, HTML, CSS, JavaScript, TypeScript", color: "#61DAFB" },
    { icon: FiServer, title: "Backend", description: "Node.js, Laravel, REST APIs", color: "#FF2D20" },
    { icon: FiSmartphone, title: "Mobile", description: "React Native, Firebase", color: "#F59E0B" },
    { icon: FiDatabase, title: "Base de données", description: "MySQL, PostgreSQL, MongoDB", color: "#4479A1" },
  ];

  const techIcons = [
    { icon: FaReact, name: "React", color: "#61DAFB" },
    { icon: FaLaravel, name: "Laravel", color: "#FF2D20" },
    { icon: FaNodeJs, name: "Node.js", color: "#339933" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
    { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    { icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { icon: FaGitAlt, name: "Git", color: "#F05032" },
  ];

  return (
    <section id="about" className="py-24 bg-[#0D1B2A] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium font-inter">
            <FiUser size={14} />
            À propos
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6 mb-6 font-poppins">
            Développeur Full Stack{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Passionné
            </span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto font-inter leading-relaxed">
            {objective}
          </p>
        </motion.div>

        {/* Tech Icons Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.2, y: -5 }}
              className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer group relative"
            >
              <tech.icon 
                size={28} 
                style={{ color: tech.color }}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-[#94A3B8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon size={24} style={{ color: item.color }} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 font-poppins">
                {item.title}
              </h3>
              <p className="text-[#94A3B8] text-sm font-inter">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
              <FiBook className="text-blue-400 text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-white font-poppins">Langues</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8"/>
                    <motion.circle
                      cx="50" cy="50" r="45" fill="none" stroke="url(#gradient)" strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 45}`}
                      strokeDashoffset={`${2 * Math.PI * 45 * (1 - lang.percentage / 100)}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                      whileInView={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - lang.percentage / 100) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#22D3EE" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white font-poppins group-hover:scale-110 transition-transform">
                      {lang.percentage}%
                    </span>
                  </div>
                </div>
                <h4 className="text-white font-semibold font-poppins">{lang.name}</h4>
                <p className="text-[#94A3B8] text-sm font-inter">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
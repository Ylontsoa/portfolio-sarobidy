import React from 'react';
import { motion } from 'framer-motion';

const Particles = () => {
  const particles = Array.from({ length: 50 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-blue-500 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5 + 0.3,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const TechBall = ({ icon, name, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.05 
      }}
      viewport={{ once: true }}
      className="group relative flex flex-col items-center"
    >
      {/* 3D Ball Container */}
      <div 
        className="relative w-20 h-20 cursor-pointer"
        style={{ perspective: "500px" }}
      >
        {/* Floating animation wrapper */}
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            rotateX: [0, 5, 0],
            rotateY: [0, 10, 0],
          }}
          transition={{
            duration: 3 + (index % 3) * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ 
            scale: 1.2,
            rotateY: 360,
            transition: { duration: 0.6 }
          }}
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Main Sphere */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, 
                  rgba(255,255,255,0.4) 0%, 
                  rgba(145, 94, 255, 0.1) 20%,
                  rgba(30, 30, 60, 0.8) 60%, 
                  rgba(10, 10, 25, 1) 100%)
              `,
              boxShadow: `
                inset -4px -4px 15px rgba(0,0,0,0.8),
                inset 4px 4px 15px rgba(255,255,255,0.15),
                0 8px 25px rgba(0,0,0,0.6),
                0 0 15px rgba(145, 94, 255, 0.3),
                0 0 30px rgba(145, 94, 255, 0.1)
              `,
              border: "1px solid rgba(145, 94, 255, 0.2)",
            }}
          >
            {/* Highlight reflection */}
            <div 
              className="absolute top-1 left-2 w-6 h-4 rounded-full opacity-60"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)",
                filter: "blur(2px)",
              }}
            />
            
            {/* Secondary reflection */}
            <div 
              className="absolute bottom-3 right-2 w-3 h-2 rounded-full opacity-30"
              style={{
                background: "rgba(145, 94, 255, 0.8)",
                filter: "blur(3px)",
              }}
            />
          </div>

          {/* Icon container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={icon}
              alt={name}
              className="w-10 h-10 object-contain drop-shadow-lg group-hover:brightness-125 transition-all duration-300"
              style={{
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
              }}
            />
          </div>

          {/* Glow ring on hover */}
          <div 
            className="absolute inset-[-4px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "transparent",
              boxShadow: `
                0 0 20px rgba(145, 94, 255, 0.6),
                0 0 40px rgba(145, 94, 255, 0.4),
                0 0 60px rgba(145, 94, 255, 0.2)
              `,
            }}
          />
        </motion.div>

        {/* Shadow beneath ball */}
        <motion.div
          animate={{ 
            scale: [1, 0.9, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 3 + (index % 3) * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(0,0,0,0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Tech name label */}
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.05 + 0.3 }}
        className="mt-4 text-secondary text-[12px] font-medium tracking-wider opacity-70 group-hover:opacity-100 group-hover:text-white transition-all duration-300"
      >
        {name}
      </motion.span>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="mt-14 flex flex-row flex-wrap justify-center gap-8">
        {technologies.map((technology, index) => (
          <TechBall
            key={technology.name}
            icon={technology.icon}
            name={technology.name}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");

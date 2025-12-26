import React, { useState } from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

// Categorize technologies
const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C++", "C#", "Python", "Java", "JavaScript"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "Pandas", "Keras", "PyTorch", "Scikit-Learn"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes"],
  },
];

const SkillCard = ({ skill, index, categoryIndex }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: categoryIndex * 0.1 + index * 0.05 
      }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div 
        className={`
          flex items-center gap-3 p-3 rounded-xl
          bg-tertiary/50 backdrop-blur-sm
          border border-transparent
          hover:border-[#915EFF]/50
          hover:bg-[#915EFF]/10
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'shadow-lg shadow-[#915EFF]/20' : ''}
        `}
      >
        {/* Icon */}
        <div className="relative w-12 h-12 flex-shrink-0">
          <motion.div
            animate={isHovered ? { 
              rotate: [0, -10, 10, 0],
              scale: 1.1 
            } : {}}
            transition={{ duration: 0.4 }}
            className="w-full h-full rounded-lg bg-gradient-to-br from-[#915EFF]/20 to-transparent p-2 flex items-center justify-center"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 object-contain"
            />
          </motion.div>
          
          {/* Glow effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 rounded-lg"
            style={{
              background: "radial-gradient(circle, rgba(145, 94, 255, 0.3) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />
        </div>

        {/* Name */}
        <span className="text-white text-[14px] font-medium group-hover:text-[#915EFF] transition-colors duration-300">
          {skill.name}
        </span>

        {/* Animated arrow */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            x: isHovered ? 0 : -10 
          }}
          className="ml-auto text-[#915EFF]"
        >
          →
        </motion.div>
      </div>
    </motion.div>
  );
};

const CategorySection = ({ category, index, technologies }) => {
  const categorySkills = technologies.filter(tech => 
    category.skills.includes(tech.name)
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Category Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-tertiary to-primary p-[1px]">
        <div className="relative bg-primary rounded-2xl p-6">
          {/* Decorative gradient */}
          <div 
            className="absolute top-0 right-0 w-32 h-32 opacity-20"
            style={{
              background: "radial-gradient(circle, #915EFF 0%, transparent 70%)",
            }}
          />
          
          {/* Category Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 bg-gradient-to-b from-[#915EFF] to-[#915EFF]/30 rounded-full" />
            <h3 className="text-white text-[20px] font-bold">{category.title}</h3>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#915EFF]/30 to-transparent ml-2" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {categorySkills.map((skill, skillIndex) => (
              <SkillCard 
                key={skill.name} 
                skill={skill} 
                index={skillIndex}
                categoryIndex={index}
              />
            ))}
          </div>
        </div>
      </div>
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

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Here are the technologies and tools I've mastered throughout my journey as a developer, 
        organized by expertise areas.
      </motion.p>

      {/* Skills Grid */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <CategorySection 
            key={category.title} 
            category={category} 
            index={index}
            technologies={technologies}
          />
        ))}
      </div>

      {/* Floating decoration */}
      <div className="relative mt-16 flex justify-center">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex items-center gap-4 px-6 py-3 rounded-full bg-tertiary/30 border border-[#915EFF]/20"
        >
          <div className="w-2 h-2 rounded-full bg-[#915EFF] animate-pulse" />
          <span className="text-secondary text-[14px]">
            Always learning & adapting to new technologies
          </span>
          <div className="w-2 h-2 rounded-full bg-[#915EFF] animate-pulse" />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");

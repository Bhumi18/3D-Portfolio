import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className="xs:w-[250px] w-full">
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
//       >
//         <img
//           src={icon}
//           alt="web-development"
//           className="w-16 h-16 object-contain"
//         />

//         <h3 className="text-white text-[20px] font-bold text-center">
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

const CertificateCard = ({ index, title, issuedBy, date, link }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      whileHover={{ scale: 1.05 }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-10 px-5 min-h-[280px] flex justify-evenly items-left flex-col"
      >
        <h3 className="text-white text-[20px] font-bold text-left">{title}</h3>
        <p className="text-secondary text-[14px] font-medium text-left">
          Issued by: {issuedBy}
        </p>
        <p className="text-secondary text-[14px] font-medium text-left">
          Date: {date}
        </p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-semibold mt-3 text-[15px] hover:underline"
          >
            View Certificate →
          </a>
        )}
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a results-driven software engineer specializing in AI, ML, and
        software development, with a proven track record of delivering impactful
        solutions. Skilled in leveraging cloud technologies, Power Apps, Power
        Automate, scripting, and SharePoint development, I excel at creating
        seamless integrations and automating processes. Passionate about
        innovation, I focus on building scalable, efficient systems that solve
        real-world problems. Let’s collaborate to turn ideas into impactful
        realities!
      </motion.p>

      <motion.div variants={textVariant()} className="mt-20">
        <p className={styles.sectionSubText}>What I have achieved</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {certificates.map((service, index) => (
          <CertificateCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

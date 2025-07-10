"use client";

import { motion } from "framer-motion";

const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export const ExperienceCard = () => {
  return (
    <motion.div 
      className="hidden md:block md:col-start-4 md:row-start-1 md:col-span-1 md:row-span-3 glass-card p-6 text-white relative overflow-hidden"
      variants={childVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-lg font-bold mb-3 text-white">Experience</h2>
      <div className="space-y-3">
        <div className="border-l-4 border-cyan-400 pl-3">
          <h3 className="font-semibold text-white text-sm">Trainee Web Developer</h3>
          <p className="text-blue-100 text-xs">Webse Sdn. Bhd. • 2025 - Present</p>
          <p className="text-blue-200 text-xs mt-1">Maintenance and development using CMS</p>
        </div>
        <div className="border-l-4 border-sky-500 pl-3">
          <h3 className="font-semibold text-white text-sm">EvaXpert Team Developer</h3>
          <p className="text-blue-100 text-xs">EvaXpert • 2023 - Present</p>
          <p className="text-blue-200 text-xs mt-1">Enhance the EvaXpert UI platform</p>
        </div>
        <div className="border-l-4 border-sky-500 pl-3">
          <h3 className="font-semibold text-white text-sm">Assignment Helper</h3>
          <p className="text-blue-100 text-xs">Freelance • Present</p>
          <p className="text-blue-200 text-xs mt-1">Help students with their assignments (code related)</p>
        </div>
        <div className="border-l-4 border-sky-500 pl-3">
          <h3 className="font-semibold text-white text-sm">EvaXpert Team Developer</h3>
          <p className="text-blue-100 text-xs">EvaXpert • 2023 - Present</p>
          <p className="text-blue-200 text-xs mt-1">Enhance the EvaXpert UI platform</p>
        </div>
        <div className="border-l-4 border-sky-500 pl-3">
          <h3 className="font-semibold text-white text-sm">EvaXpert Team Developer</h3>
          <p className="text-blue-100 text-xs">EvaXpert • 2023 - Present</p>
          <p className="text-blue-200 text-xs mt-1">Enhance the EvaXpert UI platform</p>
        </div>
      </div>
    </motion.div>
  );
};

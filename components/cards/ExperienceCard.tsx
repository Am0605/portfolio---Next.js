"use client";

import { motion } from "framer-motion";

const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export const ExperienceCard = () => {
  return (
    <motion.div 
      className="col-span-3 row-span-1 md:col-start-4 md:row-start-1 md:col-span-1 md:row-span-3 glass-card p-4 sm:p-6 text-white relative overflow-hidden"
      variants={childVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-center mb-3 md:mb-3">
        <h2 className="text-base sm:text-lg font-bold text-white">Experience</h2>
      </div>
      
      {/* Experience Items */}
      <div className="space-y-3 sm:space-y-4">
        <div className="border-l-4 border-cyan-400 pl-3 sm:pl-4">
          <h3 className="font-semibold text-white text-sm sm:text-base">Trainee Web Developer</h3>
          <p className="text-blue-100 text-xs sm:text-sm">Webse Sdn. Bhd. • 2025 - Present</p>
          <p className="text-blue-200 text-xs sm:text-sm mt-1">Maintenance and development using CMS</p>
        </div>
        <div className="border-l-4 border-teal-400 pl-3 sm:pl-4">
          <h3 className="font-semibold text-white text-sm sm:text-base">EvaXpert Team Developer</h3>
          <p className="text-blue-100 text-xs sm:text-sm">EvaXpert • 2023 - Present</p>
          <p className="text-blue-200 text-xs sm:text-sm mt-1">Enhance the EvaXpert UI platform</p>
        </div>
        <div className="border-l-4 border-sky-300 pl-3 sm:pl-4">
          <h3 className="font-semibold text-white text-sm sm:text-base">Assignment Helper</h3>
          <p className="text-blue-100 text-xs sm:text-sm">Freelance • Present</p>
          <p className="text-blue-200 text-xs sm:text-sm mt-1">Help students with their assignments (code related)</p>
        </div>
        <div className="border-l-4 border-indigo-500 pl-3 sm:pl-4">
          <h3 className="font-semibold text-white text-sm sm:text-base">Volunteer Programmer</h3>
          <p className="text-blue-100 text-xs sm:text-sm">Masjid Jamek • 2024 - 2025</p>
          <p className="text-blue-200 text-xs sm:text-sm mt-1">Developed a web application for Masjid Jamek</p>
        </div>
      </div>
    </motion.div>
  );
};

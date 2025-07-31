"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export const ExperienceCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showScrollbar, setShowScrollbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollTop } = scrollRef.current;
        setShowScrollbar(scrollTop > 10);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <motion.div 
      className="col-span-3 row-span-1 md:col-start-4 md:row-start-1 md:col-span-1 md:row-span-3 glass-card p-4 sm:p-6 text-white relative overflow-hidden flex flex-col"
      variants={childVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-lg sm:text-xl md:text-lg lg:text-xl font-bold text-white text-center sm:text-left mb-3 md:mb-4 flex-shrink-0">Experience</h2>

      <div 
        ref={scrollRef}
        className={`flex-1 overflow-y-auto pr-2 custom-scrollbar ${showScrollbar ? 'show-scrollbar' : ''}`}
      >
        <div className="space-y-3 sm:space-y-3 md:space-y-3 lg:space-y-3">
          <div className="border-l-4 border-cyan-400 pl-3 sm:pl-4 transition-all duration-200 hover:border-cyan-300 hover:pl-5">
            <h3 className="font-semibold text-white text-sm sm:text-base md:text-sm lg:text-base leading-tight">
              Trainee Web Developer
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm md:text-xs lg:text-sm leading-relaxed">
              Webse Sdn. Bhd. • 2025 - Present
            </p>
            <p className="text-blue-200 text-xs sm:text-sm md:text-xs lg:text-sm mt-1 leading-relaxed">
              Maintenance and development using CMS
            </p>
          </div>
          
          <div className="border-l-4 border-teal-400 pl-3 sm:pl-4 transition-all duration-200 hover:border-teal-300 hover:pl-5">
            <h3 className="font-semibold text-white text-sm sm:text-base md:text-sm lg:text-base leading-tight">
              EvaXpert Team Developer
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm md:text-xs lg:text-sm leading-relaxed">
              EvaXpert • 2023 - Present
            </p>
            <p className="text-blue-200 text-xs sm:text-sm md:text-xs lg:text-sm mt-1 leading-relaxed">
              Enhance the EvaXpert UI platform
            </p>
          </div>
          
          <div className="border-l-4 border-sky-300 pl-3 sm:pl-4 transition-all duration-200 hover:border-sky-200 hover:pl-5">
            <h3 className="font-semibold text-white text-sm sm:text-base md:text-sm lg:text-base leading-tight">
              Assignment Helper
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm md:text-xs lg:text-sm leading-relaxed">
              Freelance • Present
            </p>
            <p className="text-blue-200 text-xs sm:text-sm md:text-xs lg:text-sm mt-1 leading-relaxed">
              Help students with their assignments (code related)
            </p>
          </div>
          
          <div className="border-l-4 border-indigo-500 pl-3 sm:pl-4 transition-all duration-200 hover:border-indigo-400 hover:pl-5">
            <h3 className="font-semibold text-white text-sm sm:text-base md:text-sm lg:text-base leading-tight">
              Volunteer Programmer
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm md:text-xs lg:text-sm leading-relaxed">
              Masjid Jamek • 2024 - 2025
            </p>
            <p className="text-blue-200 text-xs sm:text-sm md:text-xs lg:text-sm mt-1 leading-relaxed">
              Developed a web application for Masjid Jamek
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

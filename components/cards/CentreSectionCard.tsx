"use client";

import { motion } from "framer-motion";

const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export const CentreSectionCard = () => {
  return (
    <motion.div 
      className="hidden md:block md:col-start-2 md:row-start-3 md:col-span-2 md:row-span-2 glass-card-center p-6 group cursor-pointer relative overflow-hidden"
      variants={childVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Default Content */}
      <div className="relative z-10 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-200 ease-out h-full flex flex-col justify-center items-center text-center">
        <div className="mb-6">
          {/* Creative name display */}
          <div className="relative mb-4">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent tracking-tight leading-none">
              Muhammad Adham
            </h1>
            
            {/* Decorative underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-3 rounded-full"></div>
          </div>
          
          {/* Professional title */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-700 tracking-wide uppercase letter-spacing-wider">
              Full Stack Developer
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-slate-500 tracking-wide">Fresh Graduate</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Hover Content */}
      <div className="absolute inset-6 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out delay-100">
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">MA</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800">About Me</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              I'm a recent Software Engineering graduate with a passion for building elegant mobile and web applications, especially those that leverage AI to solve real-world problems. I thrive on challenges and embrace every opportunity to learn new technologies—from Flutter and React to Laravel and Python.
            </p>
          </div>
          
          <div className="mt-4">
            <button className="group/btn bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center space-x-2">
              <span>Download CV</span>
              <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

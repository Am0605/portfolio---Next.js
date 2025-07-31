"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiFlutter, 
  SiLaravel, 
  SiGit, 
  SiMysql, 
  SiPostgresql,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiSupabase,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiDart,
  SiPhp
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

const skills = {
  Language: [
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Python", icon: SiPython, color: "text-blue-400" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    {name: "Dart", icon: SiDart, color: "text-blue-300" },
    { name: "PHP", icon: SiPhp, color: "text-red-400"}
  ],
  Framework: [
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Laravel", icon: SiLaravel, color: "text-red-400" },
    { name: "Flutter", icon: SiFlutter, color: "text-blue-300" },
    { name: "Expo", icon: SiReact, color: "text-blue-400" },
  ],
  Database: [
    { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
    { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
    { name: "Supabase", icon: SiSupabase, color: "text-green-400" },
  ],
  Tools: [
    { name: "Git", icon: SiGit, color: "text-orange-400" },
    { name: "GitHub", icon: SiGithub, color: "text-white" },
    { name: "VS Code", icon: VscCode, color: "text-blue-400" },
    { name: "Figma", icon: SiFigma, color: "text-purple-400" },
    { name: "Adobe Illustrator", icon: SiAdobeillustrator, color: "text-orange-400" },
    { name: "Adobe Photoshop", icon: SiAdobephotoshop, color: "text-blue-400" },
  ],
};

export const SkillsCard = () => {
  const [activeTab, setActiveTab] = useState("Language");
  const tabOrder = ["Language", "Framework", "Database", "Tools"];

  return (
    <motion.div 
      className="col-span-3 row-span-1 md:col-start-1 md:row-start-5 md:col-span-2 md:row-span-2 glass-card p-3 sm:p-4 relative overflow-hidden"
      variants={childVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl sm:hidden font-bold mb-3 sm:mb-4 text-white text-center">Skills</h2>
      <div className="relative z-10 h-full flex flex-col">
        {/* Tab Navigation */}
        <div className="flex gap-1 mb-3 sm:mb-4 bg-white/5 backdrop-blur-sm rounded-lg p-1 flex-shrink-0">
          {tabOrder.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-300 ${
                activeTab === tab
                  ? "bg-white/20 text-white shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="flex-1 overflow-hidden relative">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 h-full content-start">
              {skills[activeTab as keyof typeof skills].map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 sm:p-3 hover:bg-white/20 transition-all duration-300 cursor-pointer relative flex flex-col items-center gap-1.5 sm:gap-2 min-h-[60px] sm:min-h-[80px]"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <IconComponent className={`text-xl sm:text-2xl ${skill.color} group-hover:scale-110 transition-transform duration-200`} />
                    <span className="text-xs sm:text-sm text-white font-medium text-center leading-tight opacity-80 group-hover:opacity-100 transition-opacity">
                      {skill.name}
                    </span>
                    
                    {/* Hover Tooltip - Fixed positioning */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 px-2 py-1 bg-slate-900/95 backdrop-blur-sm text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 border border-white/10 shadow-lg">
                      {skill.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-slate-900/95"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

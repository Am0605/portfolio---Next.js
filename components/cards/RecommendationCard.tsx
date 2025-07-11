"use client";

import { motion } from "framer-motion";

const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export const RecommendationCard = () => {
  return (
    <motion.div 
      className="hidden md:block md:col-start-4 md:row-start-4 md:col-span-1 md:row-span-3 glass-card p-6"
      variants={childVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-bold mb-4 text-white">Endorsements</h2>
      <div className="space-y-3">
        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
          <p className="text-sm text-white">"Adham is an exceptional developer with a keen eye for detail and a passion for innovation."</p>
          <p className="text-xs text-blue-200 mt-1">- Sze Wan, Supervisor Industrial Training</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
          <p className="text-sm text-white">"His ability to solve complex problems is unmatched."</p>
          <p className="text-xs text-blue-200 mt-1">- Ain Athirah, Webse Junior Web Developer</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
          <p className="text-sm text-white">"he's a thinker... for the past 4 months of sitting beside him, i know that he is in the process of deep thinking, and he has total concentration"</p>
          <p className="text-xs text-blue-200 mt-1">- Jaafar Chia Yu Fan, Colleague Webse Intern</p>
        </div>
      </div>
    </motion.div>
  );
};

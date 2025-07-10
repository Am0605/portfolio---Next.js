"use client";

import { motion } from "framer-motion";

const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export const CurrentFocusCard = () => {
  return (
    <motion.div 
      className="hidden md:block md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-2 glass-card p-4 text-white relative overflow-hidden"
      variants={childVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative z-10">
        <h2 className="text-lg font-bold mb-2">Current Focus</h2>
        <div className="space-y-2">
          <div className="bg-white/20 backdrop-blur-sm rounded p-2 border border-white/10">
            <h3 className="font-medium text-sm">AI Integration</h3>
            <p className="text-xs opacity-90">Next.js + OpenAI</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

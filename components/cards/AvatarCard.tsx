"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export const AvatarCard = () => {
  return (
    <motion.div 
      className="col-span-3 row-span-1 md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-2 glass-card relative overflow-hidden group"
      variants={childVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        priority ={true}
        src="/images/avatar1.webp"
        alt="Profile Picture"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 25vw"
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center z-10">
        <div className="bg-black/80 backdrop-blur-sm border border-red-500/30 rounded-lg p-4 m-4 shadow-2xl">
          <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <span className="text-red-400 text-xs font-mono uppercase tracking-wider">Classified</span>
          </div>
          <h1 className="text-lg font-bold text-white text-center font-mono">
        Click 10 Times to Reveal Something
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

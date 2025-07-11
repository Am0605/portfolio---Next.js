"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export const ProjectCard = () => {
  return (
    <motion.div 
      className="hidden md:block md:col-start-2 md:row-start-1 md:col-span-1 md:row-span-2 glass-card p-4 group justify-center relative overflow-hidden"
      variants={childVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Image 
        loading="lazy"
        src="/images/project.png"
        alt="Projects"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 0px, 25vw"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
        <h1 className="text-3xl font-bold mb-2 text-white text-center">
          Projects
        </h1>
      </div>
    </motion.div>
  );
};

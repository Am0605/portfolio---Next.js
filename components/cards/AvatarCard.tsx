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
      className="hidden md:block md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-2 glass-card relative overflow-hidden"
      variants={childVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        loading="lazy"
        src="/images/avatar1.webp"
        alt="Profile Picture"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 0px, 25vw"
      />
    </motion.div>
  );
};

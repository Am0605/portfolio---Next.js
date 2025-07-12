"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { memo, useCallback, useMemo, useState } from "react";
import { XIcon } from "lucide-react";

const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

// Memoized animation variants
const descriptionVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

// Memoized hobby data
const hobbiesData = [
  {
    id: 1,
    icon: "🏸",
    title: "Badminton",
    color: "bg-blue-500",
    description: "My primary sport and passion. I love the fast-paced nature and strategic gameplay. Regular player who enjoys both casual games and competitive matches."
  },
  {
    id: 2,
    icon: "🈵",
    title: "Learning Mandarin",
    color: "bg-green-500",
    description: "Currently attending evening classes to learn Mandarin. I believe language learning opens doors to new cultures and opportunities."
  },
  {
    id: 3,
    icon: "🤖",
    title: "AI & Tech Exploration",
    color: "bg-purple-500",
    description: "Constantly exploring the latest AI libraries and technologies. I enjoy experimenting with new frameworks and tools to solve real-world problems."
  },
  {
    id: 4,
    icon: "💻",
    title: "Coding Projects",
    color: "bg-orange-500",
    description: "Building personal projects and helping others with their coding assignments. I find joy in solving complex problems through clean, efficient code."
  }
];

// Memoized hobby item component
const HobbyItem = memo(({ hobby }: { hobby: typeof hobbiesData[0] }) => (
  <div className="space-y-3">
    <div className="flex items-center space-x-3">
      <div className={`w-2 h-2 ${hobby.color} rounded-full`}></div>
      <h3 className="font-semibold text-lg">{hobby.icon} {hobby.title}</h3>
    </div>
    <p className="text-sm leading-relaxed">
      {hobby.description}
    </p>
  </div>
));

HobbyItem.displayName = "HobbyItem";

// Memoized dialog content component
const DialogContent = memo(({ onClose }: { onClose: () => void }) => {
  const renderHobbies = useMemo(() => 
    hobbiesData.map((hobby) => (
      <HobbyItem key={hobby.id} hobby={hobby} />
    )), []
  );

  return (
    <motion.div 
      className="relative w-full max-w-2xl mx-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg"
      >
        <XIcon size={20} />
      </button>
      
      <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
        <Image
          src="/images/hobbies/badminton.jpg"
          alt="hobbies"
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          My Hobbies & Interests
        </h2>

        <motion.div
          variants={descriptionVariants}
          initial="initial"
          animate="animate"
          className="space-y-4 text-gray-700 dark:text-gray-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderHobbies}
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
            <p className="text-sm italic text-center">
              "I believe in maintaining a balance between technical pursuits and physical activities, 
              while continuously learning and growing in different aspects of life."
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
});

DialogContent.displayName = "DialogContent";

export const HobbiesCard = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  const triggerContent = useMemo(() => (
    <motion.div 
      className="hidden md:flex md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-2 glass-card p-4 group justify-center text-slate-800 relative overflow-hidden cursor-pointer"
      variants={childVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={handleOpen}
    >
      <Image
        src="/images/hobbies/badminton.jpg"
        alt="hobbies"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
        <h1 className="text-3xl font-bold mb-2 text-white text-center">
          Hobbies
        </h1>
      </div>
    </motion.div>
  ), [handleOpen]);

  return (
    <>
      {triggerContent}
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50" />
            
            {/* Dialog */}
            <div onClick={(e) => e.stopPropagation()}>
              <DialogContent onClose={handleClose} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

HobbiesCard.displayName = "HobbiesCard";

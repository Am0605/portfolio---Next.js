"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { memo, useCallback, useMemo, useState, useRef, useEffect } from "react";
import { XIcon, Trophy, Award, Star } from "lucide-react";

const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

// Memoized achievements data
const achievementsData = {
  fyp: {
    title: "11th IE-RIICH 2025",
    description: "Mir-AI: AI-Driven Personalised Learning System Using Classification Techniques For Secondary Student",
    achievements: [
      {
        id: 1,
        title: "IEEE SMC Award",
        icon: <Trophy className="w-6 h-6" />,
        color: "bg-yellow-500",
        image: "/images/achievements/menang1.jpg"
      },
      {
        id: 2,
        title: "Best Development Product Award",
        icon: <Star className="w-6 h-6" />,
        color: "bg-blue-500",
        image: "/images/achievements/menang2.jpg"
      },
      {
        id: 3,
        title: "Best Programme Special Award",
        icon: <Award className="w-6 h-6" />,
        color: "bg-green-500",
        image: "/images/achievements/menang4.jpg"
      },
      {
        id: 4,
        title: "Gold Award",
        icon: <Trophy className="w-6 h-6" />,
        color: "bg-purple-500",
        image: "/images/achievements/menang5.jpg"
      }
    ]
  },
  competition: {
    title: "Edu@innovate 2025",
    description: "International Education Innovation Competition (Edu@Innovate 2025)",
    achievements: [
      {
        id: 5,
        title: "Silver Medal Winner",
        icon: <Trophy className="w-6 h-6" />,
        color: "bg-orange-500",
        image: "/images/achievements/menang3.png"
      }
    ]
  }
};

// Memoized achievement item component
const AchievementItem = memo(({ achievement }: { achievement: typeof achievementsData.fyp.achievements[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="flex space-x-4">
      <div className={`${achievement.color} p-3 rounded-full text-white flex-shrink-0`}>
        {achievement.icon}
      </div>
      <div className="flex-1 flex items-center">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
          {achievement.title}
        </h3>
      </div>
    </div>
    <div className="mt-4 relative h-32 w-full overflow-hidden rounded-lg">
      <Image
        src={achievement.image}
        alt={achievement.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  </motion.div>
));

AchievementItem.displayName = "AchievementItem";

// Memoized section component
const AchievementSection = memo(({ section, title, description }: { 
  section: typeof achievementsData.fyp, 
  title: string,
  description: string 
}) => (
  <div className="space-y-4">
    <div className="text-center">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        {description}
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {section.achievements.map((achievement) => (
        <AchievementItem key={achievement.id} achievement={achievement} />
      ))}
    </div>
  </div>
));

AchievementSection.displayName = "AchievementSection";

// Memoized dialog content component
const DialogContent = memo(({ onClose }: { onClose: () => void }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    setIsScrolling(true);
    
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => {
        scrollElement.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, [handleScroll]);

  return (
    <motion.div 
      className="relative w-full max-w-5xl mx-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <button 
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 bg-white dark:bg-gray-800 rounded-full p-1.5 sm:p-2 shadow-lg"
      >
        <XIcon size={16} className="sm:w-5 sm:h-5" />
      </button>
      
      <div className="flex flex-col h-full max-h-[90vh]">
        <div className="flex-shrink-0 p-3 sm:p-6 pb-0">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-2 text-center pr-8">
            My Achievements
          </h2>
        </div>

        <div 
          ref={scrollRef}
          className={`flex-1 overflow-y-auto custom-scrollbar px-3 sm:px-6 space-y-8 ${
            isScrolling ? 'scrolling' : ''
          }`}
        >
          <AchievementSection 
            section={achievementsData.fyp} 
            title={achievementsData.fyp.title}
            description={achievementsData.fyp.description}
          />
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <AchievementSection 
              section={achievementsData.competition} 
              title={achievementsData.competition.title}
              description={achievementsData.competition.description}
            />
          </div>
        </div>
        
        <div className="flex-shrink-0 p-3 sm:p-6 pt-3 sm:pt-4">
          <div className="p-2 sm:p-3 md:p-4 bg-yellow-50 dark:bg-gray-800 rounded-lg">
            <p className="text-xs sm:text-sm text-center text-gray-700 dark:text-gray-300 italic leading-relaxed">
              "Success is not just about winning awards, but about the journey of learning, 
              growing, and making a meaningful impact through technology."
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

DialogContent.displayName = "DialogContent";

export const AchievementCard = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  const triggerContent = useMemo(() => (
    <motion.div 
      className="hidden md:block md:col-start-3 md:row-start-5 md:col-span-1 md:row-span-2 glass-card p-4 text-white relative overflow-hidden group cursor-pointer"
      variants={childVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={handleOpen}
    >
      <Image
        src="/images/menang2.jpg"
        alt="Achievement Picture"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 0px, 25vw"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
        <h1 className="text-3xl font-bold mb-2 text-white text-center">
          Achievements
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
            <div className="absolute inset-0 bg-black/50" />
            
            <div onClick={(e) => e.stopPropagation()}>
              <DialogContent onClose={handleClose} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

AchievementCard.displayName = "AchievementCard";

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { memo, useCallback, useMemo, useState, useRef, useEffect } from "react";
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
    images: ["/images/hobbies/badminton.jpg"],
    description: "My primary sport and passion. I love the fast-paced nature and strategic gameplay. Regular player who enjoys both casual games and competitive matches. Playing badminton has taught me discipline, quick reflexes, and the importance of strategy in competitive situations."
  },
  {
    id: 2,
    icon: "🈵",
    title: "Language",
    color: "bg-green-500",
    images: [
      "/images/hobbies/language/mandarin.png",
      "/images/hobbies/language/japan.jpg"
    ],
    description: "Currently learning Mandarin class for HSK1 level at Kunkwan International Mandarin Training Centre. Japan course in UPSI (level 1) - I can read and write hiragana, katakana and kanji. Language learning opens doors to new cultures and opportunities, helping me connect with diverse communities and understand different perspectives on problem-solving."
  },
  {
    id: 3,
    icon: "🤖",
    title: "Tech Exploration",
    color: "bg-purple-500",
    images: [
      "/images/hobbies/workshop/workshop.jpg",
      "/images/hobbies/workshop/workshop1.jpg",
      "/images/hobbies/workshop/workshop2.jpg",
      "/images/hobbies/workshop/workshop3.jpg",
      "/images/hobbies/workshop/workshop4.jpg",
      "/images/hobbies/workshop/workshop5.jpg"
    ],
    description: "Constantly exploring the latest AI libraries and technologies through various workshops and training sessions. I enjoy experimenting with new frameworks and tools to solve real-world problems. Staying updated with emerging technologies helps me bring innovative solutions to my projects."
  },
  {
    id: 4,
    icon: "💻",
    title: "Coding Projects",
    color: "bg-orange-500",
    images: [
      "/images/hobbies/coding/fl1.png",
      "/images/hobbies/coding/fl2.png",
      "/images/hobbies/coding/fl3.png",
    ],
    description: "Building personal side projects, conducting coding experiments, and working on freelance projects. I find joy in solving complex problems through clean, efficient code. Each project teaches me new approaches to software architecture and user experience design, while freelance work helps me understand real-world client requirements."
  },
  {
    id: 5,
    icon: "✈️",
    title: "Travel",
    color: "bg-red-500",
    images: [
      "/images/hobbies/travel/travel3.jpg",
      "/images/hobbies/travel/travel1.jpg",
      "/images/hobbies/travel/travel2.jpg"
    ],
    description: "Exploring new places like Lijiang, China and Acheh, Indonesia. These travels broaden my perspective and inspire creativity. Each destination teaches me how technology impacts different communities around the world, bringing new insights that influence my approach to development and cultural understanding."
  }
];

// Memoized tab button component
const TabButton = memo(({ hobby, isActive, onClick }: { 
  hobby: typeof hobbiesData[0], 
  isActive: boolean, 
  onClick: () => void 
}) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
      isActive 
        ? `${hobby.color} text-white shadow-lg` 
        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
    }`}
  >
    <span className="text-lg">{hobby.icon}</span>
    <span className="font-medium text-sm">{hobby.title}</span>
  </button>
));

TabButton.displayName = "TabButton";

// Memoized tab content component
const TabContent = memo(({ hobby }: { hobby: typeof hobbiesData[0] }) => (
  <motion.div 
    key={hobby.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.3 }}
    className="space-y-6"
  >
    {/* Images Grid */}
    <div className={`grid gap-3 ${
      hobby.images.length === 1 
        ? 'grid-cols-1' 
        : hobby.images.length === 2 
        ? 'grid-cols-1 md:grid-cols-2' 
        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    }`}>
      {hobby.images.map((image, index) => (
        <div key={index} className="relative h-48 w-full overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={`${hobby.title} ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
    
    {/* Content */}
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
        <span>{hobby.icon}</span>
        <span>{hobby.title}</span>
      </h3>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
        {hobby.description}
      </p>
    </div>
  </motion.div>
));

TabContent.displayName = "TabContent";

// Memoized dialog content component
const DialogContent = memo(({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleTabChange = useCallback((index: number) => {
    setActiveTab(index);
  }, []);

  const handleScroll = useCallback(() => {
    setIsScrolling(true);
    
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Set timeout to hide scrollbar after scrolling stops
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1000); // Hide after 1 second of no scrolling
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

  const renderTabs = useMemo(() => 
    hobbiesData.map((hobby, index) => (
      <TabButton 
        key={hobby.id} 
        hobby={hobby} 
        isActive={activeTab === index}
        onClick={() => handleTabChange(index)}
      />
    )), [activeTab, handleTabChange]
  );

  return (
    <motion.div 
      className="relative w-full max-w-4xl mx-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden"
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
      
      <div className="p-3 sm:p-6 max-h-[90vh]">
        <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center pr-8">
          My Hobbies & Interests
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
          {renderTabs}
        </div>

        {/* Tab Content */}
        <div 
          ref={scrollRef}
          className={`min-h-[250px] sm:min-h-[300px] md:min-h-[400px] max-h-[50vh] sm:max-h-[60vh] overflow-y-auto custom-scrollbar ${
            isScrolling ? 'scrolling' : ''
          }`}
        >
          <AnimatePresence mode="wait">
            <TabContent hobby={hobbiesData[activeTab]} />
          </AnimatePresence>
        </div>

        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
          <p className="text-xs sm:text-sm italic text-center text-gray-700 dark:text-gray-300">
            "I believe in maintaining a balance between technical pursuits and physical activities, 
            while continuously learning and growing in different aspects of life."
          </p>
        </div>
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
        src={hobbiesData[0].images[0]}
        alt="hobbies"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
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

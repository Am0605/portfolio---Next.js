"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";

const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export const RecommendationCard = () => {
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
      className="hidden md:flex md:col-start-4 md:row-start-4 md:col-span-1 md:row-span-3 glass-card p-6 flex-col"
      variants={childVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-bold mb-4 text-white flex-shrink-0">Endorsements</h2>
      <div 
        ref={scrollRef}
        className={`flex-1 overflow-y-auto custom-scrollbar space-y-3 ${
          isScrolling ? 'scrolling' : ''
        }`}
      >
        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
          <p className="text-sm text-white">"Adham is hardworking and dedicated student who consistently gives his best effort in every task. He approaches challenges with a positive attitude and collaborates respectfully with peers."</p>
          <p className="text-xs text-blue-200 mt-1">- Dr. Harnani Mat Zin, Supervisor Final Year Project</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
          <p className="text-sm text-white">"He’s the kind of person whose energy lights up the room — easy to talk to, fun to be around, and someone everyone feels comfortable with. On top of that, he’s incredibly talented at what he does and always brings his best to the team. "</p>
          <p className="text-xs text-blue-200 mt-1">- Ain Athirah, Webse Junior Web Developer</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
          <p className="text-sm text-white">"Aside from Am’s outstanding technical skills, he has a warm personality that brings people together, perfect for working in a team."</p>
          <p className="text-xs text-blue-200 mt-1">- Jaafar Chia Yu Fan, Colleague Webse Intern</p>
        </div>
      </div>
    </motion.div>
  );
};

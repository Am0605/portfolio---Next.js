"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { RecommendationCard } from "@/components/cards/RecommendationCard";
import { AvatarCard } from "@/components/cards/AvatarCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { HobbiesCard } from "@/components/cards/HobbiesCard";
import { CurrentFocusCard } from "@/components/cards/CurrentFocusCard";
import { CentreSectionCard } from "@/components/cards/CentreSectionCard";
import { SkillsCard } from "@/components/cards/SkillsCard";
import { motion } from "framer-motion";
import { AchievementCard } from "@/components/cards/AchievementCard";
import { useEffect } from "react";
import { toast } from "sonner";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function Home() {
  useEffect(() => {

    const timer = setTimeout(() => {
      toast("🚧 This page is under construction", {
        description: "Some features may be incomplete or unavailable. \n But feel free to explore! 🚀",
        duration: 5000,
        position: "top-right",
        style: {
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)'
        },
        descriptionClassName: "text-white/90 whitespace-pre-line"
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-screen overflow-x-hidden md:h-screen md:overflow-hidden relative">
      <BackgroundGradientAnimation />
      
      <motion.div 
        className="grid grid-cols-3 md:grid-cols-4 auto-rows-fr md:grid-rows-6 gap-2 md:gap-4 p-4 min-h-screen md:h-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar/Photo Section - First on mobile */}
        <AvatarCard />

        {/* Centre Section - Second on mobile */}
        <CentreSectionCard />

        {/* Experience Section - Third on mobile */}
        <ExperienceCard />

        {/* Project Section */}
        <ProjectCard />

        {/* Skills & Tools */}
        <SkillsCard />

        {/* Hobbies Section */}
        <HobbiesCard />

        {/* Current Focus */}
        <CurrentFocusCard />

        {/* Quick Links */}
        <AchievementCard />

        {/* Recommendation Section */}
        <RecommendationCard />
      </motion.div>
    </div>
  );
}

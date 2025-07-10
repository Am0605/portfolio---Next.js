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
        description: "Some features may be incomplete or unavailable.",
        duration: 5000,
        position: "top-right",
        style: {
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)'
        },
        descriptionClassName: "text-white/90"
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <BackgroundGradientAnimation />
      
      <motion.div 
        className="grid grid-cols-3 md:grid-cols-4 grid-rows-3 md:grid-rows-6 gap-2 md:gap-4 p-4 h-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Experience Section */}
        <ExperienceCard />

        {/* Recommendation Section */}
        <RecommendationCard />

        {/* Avatar/Photo Section */}
        <AvatarCard />

        {/* Project Section */}
        <ProjectCard />

        {/* Hobbies Section */}
        <HobbiesCard />

        {/* Current Focus */}
        <CurrentFocusCard />

        {/* Centre Section */}
        <CentreSectionCard />

        {/* Quick Links */}
        <AchievementCard />

        {/* Skills & Tools */}
        <SkillsCard />
      </motion.div>
    </div>
  );
}

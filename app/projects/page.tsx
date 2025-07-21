"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useCallback, useMemo } from "react";
import { ExternalLink, Github, Calendar, User, Tag } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

// Project type definition
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string | string[];
  date: string;
  status: string;
  demoUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
};

// Projects data organized by categories
const projectsData: Record<string, Project[]> = {
  "Web Development": [
    {
      id: 1,
      title: "Mir-AI: Learning Style Personalisation Using Classification Technique",
      description: "A web application that uses machine learning to personalize learning experiences based on their learning styles. Using Scikit-learn for classification and Flask for AI integration.",
      image: "/images/projects/1/thumbnail.png",
      technologies: ["React", "Laravel", "MySQL", "Flask", "Google Colab"],
      category: ["Web Development", "Machine Learning"],
      date: "2024-12",
      status: "Completed",
      demoUrl: null,
      githubUrl: null,
      featured: true
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Experimental portfolio website using Next.js, TypeScript, and Vercel. Showcases projects and skills with modern design and smooth animations.",
      image: "/images/projects/2/thumbnail.png",
      technologies: ["Next.js", "TypeScript", "Vercel"],
      category: "Web Development",
      date: "2025-06",
      status: "Experimenting",
      demoUrl: "https://am-dev.live/",
      githubUrl: "https://github.com/Am0605/portfolio---Next.js",
      featured: true
    },
    {
      id: 3,
      title: "Inventory Management System",
      description: "An Inventory Management System for Masjid Jamek using Laravel and implemented Supabase for data storage. Using Breeze for authentication and Tailwind CSS for styling.",
      image: "/images/projects/3/thumbnail.png",
      technologies: ["Laravel", "Supabase", "Forge"],
      category: "Web Development",
      date: "2025-01",
      status: "Completed",
      demoUrl: "http://inventory.am-dev.live/",
      githubUrl: "https://github.com/Am0605/breeze",
      featured: false
    },
    {
      id: 13,
      title: "Smart Inventory System",
      description: "A web application for managing inventory with features like product tracking, stock management, and reporting. Developed to test email provider and testing.",
      image: "/images/projects/13/thumbnail.png",
      technologies: ["Laravel", "React", "MySQL", "Forge"],
      category: "Web Development",
      date: "2025-05",
      status: "Experimenting",
      demoUrl: "http://smart-inventory.am-dev.live/",
      githubUrl: "https://github.com/Am0605/inventory-system",
      featured: false
    },
  ],
  "Mobile Development": [
    {
      id: 4,
      title: "MediMate – KitaHack 2025 Competiton",
      description: "A mobile application developed for the KitaHack 2025 competition, focusing on health and wellness. Integrates with Supabase for backend services and uses the Gemini API for AI functionalities.",
      image: "/images/projects/4/thumbnail.png",
      technologies: ["React Native", "Supabase", "Gemini API", "Expo"],
      category: ["Mobile Development", "Machine Learning"],
      date: "2025-03",
      status: "In Progress",
      demoUrl: null,
      githubUrl: "https://github.com/Am0605/MediMate",
      featured: true
    },
    {
      id: 5,
      title: "Mobile App: Cell Studio",
      description: "Mobile app for biological cell simulation and analysis, developed using React Native. First project using React Native. Apply audio and video processing techniques for educational purposes.",
      image: "/images/projects/5/thumbnail.jpeg",
      technologies: ["React Native", "Firebase", "Lottie"],
      category: "Mobile Development",
      date: "2024-02",
      status: "Completed",
      demoUrl: null,
      githubUrl: null,
      featured: false
    },
    {
      id: 6,
      title: "Mobile App: Dental Care",
      description: "Freelance project for a dental care mobile app, developed using React Native. Client requested a simple app with basic features for their assignment. Apply previous knowledge of React Native.",
      image: "/images/projects/6/thumbnail.jpg",
      technologies: ["React Native", "Firebase", "Lottie"],
      category: ["Mobile Development", "Freelance Projects"],
      date: "2024-02",
      status: "Completed",
      demoUrl: null,
      githubUrl: null,
      featured: false
    },
    {
      id: 7,
      title: "Kit Media: Kiddie App",
      description: "My first mobile app developed using Flutter(Dart), focusing on educational content for children. Includes features like quizzes, games, and educational videos.",
      image: "/images/projects/7/thumbnail.jpg",
      technologies: ["Flutter", "Dart"],
      category: "Mobile Development",
      date: "2024-09",
      status: "Completed",
      demoUrl: null,
      githubUrl: null,      
      featured: false
    }
  ],
  "Machine Learning": [
    {
      id: 8,
      title: "AI-Attendance Tracking and Face Recognition with YOLOv8",
      description: "A system that uses YOLOv8 for real-time face detection and recognition, integrated with a web application for attendance tracking.",
      image: "/images/projects/8/thumbnail.png",
      technologies: ["Python", "Streamlit", "Yolov8"],
      category: "Machine Learning",
      date: "2025-03",
      status: "Experimenting",
      demoUrl: null,
      githubUrl: null,
      featured: false
    },
  ],
  "Freelance Projects": [
    {
      id: 9,
      title: "Fitness Website",
      description: "Freelance project for a fitness website, developed using HTML, CSS, and JavaScript. Client requested a simple site with basic features for their assignment.",
      image: "/images/projects/9/thumbnail.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: ["Freelance Projects","Web Development"],
      date: "2024-06",
      status: "Completed",
      demoUrl: "http://fitness.am-dev.live/",
      githubUrl: "https://github.com/Am0605/fitness",
      featured: false
    },
    {
      id: 11,
      title: "Intranet System",
      description: "A system developed using Liferay CMS for internal company use, focusing on document management and employee collaboration.",
      image: "/images/projects/11/thumbnail.png",
      technologies: ["Liferay CMS", "HTML", "CSS"],
      category: "Web Development",
      date: "2025-04",
      status: "In Progress",
      demoUrl: "https://liferay-demo.websedev.com/web/intranet-affin-bank-adham",
      githubUrl: null,
      featured: false
    },
    {
      id: 10,
      title: "Lego Mockup 1",
      description: "A mockup project showcasing a Lego-themed website design, developed using HTML, CSS, and JavaScript. Internship project to apply web development skills using Liferay CMS.",
      image: "/images/projects/10/thumbnail.png",
      technologies: ["HTML", "CSS", "Bootstrap", "Liferay CMS"],
      category: "Web Development",
      date: "2025-03",
      status: "Experimenting",
      demoUrl: null,
      githubUrl: null,
      featured: false
    },
    {
      id: 12,
      title: "Lego Mockup 2",
      description: "A chosen mockup project showcasing a Lego-themed website design, developed using HTML, CSS, and JavaScript. Internship project to apply web development skills using Liferay CMS.",
      image: "/images/projects/12/thumbnail.png",
      technologies: ["HTML", "CSS", "Bootstrap", "Liferay CMS"],
      category: "Web Development",
      date: "2025-03",
      status: "Experimenting",
      demoUrl: "https://liferay-demo.websedev.com/web/test-adham/test",
      githubUrl: null,
      featured: false
    },
    {
        id: 14,
        title: "SQL Freelance Project",
        description: "A freelance project focused on SQL database management, involving the creation and optimization of SQL queries for data retrieval and manipulation.",
        image: "/images/projects/14/thumbnail.png",
        technologies: ["MySQL", "Oracle Apex", "PHP", "PHPMyAdmin"],
        category: "Freelance Projects",
        date: "2025-06",
        status: "Completed",
        demoUrl: null,
        githubUrl: null,
        featured: false
    },
    {
        id: 15,
        title: "IOT heat detector",
        description: "An IoT project focused on heat detection using sensors and microcontrollers, designed to monitor temperature and alert users in case of anomalies.",
        image: "/images/projects/15/thumbnail.png",
        technologies: ["MicroPython", "Pymarker"],
        category: "Freelance Projects",
        date: "2025-06",
        status: "Completed",
        demoUrl: null,
        githubUrl: null,
        featured: false
    },
    {
        id: 16,
        title: "Mobile App: Jom Bola",
        description: "A mobile application developed for a local football club, providing fans with news, schedules, and live updates. Developed using React Native.",
        image: "/images/projects/16/thumbnail.png",
        technologies: ["React Native", "Supabase", "Expo"],
        category: ["Mobile Development", "Freelance Projects"],
        date: "2025-07",
        status: "In Progress",
        demoUrl: null,
        githubUrl: null,
        featured: false
    }
  ]
};

const categories = Object.keys(projectsData);

// Project Card Component
const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
    whileHover={{ y: -5, scale: 1.02 }}
  >
    <div className="relative h-48 overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      {project.featured && (
        <div className="absolute top-3 left-3 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-semibold">
          Featured
        </div>
      )}
      <div className="absolute top-3 right-3">
        <span className={`px-2 py-1 rounded text-xs font-semibold ${
          project.status === 'Completed' 
            ? 'bg-green-500 text-white' 
            : project.status === 'Experimenting' 
            ? 'bg-blue-500 text-white' 
            : 'bg-orange-500 text-white'
        }`}>
          {project.status}
        </span>
      </div>
    </div>
    
    <div className="p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
      </div>
      
      {/* Display categories */}
      <div className="flex flex-wrap gap-1 mb-2">
        {Array.isArray(project.category) ? (
          project.category.map((cat, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs font-medium"
            >
              {cat}
            </span>
          ))
        ) : (
          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs font-medium">
            {project.category}
          </span>
        )}
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
        {project.description}
      </p>
      
      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
        <Calendar className="w-4 h-4 mr-1" />
        <span>{new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-3">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm"
          >
            <Github className="w-4 h-4 mr-1" />
            Code
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return Object.values(projectsData).flat();
    }
    
    // Handle projects with multiple categories
    const allProjects = Object.values(projectsData).flat();
    return allProjects.filter(project => {
      if (Array.isArray(project.category)) {
        return project.category.includes(activeCategory);
      }
      return project.category === activeCategory;
    });
  }, [activeCategory]);

  const featuredProjects = useMemo(() => {
    return Object.values(projectsData).flat().filter(project => project.featured);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of web applications, mobile apps, machine learning projects, and freelance work
          </p>
        </motion.div>

        {/* Featured Projects Section */}
        {activeCategory === "All" && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Tag className="w-6 h-6 mr-2 text-yellow-500" />
              Featured Projects
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
        >
          <button
            onClick={() => handleCategoryChange("All")}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              activeCategory === "All"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700"
            }`}
          >
            All Projects
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-16"
        >
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

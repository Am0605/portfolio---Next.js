"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export const CentreSectionCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  const handleDownloadCV = async () => {
    try {
      console.log('Download CV clicked'); // Debug log
      
      // First, check if the file exists
      const response = await fetch('/adham.pdf', { method: 'HEAD' });
      
      if (!response.ok) {
        console.error('PDF file not found:', response.status);
        alert('CV file not found. Please contact the administrator.');
        return;
      }
      
      console.log('File exists, proceeding with download'); // Debug log
      
      // Create a link element
      const link = document.createElement('a');
      link.href = '/adham.pdf'; // Path to your PDF in the public folder
      link.download = 'Adham_CV.pdf'; // Downloaded file name
      link.target = '_blank'; // Open in new tab as fallback
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('Download triggered successfully'); // Debug log
      
    } catch (error) {
      console.error('Error downloading CV:', error);
      
      // Fallback: try direct window.open
      try {
        window.open('/adham.pdf', '_blank');
        console.log('Fallback: opened in new tab'); // Debug log
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError);
        alert('Unable to download CV. Please try again later.');
      }
    }
  };

  return (
    <motion.div 
      className="col-span-3 row-span-2 md:col-start-2 md:row-start-3 md:col-span-2 md:row-span-2 glass-card-center p-3 sm:p-4 md:p-6 group relative overflow-hidden"
      variants={childVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-slate-500/5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Mobile background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-slate-50/30 sm:hidden"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200/10 to-indigo-200/10 rounded-full blur-2xl sm:hidden"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-indigo-200/10 to-blue-200/10 rounded-full blur-xl sm:hidden"></div>
      
      {/* Default Content */}
      <div className={`relative z-10 hidden md:flex group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-200 ease-out h-full flex-col justify-center items-center text-center`}>
        <div className="mb-3 sm:mb-4 md:mb-6">
          {/* Creative name display */}
          <div className="relative mb-2 sm:mb-3 md:mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent tracking-tight leading-none">
              Muhammad Adham
            </h1>
            
            {/* Decorative underline */}
            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-0.5 md:h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-1 sm:mt-2 md:mt-3 rounded-full"></div>
          </div>
          
          {/* Professional title */}
          <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
            <h2 className="text-sm sm:text-base md:text-xl font-semibold text-slate-700 tracking-wide uppercase letter-spacing-wider">
              Full Stack Developer
            </h2>
            <div className="flex items-center justify-center space-x-1 sm:space-x-1.5 md:space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium text-slate-500 tracking-wide">Fresh Graduate</span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Content */}
      <div className={`absolute inset-3 sm:inset-4 md:inset-6 opacity-100 translate-y-0 md:opacity-0 md:translate-y-6 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-200 ease-out delay-100 pointer-events-auto md:pointer-events-none md:group-hover:pointer-events-auto z-20`}>
        <div className="h-full flex flex-col">
          {/* Mobile Header - Only visible on mobile */}
          <div className="block sm:hidden mb-4 flex-shrink-0">
            <div className="text-center mb-3">
              <h1 className="text-xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent tracking-tight leading-tight">
                Muhammad Adham
              </h1>
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-1 rounded-full"></div>
            </div>
            <div className="text-center">
              <h2 className="text-xs font-semibold text-slate-700 tracking-wide uppercase mb-1">
                Full Stack Developer
              </h2>
              <div className="flex items-center justify-center space-x-1">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                <span className="text-xs font-medium text-slate-500">Fresh Graduate</span>
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* About Me Section - Flexible height */}
          <div className="flex-1 min-h-0 flex flex-col">
            <div className="flex items-center mb-3 sm:mb-3 flex-shrink-0">
              <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mr-2 sm:hidden"></div>
              <h3 className="text-sm sm:text-lg font-bold text-slate-800">About Me</h3>
            </div>
            
            {/* Mobile: Expandable text */}
            <div className="sm:hidden flex-1 min-h-0 flex flex-col">
              <div className={`${isExpanded ? 'flex-1 min-h-0' : 'flex-shrink-0'} transition-all duration-300`}>
                <div className={`${isExpanded ? 'h-full overflow-y-auto' : ''}`}>
                  <p className={`text-xs text-justify text-slate-700 leading-relaxed transition-all duration-300 ${
                    isExpanded ? 'line-clamp-none mb-3' : 'line-clamp-7 mb-3'
                  }`}>
                    I'm a fresh Software Engineer graduate from Sultan Idris Education University (UPSI) who turns ideas into real applications: 
                    I've built an interactive Flutter quiz platform that adapts to student performance, a React Native health assistant that uses OCR to digitize records and offers AI-driven symptom insights, 
                    and a web-based inventory system with intuitive dashboards and automated reporting. 
                    I'm also a President of the Alumni Association, driving member engagement and data-driven initiatives. When I'm not coding, you'll find me on the badminton court wielding my racket, studying Mandarin in evening classes, or exploring the latest AI libraries to tackle real-world challenges.            
                  </p>
                </div>
              </div>
              
              {/* Read More/Less Button */}
              <button
                onClick={toggleExpanded}
                className="text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center space-x-1 mb-6 flex-shrink-0"
              >
                <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Desktop: Always show full text */}
            <p className="hidden text-justify sm:block text-sm text-slate-700 leading-relaxed mb-4">
              I'm a fresh Software Engineer graduate from Sultan Idris Education University (UPSI) who turns ideas into real applications: 
              I've built an interactive Flutter quiz platform that adapts to student performance, a React Native health assistant that uses OCR to digitize records and offers AI-driven symptom insights, 
              and a web-based inventory system with intuitive dashboards and automated reporting. 
              I'm also a President of the Alumni Association, driving member engagement and data-driven initiatives. When I'm not coding, you'll find me on the badminton court wielding my racket, studying Mandarin in evening classes, or exploring the latest AI libraries to tackle real-world challenges.            
            </p>
          </div>
          
          {/* Social Links and Download Button - Always at bottom */}
          <div className="flex-shrink-0 mt-auto">
            {/* Mobile: Enhanced vertical stack with better spacing */}
            <div className="flex flex-col space-y-4 sm:hidden">
              {/* Social Links with improved mobile design */}
              <div className="bg-slate-50/80 backdrop-blur-sm rounded-xl p-3 border border-slate-200/50">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-xs font-medium text-slate-600">Connect with me</span>
                </div>
                <div className="flex justify-center space-x-3">
                  {/* GitHub */}
                  <a 
                    href="https://github.com/Am0605" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/social flex items-center justify-center w-10 h-10 bg-white hover:bg-gray-800 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110 active:scale-95 border border-slate-200/50"
                  >
                    <svg className="w-5 h-5 text-slate-600 group-hover/social:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/-muhammadadham/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/social flex items-center justify-center w-10 h-10 bg-white hover:bg-blue-600 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110 active:scale-95 border border-slate-200/50"
                  >
                    <svg className="w-5 h-5 text-slate-600 group-hover/social:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  {/* Email */}
                  <a 
                    href="mailto:adham8663@gmail.com" 
                    className="group/social flex items-center justify-center w-10 h-10 bg-white hover:bg-red-500 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110 active:scale-95 border border-slate-200/50"
                  >
                    <svg className="w-5 h-5 text-slate-600 group-hover/social:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Enhanced Download Button for mobile */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownloadCV();
                }}
                className="group/btn bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-3 relative z-30 pointer-events-auto w-full border border-blue-500/20"
              >
                <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-xl blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Desktop: Side by side */}
            <div className="hidden sm:flex items-center justify-between space-x-3">
              {/* Social Links */}
              <div className="flex space-x-2">
                {/* GitHub */}
                <a 
                  href="https://github.com/Am0605" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/social flex items-center justify-center w-8 h-8 bg-slate-100 hover:bg-gray-800 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <svg className="w-4 h-4 text-slate-600 group-hover/social:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/-muhammadadham/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/social flex items-center justify-center w-8 h-8 bg-slate-100 hover:bg-blue-600 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <svg className="w-4 h-4 text-slate-600 group-hover/social:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                {/* Email */}
                <a 
                  href="mailto:adham8663@gmail.com" 
                  className="group/social flex items-center justify-center w-8 h-8 bg-slate-100 hover:bg-red-500 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <svg className="w-4 h-4 text-slate-600 group-hover/social:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
              </div>
              
              {/* Download Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownloadCV();
                }}
                className="group/btn bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium text-xs shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center space-x-2 relative z-30 pointer-events-auto"
              >
                <span>Download CV</span>
                <svg className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};
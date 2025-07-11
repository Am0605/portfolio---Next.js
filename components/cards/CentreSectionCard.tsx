"use client";

import { motion } from "framer-motion";

const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export const CentreSectionCard = () => {
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
      className="hidden md:block md:col-start-2 md:row-start-3 md:col-span-2 md:row-span-2 glass-card-center p-6 group cursor-pointer relative overflow-hidden"
      variants={childVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Default Content */}
      <div className="relative z-10 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-200 ease-out h-full flex flex-col justify-center items-center text-center">
        <div className="mb-6">
          {/* Creative name display */}
          <div className="relative mb-4">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent tracking-tight leading-none">
              Muhammad Adham
            </h1>
            
            {/* Decorative underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-3 rounded-full"></div>
          </div>
          
          {/* Professional title */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-700 tracking-wide uppercase letter-spacing-wider">
              Full Stack Developer
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-slate-500 tracking-wide">Fresh Graduate</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Hover Content */}
      <div className="absolute inset-6 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out delay-100 pointer-events-none group-hover:pointer-events-auto z-20">
        <div className="h-full flex flex-col justify-between">
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center mb-3">
              <h3 className="text-lg font-bold text-slate-800">About Me</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
            I’m a fresh Software Engineer graduate from Universiti Pendidikan Sultan Idris (UPSI) who turns ideas into real applications: 
            I’ve built an interactive Flutter quiz platform that adapts to student performance, a React Native health assistant that uses OCR to digitize records and offers AI-driven symptom insights, 
            and a Laravel-backed inventory system with intuitive dashboards and automated reporting. 
            I’m also a President of the Alumni Association, driving member engagement and data-driven initiatives. When I’m not coding, you’ll find me on the badminton court wielding my racket, studying Mandarin in evening classes, or exploring the latest AI libraries to tackle real-world challenges.            
            </p>
          </div>
          
          {/* Social Links and Download Button */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-between space-x-3">
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
                onClick={handleDownloadCV}
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

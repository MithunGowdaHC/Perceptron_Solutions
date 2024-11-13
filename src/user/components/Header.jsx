import React from "react";
import { Link } from "react-router-dom";
import { TypewriterEffectSmooth } from "./ui/typewriter-effext";
import BackgroundBeamsWithCollision from "./ui/background-beams-with-collision";
import { motion } from "framer-motion";

const Header = () => {
  const words = [
    {
      text: "Improve Your Online",
      className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight",
    },
    {
      text: "Learning Experience",
      className: "bg-gradient-to-r from-purple-600 via-violet-600 to-pink-500 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
    },
    {
      text: "Better Instantly",
      className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight",
    },
    {
      text: "with",
      className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight",
    },
    {
      text: "Pavan Mirla",
      className: "bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
    },
  ].map(word => [word]); // Wrap each word in an array for TypewriterEffectSmooth

  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-gray-950">
      <BackgroundBeamsWithCollision>
        <div className="relative min-h-screen">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.8))] dark:bg-grid-slate-800 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 opacity-80" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[calc(100vh-80px)] flex items-center">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
              
              {/* Left Content Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 space-y-6"
              >
                <div className="space-y-1 sm:space-y-2 relative">
                  {words.map((word, index) => (
                    <div key={index} className="w-full text-left">
                      <TypewriterEffectSmooth 
                        words={word}
                        className="justify-start" 
                      />
                    </div>
                  ))}
                
                </div>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Join our community of{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    20,000+ students
                  </span>{" "}
                  exploring{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    50+ premium courses
                  </span>{" "}
                  designed to elevate your skills.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/login">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started Now
                  </motion.button>
                  </Link>
                  
                  <Link
                    to="/all-courses"
                    className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl font-medium text-lg border-2 border-gray-200 dark:border-gray-800 hover:border-purple-200 dark:hover:border-purple-900 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  >
                    Browse Courses
                  </Link>
                </div>
              </motion.div>

              {/* Right Image Section */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2 w-full max-w-2xl mx-auto"
              >
                <div className="relative">
                  {/* Animated background blobs */}
                  <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
                  <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl transform rotate-1" />

                  {/* Main image container with enhanced styling */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl transform -rotate-3 transition-transform duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-blue-600/10 " />
                    <img
                      src="https://miro.medium.com/v2/resize:fit:1100/1*1eyD_ZzkewkIzeiIlgZY_w.png"
                      alt="Learning Platform Preview"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
              
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default Header;
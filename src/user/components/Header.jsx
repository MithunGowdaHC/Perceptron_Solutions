import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative min-h-[80%] bg-primaryBackground overflow-hidden">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 min-h-[calc(100vh-4rem)]">
        
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 sm:space-y-8 lg:pr-8 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Improve Your Online{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Learning Experience
            </span>{" "}
            Better Instantly
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">
            We have 50+ Online courses & 20K+ Online registered students. Find
            your desired Courses from them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl hover:from-indigo-700 hover:to-violet-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
              Get Started
            </button>
            <Link to={"/all-courses"} className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-800 rounded-xl hover:bg-gray-50 transition-all border-2 border-gray-100 hover:border-indigo-100 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
              Browse Courses
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative lg:w-1/2 w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto lg:mx-0 lg:h-[calc(100vh-8rem)]  pt-28 sm:pt-20 lg:pt-28">
          
          {/* Decorative Background Blobs */}
          <div className="absolute top-1/4 right-1/4 w-32 sm:w-48 md:w-64 lg:w-72 h-32 sm:h-48 md:h-64 lg:h-72 bg-indigo-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-1/3 right-1/3 w-32 sm:w-48 md:w-64 lg:w-72 h-32 sm:h-48 md:h-64 lg:h-72 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />

          {/* Main Image */}
          <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.03] transition-transform duration-300 bg-gradient-to-br from-indigo-100 to-violet-100 p-2">
            <img
              src="https://miro.medium.com/v2/resize:fit:1100/1*1eyD_ZzkewkIzeiIlgZY_w.png"
              alt="Pavan Mirla"
              className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

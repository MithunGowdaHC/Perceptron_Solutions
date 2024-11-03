import React from "react";

const Header = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 lg:pr-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Improve Your Online{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Learning Experience
              </span>{" "}
              Better Instantly
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              We have 50+ Online courses & 20K+ Online registered student. Find
              your desired Courses from them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl hover:from-indigo-700 hover:to-violet-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                Get Started
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-800 rounded-xl hover:bg-gray-50 transition-all border-2 border-gray-100 hover:border-indigo-100 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                Browse Courses
              </button>
            </div>

            
          </div>

          {/* Right Image Section */}
          <div className="relative w-full max-w-xl mx-auto lg:mx-0 pt-8 sm:pt-12 lg:pt-16 lg:h-[calc(100vh-8rem)]">
            {/* Background decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
            <div className="absolute top-1/3 right-1/3 w-48 sm:w-72 h-48 sm:h-72 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />

            {/* Main image container */}
            <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 bg-gradient-to-br from-indigo-100 to-violet-100 p-2">
              <img
                src="https://miro.medium.com/v2/resize:fit:1100/1*1eyD_ZzkewkIzeiIlgZY_w.png"
                alt="Pavan Mirla"
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
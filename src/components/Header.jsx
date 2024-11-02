
import React from "react";


 const Header = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 leading-tight">
              Improve Your Online Learning Experience Better Instantly
            </h1>
            <p className="mt-6 text-gray-600 text-lg">
              We have 50+ Online courses & 20K+ Online registered student. Find your desired Courses from them.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
                Browse Courses
              </button>
            </div>
            <div className="mt-12">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white" />
                  ))}
                </div>
                <p className="text-gray-600">20K+ People already trusted us.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://pmirla.github.io/about/portrait.jpg"/>
            {/* Placeholder for the main image */}
            <div className="relative z-10">
              <div className="w-full h-[500px] bg-purple-200 rounded-lg flex items-center justify-center text-gray-500">
                Image Placeholder
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-purple-300 rounded-full opacity-50 blur-xl" />
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-400 rounded-full opacity-50 blur-xl" />
            
            {/* Floating card decoration */}
            <div className="absolute top-20 -right-8 bg-white p-4 rounded-lg shadow-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-lg mb-2" />
              <div className="w-20 h-3 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header
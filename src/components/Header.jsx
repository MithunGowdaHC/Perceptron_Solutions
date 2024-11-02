import React from "react";

const Header = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Improve Your Online{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Learning Experience
              </span>{" "}
              Better Instantly
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              We have 50+ Online courses & 20K+ Online registered student. Find
              your desired Courses from them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl hover:from-indigo-700 hover:to-violet-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="px-8 py-4 bg-white text-gray-800 rounded-xl hover:bg-gray-50 transition-all border-2 border-gray-100 hover:border-indigo-100 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Browse Courses
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-white shadow-xl overflow-hidden ring-2 ring-indigo-50"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-indigo-200 to-violet-200" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">
                    20K+ People already trusted us
                  </p>
                  <p className="text-gray-600 text-sm">
                    Join our growing community today
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative  pt-16 lg:h-[calc(100vh-8rem)]">
            {/* Background decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />

            {/* Main image container */}
            <div className="relative z-10  rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 bg-gradient-to-br from-indigo-100 to-violet-100 p-2">
              {/* <img
                src="https://avatars.githubusercontent.com/u/5429924?v=4"
                alt="Pavan Mirla"
                className=" w-full h-full  object-cover rounded-2xl"
              /> */}
              <img
                src="https://miro.medium.com/v2/resize:fit:1100/1*1eyD_ZzkewkIzeiIlgZY_w.png"
                alt="Pavan Mirla"
                className=" w-full h-full  object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

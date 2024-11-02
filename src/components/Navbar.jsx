import React from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Perceptron
                </span>
              </div>
            </div>
            <div className="hidden  md:flex md:ml-60 space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
                  Courses
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-indigo-600 hover:text-indigo-700 transition-colors">
              Login
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:from-indigo-700 hover:to-violet-700 transition-all transform hover:scale-105">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
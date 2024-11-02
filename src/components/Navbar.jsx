import React from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-purple-600">Perceptron</span>
              </div>
            </div>
            <div className="hidden md:flex md:ml-8 space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-600">Home</a>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-purple-600">
                  Courses
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <a href="#" className="text-gray-700 hover:text-purple-600">About</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">Contact</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            
            <button className="px-4 py-2 text-purple-600 hover:text-purple-700">Login</button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
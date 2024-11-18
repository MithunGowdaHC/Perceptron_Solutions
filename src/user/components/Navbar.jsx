import React, { useState } from "react";
import { BookOpen, ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="    block  w-full z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>

                <NavLink
                  to={"/"}
                  className=" cursor-pointer text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent"
                >
                  Perceptron
                </NavLink>
              </div>
            </div>
            <div className="hidden md:flex md:ml-60 space-x-8">
              <NavLink
                to={"/"}
                className="text-gray-800 hover:text-indigo-600 transition-colors font-semibold"
              >
                <p>HOME</p>
                <hr className=" w-2/4 h-[1.5px] m-auto  hidden  border-none bg-black "/>
              </NavLink>
              <NavLink
                to={"/all-courses"}
                className="text-gray-800 hover:text-indigo-600 transition-colors font-semibold"
              >
                <p>COURSES</p>
                <hr className=" w-2/4 h-[1.5px] m-auto  hidden  border-none bg-black "/>
              </NavLink>

              <NavLink
                to={"/about"}
                className="text-gray-800 hover:text-indigo-600 transition-colors font-semibold"
              >
                <p>ABOUT</p>
                <hr className=" w-2/4 m-auto h-[1.5px] hidden  border-none bg-black "/>
              </NavLink>
              <NavLink
                to={"/contact"}
                className="text-gray-800 hover:text-indigo-600 transition-colors font-semibold"
              >
                <p>CONTACT</p>
                <hr className=" w-2/4 h-[1.5px]  m-auto  hidden border-none bg-black "/>
              </NavLink>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <NavLink to={"/login"}>
              <button className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg transition-all duration-200 hover:bg-indigo-600 hover:text-white font-semibold">
                Login
              </button>
            </NavLink>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white shadow-lg transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col px-4 py-2 space-y-2">
          <NavLink
            to={"/"}
            className="text-gray-700 hover:text-indigo-600 transition-colors font-semibold"
          >
            Home
          </NavLink>

          <NavLink
            to={"/about"}
            className="text-gray-700 hover:text-indigo-600 transition-colors font-semibold"
          >
            About
          </NavLink>
          <NavLink
            to={"/all-courses"}
            className="text-gray-700 hover:text-indigo-600 transition-colors font-semibold"
          >
            Courses
          </NavLink>
          <NavLink
            to={"/contact"}
            className="text-gray-700 hover:text-indigo-600 transition-colors font-semibold"
          >
            Contact
          </NavLink>
          <NavLink to={"/login"}>
          <div className="flex flex-col gap-2">
            <button className="w-full px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg transition-all duration-200 hover:bg-indigo-600 hover:text-white font-semibold">
              Login
            </button>
          </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

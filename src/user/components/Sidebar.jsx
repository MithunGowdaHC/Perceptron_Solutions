import React, { useState } from 'react';
import { Home, User, Settings, LogOut, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile toggle

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        className="sm:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-md"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>

      <div
        className={`block top-0 left-0 h-screen bg-gray-900 text-white transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 w-20 sm:w-64 z-40`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-center sm:justify-between px-4 py-6 border-b border-gray-800">
          <span className="text-xl font-bold sm:block hidden">😎 Pavan Mirla</span>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 py-6">
          <nav>
            {[
              { name: 'Dashboard', icon: Home, id: '/' },
              { name: 'Profile', icon: User, id: 'profile' },
              { name: 'Settings', icon: Settings, id: 'settings' },
            ].map((item) => (
              <Link to={`/${item.id}`}
                key={item.id}
                
                className={`flex items-center px-4 py-3 ${
                  activeItem === item.id ? 'bg-gray-800' : 'hover:bg-gray-800'
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                <item.icon size={20} className="mr-0 sm:mr-4" />
                <span className="hidden sm:inline-block whitespace-nowrap">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Logout Link */}
        <div className="px-4 py-3 border-t border-gray-800">
          <Link
            to={"/login"}
            className="flex items-center hover:bg-gray-800 px-3 py-2 rounded"
            onClick={() => handleItemClick('logout')}
          >
            <LogOut size={24} className="mr-0 sm:mr-4" />
            <span className="hidden sm:inline-block">Logout</span>
          </Link>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 sm:hidden z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;

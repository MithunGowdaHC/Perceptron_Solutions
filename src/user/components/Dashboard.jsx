import React, { useState } from 'react';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`${isDarkMode ? 'dark' : ''} flex h-screen bg-gray-100 dark:bg-gray-900`}>
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-16'} bg-white dark:bg-gray-800 h-full shadow-md`}>
        <div className="flex items-center justify-between p-4">
          <span className="text-xl font-bold text-blue-600">AdminHub</span>
          <button onClick={toggleSidebar} className="text-gray-700 dark:text-gray-300">
            <i className="bx bx-menu"></i>
          </button>
        </div>
        <ul className="mt-8 space-y-4">
          {['Dashboard', 'My Store', 'Analytics', 'Message', 'Team'].map((item) => (
            <li key={item} className="text-gray-700 dark:text-gray-300 flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
              <i className={`bx ${item === 'Dashboard' ? 'bxs-dashboard' : 'bxs-circle'} mr-2`}></i>
              <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>{item}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Content */}
      <main className="flex-1">
        {/* Navbar */}
        <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
          <button onClick={toggleSidebar} className="text-gray-700 dark:text-gray-300">
            <i className="bx bx-menu"></i>
          </button>
          <div className="flex items-center space-x-4">
            <input type="search" placeholder="Search..." className="p-2 border rounded-lg dark:bg-gray-700 dark:text-gray-300" />
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} className="hidden" />
              <span className="w-10 h-4 bg-gray-300 dark:bg-gray-700 rounded-full shadow-inner"></span>
              <span className="dot absolute left-1 top-1 w-6 h-6 bg-white dark:bg-gray-800 rounded-full transition"></span>
            </label>
            <div className="relative">
              <i className="bx bxs-bell text-gray-700 dark:text-gray-300"></i>
              <span className="absolute -top-1 -right-1 text-xs bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">8</span>
            </div>
            <img src="img/people.png" alt="Profile" className="w-8 h-8 rounded-full" />
          </div>
        </nav>

        {/* Main Content */}
        <div className="p-4 space-y-4">
          {/* Dashboard Header */}
          <header className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold dark:text-white">Dashboard</h1>
            <button className="flex items-center bg-blue-500 text-white p-2 rounded-lg">
              <i className="bx bxs-cloud-download mr-2"></i> Download PDF
            </button>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: 'bxs-calendar-check', label: 'New Order', value: 1020 },
              { icon: 'bxs-group', label: 'Visitors', value: 2834 },
              { icon: 'bxs-dollar-circle', label: 'Total Sales', value: '$2543' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
                <i className={`bx ${stat.icon} text-3xl text-blue-500`}></i>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold dark:text-white">{stat.value}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Orders and Todos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Recent Orders */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <header className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold dark:text-white">Recent Orders</h3>
                <div className="flex space-x-2 text-gray-700 dark:text-gray-300">
                  <i className="bx bx-search"></i>
                  <i className="bx bx-filter"></i>
                </div>
              </header>
              <table className="w-full text-gray-700 dark:text-gray-300">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Date Order</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {['Completed', 'Pending', 'Process', 'Pending', 'Completed'].map((status, index) => (
                    <tr key={index} className="hover:bg-gray-200 dark:hover:bg-gray-700">
                      <td className="flex items-center py-2">
                        <img src="img/people.png" alt="User" className="w-8 h-8 rounded-full mr-2" />
                        John Doe
                      </td>
                      <td>01-10-2021</td>
                      <td><span className={`px-2 py-1 rounded-full ${status === 'Completed' ? 'bg-green-200 text-green-800' : status === 'Pending' ? 'bg-yellow-200 text-yellow-800' : 'bg-blue-200 text-blue-800'}`}>{status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Todos */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <header className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold dark:text-white">Todos</h3>
                <div className="flex space-x-2 text-gray-700 dark:text-gray-300">
                  <i className="bx bx-plus"></i>
                  <i className="bx bx-filter"></i>
                </div>
              </header>
              <ul>
                {['Completed', 'Completed', 'Not Completed', 'Completed', 'Not Completed'].map((todo, index) => (
                  <li key={index} className={`flex items-center justify-between p-2 ${todo === 'Completed' ? 'line-through text-gray-500' : ''}`}>
                    <p>{todo} Todo</p>
                    <i className="bx bx-dots-vertical-rounded"></i>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

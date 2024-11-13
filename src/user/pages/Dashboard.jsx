import React from 'react';
import { Users, GraduationCap, DollarSign, BookOpen, TrendingUp } from 'lucide-react';
import { users } from "../../TestData/UserDetails";

// Updated Card Component
const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-xl ${className}`}>
    {children}
  </div>
);

const Dashboard = () => {
  // Calculate statistics
  const totalStudents = users.length;
  const totalRevenue = users.reduce((sum, user) => sum + (user.amount || 0), 0);
  const totalCourses = new Set(users.map(user => user.courseName)).size;
  const averageProgress = Math.round(users.reduce((sum, user) => sum + (user.progress || 0), 0) / users.length);

  return (
    <div className="p-6 sm:p-8 block space-y-8 bg-gradient-to-b from-gray-100 via-white to-gray-100 min-h-screen">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">Student Dashboard</h1>
        <p className="text-sm sm:text-base text-gray-500">Get a snapshot of student performance and financials</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center p-6">
            <div className="bg-blue-200 p-3 rounded-full shadow-md">
              <GraduationCap className="h-8 w-8 text-blue-700" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Total Students</p>
              <h3 className="text-xl sm:text-3xl font-bold text-gray-900">{totalStudents}</h3>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center p-6">
            <div className="bg-green-200 p-3 rounded-full shadow-md">
              <DollarSign className="h-8 w-8 text-green-700" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <h3 className="text-xl sm:text-3xl font-bold text-gray-900">${totalRevenue}</h3>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center p-6">
            <div className="bg-purple-200 p-3 rounded-full shadow-md">
              <BookOpen className="h-8 w-8 text-purple-700" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Active Courses</p>
              <h3 className="text-xl sm:text-3xl font-bold text-gray-900">{totalCourses}</h3>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center p-6">
            <div className="bg-yellow-200 p-3 rounded-full shadow-md">
              <TrendingUp className="h-8 w-8 text-yellow-700" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Avg. Progress</p>
              <h3 className="text-xl sm:text-3xl font-bold text-gray-900">{averageProgress}%</h3>
            </div>
          </div>
        </Card>
      </div>

      {/* Student Table */}
      <Card className="p-6 shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Student Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left bg-gray-50 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">Student</th>
                <th className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">Course</th>
                <th className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">Progress</th>
                <th className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">Last Active</th>
                <th className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">Payment</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="px-4 sm:px-6 py-4 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                      {user.userName?.[0] || 'U'}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{user.userName || 'Unknown'}</p>
                      <p className="text-xs text-gray-500">{user.email || 'No email'}</p>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">{user.courseName || 'N/A'}</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">{user.progress || 'N/A'}%</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">{user.lastActive || 'N/A'}</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">${user.amount || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;

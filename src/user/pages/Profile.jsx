import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Pencil, 
  Share2, 
  Users, 
  DollarSign, 
  BookOpen,
  TrendingUp
} from 'lucide-react';
import { courses } from '../../TestData/ProfileData';

const Profile = () => {
 
  // Calculate summary statistics
  const totalStudents = courses.reduce((sum, course) => sum + course.students, 0);
  const totalRevenue = courses.reduce((sum, course) => sum + course.revenue, 0);
  const totalCourses = courses.length;
  const activeStudents = courses.filter(course => course.students > 0).length;

  const StatCard = ({ title, value, icon: Icon, trend }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        {trend && (
          <span className="text-green-500 text-sm flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            {trend}
          </span>
        )}
      </div>
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Hello Pavan!</h1>
            <p className="text-gray-500 mt-1">Welcome back! Here's what's happening with your courses.</p>
          </div>
          <Link to="/admin/create-new-course">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Create New Course
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Total Students" 
            value={totalStudents}
            icon={Users}
            trend="+12.5% this month"
          />
          <StatCard 
            title="Total Revenue" 
            value={`$${totalRevenue}`}
            icon={DollarSign}
            trend="+8.2% this month"
          />
          <StatCard 
            title="Active Courses" 
            value={activeStudents}
            icon={BookOpen}
          />
          <StatCard 
            title="Total Courses" 
            value={totalCourses}
            icon={BookOpen}
          />
        </div>

        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 flex flex-row items-center justify-between border-b">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">All Courses</h2>
              <p className="text-gray-500 text-sm mt-1">Manage and monitor your course performance</p>
            </div>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4 font-medium text-gray-600">Course</th>
                    <th className="text-left py-4 px-4 font-medium text-gray-600">Students</th>
                    <th className="text-left py-4 px-4 font-medium text-gray-600">Revenue</th>
                    <th className="text-left py-4 px-4 font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course.id} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <div>
                          <h3 className="font-medium text-gray-800">{course.name}</h3>
                          <p className="text-sm text-gray-500">Published on Oct 24, 2023</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span>{course.students}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-gray-400" />
                          <span>{course.revenue}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors group">
                            <Pencil className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                          </button>
                          <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors group">
                            <Share2 className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
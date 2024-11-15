// EditCourse.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../../TestData/ProfileData';

const EditCourse = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  // Find the course data based on courseId
  const course = courses.find(c => c.id === parseInt(courseId));

  const [name, setName] = useState(course?.name || '');
  const [students, setStudents] = useState(course?.students || 0);
  const [revenue, setRevenue] = useState(course?.revenue || 0);

  const handleSave = () => {
    // Implement the save functionality, such as updating the course data in a database
    // For now, just navigate back to the profile page after saving
    alert("Course updated successfully!");
    navigate('/admin/profile');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Edit Course</h1>
        
        <div className="mb-4">
          <label className="text-gray-600">Course Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-2 p-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600">Students</label>
          <input
            type="number"
            value={students}
            onChange={(e) => setStudents(Number(e.target.value))}
            className="w-full mt-2 p-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600">Revenue</label>
          <input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="w-full mt-2 p-2 border rounded-lg"
          />
        </div>

        <button 
          onClick={handleSave}
          className="w-full bg-blue-600 text-white p-3 rounded-lg mt-4"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditCourse;

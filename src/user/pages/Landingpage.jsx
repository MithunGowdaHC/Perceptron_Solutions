import React, { useState, useEffect } from "react";

const LandingPageContent = ({ courseData, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    duration: "",
    category: "",
    level: "",
  });

  // Populate form data if courseData is provided (for editing)
  useEffect(() => {
    if (courseData) {
      setFormData({
        title: courseData.name || "",
        description: courseData.description || "",
        price: courseData.price || "",
        duration: courseData.duration || "",
        category: courseData.category || "",
        level: courseData.level || "",
      });
    }
  }, [courseData]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData); // Pass formData to the parent component for saving/updating
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">Course Details</h3>
        <p className="text-gray-500 mt-1">Create or edit your course landing page.</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Course Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter an attractive title for your course"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Course Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe what students will learn"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Course Price ($)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="99.99"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Duration (hours)
            </label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="10"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="">Select a category</option>
              <option value="programming">Programming</option>
              <option value="design">Design</option>
              <option value="business">Business</option>
              <option value="marketing">Marketing</option>
              <option value="personal-development">Personal Development</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Level
            </label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="">Select a level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {courseData ? "Update Course" : "Create Course"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default LandingPageContent;

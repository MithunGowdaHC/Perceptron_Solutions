import React, { useState } from "react";
import {
  Upload,
  Video,
  File,
  Plus,
  BookOpen,
  Layout,
  Settings2,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";

const SettingsContent = () => {
  const [thumbnail, setThumbnail] = useState(null);

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(URL.createObjectURL(file)); // Generate preview URL for the selected file
    }
  };

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">Course Settings</h3>
        <p className="text-gray-500 mt-1">Configure your course preferences</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Course Thumbnail
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
              <div className="space-y-4">
                <div className="flex justify-center">
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt="Thumbnail"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  ) : (
                    <ImageIcon className="w-12 h-12 text-gray-400" />
                  )}
                </div>
                <div>
                  <label className="text-blue-600 hover:text-blue-700 cursor-pointer">
                    Click to upload
                    <input
                      type="file"
                      accept="image/png, image/jpg, image/jpeg, image/gif"
                      onChange={handleFileUpload}
                      className="hidden" // Hide the default file input
                    />
                  </label>
                  <span className="text-gray-500"> or drag and drop</span>
                </div>
                <p className="text-sm text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          {/* Toggle settings for course preview, certificate, and achievements */}
          <div className="space-y-6 divide-y divide-gray-200">
            <div className="flex items-center justify-between pt-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700">Course Preview</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Allow students to preview course content
                </p>
              </div>
              <button className="w-12 h-6 rounded-full bg-gray-200 relative">
                <span className="absolute w-5 h-5 bg-white rounded-full shadow-sm left-0.5 top-0.5" />
              </button>
            </div>

            <div className="flex items-center justify-between pt-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700">Course Certificate</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Enable course completion certificate
                </p>
              </div>
              <button className="w-12 h-6 rounded-full bg-gray-200 relative">
                <span className="absolute w-5 h-5 bg-white rounded-full shadow-sm left-0.5 top-0.5" />
              </button>
            </div>

            <div className="flex items-center justify-between pt-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700">Course Achievements</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Enable achievements and badges
                </p>
              </div>
              <button className="w-12 h-6 rounded-full bg-gray-200 relative">
                <span className="absolute w-5 h-5 bg-white rounded-full shadow-sm left-0.5 top-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;

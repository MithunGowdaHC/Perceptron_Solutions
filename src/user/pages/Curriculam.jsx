import React, { useState } from "react";
import {
  Upload,
  Video,
  File,
  Plus,
  ChevronRight,
} from "lucide-react";

const CurriculumContent = () => {
  const [lectures, setLectures] = useState([
    { id: 1, title: "", file: null, freePreview: false },
  ]);

  const handleAddLecture = () => {
    setLectures([
      ...lectures,
      {
        id: lectures.length + 1,
        title: "",
        file: null,
        freePreview: false,
      },
    ]);
  };

  const handleTitleChange = (id, value) => {
    setLectures(
      lectures.map((lecture) =>
        lecture.id === id ? { ...lecture, title: value } : lecture
      )
    );
  };

  const handleFileChange = (id, file) => {
    setLectures(
      lectures.map((lecture) =>
        lecture.id === id ? { ...lecture, file } : lecture
      )
    );
  };

  const handleToggleFreePreview = (id) => {
    setLectures(
      lectures.map((lecture) =>
        lecture.id === id
          ? { ...lecture, freePreview: !lecture.freePreview }
          : lecture
      )
    );
  };

  const handleDeleteLecture = (id) => {
    if(window.confirm("Are you sure want to delete this lecture"))
    setLectures(lectures.filter((lecture) => lecture.id !== id));
  };

  const handleBulkUpload = (event) => {
    const files = Array.from(event.target.files);
    const newLectures = files.map((file, index) => ({
      id: lectures.length + index + 1,
      title: file.name.replace(/\.[^/.]+$/, ""),
      file: file,
      freePreview: false,
    }));
    setLectures([...lectures, ...newLectures]);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Course Curriculum</h3>
          <p className="text-gray-500 mt-1">Structure your course content</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="file"
              multiple
              onChange={handleBulkUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept="video/*,application/pdf"
            />
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2 text-gray-700 transition-colors">
              <Upload className="w-4 h-4" />
              Bulk Upload
            </button>
          </div>
          <button
            onClick={handleAddLecture}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Lecture
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {lectures.map((lecture, index) => (
          <div
            key={lecture.id}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex items-start gap-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex-shrink-0">
                {lecture.file?.type?.includes("video") ? (
                  <Video className="w-6 h-6" />
                ) : (
                  <File className="w-6 h-6" />
                )}
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md">
                    Lecture {index + 1}
                  </span>
                  <input
                    type="text"
                    value={lecture.title}
                    onChange={(e) =>
                      handleTitleChange(lecture.id, e.target.value)
                    }
                    placeholder="Enter lecture title"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <input
                      type="file"
                      onChange={(e) =>
                        handleFileChange(lecture.id, e.target.files[0])
                      }
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept="video/*,application/pdf"
                    />
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2 text-gray-700">
                      <Upload className="w-4 h-4" />
                      Choose File
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">
                    {lecture.file ? lecture.file.name : "No file chosen"}
                  </span>
                  <div className="ml-auto flex items-center gap-3">
                    <span className="text-sm text-gray-700">Free Preview</span>
                    <button
                      onClick={() => handleToggleFreePreview(lecture.id)}
                      className={`w-12 h-6 rounded-full relative transition-all duration-200 ${
                        lecture.freePreview ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`absolute w-5 h-5 bg-white rounded-full shadow-sm top-0.5 transition-all duration-200 ${
                          lecture.freePreview ? "right-0.5" : "left-0.5"
                        }`}
                      />
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <button
                    onClick={() => handleDeleteLecture(lecture.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete Lecture
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurriculumContent;

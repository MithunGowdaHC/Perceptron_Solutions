import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { PlayCircle, Clock, Award, BookOpen, Users } from "lucide-react";

import TextHoverEffect from "../components/ui/text-hover-effect";
const Course = () => {
  const { courseId } = useParams();
  const { courses } = useContext(AppContext);
  const [courseData, setCourseData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const fetchCourseData = () => {
    const course = courses.find((course) => course.id === Number(courseId));
    if (course) {
      setCourseData(course);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, [courses, courseId]);

  if (!courseData) {
    return <div className="opacity-0"></div>;
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section with Full-width Video */}
      <div className="relative w-full bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Course Title and Info */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 pt-12 lg:pt-16">
          {/* Course Stats */}
          <div className="flex flex-wrap gap-6 mb-8 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>20+ Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>12 Modules</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>1000+ Students Enrolled</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Certificate Included</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            <div className="h-[7rem] flex items-center justify-center">
              {<TextHoverEffect text={courseData.title} />}
            </div>
          </h1>

          <div className="flex flex-wrap gap-3 mb-8">
            {courseData.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-1.5 bg-white/10 backdrop-blur rounded-full text-white text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Instructor and Price Section */}
          <div className="flex flex-wrap items-center gap-6 md:gap-12 mb-12 text-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-lg font-medium text-purple-300">
                  {courseData.instructors.split("&")[0].trim()[0]}
                </span>
              </div>
              <div>
                <p className="font-medium">{courseData.instructors}</p>
                <p className="text-sm text-gray-300">Lead Instructor</p>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">
                {courseData.isPaid ? `₹${courseData.price}` : "Free"}
              </span>
              {courseData.isPaid && (
                <span className="text-gray-300 line-through">
                  ₹{courseData.price + 2000}
                </span>
              )}
            </div>
          </div>

          {/* Video Player */}
          <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl mb-8 pb-1">
            {!isPlaying ? (
              <div
                className="relative h-full cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src={courseData.thumbnail}
                  alt={courseData.title}
                  className="w-full h-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="transform transition-all group-hover:scale-110">
                    <PlayCircle className="w-20 h-20 md:w-24 md:h-24 text-white opacity-90 group-hover:opacity-100" />
                    <p className="text-center text-white mt-4 font-medium">
                      Preview this course
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                src={`${courseData.videoLink}?autoplay=1`}
                title={courseData.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Course Information */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                About This Course
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {courseData.description}
              </p>
            </div>

            {/* What You'll Learn */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Build professional real-world projects",
                  "Master industry-standard tools and workflows",
                  "Learn best practices and design patterns",
                  "Get hands-on practical experience",
                  "Understand advanced concepts in depth",
                  "Receive personalized feedback",
                  "Join an active learning community",
                  "Earn a verifiable certificate",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors"
                  >
                    <div className="text-purple-600 mt-1">✓</div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Requirements */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Course Requirements
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-purple-600">•</span>
                  Basic understanding of programming concepts
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-purple-600">•</span>A computer with
                  internet access
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-purple-600">•</span>
                  Enthusiasm to learn and practice
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Course Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-2xl border shadow-lg p-6 space-y-6">
              <button className="w-full py-4 px-6 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors text-lg">
                {courseData.isPaid ? "Enroll Now" : "Start Learning"}
              </button>

              <div className="space-y-4 pt-4">
                {[
                  "Full lifetime access",
                  "Mobile and desktop access",
                  "Certificate of completion",
                  "Premium support",
                  "Regular updates",
                  "Downloadable resources",
                  "Live Q&A sessions",
                  "Community access",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="text-purple-600">✓</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Money-back guarantee */}
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500">🛡️</span>
                  <span className="font-medium">
                    30-day money-back guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;

import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import BackgroundBeamsWithCollision from "../components/ui/background-beams-with-collision";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const AllCourses = () => {
  const { courses } = useContext(AppContext);
  const [filter, setFilter] = useState("All");

  const filteredCourses = courses.filter((course) =>
    filter === "All"
      ? true
      : filter === "Premium"
      ? course.isPaid
      : !course.isPaid
  );
  const words = `Straight to Action!`;
  // const words2 = `The best time to start building wealth was yesterday. The next best time is now.`;

  return (
    <>
      <div className="w-full   h-screen  bg-white    text-black">
        {/* Hero Section */}
        {/* <BackgroundBeamsWithCollision>
          <section className="  px-20  flex flex-col justify-center   text-black ">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-wide text-indigo-600">
              Empowering Your Future
            </h1>
            <p className="text-lg sm:text-xl mt-4  text-gray-700">
              <TextGenerateEffect words={words} />
            </p>
            <p className="text-sm sm:text-base mt-2 text-gray-600 italic">
            The best time to start building wealth was yesterday. The next best time is now.
            </p>
          </section>
        </BackgroundBeamsWithCollision> */}

        {/* Courses Section */}
        {/* <h1>I Love YOU</h1> */}
        <section className="py-12 px-20 sm:px-6 lg:px-8">
          <div className=" px-20">
            <div className="flex flex-col sm:flex-row  justify-between items-center mb-8 bg-gray-50 mx-[18px] rounded-lg py-4  sm:px-6 shadow-md  w-[97%]">
              <h2 className="text-xl sm:text-2xl   font-medium text-gray-900 mb-4 sm:mb-0">
                Courses That Shape Your Success
              </h2>
              <div className="flex gap-2">
                {["All", "Premium", "Free"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilter(type)}
                    className={`px-4 py-1  rounded-md font-medium shadow-sm transition-all duration-300 ${
                      filter === type
                        ? "bg-black text-white"
                        : "bg-gray-200 text-gray-700"
                    } hover:bg-gray-800 hover:text-white`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 px-20 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                thumbnail={course.thumbnail}
                title={course.title}
                description={course.description}
                tags={course.tags}
                instructors={course.instructors}
                price={course.price}
                type={course.isPaid ? "Premium" : "Free"}
              />
            ))}
          </div>
        </section>
      </div>
      
    </>
  );
};

export default AllCourses;

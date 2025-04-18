import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./user/pages/Home";
import About from "./user/pages/About";
import Contact from "./user/pages/Contact";
import Login from "./user/pages/Login";
import AllCourses from "./user/pages/AllCourses";
import Navbar from "./user/components/Navbar";
import Course from "./user/pages/Course";

const App = () => {
  return (
    <div>
      <Navbar />
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course/:courseId" element={<Course />} />
        <Route path="/all-courses" element={<AllCourses />} />
      </Routes>
      </div>
      

    </div>

  );
};

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "./admin/components/Sidebar";
import Overview from "./admin/pages/Overview";
import Home from "./user/pages/Home";
import About from "./user/pages/About";
import Contact from "./user/pages/Contact";
import Login from "./user/pages/login";
import AllCourses from "./user/pages/AllCourses";
import Navbar from "./user/components/Navbar";
import Course from "./user/pages/Course";
import Footer from "./user/components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
    <div className=" pt-14">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course/:courseId" element={<Course />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/all-courses" element={<AllCourses />} />
      </Routes>
      </div>
      

    </div>

  );
};

export default App;

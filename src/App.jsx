import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Learner/Home";
// import Courses from "./pages/Learner/Courses";
import About from "./pages/Learner/About";
import Contact from "./pages/Learner/Contact";
import Login from "./pages/Learner/Login";

import Navbar from "./components/Navbar"
import Overview from "./pages/Tutor/Overview";




const App = () => {
  return (
    <div >
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        

      </Routes>
    </div>
  );
};

export default App;

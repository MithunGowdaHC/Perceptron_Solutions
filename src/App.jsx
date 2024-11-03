import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";

import Navbar from "./components/Navbar"

import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";


const App = () => {
  return (
    <div >
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "./admin/components/Sidebar";
import Overview from "./admin/pages/Overview";
import Home from "./user/pages/Home";
import About from "./user/pages/About";
import Contact from "./user/pages/Contact";
import Login from "./user/pages/login";

import Navbar from "./user/components/Navbar";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        <Route path="/overview" element={<Overview />} />
      </Routes>
    </div>
  );
};

export default App;

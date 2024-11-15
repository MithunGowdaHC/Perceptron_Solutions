// Admin.jsx
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./user/pages/Dashboard";
import Sidebar from "./user/components/Sidebar";
import Profile from "./user/pages/Profile";
import Settings from "./user/pages/Settings";
import CreateCourse from "./user/pages/CreateCourse";

const Admin = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full min-h-screen overflow-hidden">
      <Sidebar />
      {/* Main content area */}
      <div className="flex-grow w-full sm:ml-64 p-6 sm:p-8">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/create-new-course" element={<CreateCourse />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
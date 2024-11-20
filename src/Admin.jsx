
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./admin/pages/Dashboard";
import Profile from "./admin/pages/Profile";
import Settings from "./admin/pages/Settings";
import CreateCourse from "./admin/pages/CreateCourse";
import EditCourse from "./admin/pages/EditCourse";
import LandingPageContent from "./user/pages/Landingpage";
import Sidebar from "./admin/components/Sidebar";




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
          <Route path="/edit-course/:courseId" element={<EditCourse />} />
          <Route path="/create-new-course/landingpage" element={<LandingPageContent />} />
          
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
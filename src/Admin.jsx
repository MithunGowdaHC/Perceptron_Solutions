
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./user/pages/Dashboard";
import Sidebar from "./user/components/Sidebar";
import Profile from "./user/pages/Profile";
import Settings from "./user/pages/Settings";

const Admin = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <div className="w-full lg:w-1/5">
        <Sidebar />
      </div>
      <div className="w-full lg:w-4/5">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
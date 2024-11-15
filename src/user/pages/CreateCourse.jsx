import React, { useState } from "react";
import {
  Upload,
  Video,
  File,
  Plus,
  BookOpen,
  Layout,
  Settings2,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";
import CurriculumContent from "./Curriculam";
import LandingPageContent from "./Landingpage";
import SettingsContent from "./Settings";

const CreateCourse = () => {
  const [activeTab, setActiveTab] = useState("Curriculum");

  const TabIcon = ({ tab }) => {
    switch (tab) {
      case "Curriculum":
        return <BookOpen className="w-4 h-4" />;
      case "Course Landing Page":
        return <Layout className="w-4 h-4" />;
      case "Settings":
        return <Settings2 className="w-4 h-4" />;
      default:
        return null;
    }
  };

  

  

 
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Create Course
              </h2>
              <p className="text-gray-500 mt-1">
                Design your course structure and content
              </p>
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Publish Course
            </button>
          </div>

          <div className="p-6">
            <div className="border-b mb-6">
              <nav className="flex gap-6">
                {["Curriculum", "Course Landing Page", "Settings"].map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex items-center gap-2 pb-4 px-2 transition-all ${
                        tab === activeTab
                          ? "border-blue-600 text-blue-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <TabIcon tab={tab} />
                      {tab}
                    </button>
                  )
                )}
              </nav>
            </div>

            {/* Render tab content based on activeTab */}
            <div>
              {activeTab === "Curriculum" && <CurriculumContent />}
              {activeTab === "Course Landing Page" && <LandingPageContent />}
              {activeTab === "Settings" && <SettingsContent />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;

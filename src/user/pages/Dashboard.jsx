import React, { useState } from "react";
import { DollarSign, Star, Users, TrendingUp } from "lucide-react";
import {
 LineChart,
 Line,
 XAxis,
 YAxis,
 CartesianGrid,
 Tooltip,
 ResponsiveContainer,
} from "recharts";
import { dataDaily, dataMonthly, dataYearly, topCourses } from "../../TestData/DashboardData";

const Dashboard = () => {
 const [showRevenue, setShowRevenue] = useState(true);
 const [timeframe, setTimeframe] = useState("daily");

 const getData = () => {
   switch (timeframe) {
     case "daily":
       return dataDaily;
     case "monthly":
       return dataMonthly;
     case "yearly":
       return dataYearly;
     default:
       return dataDaily;
   }
 };

 const monthlyRevenue = 12500;
 const avgCompletion = 80;
 const avgRating = 4.5;
 const activeStudents = 320;

 return (
   <div className="p-6 sm:p-8 space-y-8 min-h-screen bg-gray-50">
     <header className="text-center space-y-2">
       <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">Tutor Dashboard</h1>
       <p className="text-sm sm:text-base text-gray-500">
         Overview of course performance, student engagement, and revenue insights
       </p>
     </header>

     <section className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
       <Card
         icon={<DollarSign className="h-8 w-8 text-green-600" />}
         title="Monthly Revenue"
         value={`$${monthlyRevenue.toLocaleString()}`}
       />
       <Card
         icon={<Star className="h-8 w-8 text-yellow-500" />}
         title="Average Rating"
         value={`${avgRating.toFixed(1)} ★`}
       />
       <Card
         icon={<Users className="h-8 w-8 text-blue-600" />}
         title="Active Students"
         value={activeStudents.toLocaleString()}
       />
       <Card
         icon={<TrendingUp className="h-8 w-8 text-purple-600" />}
         title="Avg. Completion"
         value={`${avgCompletion}%`}
       />
     </section>

     <section className="bg-white shadow-xl rounded-lg p-6 sm:p-8">
       <h2 className="text-2xl font-semibold mb-4 text-gray-800">Top Performing Courses</h2>
       <div className="space-y-4">
         {topCourses.map((course, index) => (
           <CourseCard key={index} course={course} />
         ))}
       </div>
     </section>

     <section className="bg-white shadow-xl rounded-lg p-6 sm:p-8">
       <h2 className="text-2xl font-semibold mb-4 text-gray-800">Engagement Trends</h2>
       <div className="flex justify-center mb-6 space-x-4">
         <TimeframeButton
           label="Daily"
           active={timeframe === "daily"}
           onClick={() => setTimeframe("daily")}
         />
         <TimeframeButton
           label="Monthly"
           active={timeframe === "monthly"}
           onClick={() => setTimeframe("monthly")}
         />
         <TimeframeButton
           label="Yearly"
           active={timeframe === "yearly"}
           onClick={() => setTimeframe("yearly")}
         />
       </div>
       <div className="flex justify-center mb-6">
         <ToggleButton
           label="View Revenue"
           active={showRevenue}
           onClick={() => setShowRevenue(!showRevenue)}
         />
       </div>
       <ResponsiveContainer width="100%" height={300}>
         <LineChart data={getData()}>
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="date" />
           <YAxis />
           <Tooltip />
           <Line
             type="monotone"
             dataKey="users"
             stroke="#3b82f6"
             strokeWidth={2}
             dot={{ r: 5 }}
             name="Students"
           />
           {showRevenue && (
             <Line
               type="monotone"
               dataKey="revenue"
               stroke="#34d399"
               strokeWidth={2}
               dot={{ r: 5 }}
               name="Revenue"
             />
           )}
         </LineChart>
       </ResponsiveContainer>
     </section>

     <section className="bg-white shadow-xl rounded-lg p-6 sm:p-8">
       <h2 className="text-2xl font-semibold mb-4 text-gray-800">Student Feedback</h2>
       <div className="space-y-4">
         <FeedbackCard
           student="John Doe"
           course="Options Mastery"
           feedback="Great insights on options trading. Highly recommend!"
           rating={5}
         />
         <FeedbackCard
           student="Jane Smith"
           course="Futures Fundamentals"
           feedback="Very comprehensive but could use more examples."
           rating={4}
         />
         <FeedbackCard
           student="Sam Lee"
           course="Advanced Trading Strategies"
           feedback="Loved the strategies discussed. Useful for real trades!"
           rating={5}
         />
       </div>
     </section>
   </div>
 );
};

const Card = ({ icon, title, value }) => (
 <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
   <div className="bg-blue-100 p-3 rounded-full">{icon}</div>
   <div className="ml-5">
     <p className="text-sm font-medium text-gray-600">{title}</p>
     <h3 className="text-xl font-bold text-gray-900">{value}</h3>
   </div>
 </div>
);

const CourseCard = ({ course }) => (
 <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors duration-200">
   <div className="flex items-center justify-between">
     <div>
       <h4 className="font-semibold">{course.name}</h4>
       <p className="text-sm text-gray-500">{course.students} active students</p>
     </div>
     <div className="flex items-center space-x-2 text-yellow-500">
       <span>★</span>
       <span className="font-medium">{course.rating}</span>
     </div>
   </div>
 </div>
);

const TimeframeButton = ({ label, active, onClick }) => (
 <button
   onClick={onClick}
   className={`px-4 py-2 rounded-lg ${
     active
       ? "bg-blue-600 text-white hover:bg-blue-700"
       : "bg-gray-200 text-gray-700 hover:bg-gray-300"
   }`}
 >
   {label}
 </button>
);

const ToggleButton = ({ label, active, onClick }) => (
 <button
   onClick={onClick}
   className={`px-4 py-2 rounded-lg ${
     active
       ? "bg-blue-600 text-white hover:bg-blue-700"
       : "bg-gray-200 text-gray-700 hover:bg-gray-300"
   }`}
 >
   {label}
 </button>
);

const FeedbackCard = ({ student, course, feedback, rating }) => (
 <div className="bg-gray-100 p-4 rounded-lg shadow-md">
   <div className="flex justify-between items-center">
     <div>
       <p className="font-semibold text-gray-900">{student}</p>
       <p className="text-sm text-gray-500">{course}</p>
     </div>
     <p className="text-yellow-500 font-semibold">{"★".repeat(rating)}</p>
   </div>
   <p className="text-gray-700 mt-2">{feedback}</p>
 </div>
);

export default Dashboard;
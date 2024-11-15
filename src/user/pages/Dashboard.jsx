import React,{useState} from "react";
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

// Engagement data for the line chart

const Dashboard = () => {
    const [timeframe , setTimeframe] = useState("dataDaily")
    const getData = () => {
      switch(timeframe){
        case "daily":
          return dataDaily;
          case "monthly":
            return dataMonthly;
            case dataYearly:
              return dataYearly;
              default:
                return dataDaily;
      }
    }
  // Mock data to represent tutor insights
  const monthlyRevenue = 12500;

  const avgCompletion = 80;
  const avgRating = 4.5;
  const activeStudents = 320;

  
  return (
    <div className="p-6 sm:p-8 space-y-8 min-h-screen">
      <header className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
          Tutor Dashboard
        </h1>
        <p className="text-sm sm:text-base text-gray-500">
          Overview of course performance, student engagement, and revenue
          insights
        </p>
      </header>

      {/* Analytics Cards */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
        <Card
          icon={<DollarSign className="h-8 w-8 text-green-700" />}
          title="Monthly Revenue"
          value={`${monthlyRevenue}`}
        />
        <Card
          icon={<Star className="h-8 w-8 text-yellow-500" />}
          title="Average Rating"
          value={`${avgRating} ★`}
        />
        <Card
          icon={<Users className="h-8 w-8 text-blue-500" />}
          title="Active Students Today"
          value={activeStudents}
        />
        <Card
          icon={<TrendingUp className="h-8 w-8 text-purple-500" />}
          title="Average Completion Rate"
          value={`${avgCompletion}%`}
        />
      </section>

      
      {/* Engagement Trends Section */}
      <section className="p-6 sm:p-8 bg-white shadow-xl rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Engagement Trends</h2>

        {/* Timeframe Toggle Buttons */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setTimeframe("daily")}
            className={`px-4 py-2 mx-2 rounded-lg ${
              timeframe === "daily" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setTimeframe("monthly")}
            className={`px-4 py-2 mx-2 rounded-lg ${
              timeframe === "monthly" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setTimeframe("yearly")}
            className={`px-4 py-2 mx-2 rounded-lg ${
              timeframe === "yearly" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Yearly
          </button>
        </div>

        {/* Graph */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={getData()} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} dot={{ r: 5  }} />
          </LineChart>
        </ResponsiveContainer>
      </section>
      {/* Course Performance */}
      <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Top Performing Courses</h2>
        <div className="space-y-4">
          {topCourses.map((course, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
              <div>
                <h4 className="font-semibold">{course.name}</h4>
                <p className="text-sm text-gray-500">{course.students} active students</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500">★</span>
                <span className="font-medium">{course.rating}</span>
              </div>
            </div>
          ))}
        </div>
        </div>


      {/* Recent Feedback */}
      <section className="p-6 sm:p-8 bg-white shadow-xl rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Student Feedback
        </h2>
        <ul className="space-y-4">
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
        </ul>
      </section>
    </div>
  );
};

// Reusable Card component for stats
const Card = ({ icon, title, value }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
    <div className="bg-blue-200 p-3 rounded-full shadow-md">{icon}</div>
    <div className="ml-5">
      <p className="text-sm font-medium text-gray-600">{title}</p>
      <h3 className="text-xl font-bold text-gray-900">{value}</h3>
    </div>
  </div>
);

// FeedbackCard component for displaying student feedback
const FeedbackCard = ({ student, course, feedback, rating }) => (
  <li className="bg-gray-50 p-4 rounded-lg shadow-md">
    <div className="flex justify-between items-center">
      <div>
        <p className="font-semibold text-gray-900">{student}</p>
        <p className="text-sm text-gray-500">{course}</p>
      </div>
      <p className="text-yellow-500 font-semibold">{"★".repeat(rating)}</p>
    </div>
    <p className="text-gray-700 mt-2">{feedback}</p>
  </li>
);

export default Dashboard;

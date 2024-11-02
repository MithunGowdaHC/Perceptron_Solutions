import React from 'react';

const Details = () => {
  const details = [
    {
      title: "F&O Basics & Strategy",
      description: "Your Gateway to Futures & Options Trading - Perfect for Beginners",
      details: [
        "20+ Hours Pre-recorded Content",
        "Basic to Advanced Concepts",
        "Free Demo Videos Available",
        "Lifetime Access"
      ],
      type: "Beginner Friendly",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Advanced Options Trading",
      description: "Master Complex Options Strategies & Risk Management",
      details: [
        "15+ Hours In-depth Content",
        "Real Market Case Studies",
        "Strategy Building Templates",
        "Free Strategy Videos"
      ],
      type: "Advanced Level",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Pro Trading Blueprint",
      description: "Complete Trading System Development Course",
      details: [
        "25+ Hours Expert Content",
        "Ready-to-use Strategies",
        "Free Market Analysis Videos",
        "Trading Psychology"
      ],
      type: "Professional Level",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {details.map((detail, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={detail.image}
                alt={detail.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {detail.type}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {detail.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {detail.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {detail.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <svg 
                      className="w-4 h-4 mr-2 text-green-500" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="mt-6 flex gap-4">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Enroll Now
                </button>
                <button className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                  Free Preview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;

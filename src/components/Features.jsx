

import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Learn Technical Analysis",
      description: "Complete F&O Course With Proven Technical Analysis Patterns & Strategies",
      image: "https://img.freepik.com/premium-photo/business-man-working-hard-stock-financial-trade-market-diagram_925707-2349.jpg?semt=ais_siglip"
    },
    {
      title: "Expert Community",
      description: "Join Our Community of Professional Traders & Market Analysts",
      image: "https://img.freepik.com/premium-photo/business-team-cartoon-characters-meeting-talking-front-office-whiteboard-with-charts-diagrams-white-background-3d-rendering_476612-19521.jpg?semt=ais_siglip"
    },
    {
      title: "Trade Professionally",
      description: "Start Your Journey Towards Becoming a Professional Trader",
      image: "https://img.freepik.com/premium-photo/3d-educational-male-teacher-man-is-holding-board-showing-graph-income-growth_463012-2218.jpg?semt=ais_siglip"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-gray-50/80 rounded-lg p-6"
          >
            {/* Image */}
            <div className="mb-4 h-48 w-full">
              <img
                src={feature.image}
                alt={feature.title}
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            
            {/* Text Content */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
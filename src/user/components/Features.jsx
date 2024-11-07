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
    <div className="w-full bg-white mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Decorative background blur */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-violet-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl -z-10" />
              
              {/* Image */}
              <div className="mb-4 sm:mb-6 h-40 sm:h-48 w-full overflow-hidden rounded-lg sm:rounded-xl">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
           
              {/* Text Content */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
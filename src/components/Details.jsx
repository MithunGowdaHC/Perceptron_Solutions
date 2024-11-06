// const Details = () => {
//     const details = [
//       {
//         title: "F&O Basics & Strategy",
//         description: "Your Gateway to Futures & Options Trading - Perfect for Beginners",
//         details: [
//           "20+ Hours Pre-recorded Content",
//           "Basic to Advanced Concepts",
//           "Free Demo Videos Available",
//           "Lifetime Access"
//         ],
//         type: "Beginner Friendly",
//         image: "https://img.freepik.com/premium-photo/business-man-working-hard-stock-financial-trade-market-diagram_925707-2349.jpg?semt=ais_siglip"
//       },
//       {
//         title: "Advanced Options Trading",
//         description: "Master Complex Options Strategies & Risk Management",
//         details: [
//           "15+ Hours In-depth Content",
//           "Real Market Case Studies",
//           "Strategy Building Templates",
//           "Free Strategy Videos"
//         ],
//         type: "Advanced Level",
//         image: "https://img.freepik.com/premium-photo/business-man-working-hard-stock-financial-trade-market-diagram_925707-2349.jpg?semt=ais_siglip"
//       },
//       {
//         title: "Pro Trading Blueprint",
//         description: "Complete Trading System Development Course Complete Trading System Development Course",
//         details: [
//           "25+ Hours Expert Content",
//           "Ready-to-use Strategies",
//           "Free Market Analysis Videos",
//           "Trading Psychology"
//         ],
//         type: "Professional Level",
//         image: "https://img.freepik.com/premium-photo/business-man-working-hard-stock-financial-trade-market-diagram_925707-2349.jpg?semt=ais_siglip"
//       }
//     ];
  
//     return (
//       <div className="w-full bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50 py-8 sm:py-12 md:py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
//             {details.map((detail, index) => (
//               <div key={index} className="group bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
//                 {/* Image Container */}
//                 <div className="relative h-40 sm:h-48 overflow-hidden">
//                   <img
//                     src={detail.image}
//                     alt={detail.title}
//                     className="w-full  h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">
//                     {detail.type}
//                   </div>
//                 </div>
  
//                 {/* Content Container */}
//                 <div className="p-4 sm:p-6">
//                   <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">
//                     {detail.title}
//                   </h3>
//                   <p className="text-sm sm:text-base text-gray-600 mb-4">
//                     {detail.description}
//                   </p>
  
//                   {/* Features List */}
//                   <ul className="space-y-2 sm:space-y-3">
//                     {detail.details.map((item, idx) => (
//                       <li key={idx} className="flex items-center text-sm sm:text-base text-gray-700">
//                         <div className="mr-2 sm:mr-3 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center">
//                           <svg 
//                             className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" 
//                             fill="none" 
//                             strokeLinecap="round" 
//                             strokeLinejoin="round" 
//                             strokeWidth="2" 
//                             viewBox="0 0 24 24" 
//                             stroke="currentColor"
//                           >
//                             <path d="M5 13l4 4L19 7"></path>
//                           </svg>
//                         </div>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
  
//                   {/* Action Buttons */}
//                   <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
//                     <button className="w-full sm:flex-1 bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-2 sm:py-2.5 px-4 rounded-lg sm:rounded-xl hover:from-indigo-700 hover:to-violet-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
//                       Enroll Now
//                     </button>
//                     <button className="w-full sm:flex-1 border-2 border-indigo-100 text-gray-800 py-2 sm:py-2.5 px-4 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
//                       Free Preview
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   export default Details

import React, { useRef, useEffect } from 'react';
import './Details.css';

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
      image: "https://img.freepik.com/premium-photo/business-man-working-hard-stock-financial-trade-market-diagram_925707-2349.jpg?semt=ais_siglip"
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
      image: "https://img.freepik.com/premium-photo/business-man-working-hard-stock-financial-trade-market-diagram_925707-2349.jpg?semt=ais_siglip"
    },
    {
      title: "Pro Trading Blueprint",
      description: "Complete Trading System Development Course Complete Trading System Development Course",
      details: [
        "25+ Hours Expert Content",
        "Ready-to-use Strategies",
        "Free Market Analysis Videos",
        "Trading Psychology"
      ],
      type: "Professional Level",
      image: "https://img.freepik.com/premium-photo/business-man-working-hard-stock-financial-trade-market-diagram_925707-2349.jpg?semt=ais_siglip"
    }
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });
  }, []);

  return (
    <div className="w-full   bg-white mx-auto px-4  py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {details.map((detail, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="card opacity-0 transform translate-y-10 transition-opacity duration-700"
            >
              <div className="group bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={detail.image}
                    alt={detail.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">
                    {detail.type}
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    {detail.description}
                  </p>

                  <ul className="space-y-2 sm:space-y-3">
                    {detail.details.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm sm:text-base text-gray-700">
                        <div className="mr-2 sm:mr-3 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center">
                          <svg
                            className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button className="w-full sm:flex-1 bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-2 sm:py-2.5 px-4 rounded-lg sm:rounded-xl hover:from-indigo-700 hover:to-violet-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                      Enroll Now
                    </button>
                    <button className="w-full sm:flex-1 border-2 border-indigo-100 text-gray-800 py-2 sm:py-2.5 px-4 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                      Free Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;

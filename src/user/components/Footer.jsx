// import React from "react";
// import { useState } from "react";

// const Footer = () => { const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle email submission
//     console.log('Email submitted:', email);
//     setEmail('');
//   };
//   return (
//     <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8    ">
//       <div className="text-center mb-12">
//         <h2 className="text-2xl text-gray-700 mb-2">JOIN ME</h2>
//         <p className="text-gray-600 mb-6">Be the first to hear about new courses!</p>
        
//         <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email here*"
//             className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
//             required
//           />
//           <button
//             type="submit"
//             className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
//           >
//             Join
//           </button>
//         </form>
//       </div>
//       <div className=" flex flex-col sm:grid  grid-cols-[3fr_1fr_1fr] gap-14  my-10  text-sm ">
      
        
//         <div>
//             <p className=" text-xl font-medium mb-5">COMPANY</p>
//             <ul className=" flex flex-col gap-1 text-gray-600">
//                 <li>Home</li>
//                 <li>About us</li>
//                 <li>Delivery</li>
//                 <li>Privacy Policy</li>
//             </ul>
//         </div>
//         <div>
//             <p className=" text-xl  font-medium mb-5">GET IN TOUCH</p>
//             <ul className=" flex flex-col gap-1 text-gray-600">
//                 <li>+1-5454-5845</li>
//                 <li>contact@trenduraforyou.com</li>

//             </ul>
//         </div>
        
//       </div>
//       <div>
//         <hr />
//         <div className="text-center text-sm text-gray-600">
//         © {new Date().getFullYear()} BY PAVAN MIRLA
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <>
    <div className="block w-full h-[0.1rem] bg-red" ></div>
    
    <footer className="  mx-auto px-4 py-12">
      {/* Newsletter Section */}
      <div className="text-center  mb-12">
        <h2 className="text-2xl  text-gray-700 mb-2">JOIN ME</h2>
        <p className="text-gray-600 mb-6">Be the first to hear about new courses!</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email here*"
            className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-black hover:bg-gray-800 transition-colors"
          >
            Join
          </button>
        </form>
      </div>

      {/* Navigation Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {/* About Column */}
        <div className="text-center">
          <h3 className="font-medium text-gray-700 mb-4">ABOUT</h3>
          <ul className="space-y-2">
            <li>
              <a href="/my-story" className="text-gray-600 hover:text-gray-800">MY STORY</a>
            </li>
            <li>
              <a href="/blog" className="text-gray-600 hover:text-gray-800">BLOG</a>
            </li>
            <li>
              <a href="/stockists" className="text-gray-600 hover:text-gray-800">STOCKISTS</a>
            </li>
          </ul>
        </div>

        {/* Help Column */}
        <div className="text-center">
          <h3 className="font-medium text-gray-700 mb-4">HELP</h3>
          <ul className="space-y-2">
            <li>
              <a href="/contact" className="text-gray-600 hover:text-gray-800">CONTACT</a>
            </li>
            <li>
              <a href="/wholesale" className="text-gray-600 hover:text-gray-800">WHOLESALE</a>
            </li>
          </ul>
        </div>

        {/* About Text Section */}
        <div className="col-span-2 text-center md:text-left">
          <p className="text-gray-600 text-sm leading-relaxed">
          Hello. My name is Pavan Mirla. I am a Machine Learning Data Scientist with Investment research and Quantitative analysis experience at large Canadian Asset Management Firms.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-600">
        © {new Date().getFullYear()} BY PAVAN MIRLA
      </div>
    </footer>
    </>
  );
};

export default Footer;
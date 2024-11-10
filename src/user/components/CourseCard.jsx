import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const CourseCard = ({
  id,
  thumbnail,
  title,
  description,
  tags = [],
  instructors,
  price,
  type = "Premium",
  

}) => {
  return (
    <Link to={`/course/${id}`} className="block h-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group    rounded-xl shadow-lg  mx-auto w-96 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] h-full flex flex-col"
      >
        {/* Image Section with Label */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
            {type}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-base text-gray-600 mb-4 line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Spacer to push the bottom content down */}
          <div className="flex-grow"></div>

          {/* Instructor and Price */}
          <div className="flex justify-between items-center border-t border-gray-100 pt-4 mb-4">
            <div className="text-sm text-gray-600">
              By <span className="font-semibold text-gray-800">{instructors}</span>
            </div>
            <div className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              ₹{price?.toLocaleString()}
            </div>
          </div>

          {/* Buy Now Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-2.5 px-6 rounded-xl hover:from-indigo-700 hover:to-violet-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-base font-medium"
          >
            {type === "Premium" ?  "Buy Now" : "Watch Now"}
          </motion.button>
        </div>
      </motion.div>
    </Link>
  );
};

export default CourseCard;
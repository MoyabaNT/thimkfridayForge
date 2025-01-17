import React from 'react';
import Logo from '../Assets/Purple.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900">
      {/* Logo Section */}
      <div className="flex flex-col items-center justify-center w-full m-8 p-4">
        <img 
          src={Logo} 
          alt="ThinkFriday Logo" 
          className="w-72 h-44 object-center shadow-lg rounded-md"
        />
      </div>
      
      {/* Content Section */}
      <div className="mt-8 text-center text-white max-w-2xl px-6">
        <h1 className="text-2xl font-bold mb-4 ">
          Elevate Your Business with ThinkFriday
        </h1>
        <p className="text-md md:text-base leading-relaxed italic">
          Discover how ThinkFriday, a premier <span className='text-purple-700 font-bold'>BBBEE </span> compliance company, can 
          elevate your business success! Unleash the power of our tailored 
          solutions designed to optimize your <span className='text-purple-700 font-bold'>BBBEE </span> compliance journey.
        </p>
        <p className="text-md md:text-base mt-4 leading-relaxed italic">
          Join countless businesses already benefiting from our expertise. 
          Explore our services today and pave the way for sustainable growth!
        </p>
        <Link to="/AboutUs">
          <button className="px-6 py-3 mt-12 text-sm md:text-base text-black bg-purple-800 rounded-md shadow-md hover:bg-blue-700 transition-all duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

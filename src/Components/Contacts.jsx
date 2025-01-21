import React from 'react';
import Sidebar from './SideBar';
import Logo from '../Assets/Purple.png';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <div className="bg-gradient-to-b from-gray-300 to-gray-200 min-h-screen flex flex-col">
      {/* Sidebar */}
      <div className='text-purple-700'>
        <Sidebar />
        <div className="absolute top-0 right-0 p-4">
          <Link to='/HomePage'>
          <img 
            src={Logo} 
            alt="Logo" 
            className="w-24"
          />

          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center justify-center p-6 gap-14">
        {/* Form Section */}
        <form
          method="POST"
          className="flex flex-col w-full max-w-sm md:max-w-md bg-gray-300 p-6 shadow-lg rounded-lg"
        >
          <h2 className="text-purple-700 text-xl font-semibold mb-4">Contact Us</h2>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 bg-gray-200 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="p-2 bg-gray-200 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-700"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your message"
            className="p-2 bg-gray-200 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-700"
          ></textarea>
          <button className="text-white bg-purple-700 px-6 py-2 rounded-md hover:bg-purple-600 transition-all">
            Let's Talk
          </button>
        </form>

        {/* Contact Information */}
        <div className="text-center md:text-left">
          <h3 className="text-purple-700 text-lg font-semibold">Our Address</h3>
          <p className="text-gray-600 mb-4">Unit 8, Northlands Retail Park, 210 Epsom Ave, Hoogland, Northriding, 2169</p>
          <h3 className="text-purple-700 text-lg font-semibold">Email Us</h3>
          <p className="text-gray-600 mb-4">Tariq@thinkfriday.co.za</p>
          <h3 className="text-purple-700 text-lg font-semibold">Call Us</h3>
          <p className="text-gray-600">+27 10 880 3795</p>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Contacts;

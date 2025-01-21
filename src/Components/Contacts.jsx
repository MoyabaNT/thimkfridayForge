import React from 'react';
import Sidebar from './SideBar';
import Logo from '../Assets/Purple.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Contacts = () => {
  return (
    <div>

    <div className="bg-gradient-to-b from-gray-300 to-gray-100 min-h-screen flex flex-col">
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
      <h1 className='text-center font-bold text-purple-700 text-2xl'>Contact Us</h1>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center justify-center p-6 gap-14">
        {/* Form Section */}
        <form
         action="https://getform.io/f/azyyvogb"
          method="POST"
          className="flex flex-col w-full max-w-sm md:max-w-md bg-gray-300 p-6 shadow-lg rounded-lg"
        >
          <h2 className="text-purple-700 text-xl font-semibold mb-4">Hello :)</h2>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 bg-gray-200 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-700"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="p-2 bg-gray-200 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-700"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your message"
            className="p-2 bg-gray-200 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-700"
            required
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
  {/* Map Section  */}
  <div>
    <h1 className='text-purple-700 text-center font-bold text-2xl'>Find Us</h1>
  <div className="flex justify-center items-center p-10">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.9139528632945!2d27.9519986!3d-26.0363713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957d51c4da1a67%3A0x744899d32d85d07c!2sThinkFriday!5e0!3m2!1sen!2sza!4v1737462931690!5m2!1sen!2sza"
      width="80%"
      height="300"
      title="ThinkFriday Location"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className='shadow-xl rounded-lg'
    ></iframe>
  </div>

    </div> 

</div>
    </div>
    <Footer />
    </div>

  );
};

export default Contacts;

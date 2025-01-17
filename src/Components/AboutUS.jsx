import React from 'react';
import Sidebar from './SideBar';
import Logo from '../Assets/Purple.png';
import hands from '../Assets/Aboutusimg/hands.png';

const AboutUS = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      {/* Top Bar Section */}
      <div className="text-purple-700 flex">
        <Sidebar />
        <div className="absolute top-0 right-0 p-4">
          <img 
            src={Logo} 
            alt="Logo" 
            className="w-24"
          />
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className="flex flex-col items-center p-8">
        <h2 className="font-bold text-xl">About Us</h2>
        <h3 className="mt-6">Why Us?</h3>
        <p className="p-6 text-center">
          Business Consultants and Advisors are key—that’s why when it comes to client 
          selection, we’re choosy. We want to give each of you the time and guidance you deserve. 
          Whether you’re seeking a strategic alliance with the right partner or a special 
          skillset or tool, call us today. Together we’ll create and refine your plan for 
          success. We didn’t get there alone. And neither will you.
        </p>
        
        {/* Image and Text Section */}
        <div className="flex flex-wrap justify-center items-center mt-8 w-full">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src={hands} 
              alt="Hands working together" 
              className="w-3/4 md:w-96 h-64 object-cover"
            />
          </div>
          
          {/* Text Section */}
          <div className="w-full md:w-2/4 md:pr-8 mt-6 md:mt-0">
            <h2 className="font-bold text-lg text-center">Our Approach</h2>
            <p className="mt-8">
              Our service includes a comprehensive consult to help identify gaps and opportunities, 
              a comprehensive report that includes a project plan with timelines and milestones, 
              a cost analysis, and a schedule. We also offer a suite of quality products that will 
              help you get there quickly and smoothly. That’s how we ensure your success.
            </p>
            <h3 className="font-bold mt-6 text-center">Mission</h3>
            <p className="mt-2">
              To empower businesses with strategic guidance, innovative solutions, and unwavering 
              support for long-term success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;

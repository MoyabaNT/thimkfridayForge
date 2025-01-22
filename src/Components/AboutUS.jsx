import React from 'react';
import Sidebar from './SideBar';
import hands from '../Assets/Aboutusimg/hands.png';
import Partners from '../Assets/Aboutusimg/Partners.png';
import v20 from '../Assets/Aboutusimg/V20.png';
import b261 from '../Assets/Aboutusimg/b261.png';
import b262 from '../Assets/Aboutusimg/b262.png';
import lilan from '../Assets/Aboutusimg/lilan.jpg';
import sudhir from '../Assets/Aboutusimg/Sudhir.jpg';
import spons from '../Assets/Aboutusimg/spons.jpg';
import vesh from '../Assets/Aboutusimg/vesh.jpg';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { FaLinkedin } from "react-icons/fa6";
const AboutUS = () => {
  return (
    <div>

    <div className="bg-gradient-to-b from-gray-300 to-gray-100 min-h-screen">
      {/* Top Bar Section */}
      <div className='text-purple-700'>
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center p-8">
        <h2 className="font-bold text-xl text-purple-700">About Us</h2>
        <h3 className="mt-6 text-lg font-bold text-purple-700">Why Us?</h3>
        <p className="mt-4 text-center text-gray-600 max-w-3xl">
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
              className="w-3/4 md:w-96 h-64 object-cover rounded-md"
            />
          </div>
            
          {/* Text Section */}
          <div className="w-full md:w-2/4 md:pl-8 mt-6 md:mt-0">
            <h2 className="font-bold text-lg text-center text-purple-700">Our Approach</h2>
            <p className="mt-8 text-gray-600">
              Our service includes a comprehensive consult to help identify gaps and opportunities, 
              a comprehensive report that includes a project plan with timelines and milestones, 
              a cost analysis, and a schedule. We also offer a suite of quality products that will 
              help you get there quickly and smoothly. That’s how we ensure your success.
            </p>
            <h3 className="font-bold mt-6 text-center text-purple-700">Mission</h3>
            <p className="mt-2 text-gray-600">
              To empower businesses with strategic guidance, innovative solutions, and unwavering 
              support for long-term success.
            </p>
            {/*the partner's side*/}
            
          </div>
        </div>
        
        
      </div>
      <div className="mt-8">
              <h3 className="font-bold text-center text-purple-700">Partners</h3>
              <div className="flex flex-wrap justify-center gap-8 mt-6">
              <Link to="https://www.forgeacademy.co.za/" target="_blank">
                <img 
                src={Partners} 
                alt="Forge Partner 1" 
                className="w-56 md:w-72 h-auto object-cover rounded-md shadow-lg"
                />
              </Link>
              <Link to="https://www.va2-0.co.za/" target="_blank">
                <img 
                src={v20} 
                alt="Forge Partner 2" 
                className="w-56 md:w-72 h-auto object-cover rounded-md shadow-lg"
                />
              </Link>
              </div>
      </div>

      {/*must attend to this*/}
        <div class='team' className='p-32 lg:ml-64'>
          <h3 className="text-lg text-center lg:mr-48 text-purple-700 font-bold p-8">Team</h3>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 items-center'>
          <div className='bg-gray-200 shadow-xl p-4 rounded-lg'>
            <img 
              src={b262} 
              alt="Forge Partner 1" 
              className="w-auto md:w-60 h-auto object-cover rounded-full shadow-lg py-1 hover:bg-purple-700"
            />
              <label className='text-sm text-purple-700 font-bold'>Tariq Shurmah</label>
            <div className='flex gap-2'>
            <Link to='https://www.linkedin.com/in/tariq-shurmah-91b1a533/' target='_blank'>
            <FaLinkedin size={35} className='hover:text-blue-900'/>
            </Link>
            <p className='text-xs'>Co-Founder and Managing Director</p>
            </div>
          </div>
          <div className='bg-gray-200 shadow-xl p-4 rounded-lg'>
            <img 
              src={b261} 
              alt="Forge Partner 2" 
              className="w-auto md:w-60 h-auto object-cover rounded-full shadow-lg py-1 hover:bg-purple-700"
            />
              <label className=' text-sm text-purple-700 font-bold'>Renoo Shurmah
              </label>
            <div className='flex gap-2'>
            <Link to='https://www.linkedin.com/in/renoo-shurmah-619253223/' target='_blank'>
            <FaLinkedin size={35} className='hover:text-blue-900'/>
            </Link>
            <p className='text-xs'>Co-Founder and Project Manager</p>
            </div>
          </div>
          <div className='bg-gray-200 shadow-xl p-4 rounded-lg'>
          <img 
            src={lilan} 
            alt="Forge Partner 2" 
            className="w-auto md:w-60 h-auto object-cover rounded-full shadow-lg py-1 hover:bg-purple-700"
            />
              <label className=' text-sm text-purple-700 font-bold'>Lilian Mathuntuta
              </label>
            <div className='flex gap-2'>
            <Link to='https://www.linkedin.com/in/nolutho-lilian-mathuntuta-285020192/' target='_blank'>
            <FaLinkedin size={35} className='hover:text-blue-900'/>
            </Link>
            <p className='text-xs'>Transformation & Skills Development Senior Officer</p>
            </div>
          </div>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 items-center mt-12'>
        <div className='bg-gray-200 shadow-xl p-4 rounded-lg'>
        <img 
              src={sudhir} 
              alt="Forge Partner 2" 
              className="w-auto md:w-60 h-auto object-cover rounded-full shadow-lg py-1 hover:bg-purple-700"
            />
              <label className=' text-sm text-purple-700 font-bold'>Sudhir Rugber
              </label>
            <div className='flex gap-2'>
            <Link to='https://www.linkedin.com/in/sbonile-cebekhulu-87994a207/' target='_blank'>
            <FaLinkedin size={35} className='hover:text-blue-900'/>
            </Link>
            <p className='text-xs'>Skills Development and Project Consultant</p>
            </div>
          </div>
          <div className='bg-gray-200 shadow-xl p-4 rounded-lg'>
        <img 
              src={vesh} 
              alt="Forge Partner 2" 
              className="w-auto md:w-60 h-auto object-cover rounded-full shadow-lg py-1 hover:bg-purple-700"
            />
              <label className=' text-sm text-purple-700 font-bold'>Yuvesh Harry
              </label>
            <div className='flex gap-2'>
            <Link to='https://www.linkedin.com/in/sudhir-rugber-081285331/' target='_blank'>
            <FaLinkedin size={35} className='hover:text-blue-900'/>
            </Link>
            <p className='text-xs'>Transformation Assistant</p>
            </div>
          </div>
          <div className='bg-gray-200 shadow-xl p-4 rounded-lg'>
        <img 
              src={spons} 
              alt="Forge Partner 2" 
              className="w-auto md:w-60 h-auto object-cover rounded-full shadow-lg py-1 hover:bg-purple-700"
            />
              <label className=' text-sm text-purple-700 font-bold'>Sbonile Cebekhulu
              </label>
            <div className='flex gap-2'>
            <Link to='https://www.linkedin.com/in/sbonile-cebekhulu-87994a207/' target='_blank'>
            <FaLinkedin size={35} className='hover:text-blue-900'/>
            </Link>
            <p className='text-xs'>Skills Development Administrator</p>
            </div>
          </div>
        </div>

        </div>
        </div>
      <Footer />
    </div>
  );
};

export default AboutUS;

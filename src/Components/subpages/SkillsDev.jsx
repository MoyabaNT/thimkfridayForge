import React from 'react'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Purple.png';
import Sidebar from '../SideBar';

const SkillsDev = () => {
  return (
    <div>

    <div className="bg-gradient-to-b from-gray-300 to-gray-100 min-h-screen flex flex-col">
      {/** Logo and Sidebar */}
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
      {/** Main Section */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg shadow-xl p-8 max-w-3xl w-full text-center">
          <h1 className="text-2xl font-bold text-purple-700 mb-6">
          Skills Development Consulting
          </h1>
          <ul className="text-left list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6">
            <li>Customized & Strategic Skills Development Solutions</li>
            <li>Strategy alignment to B-BBEE Sector Codes</li>
            <li>Skills Development B-BBEE Audit Preparations</li>
            <li>Skills Development B-BBEE Audit Preparations</li>
            <li>Analysis and alignment of Skills Development Strategies</li>
            <li>Payroll Management</li>
            <li>HR/IR Consulting</li>
          </ul>
          <h2 className="text-xl font-semibold text-purple-700 mb-4">What do we do?</h2>
          <p className="text-gray-600">
          We provide Skills Development Consulting services that are designed to maximize the effect of B-BBEE Strategies within our client's organisation. We align training and development to strategic business objectives and ensure increased Return on Investment (ROI) in training initiatives          </p>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  )
}

export default SkillsDev
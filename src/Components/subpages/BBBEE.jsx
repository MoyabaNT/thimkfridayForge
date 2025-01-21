import React from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Purple.png';
import Sidebar from '../SideBar';

const BBBEE = () => {
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
            B-BBEE Advisory & Consulting
          </h1>
          <ul className="text-left list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6">
            <li>Strategy Development</li>
            <li>Scorecard Elements Management</li>
            <li>B-BBEE Gap Analysis</li>
            <li>Monthly Scorecard Reporting</li>
            <li>Scenario Planning</li>
            <li>Ownership Solutions</li>
            <li>Verification Readiness</li>
            <li>Verification Advocacy</li>
            <li>Supplier & Enterprise Development Facilitation</li>
          </ul>
          <h2 className="text-xl font-semibold text-purple-700 mb-4">What do we do?</h2>
          <p className="text-gray-600">
            We assist clients to achieve their desired level of B-BBEE compliance in the most efficient and cost-effective manner with the least disruption to their business. We provide comprehensive services to support our client's business by leveraging strategies, legislation, and best practices to ensure Growth and Return on Investment (ROI).
          </p>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default BBBEE;

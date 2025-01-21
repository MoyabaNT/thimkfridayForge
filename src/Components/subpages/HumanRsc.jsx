import React from 'react'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Purple.png';
import Sidebar from '../SideBar';

const HumanRsc = () => {
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
          Human Resource (HR) Consulting
          </h1>
          <ul className="text-left list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6">
            <li>Customized & Strategic Skills Development Solutions</li>
            <li>Strategy alignment to B-BBEE Sector Codest</li>
            <li>Analysis and alignment of Skills Development Strategies</li>
            <li>Skills Development B-BBEE Audit Preparations</li>
            <li>YES Management</li>
            <li>Learner Administration Management</li>
            <li>Skills Development Tax Saving & ROI Management & Consulting</li>
            <li>Accreditation (QCTO) Management and Consulting</li>
          </ul>
          <h2 className="text-xl font-semibold text-purple-700 mb-4">What do we do?</h2>
          <p className="text-gray-600">
          We provide Human Resources (HR) Consulting services that form an integral asset to our client's HR team. By creating and implementing bespoke HR strategies, we work to ensure the organisation is effectively utilizing its personnel to achieve its goals, while working at optimal performance and efficiency levels.          </p>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  )
}

export default HumanRsc
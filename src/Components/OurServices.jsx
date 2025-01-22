import React from 'react'
import Sidebar from './SideBar'
import { GiStairsGoal } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import Footer from './Footer';

const OurServices = () => {
  return (
    <div>

    <div className="bg-gradient-to-b from-gray-300 to-gray-100 min-h-screen">
      <div className='text-purple-700'>
        <Sidebar />
      </div>
      <div className='mt-16'>
      <h1 className='text-center text-3xl mb-8 font-bold hover:underline text-purple-700'>Our Services</h1>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Link to='/BBBEE'>
          <div className='bg-slate-00 rounded-lg p-4 w-80 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <GiStairsGoal size={120} className='ml-16 text-purple-700'/>
            <h1 className='text-3xl font-bold mb-6 mt-4 hover:text-purple-700'>B-BBEE Advisory & Consulting</h1>
            <p>We assist clients to achieve their desired level of B-BBEE compliance in the most efficient and cost-effective manner with the least disruption to their business. We provide comprehensive services to support our client's business by leveraging strategies, legislation, and best practices to ensure Growth and Return on Investment (ROI).</p>
          </div>
          </Link>
          <Link to='/HumanRsc'>
          <div className='bg-slate-00 rounded-lg p-4 w-80 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <GrUserWorker size={120} className='ml-16 text-purple-700'/>
            <h1 className='text-3xl font-bold mb-6 mt-4 hover:text-purple-700'>Human Resources (HR) ConsultingS</h1>
            <p>We provide Human Resources (HR) Consulting services that form an integral asset to our client's HR team. By creating and implementing bespoke HR strategies, we work to ensure the organisation is effectively utilizing its personnel to achieve its goals, while working at optimal performance and efficiency levels.</p>
          </div>
          </Link>
          <Link to='/SkillsDev'>
          <div className='bg-slate-00 rounded-lg p-4 w-80 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <LiaLaptopCodeSolid size={120} className='ml-16 text-purple-700'/>
            <h1 className='text-3xl font-bold mb-6 mt-4 hover:text-purple-700'>Skills Develoment Consulting</h1>
            <p>We provide Skills Development Consulting services that are designed to maximize the effect of B-BBEE Strategies within our client's organisation. We align training and development to strategic business objectives and ensure increased Return on Investment (ROI) in training initiatives.</p>
          </div>
          </Link>
        </div>
      </div>
      </div>
      <div className='p-8'>
     <h1 className='italic font-bold text-center mt-8 text-2xl text-purple-700'>TESTIMONIALS</h1>
     <p className='mt-4 text-center text-lg'>
"As a small business owner, navigating BBBEE requirements can be daunting. Thankfully, ThinkFriday has made the process seamless and straightforward. Their interactive tools allowed us to assess our current status and identify areas for improvement. With ThinkFriday's guidance, we've been able to achieve our BBBEE goals and contribute to meaningful transformation."
 <br/><span className='italic font-bold text-center mt-8 text-purple-700'> ~Forge Academy</span>
</p>
      </div>
    </div>
    <Footer />

    </div>

  )
}

export default OurServices;

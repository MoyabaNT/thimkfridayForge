import React from 'react'
import { Link } from 'react-router-dom'
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 justify-center bg-gradient-to-b from-gray-100 to-gray-300'>
            <div className='px-16'>
                <h1 className='text-xl py-4 ml-24 font-bold text-purple-700 '>ThinkFriday</h1>
                <div className="text-center lg:ml-16">
                <h3 className="text-purple-700 text-lg font-semibold">Our Address</h3>
                <p className="text-gray-600 mb-4">Unit 8, Northlands Retail Park, 210 Epsom Ave, Hoogland, Northriding, 2169</p>
                <h3 className="text-purple-700 text-lg font-semibold">Email Us</h3>
                <p className="text-gray-600 mb-4">Tariq@thinkfriday.co.za</p>
                <h3 className="text-purple-700 text-lg font-semibold">Call Us</h3>
                <p className="text-gray-600">+27 10 880 3795</p>
                </div>
            </div>
            <div className='text-center lg:ml-16'>
                <h1 className='text-xl py-4 text-purple-700 font-bold'>
                Useful Links
                </h1>
                <ul className=''>
                    <Link to='/AboutUs'><li className='p-2 hover:text-purple-700 hover:font-bold'>About uS</li></Link>
                    <Link  to='/OurServices'><li className='p-2 hover:text-purple-700 hover:font-bold'>Services</li></Link>
                    <Link to='/Contacts'><li className='p-2 hover:text-purple-700 hover:font-bold'>Contact Us</li></Link>
                    <Link to='/Resources'><li className='p-2 hover:text-purple-700 hover:font-bold'>Resources</li></Link>
                </ul>

            </div>
            <div className='text-center lg:ml-16'>
                <h1 className='text-xl py-4 text-purple-700 font-bold'>
                Our Services  
                </h1>
                <ul className=''>
                    <Link to='/AboutUs'><li className='p-2 hover:text-purple-700 hover:font-bold'>About uS</li></Link>
                    <Link  to='/OurServices'><li className='p-2 hover:text-purple-700 hover:font-bold'>Services</li></Link>
                    <Link to='/Contacts'><li className='p-2 hover:text-purple-700 hover:font-bold'>Contact Us</li></Link>
                    <Link to='/Resources'><li className='p-2 hover:text-purple-700 hover:font-bold'>Resources</li></Link>
                </ul>

            </div>
            <div className='text-center lg:ml-16'>
                <h1 className='text-xl py-4 text-purple-700 font-bold'>                    
                Find us on
                </h1>
                <div className='flex gap-4 text-purple-700 text-2xl justify-center'>
                    <FaTwitter />
                    <FaSquareInstagram />
                    <FaFacebook />
                    <TbBrandLinkedinFilled />

                </div>
                
                </div>
        </div>
    </div>
  )
}

export default Footer

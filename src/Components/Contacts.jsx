import React from 'react'
import Sidebar from './SideBar'
import Logo from '../Assets/Purple.png';

const Contacts = () => {
  return (
    <div>
        <div className='text-purple-700'>
      <Sidebar />
      <div className="absolute top-0 right-0 p-4">
          <img 
            src={Logo} 
            alt="Logo" 
            className="w-24"
          />
        </div>
      </div >
      <div className="text-center mt-16 text-xl" >
        Contact Us
 
      </div>
      <div>
      <p><h2 className='font-bold p-6' >Our Address</h2>
        Unit 8, Northlands Retail Park<br/> 210 Epsom Ave, Hoogland, Northriding, 2169
        <br/>Email Us<br/>
        Email: Tariq@thinkfriday.co.za<br/>
        Call Us<br/>
        Phone:+27 10 880 3795</p>
      </div>
      <div>

      </div>
        </div>
  )
}

export default Contacts
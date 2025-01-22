import React, { useRef, useState } from 'react'
import Logo from '../Assets/Purple.png';
import { CiCircleList } from "react-icons/ci";
import { useClickAway } from 'react-use' //had to npm i react-use
import { LiaHandPointLeft } from "react-icons/lia";
import { BiHomeSmile } from 'react-icons/bi'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { FiTool } from "react-icons/fi";
import { GrServices } from "react-icons/gr";
import { RiTeamFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false) //useState is used to track UI changes in the DOM
  const ref = useRef(null) //useRef is used simply to store a value that does not affect the DOM if the value changes
  useClickAway(ref, () => setOpen(false)) //checks if the sidebar is clicked and takes action
  const toggleSidebar = () => setOpen(prev => !prev)

  const items = [
    { title: 'HomePage', Icon: BiHomeSmile, href: 'HomePage' },
    { title: 'Services', Icon: GrServices, href: 'OurServices' },
    { title: 'Resources', Icon: FiTool, href: 'Resources' },
    { title: 'Contact Us', Icon: HiOutlineChatBubbleBottomCenterText, href: 'Contacts' },
    { title: 'About Us', Icon: RiTeamFill, href: 'AboutUs' },
  ]

  return (
    <div className='bg-gray-300 h-16 fixed top-0 left-0 right-0 z-50'>
      <div className="absolute top-0 right-0">
        <Link to='/HomePage'>
          <img 
            src={Logo} 
            alt="Logo" 
            className="w-24"
          />
        </Link>
      </div>
  
      <button
        onClick={toggleSidebar}
        className='p-3 text-purple-700'
        aria-label='toggle sidebar'
      >
        <CiCircleList size={30} />
      </button>
      {open && (
        <>
          <div
            aria-hidden='true'
            className='fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(114,111,113,0.2)] backdrop-blur-sm'
          ></div>
          <div
            className="fixed top-0 bottom-0 left-0 z-50 w-full h-screen max-w-xs border-r-2 border-zinc-800 bg-gray-900"
            ref={ref}
            aria-label="Sidebar"
          >
            <div className='items-center justify-between p-5 border-b-2 border-gray-700'>
              <button
                onClick={toggleSidebar}
                className="p-3 border-2 border-gray-700 rounded-full"
                aria-label="close sidebar"
              >
                <LiaHandPointLeft size={25} />
              </button>
  
              <div>
                <img 
                  src={Logo} 
                  alt="mylogo" 
                />
              </div>
            </div>
            <ul>
              {items.map((item, idx) => {
                const { title, href, Icon } = item;
                return (
                  <li key={title}>
                    <a
                      onClick={toggleSidebar}
                      href={href}
                      className="flex items-center justify-between gap-5 p-5 transition-all border-b-2 hover:bg-gray-700 border-gray-800"
                    >
                      <span>{title}</span>
                      <div>
                        <Icon className='text-2xl' />
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
  }

export default Sidebar
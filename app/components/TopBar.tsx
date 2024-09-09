import React from 'react';
import { MdOutlinePhoneCallback } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";



const TopBar = () => {
  
  return (
    <div className="bg-cyan-500 text-white py-4">
      <div className="container mx-auto p-4">
        <div className="container mx-auto flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:items-center md:justify-between">
          
          {/* Left section with contact info */}
          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4">
            <div className="flex items-center">
              <MdOutlinePhoneCallback />
              <div><span className='font-serif text-lg md:text-sm font-bold'>(+234) 815 722 7777</span></div>
            </div>
            <p className="hidden md:flex">|</p>
            <div className="hidden md:flex items-center">
              <FaMailBulk />
              <span className='ml-2 font-serif text-lg font-bold'>info@canaezgroup.com</span>
            </div>
          </div>

          {/* Right section with social icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:bg-gray-300 bg-gray-200 p-2 rounded-full text-black"><FaXTwitter /></a>
            <a href="#" className="hover:bg-gray-300 bg-gray-200 p-2 rounded-full text-black"><FaFacebook /></a>
            <a href="#" className="hover:bg-gray-300 bg-gray-200 p-2 rounded-full text-black"><FaLinkedin /></a>
            <a href="#" className="hover:bg-gray-300 bg-gray-200 p-2 rounded-full text-black"><FaInstagram /></a>
          </div>

        </div>
      </div>
    </div>
  )
};

export default TopBar;
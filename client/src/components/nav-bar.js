import React from 'react';

import {  FaBars, FaTimes, FaHome, FaEnvelope, FaPhotoVideo } from 'react-icons/fa'



import { Link, BrowserRouter as Router } from 'react-router-dom'

const MenuItem = ({ to, IconComponent, text }) => (
  <Link to={to} className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white transition duration-300 relative group">
    <IconComponent className="mr-2" />
    <span className="font-semibold">{text}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition duration-300 transform scale-110 z-[-1] rounded-md"></div>
  </Link>
)

const NavBar = ({ isOpen, toggleMenu }) => {
  
  return (
    <div className="absolute top-4 right-4 z-20">
      <button onClick={toggleMenu} className="text-white text-3xl">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg transform transition-transform duration-300" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(20deg)' }}>
          <MenuItem IconComponent={FaHome} to="/" text="Home" />
          <MenuItem to="/gallery" IconComponent={FaPhotoVideo} text="Gallery" />
          <MenuItem to="/contact" IconComponent={FaEnvelope} text="Contact" />
        </div>
      )}
    </div>
  )
}


export default NavBar;
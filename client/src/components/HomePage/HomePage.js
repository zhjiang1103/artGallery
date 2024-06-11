import React, { useState, useEffect } from 'react'
import NavBar from '../nav-bar'
import { FaPaintBrush, FaPalette, FaImages, FaBars, FaTimes, FaHome, FaInfoCircle, FaEnvelope, FaPhotoVideo } from 'react-icons/fa'
import anime from 'animejs'
import IconSection from './IconSection'

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full animate-ping"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full animate-pulse"></div>
    </div>
  )
}

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const AboutSection = () => (
    <div id="about" className="p-10 bg-gray-800 rounded-lg mt-12 w-full max-w-5xl mx-auto text-white">
      <h2 className="text-4xl font-semibold mb-4">About</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
         <p className="mb-6">
            We are dedicated to showcasing the most vibrant and diverse artworks from artists around the world. Our gallery features a wide range of styles and mediums, ensuring that there is something for every art enthusiast.
         </p>
        </div>
          
        <div className="flex-1">  
          <p>
            Our mission is to provide a platform for emerging and established artists to share their work with a broader audience. We believe in the power of art to inspire, provoke thought, and bring people together.
          </p>
        </div>
        
      </div>
      
       
    </div>
  )

  return (
    <div className="relative flex flex-col justify-center items-center h-screen bg-gray-900">
      <AnimatedBackground />
      <NavBar isOpen={menuOpen} toggleMenu={toggleMenu} />
      <h1 className="font-semibold text-white text-4xl z-10 mt-4">
        Welcome to Janet's Art Gallery!
      </h1>
      <AboutSection />
      <IconSection />
   
    </div>
  )
}

export default HomePage

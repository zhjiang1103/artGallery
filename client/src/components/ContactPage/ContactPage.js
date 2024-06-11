import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import {  FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import NavBar from '../nav-bar'
import IconSection from '../HomePage/IconSection'

  
const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    })
  
    const handleChange = (e) => {
      const { id, value } = e.target
      setFormData({
        ...formData,
        [id]: value
      })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      
      emailjs.send('service_q4pyu95', 'YOUR_TEMPLATE_ID', formData, 'User_ID')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    }
  
    return (
      <form className="w-full max-w-lg mt-8 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    )
  }
  
  const ContactInfo = () => (
    <div className="mt-8 text-gray-200">
      <div className="flex items-center mb-4">
        <FaPhone className="mr-2" />
        <span>(123) 456-7890</span>
      </div>
      <div className="flex items-center mb-4">
        <FaEnvelope className="mr-2" />
        <span>info@janetsartgallery.com</span>
      </div>
      <div className="flex items-center">
        <FaMapMarkerAlt className="mr-2" />
        <span>123 Art St, Art City, AC 12345</span>
      </div>
    </div>
  )
  
  const ContactPage=() => {
    const [menuOpen, setMenuOpen] = useState(false)
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen)
    }
  
    return (
      <div className="relative flex flex-col justify-center items-center h-screen bg-gray-900">
        <NavBar isOpen={menuOpen} toggleMenu={toggleMenu} />
        <h1 className="font-semibold text-white text-4xl z-10 mt-4">
          Contact Janet's Art Gallery
        </h1>
        <IconSection />
        <ContactForm />
        <ContactInfo />
      </div>
    )
  }

export default ContactPage;
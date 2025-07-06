// src/components/Navbar.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"; // npm install react-icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <nav className="bg-white shadow-md p-4">
      
      <div className="flex justify-between items-center">
        {/* Logo */}
        
 <div className="flex items-center space-x-2">
  <img
    src="/image/AUSPAC LOGO1.png"
    alt="AusPac Logo"
    className="h-16 w-16 object-contain"
    loading="eager"
  />
</div>




        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX className="h-8 w-8 text-blue-600" />
            ) : (
              <HiOutlineMenuAlt3 className="h-8 w-8 text-blue-600" />
            )}
          </button>
        </div>

        {/* Navigation Menu (desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About Us</Link>
          <Link to="/surveys" className="hover:text-blue-600">Surveys</Link>
          <Link to="/support" className="hover:text-blue-600">We Support Global Warming</Link>
          <Link to="/gallery" className="hover:text-blue-600">Gallery</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
        </div>

        {/* Call Me Button (desktop) */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Call Me Now
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col mt-4 space-y-2 md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">About Us</Link>
          <Link to="/surveys" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Surveys</Link>
          <Link to="/support" onClick={() => setIsOpen(false)} className="hover:text-blue-600">We Support Global Warming</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Gallery</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Contact Us</Link>
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Call Me Now
          </button>
        </div>
      )}
    </nav>
  );
}

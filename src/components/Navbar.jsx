// src/components/Navbar.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Surveys", path: "/surveys" },
  
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/image/AUSPAC LOGO1.png"
            alt="AusPac Logo"
            className="h-32 w-32 object-contain"
            loading="eager"
          />
      <div className="text-4xl font-bold leading-none">
    <span className="text-[#0077B6]">Aus</span>
    <span className="text-[#00B4D8]">Pac</span>
  </div>

        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Call Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-200">
            Call Me Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? (
              <HiX className="h-8 w-8 text-blue-700" />
            ) : (
              <HiOutlineMenuAlt3 className="h-8 w-8 text-blue-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-inner">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700 transition">
              Call Me Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

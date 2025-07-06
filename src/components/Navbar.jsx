// src/components/Navbar.jsx

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">MyLogo</div>

      {/* Navigation Menu */}
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">About Us</Link>
        <Link to="/surveys" className="hover:text-blue-600">Surveys</Link>
        <Link to="/support" className="hover:text-blue-600">We Support Global Warming</Link>
        <Link to="/gallery" className="hover:text-blue-600">Gallery</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
      </div>

      {/* Call Me Button */}
      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Call Me Now
        </button>
      </div>
    </nav>
  );
}

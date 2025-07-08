import React from "react";
import { Link } from "react-router-dom";

const linkClasses =
  "text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded underline";

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12 select-none">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-start gap-12">
        {/* Company Info */}
        <div className="md:flex-1">
          <a
            href="#top"
            onClick={scrollToTop}
            className="text-white text-2xl font-bold mb-4 tracking-wide inline-block cursor-pointer hover:text-indigo-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
            aria-label="Scroll to top"
          >
            AusPac Marine
          </a>
          <p className="text-gray-400 leading-relaxed max-w-md">
            Providing first-rate surveying, inspection, and consultancy services
            to the shipping industry.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer Navigation" className="md:flex-1" role="navigation">
          <h3 className="text-white text-xl font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/surveys", label: "Surveys" },
            ].map(({ to, label }) => (
              <li key={label}>
                <Link to={to} className={linkClasses} onClick={scrollToTop}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <address className="md:flex-1 not-italic space-y-3">
          <h3 className="text-white text-xl font-semibold mb-5">Contact Us</h3>
          <p className="text-gray-400 max-w-sm">PO Box 317, Cannon Hill, QLD 4170</p>
          <p>
            Phone:{" "}
            <a href="tel:+61733486334" className={linkClasses}>
              (+617) 3348 6334
            </a>
          </p>
          <p className="text-gray-400">Fax: (+617) 3396 8709</p>
          <p>
            Mobile:{" "}
            <a href="tel:+61418176815" className={linkClasses}>
              (+61) 418 176 815
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:surveys@cargocare.com.au"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded"
            >
              surveys@cargocare.com.au
            </a>
          </p>
        </address>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 mt-14 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm select-text">
        &copy; {new Date().getFullYear()} AusPac Marine. All rights reserved.
      </div>
    </footer>
  );
}

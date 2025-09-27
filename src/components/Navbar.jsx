import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav>
        {/* Logo */}
        <h3>
          Qetm<span>eer</span>
        </h3>

        {/* Menu */}
        <ul>
          <li className="list-none relative group">
            <Link to="/" className="hover:text-blue-600 transition duration-300">
              Home
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="list-none relative group">
            <Link to="/about" className="hover:text-blue-600 transition duration-300">
              About
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="list-none relative group">
            <Link to="/contact" className="hover:text-blue-600 transition duration-300">
              Contact
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="list-none relative group">
            <Link to="/projects" className="hover:text-blue-600 transition duration-300">
              Projects
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="list-none relative group">
            <Link to="/skills" className="hover:text-blue-600 transition duration-300">
              Skills
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </li>
        </ul>

        {/* Buttons */}
        <div >
          <button>
            Hire Me!
          </button>
          <button >
            Contact
          </button>
        </div>
      </nav>

      {/* 👇 Ye div Navbar ki height ke barabar spacing add karega */}
      
    </>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import "./Navbar.css";
import cv from '../../assets/my new cv.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation(); // Uncommented this line

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? "scrolled" : ""} ${darkMode ? "dark" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <div className="nav-container">
          {/* Logo */}
          <motion.div 
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/">
              <h3>
                Qetm<span>eer</span>
              </h3>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="nav-menu">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                className="nav-item"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                >
                  {item.label}
                  <span className="nav-indicator"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Section */}
          <div className="nav-right">
            {/* Theme Toggle */}
            <motion.button 
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </motion.button>

            {/* Buttons */}
            <div className="nav-buttons">
         
                <motion.a
                              href={cv}
                              download="Qetmeer-CV.pdf"
                              className="btn-primary"
                              whileHover={{ 
                                scale: 1.05,
                                y: -2
                              }}
                              whileTap={{ scale: 0.95 }}
                            >
                                  <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me!
              </motion.button>
                            </motion.a>
              
               <Link to="/contact" className="btn-secondary">
                             <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.button>
                              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button 
              className="menu-toggle"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={item.path} 
                    className={`mobile-link ${location.pathname === item.path ? "active" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mobile-buttons">
                <button className="btn-primary">Hire Me!</button>
                <button className="btn-secondary">Contact</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="nav-spacer"></div>
    </>
  );
};

export default Navbar;
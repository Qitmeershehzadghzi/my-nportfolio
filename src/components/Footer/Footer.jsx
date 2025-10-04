import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <motion.div 
          className="footer-about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Qetmeer</h3>
          <p>Web Developer | MERN Stack | Designer</p>
          <div className="footer-signature">
            <div className="signature-line"></div>
            <span>Crafting Digital Excellence</span>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4>Quick Links</h4>
          <div className="links-grid">
            <a href="/" className="footer-link">Home</a>
            <a href="/about" className="footer-link">About</a>
            <a href="/projects" className="footer-link">Projects</a>
            <a href="/contact" className="footer-link">Contact</a>
            <a href="/skills" className="footer-link">Skills</a>
            {/* <a href="/services" className="footer-link">Services</a> */}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="footer-social"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4>Connect With Me</h4>
          <div className="social-icons">
            <a 
              href="https://github.com/Qitmeershehzadghzi" 
              className="social-icon github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/qetmeer-shehzad-0b441b2ba/" 
              className="social-icon linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a 
    href="https://www.facebook.com/share/17Kjmcm91v/"
              className="social-icon facebook"
            >
              <FaFacebook />
              <span>Facebook</span>
            </a>
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div 
          className="footer-newsletter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4>Stay Updated</h4>
          <p>Get notified about new projects and updates</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© 2025 Qetmeer. All Rights Reserved.</p>
          <div className="footer-actions">
            <button className="back-to-top" onClick={scrollToTop}>
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="footer-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </footer>
  );
};

export default Footer;
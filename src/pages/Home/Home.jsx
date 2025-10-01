import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoLogoFacebook } from "react-icons/io";

import {
  FaDownload,
  FaEye,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaRocket,
  FaCode,
  FaArrowDown
} from 'react-icons/fa';
import profile from '../../assets/my-profile.jpeg';
import cv from '../../assets/my new cv.pdf';
import './Home.css';

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="home-section">
      {/* Animated Background Elements */}
      <div className="home-bg-elements">
        <motion.div
          className="bg-shape shape-1"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div
          className="bg-shape shape-2"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div
          className="bg-shape shape-3"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>

      <div className="home-container">
        <div className="home-content">
          {/* Left Side - Text Content */}
          <motion.div
            className="text-section"
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.span
              className="badge"
              variants={textVariants}
              custom={0}
            >
              <FaRocket className="badge-icon" />
              Available for Freelance
            </motion.span>

            {/* Main Heading */}
            <motion.h1
              className="main-heading"
              variants={textVariants}
              custom={1}
            >
              <span className="name-highlight">Qetmeer</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              className="subtitle"
              variants={textVariants}
              custom={2}
            >
              MERN Stack Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              className="description"
              variants={textVariants}
              custom={3}
            >
              Building dynamic web applications with{' '}
              <span className="tech-highlight">React</span>,{' '}
              <span className="tech-highlight">Node.js</span>,{' '}
              <span className="tech-highlight">Express</span>, and{' '}
              <span className="tech-highlight">MongoDB</span>.
              Transforming ideas into seamless digital experiences with modern technologies.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="stats-container"
              variants={textVariants}
              custom={4}
            >
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Months Exp</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="button-container"
              variants={textVariants}
              custom={5}
            >
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
                <FaDownload className="btn-icon" />
                Download CV
              </motion.a>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/projects" className="btn-secondary">
                  <FaEye className="btn-icon" />
                  View Projects
                </Link>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="social-links"
              variants={textVariants}
              custom={6}
            >
              <motion.a
                href="https://github.com/Qitmeershehzadghzi"
                className="social-icon"
                whileHover={{
                  scale: 1.2,
                  y: -3
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/qetmeer-shehzad-0b441b2ba/"
                className="social-icon"
                whileHover={{
                  scale: 1.2,
                  y: -3
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>
     <motion.a
  href="https://www.facebook.com/share/17Kjmcm91v/"
  className="social-icon"
  whileHover={{
    scale: 1.2,
    y: -3
  }}
>
  <IoLogoFacebook size={28} />   {/* yahan Facebook ka logo aa jayega */}
</motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="image-section"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <motion.div
              className="image-container"
              variants={floatingVariants}
              animate="floating"
            >
              {/* Glowing Ring */}
              <div className="glow-ring"></div>

              {/* Profile Image */}
              <div className="profile-wrapper">
                <img
                  src={profile}
                  alt="Qetmeer"
                  className="profile-image"
                />
                {/* Overlay Gradient */}
                <div className="profile-overlay"></div>
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                className="floating-tech react-badge"
                animate={{
                  y: [-20, 20, -20],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaCode />
                React
              </motion.div>

              <motion.div
                className="floating-tech node-badge"
                animate={{
                  y: [20, -20, 20],
                  rotate: [0, -10, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <FaCode />
                Node.js
              </motion.div>

              {/* Status Badge */}
              <motion.div
                className="status-badge"
                whileHover={{ scale: 1.1 }}
              >
                <div className="status-dot"></div>
                Available for work
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.span
            className="scroll-text"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SCROLL DOWN
          </motion.span>
          <motion.div
            className="scroll-mouse"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="scroll-wheel"></div>
          </motion.div>
          <FaArrowDown className="scroll-arrow" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaLaptopCode, 
  FaProjectDiagram, 
  FaUsers, 
  FaGraduationCap,
  FaRocket,
  FaAward,
  FaDownload
} from "react-icons/fa";
import "./About.css";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const stats = [
    { number: "3+", label: "Projects Completed", icon: <FaProjectDiagram /> },
    { number: "5+", label: "Months Experience", icon: <FaLaptopCode /> },
    { number: "10+", label: "Technologies", icon: <FaRocket /> },
    { number: "100%", label: "Client Satisfaction", icon: <FaAward /> }
  ];

  const experiences = [
    {
      icon: <FaProjectDiagram className="icon-blue" />,
      text: "Built 3 full-stack web applications using MERN Stack"
    },
    {
      icon: <FaLaptopCode className="icon-green" />,
      text: "Deployed projects on Netlify and Vercel for live use"
    },
    {
      icon: <FaUsers className="icon-purple" />,
      text: "Collaborated with peers on coding projects"
    },
    {
      icon: <FaGraduationCap className="icon-orange" />,
      text: "Continuous learning and skill development"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="about-section" ref={ref}>
      {/* Background Elements */}
      <div className="about-bg-elements">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>

      <div className="about-container">
        {/* Header Section */}
        <motion.div 
          className="about-header"
          variants={itemVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
        >
          <h2>About Me</h2>
          <p className="about-subtitle">
            Passionate MERN Stack Developer with 5 months of experience creating
            dynamic and scalable web applications.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="about-content-grid"
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
        >
          {/* Left Column - Image & Stats */}
          <motion.div 
            className="about-left"
            variants={leftVariants}
          >
            <div className="profile-card">
              <div className="profile-image">
                <div className="image-placeholder">
                  <FaLaptopCode />
                </div>
                <div className="profile-status">
                  <div className="status-dot"></div>
                  <span>Available for work</span>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="stat-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-content">
                      <h3>{stat.number}</h3>
                      <p>{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="about-right"
            variants={rightVariants}
          >
            {/* Story Section */}
            <div className="story-section">
              <h3>My Journey</h3>
              <div className="story-content">
                <motion.p 
                  className="story-paragraph"
                  variants={itemVariants}
                >
                  <span className="highlight">Education / Background:</span> I completed my studies in 
                  <em> Computer Science</em> and have been learning web development intensively 
                  for the past 5 months, building real-world projects and expanding my skill set.
                </motion.p>
                
                <motion.p 
                  className="story-paragraph"
                  variants={itemVariants}
                >
                  <span className="highlight">Skills / Expertise:</span> I specialize in MERN Stack
                  development (MongoDB, Express.js, React, Node.js) and have hands-on
                  experience building full-stack applications with modern technologies.
                </motion.p>
                
                <motion.p 
                  className="story-paragraph"
                  variants={itemVariants}
                >
                  <span className="highlight">Goals / Passion:</span> I am passionate about solving real-world
                  problems using technology and continuously improving my skills to create
                  impactful digital solutions.
                </motion.p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="experience-section">
              <h3>Experience & Achievements</h3>
              <motion.div 
                className="experience-list"
                variants={staggerVariants}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
              >
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    className="experience-item"
                    variants={childVariants}
                    whileHover={{ x: 10 }}
                  >
                    <div className="experience-icon">{exp.icon}</div>
                    <span>{exp.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div 
              className="about-cta"
              variants={itemVariants}
            >
              <p>Ready to bring your ideas to life? Let's work together!</p>
              <div className="cta-buttons">
                <Link to="/contact" className="cta-button primary">
                  Hire Me
                </Link>
                <button className="cta-button secondary">
                  <FaDownload />
                  Download CV
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
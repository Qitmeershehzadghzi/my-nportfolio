import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCode, 
  FaLaptop, 
  FaVideo, 
  FaArrowRight, 
  FaRocket, 
  FaClock, 
  FaCheckCircle,
  FaServer
} from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const location = useLocation();
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { 
      name: "MERN Stack Development", 
      path: "mern-stack",
      icon: <FaCode />,
      description: "Full-stack web applications using MongoDB, Express, React, and Node.js",
      color: "#3b82f6",
      features: ["RESTful APIs", "Real-time Features", "Database Design", "Deployment"]
    },
    { 
      name: "MS Office Training", 
      path: "ms-office",
      icon: <FaLaptop />,
      description: "Professional MS Office training for individuals and organizations",
      color: "#10b981",
      features: ["Word", "Excel", "PowerPoint", "Outlook"]
    },
    { 
      name: "Video Editing", 
      path: "video-editing",
      icon: <FaVideo />,
      description: "Professional video editing services for social media and presentations",
      color: "#8b5cf6",
      features: ["Adobe Premiere", "After Effects", "Color Grading", "Motion Graphics"]
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed", icon: <FaRocket /> },
    { number: "100%", label: "Client Satisfaction", icon: <FaCheckCircle /> },
    { number: "24/7", label: "Support", icon: <FaClock /> }
  ];

  return (
    <section className="services-section">
      {/* Background Elements */}
      <div className="services-bg-elements">
        <div className="service-shape shape-1"></div>
        <div className="service-shape shape-2"></div>
        <div className="service-shape shape-3"></div>
      </div>

      <div className="services-container">
        {/* Header */}
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>My Services</h2>
          <p>Comprehensive solutions to bring your digital ideas to life</p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="services-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item"
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
        </motion.div>

        <div className="services-content">
          {/* Services Navigation */}
          <motion.div 
            className="services-nav"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>What I Offer</h3>
            <p className="nav-description">
              Choose from my range of professional services tailored to meet your specific needs
            </p>

            <div className="services-list">
              {services.map((service, index) => (
                <motion.div
                  key={service.path}
                  className="service-nav-item"
                  onHoverStart={() => setHoveredService(index)}
                  onHoverEnd={() => setHoveredService(null)}
                >
                  <Link
                    to={service.path}
                    className={`service-link ${location.pathname.includes(service.path) ? 'active' : ''}`}
                    style={{ 
                      '--service-color': service.color,
                      borderLeftColor: location.pathname.includes(service.path) ? service.color : 'transparent'
                    }}
                  >
                    <div className="service-link-content">
                      <div className="service-icon" style={{ color: service.color }}>
                        {service.icon}
                      </div>
                      <div className="service-info">
                        <h4>{service.name}</h4>
                        <p>{service.description}</p>
                      </div>
                      <FaArrowRight className="arrow-icon" />
                    </div>

                    {/* Features */}
                    <AnimatePresence>
                      {hoveredService === index && (
                        <motion.div 
                          className="service-features"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {service.features.map((feature, featureIndex) => (
                            <span key={featureIndex} className="feature-tag">
                              {feature}
                            </span>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div 
              className="services-cta"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4>Ready to Start Your Project?</h4>
              <p>Let's discuss how I can help bring your vision to life</p>
              <Link to="/contact" className="cta-button">
                Get In Touch
                <FaArrowRight />
              </Link>
            </motion.div>
          </motion.div>

          {/* Service Content */}
          <motion.div 
            className="service-content-area"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            key={location.pathname}
          >
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
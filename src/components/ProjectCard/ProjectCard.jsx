import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from "react-icons/fa";
import './ProjectCard.css';

const ProjectCard = ({ title, description, tech = [], link, github, featured }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`project-card ${featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.5, type: "spring" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="featured-badge">
          <FaStar />
          <span>Featured</span>
        </div>
      )}

      {/* Project Image/Icon */}
      <div className="project-header">
        <div className="project-icon">
          <FaCode />
        </div>
        <div className="project-overlay" style={{ opacity: isHovered ? 1 : 0 }}></div>
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        {/* Tech Stack */}
        <div className="tech-stack">
          {tech.map((t, i) => (
            <motion.span
              key={i}
              className="tech-badge"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Project Links */}
        <motion.div 
          className="project-buttons"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-live"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt />
              Live Demo
            </motion.a>
          )}
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              GitHub
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Hover Effect Border */}
      <div className="card-border"></div>
    </motion.div>
  );
};

export default ProjectCard;
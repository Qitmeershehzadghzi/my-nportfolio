import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaFilter, 
  FaExternalLinkAlt, 
  FaGithub, 
  FaStar,
  FaCode,
  FaMobile,
  FaServer,
  FaSearch
} from "react-icons/fa";
import "./Projects.css";

// Sample projects data
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    link: "https://e-commerce-fron-by-qetme.netlify.app/",
    github: "https://github.com/Qitmeershehzadghzi",
    category: "fullstack",
    featured: true,
    image: ""
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop functionality and real-time updates.",
    tech: ["React", "Firebase", "Material-UI", "Context API"],
    link: "https://example.com",
    github: "https://github.com/example",
    category: "frontend",
    featured: false,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500"
  },
  {
    id: 3,
    title: "REST API Service",
    description: "A scalable REST API with authentication, rate limiting, and comprehensive documentation.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    link: "https://example.com",
    github: "https://github.com/example",
    category: "backend",
    featured: true,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern portfolio website with smooth animations and responsive design.",
    tech: ["React", "Framer Motion", "CSS3", "Netlify"],
    link: "https://example.com",
    github: "https://github.com/example",
    category: "frontend",
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500"
  },
  {
    id: 5,
    title: "Chat Application",
    description: "Real-time chat application with rooms, file sharing, and emoji support.",
    tech: ["Socket.io", "React", "Node.js", "MongoDB"],
    link: "https://example.com",
    github: "https://github.com/example",
    category: "fullstack",
    featured: false,
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500"
  },
  {
    id: 6,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for data visualization with charts and real-time metrics.",
    tech: ["D3.js", "React", "Express", "Chart.js"],
    link: "https://example.com",
    github: "https://github.com/example",
    category: "frontend",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "all", label: "All Projects", icon: <FaCode />, count: projectsData.length },
    { id: "frontend", label: "Frontend", icon: <FaMobile />, count: projectsData.filter(p => p.category === "frontend").length },
    { id: "backend", label: "Backend", icon: <FaServer />, count: projectsData.filter(p => p.category === "backend").length },
    { id: "fullstack", label: "Full Stack", icon: <FaCode />, count: projectsData.filter(p => p.category === "fullstack").length }
  ];

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const ProjectCard = ({ project, index }) => (
    <motion.div
      className={`project-card ${project.featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setSelectedProject(project)}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="featured-badge">
          <FaStar />
          <span>Featured</span>
        </div>
      )}

      {/* Project Image */}
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="overlay-content">
            <motion.button
              className="view-details-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              View Details
            </motion.button>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {/* Tech Stack */}
        <div className="tech-stack">
          {project.tech.map((tech, i) => (
            <motion.span
              key={i}
              className="tech-badge"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
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
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-live"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt />
              Live Demo
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub />
              GitHub
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section className="projects-section">
      {/* Background Elements */}
      <div className="projects-bg-elements">
        <div className="project-shape shape-1"></div>
        <div className="project-shape shape-2"></div>
        <div className="project-shape shape-3"></div>
      </div>

      <div className="projects-container">
        {/* Header */}
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>My Projects</h2>
          <p>A showcase of my work, built with passion and precision</p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div 
          className="projects-controls"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="filter-icon">{category.icon}</span>
                <span className="filter-label">{category.label}</span>
                <span className="project-count">{category.count}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="empty-state"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaFilter className="empty-icon" />
            <h3>No projects found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-btn"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              
              <div className="modal-details">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
                
                <div className="modal-tech">
                  <h4>Technologies Used</h4>
                  <div className="tech-list">
                    {selectedProject.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-actions">
                  {selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn-live">
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-github">
                      <FaGithub />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
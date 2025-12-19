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
  FaSearch,
  FaTimes,
  FaRocket,
  FaEye,
  FaLayerGroup,
  FaArrowRight,
  FaChevronRight
} from "react-icons/fa";
import { 
  ExternalLink, 
  Github, 
  Star, 
  Search, 
  X,
  Layers,
  Eye,
  ChevronRight
} from "lucide-react";

const projectsData = [
  {
    id: 1,
    Title: 'E-Commerce Platform',
    Description: 'A full-stack e-commerce solution featuring secure user authentication, efficient product management, and seamless payment integration',
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    link: "https://e-commerce-fron-by-qetme.netlify.app/",
    github: "https://github.com/Qitmeershehzadghzi",
    category: "fullstack",
    featured: true,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    Title: "Dice Game",
    Description: "An interactive dice game built with React, combining logic and user interaction.",
    tech: ["React", "HTML5", "CSS3", "Netlify"],
    link: "https://dice-g.netlify.app",
    github: "https://github.com/Qitmeershehzadghzi",
    category: "frontend",
    featured: false,
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    Title: "E-commerce Backend",
    Description: "A scalable REST API backend with authentication, CRUD operations, and payment support.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    link: "https://e-commerce-backendd-4wbh.vercel.app/",
    github: "https://github.com/Qitmeershehzadghzi",
    category: "backend",
    featured: true,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    Title: "Portfolio Website",
    Description: "A modern and responsive portfolio website showcasing projects with smooth UI/UX.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Netlify"],
    link: "https://qetmeer-portfolio-zgn2.vercel.app/",
    github: "https://github.com/Qitmeershehzadghzi",
    category: "frontend",
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    Title: "Tic Tac Toe Game",
    Description: "A classic Tic Tac Toe game with interactive gameplay and responsive design.",
    tech: ["React.js", "CSS3", "Vercel"],
    link: "https://tictactoegmae-reactjs.vercel.app/",
    github: "https://github.com/Qitmeershehzadghzi",
    category: "frontend",
    featured: false,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    Title: "Calculator",
    Description: "A simple and efficient calculator for quick and accurate computations.",
    tech: ["HTML", "CSS", "JavaScript", "Netlify"],
    link: "https://qetmeer-calculater.netlify.app/",
    github: "https://github.com/Qitmeershehzadghzi",
    category: "frontend",
    featured: true,
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    Title: 'Medicine Platform',
    Description: 'A full-stack medicine e-commerce platform featuring secure user authentication, efficient medicine management, and a smooth online ordering system.',
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://medicine-website-virid.vercel.app/",
    github: "https://github.com/Qitmeershehzadghzi",
    category: "fullstack",
    featured: true,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTscR_PLXFCCuOdaTNhvYFC0eGLl5kqs0Lb6A&s'
   },
    {
    id: 3,
    Title: "quran academy Backend",
    Description: "A scalable REST API backend with authentication, CRUD operations, and payment support.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    link: "https://quran-academy-backend-one.vercel.app/",
    github: "https://github.com/Qitmeershehzadghzi",
    category: "backend",
    featured: true,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_WzrcwT-neKOSSVzOC8jVhGlD1eMLl20sCg&s'
    },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    { id: "all", label: "All Projects", icon: <Layers />, count: projectsData.length },
    { id: "frontend", label: "Frontend", icon: <FaMobile />, count: projectsData.filter(p => p.category === "frontend").length },
    { id: "backend", label: "Backend", icon: <FaServer />, count: projectsData.filter(p => p.category === "backend").length },
    { id: "fullstack", label: "Full Stack", icon: <FaRocket />, count: projectsData.filter(p => p.category === "fullstack").length }
  ];

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = filter === "all" || project.category === filter;
    const matchesSearch = project.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.Description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        {/* Animated Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 via-transparent to-pink-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 via-transparent to-cyan-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 text-sm font-semibold mb-6">
            <Layers className="w-4 h-4 text-blue-400" />
            <span className="text-gradient">Projects Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Projects</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my work, built with passion and precision
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/25'
                    : 'bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-600'
                }`}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium">{category.label}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  filter === category.id ? 'bg-white/20' : 'bg-gray-700/50'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/10 h-full flex flex-col">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-600 to-amber-600 text-white text-xs font-bold rounded-full shadow-lg">
                        <Star className="text-xs" />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}

                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.Title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent flex items-center justify-center transition-opacity duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="text-center p-6">
                        <Eye className="w-12 h-12 text-white mx-auto mb-4" />
                        <p className="text-white font-semibold">View Details</p>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-white rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-1">
                      {project.Title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-2">
                      {project.Description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3 mt-auto">
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="text-xs" />
                          Live Demo
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github />
                          Code
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Search className="text-6xl text-gray-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">No projects found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 p-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full text-gray-400 hover:text-white transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>
              
              {/* Modal Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.Title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              
              {/* Modal Content */}
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-3 items-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.Title}</h3>
                  {selectedProject.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-600 to-amber-600 text-white text-sm font-bold rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">{selectedProject.Description}</p>
                
                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech, index) => (
                      <span key={index} className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-xl font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-3"
                    >
                      <ExternalLink />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white font-semibold rounded-xl hover:bg-gray-700 transition-all flex items-center justify-center gap-3"
                    >
                      <Github />
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
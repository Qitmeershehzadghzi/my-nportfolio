import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaDatabase, 
  FaServer, 
  FaReact, 
  FaNodeJs,
  FaRocket,
  FaDollarSign,
  FaRupeeSign,
  FaCheck,
  FaWhatsapp,
  FaMobile,
  FaShieldAlt,
  FaCode,
  FaCloud
} from "react-icons/fa";
import "./MernStack.css";

const MernStack = () => {
  const [currency, setCurrency] = useState("USD");
  const phoneNumber = "03053158512";

  // 4 Frontend Packages
  const frontendPackages = [
    {
      name: "React Basic Website",
      category: "frontend",
      price: { USD: 299, PKR: 85000 },
      description: "Responsive React website with modern design",
      delivery: "2 weeks",
      features: [
        "Up to 5 pages",
        "Responsive Design",
        "Contact Form",
        "Basic SEO",
        "1 Month Support",
        "Social Media Integration"
      ],
      technologies: ["React", "CSS3", "JavaScript"],
      popular: false
    },
    {
      name: "React E-commerce Frontend",
      category: "frontend",
      price: { USD: 599, PKR: 168000 },
      description: "E-commerce frontend with shopping cart",
      delivery: "3 weeks",
      features: [
        "Product Catalog",
        "Shopping Cart",
        "User Authentication",
        "Payment UI",
        "Admin Dashboard UI",
        "3 Months Support"
      ],
      technologies: ["React", "Redux", "Styled Components"],
      popular: true
    },
    {
      name: "React Dashboard",
      category: "frontend",
      price: { USD: 799, PKR: 225000 },
      description: "Advanced admin dashboard with charts",
      delivery: "4 weeks",
      features: [
        "Analytics Charts",
        "Data Tables",
        "User Management",
        "Real-time Updates",
        "Custom Themes",
        "6 Months Support"
      ],
      technologies: ["React", "Chart.js", "Material-UI"],
      popular: false
    },
    {
      name: "React Native Mobile App",
      category: "frontend",
      price: { USD: 1299, PKR: 360000 },
      description: "Cross-platform mobile application",
      delivery: "6 weeks",
      features: [
        "iOS & Android",
        "Push Notifications",
        "Offline Support",
        "Native Features",
        "App Store Deployment",
        "1 Year Support"
      ],
      technologies: ["React Native", "Firebase", "Redux"],
      popular: false
    }
  ];

  // 4 Backend Packages
  const backendPackages = [
    {
      name: "Node.js REST API",
      category: "backend",
      price: { USD: 499, PKR: 140000 },
      description: "Secure RESTful API with Node.js",
      delivery: "3 weeks",
      features: [
        "RESTful APIs",
        "JWT Authentication",
        "MongoDB Database",
        "API Documentation",
        "Error Handling",
        "3 Months Support"
      ],
      technologies: ["Node.js", "Express", "MongoDB"],
      popular: false
    },
    {
      name: "Real-time Backend",
      category: "backend",
      price: { USD: 899, PKR: 250000 },
      description: "Real-time features with WebSockets",
      delivery: "4 weeks",
      features: [
        "WebSocket Integration",
        "Real-time Chat",
        "Live Updates",
        "Redis Caching",
        "API Security",
        "6 Months Support"
      ],
      technologies: ["Node.js", "Socket.io", "Redis"],
      popular: true
    },
    {
      name: "Microservices Architecture",
      category: "backend",
      price: { USD: 1499, PKR: 420000 },
      description: "Scalable microservices system",
      delivery: "8 weeks",
      features: [
        "Microservices Setup",
        "Docker Containers",
        "Message Queues",
        "Load Balancing",
        "Monitoring",
        "1 Year Support"
      ],
      technologies: ["Node.js", "Docker", "RabbitMQ"],
      popular: false
    },
    {
      name: "Enterprise Backend",
      category: "backend",
      price: { USD: 2499, PKR: 700000 },
      description: "Complete enterprise backend solution",
      delivery: "12 weeks",
      features: [
        "Advanced Security",
        "Payment Integration",
        "Email Services",
        "File Processing",
        "Advanced Analytics",
        "2 Years Support"
      ],
      technologies: ["Node.js", "PostgreSQL", "AWS"],
      popular: false
    }
  ];

  // 4 MERN Stack Packages
  const mernPackages = [
    {
      name: "MERN Basic App",
      category: "mern",
      price: { USD: 999, PKR: 280000 },
      description: "Full-stack MERN application",
      delivery: "5 weeks",
      features: [
        "React Frontend",
        "Node.js Backend",
        "MongoDB Database",
        "User Authentication",
        "Basic CRUD Operations",
        "4 Months Support"
      ],
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      popular: false
    },
    {
      name: "MERN E-commerce",
      category: "mern",
      price: { USD: 1999, PKR: 560000 },
      description: "Complete e-commerce platform",
      delivery: "8 weeks",
      features: [
        "Product Management",
        "Shopping Cart",
        "Payment Gateway",
        "Order System",
        "Admin Panel",
        "1 Year Support"
      ],
      technologies: ["MERN Stack", "Stripe", "JWT"],
      popular: true
    },
    {
      name: "MERN Social Media",
      category: "mern",
      price: { USD: 2999, PKR: 840000 },
      description: "Social media platform",
      delivery: "12 weeks",
      features: [
        "User Profiles",
        "News Feed",
        "Real-time Chat",
        "File Upload",
        "Notifications",
        "18 Months Support"
      ],
      technologies: ["MERN", "Socket.io", "Cloudinary"],
      popular: false
    },
    {
      name: "MERN Enterprise",
      category: "mern",
      price: { USD: 4999, PKR: 1400000 },
      description: "Enterprise-level MERN solution",
      delivery: "16 weeks",
      features: [
        "Advanced Architecture",
        "Multi-tenant Setup",
        "Advanced Analytics",
        "Custom Integrations",
        "Premium Support",
        "2 Years Support"
      ],
      technologies: ["MERN", "Microservices", "AWS"],
      popular: false
    }
  ];

  const handleWhatsAppOrder = (packageName, price, category) => {
    const message = `Hello! I want to order the ${packageName} (${category}) package for ${currency === 'USD' ? '$' : 'Rs '}${price}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const renderPackages = (packages, title) => (
    <div className="package-category">
      <h4 className="category-title">{title}</h4>
      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            className={`package-card ${pkg.popular ? 'popular' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {pkg.popular && <div className="popular-badge">Most Popular</div>}
            
            <div className="package-header">
              <h4>{pkg.name}</h4>
              <div className="package-price">
                <span className="price">
                  {currency === 'USD' ? '$' : 'Rs '}
                  {pkg.price[currency].toLocaleString()}
                </span>
              </div>
            </div>

            <p className="package-description">{pkg.description}</p>

            <div className="package-details">
              <div className="detail-item">
                <span>Delivery Time:</span>
                <span>{pkg.delivery}</span>
              </div>
              <div className="detail-item">
                <span>Category:</span>
                <span className="category-tag">{pkg.category}</span>
              </div>
            </div>

            <div className="technologies">
              <h5>Technologies:</h5>
              <div className="tech-tags">
                {pkg.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="features-list">
              <h5>Features:</h5>
              {pkg.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="feature-item">
                  <FaCheck className="check-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button 
              className="whatsapp-order-btn"
              onClick={() => handleWhatsAppOrder(pkg.name, pkg.price[currency], pkg.category)}
            >
              <FaWhatsapp className="whatsapp-icon" />
              Order on WhatsApp
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      className="service-packages"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="service-header">
        <div className="header-content">
          <h2>MERN Stack Development</h2>
          <p>
            Complete full-stack development services including Frontend, Backend, and MERN Stack solutions. 
            12 comprehensive packages to choose from.
          </p>
        </div>
        <div className="header-icon">
          <FaCode />
        </div>
      </div>

      {/* Currency Toggle */}
      <div className="currency-toggle">
        <button 
          className={`currency-btn ${currency === 'USD' ? 'active' : ''}`}
          onClick={() => setCurrency('USD')}
        >
          <FaDollarSign /> USD
        </button>
        <button 
          className={`currency-btn ${currency === 'PKR' ? 'active' : ''}`}
          onClick={() => setCurrency('PKR')}
        >
          <FaRupeeSign /> PKR
        </button>
      </div>

      {/* Packages Section */}
      <div className="packages-section">
        <h3>Development Packages</h3>
        
        {renderPackages(frontendPackages, "Frontend Development")}
        {renderPackages(backendPackages, "Backend Development")}
        {renderPackages(mernPackages, "MERN Stack Development")}
      </div>
    </motion.div>
  );
};

export default MernStack;
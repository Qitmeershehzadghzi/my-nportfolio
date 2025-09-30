import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaDatabase, 
  FaServer, 
  FaReact, 
  FaNodeJs,
  FaMobile,
  FaRocket,
  FaCode,
  FaLock,
  FaShieldAlt,
  FaDollarSign,
  FaRupeeSign,
  FaCheck,
  FaTimes
} from "react-icons/fa";
import "./MernStack.css";

const MernStack = () => {
  const [currency, setCurrency] = useState("USD");

  const technologies = [
    // ... (previous technologies array remains same)
  ];

  const features = [
    // ... (previous features array remains same)
  ];

  const packages = [
    {
      name: "Static Website",
      price: { USD: 299, PKR: 85000 },
      description: "Basic static website with responsive design",
      features: [
        "Up to 5 pages",
        "Responsive Design",
        "Contact Form",
        "Basic SEO",
        "1 Month Support",
        "Social Media Integration"
      ],
      notIncluded: [
        "Database Integration",
        "User Authentication",
        "Admin Panel",
        "Payment Gateway"
      ],
      delivery: "1-2 weeks",
      revisions: "2 revisions",
      popular: false
    },
    {
      name: "Basic MERN App",
      price: { USD: 799, PKR: 225000 },
      description: "Full-stack application with basic features",
      features: [
        "Up to 10 pages",
        "MongoDB Database",
        "User Authentication",
        "RESTful APIs",
        "Admin Dashboard",
        "3 Months Support",
        "Basic Security",
        "File Upload"
      ],
      notIncluded: [
        "Advanced Analytics",
        "Real-time Features",
        "Mobile App",
        "Advanced Payment"
      ],
      delivery: "3-4 weeks",
      revisions: "3 revisions",
      popular: true
    },
    {
      name: "Advanced MERN Stack",
      price: { USD: 1499, PKR: 420000 },
      description: "Enterprise-level MERN stack application",
      features: [
        "Unlimited Pages",
        "Advanced Database Design",
        "Real-time Features",
        "Payment Integration",
        "Advanced Security",
        "Mobile Responsive",
        "6 Months Support",
        "Performance Optimization",
        "Third-party APIs",
        "Advanced Analytics"
      ],
      notIncluded: [
        "Mobile App Development",
        "Desktop Application",
        "AI/ML Integration"
      ],
      delivery: "6-8 weeks",
      revisions: "Unlimited revisions",
      popular: false
    },
    {
      name: "E-commerce Platform",
      price: { USD: 2499, PKR: 700000 },
      description: "Complete e-commerce solution",
      features: [
        "Product Management",
        "Shopping Cart",
        "Payment Gateway",
        "Order Management",
        "User Reviews",
        "Inventory Management",
        "Admin Panel",
        "1 Year Support",
        "Security Audits",
        "Performance Monitoring"
      ],
      notIncluded: [
        "Mobile App",
        "Custom ERP Integration",
        "Advanced AI Features"
      ],
      delivery: "8-12 weeks",
      revisions: "Unlimited revisions",
      popular: false
    }
  ];

  return (
    <motion.div
      className="mern-service"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="service-header">
        <div className="header-content">
          <h2>MERN Stack Development</h2>
          <p>
            Full-stack web applications built with modern technologies including 
            MongoDB, Express.js, React, and Node.js. Scalable, secure, and performant solutions.
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
                  <span className="price-note">
                    {currency === 'USD' ? 'One-time payment' : 'یک بار کی ادائیگی'}
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
                  <span>Revisions:</span>
                  <span>{pkg.revisions}</span>
                </div>
              </div>

              <div className="features-list">
                <h5>What's Included:</h5>
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item included">
                    <FaCheck className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="not-included">
                <h5>Not Included:</h5>
                {pkg.notIncluded.map((item, itemIndex) => (
                  <div key={itemIndex} className="feature-item not-included">
                    <FaTimes className="times-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button className="package-cta-btn">
                Get Started
                <FaRocket />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Existing Technologies and Features sections remain same */}
      {/* ... */}

    </motion.div>
  );
};

export default MernStack;
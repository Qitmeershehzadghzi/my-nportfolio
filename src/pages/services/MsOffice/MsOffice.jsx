import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaFileWord, 
  FaFileExcel, 
  FaFilePowerpoint, 
  FaEnvelope,
  FaDatabase,
  FaChalkboardTeacher,
  FaCertificate,
  FaClock,
  FaUsers,
  FaRocket,
  FaDollarSign,
  FaRupeeSign,
  FaCheck,
  FaUser,
  FaUserFriends,
  FaBuilding,
  FaWhatsapp
} from "react-icons/fa";
import "./MsOffice.css";

const MsOffice = () => {
  const [currency, setCurrency] = useState("USD");
  const phoneNumber = "03053158512";

  const trainingPackages = [
    {
      name: "Basic Office Training",
      price: { USD: 99, PKR: 28000 },
      duration: "2 weeks",
      sessions: "8 sessions",
      features: [
        "MS Word Advanced",
        "MS Excel Basics",
        "Email Management",
        "Certificate of Completion",
        "Lifetime Support",
        "Practice Materials"
      ],
      level: "Beginner to Intermediate",
      popular: false
    },
    {
      name: "Advanced Office Suite",
      price: { USD: 199, PKR: 56000 },
      duration: "4 weeks",
      sessions: "16 sessions",
      features: [
        "All Basic Package Features",
        "MS Excel Advanced",
        "PowerPoint Mastery",
        "Advanced Formulas",
        "Data Analysis",
        "Project Work"
      ],
      level: "Intermediate to Advanced",
      popular: true
    },
    {
      name: "Professional Package",
      price: { USD: 399, PKR: 112000 },
      duration: "6 weeks",
      sessions: "24 sessions",
      features: [
        "All Standard Package Features",
        "MS Access Training",
        "Advanced Database",
        "Automation Skills",
        "Professional Projects",
        "Job Preparation"
      ],
      level: "Advanced",
      popular: false
    },
    {
      name: "Corporate Training",
      price: { USD: 899, PKR: 250000 },
      duration: "Custom",
      sessions: "Custom sessions",
      features: [
        "Customized Curriculum",
        "Team Training",
        "Progress Reports",
        "Company Certificate",
        "Ongoing Support",
        "Training Materials"
      ],
      level: "All Levels",
      popular: false
    }
  ];

  const handleWhatsAppOrder = (packageName, price) => {
    const message = `Hello! I want to order the ${packageName} training package for ${currency === 'USD' ? '$' : 'Rs '}${price}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
          <h2>MS Office Training</h2>
          <p>
            Comprehensive Microsoft Office training programs designed to enhance 
            productivity and professional skills for individuals and organizations.
          </p>
        </div>
        <div className="header-icon">
          <FaChalkboardTeacher />
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
        <h3>Training Packages</h3>
        <div className="packages-grid">
          {trainingPackages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`package-card ${pkg.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
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

              <div className="package-details">
                <div className="detail-item">
                  <FaClock />
                  <span>{pkg.duration}</span>
                </div>
                <div className="detail-item">
                  <FaChalkboardTeacher />
                  <span>{pkg.sessions}</span>
                </div>
                <div className="detail-item">
                  <FaCertificate />
                  <span>{pkg.level}</span>
                </div>
              </div>

              <div className="features-list">
                <h5>Training Includes:</h5>
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item">
                    <FaCheck className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className="whatsapp-order-btn"
                onClick={() => handleWhatsAppOrder(pkg.name, pkg.price[currency])}
              >
                <FaWhatsapp className="whatsapp-icon" />
                Enroll via WhatsApp
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MsOffice;
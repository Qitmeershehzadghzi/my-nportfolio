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
  FaBuilding
} from "react-icons/fa";
import "./MsOffice.css";

const MsOffice = () => {
  const [activeTab, setActiveTab] = useState("packages");
  const [currency, setCurrency] = useState("USD");

  const trainingPackages = [
    {
      name: "Basic Package",
      type: "individual",
      icon: <FaUser />,
      price: { USD: 99, PKR: 28000 },
      duration: "2 weeks",
      sessions: "8 sessions",
      includes: [
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
      name: "Standard Package",
      type: "individual",
      icon: <FaUserFriends />,
      price: { USD: 199, PKR: 56000 },
      duration: "4 weeks",
      sessions: "16 sessions",
      includes: [
        "All Basic Package Features",
        "MS Excel Advanced",
        "PowerPoint Mastery",
        "Advanced Formulas",
        "Data Analysis",
        "Project Work",
        "Career Guidance"
      ],
      level: "Intermediate to Advanced",
      popular: true
    },
    {
      name: "Professional Package",
      type: "individual",
      icon: <FaBuilding />,
      price: { USD: 399, PKR: 112000 },
      duration: "6 weeks",
      sessions: "24 sessions",
      includes: [
        "All Standard Package Features",
        "MS Access Training",
        "Advanced Database",
        "Automation Skills",
        "Professional Projects",
        "Job Preparation",
        "Mock Interviews",
        "Portfolio Building"
      ],
      level: "Advanced",
      popular: false
    },
    {
      name: "Corporate Training",
      type: "group",
      icon: <FaUsers />,
      price: { USD: 899, PKR: 250000 },
      duration: "Custom",
      sessions: "Custom sessions",
      includes: [
        "Customized Curriculum",
        "Team Training",
        "Progress Reports",
        "Company Certificate",
        "Ongoing Support",
        "Training Materials",
        "Flexible Scheduling",
        "Performance Analytics"
      ],
      level: "All Levels",
      popular: false
    }
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "packages", label: "Training Packages" },
    { id: "benefits", label: "Benefits" }
  ];

  return (
    <motion.div
      className="msoffice-service"
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

      {/* Tabs Navigation */}
      <motion.div 
        className="tabs-navigation"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Packages Tab */}
      {activeTab === "packages" && (
        <motion.div
          className="tab-panel"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="packages-section">
            <h3>Training Packages</h3>
            <div className="packages-grid">
              {trainingPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className={`package-card ${pkg.popular ? 'popular' : ''} ${pkg.type}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {pkg.popular && <div className="popular-badge">Most Popular</div>}
                  
                  <div className="package-icon">
                    {pkg.icon}
                  </div>

                  <div className="package-header">
                    <h4>{pkg.name}</h4>
                    <div className="package-type">{pkg.type}</div>
                  </div>

                  <div className="package-price">
                    <span className="price">
                      {currency === 'USD' ? '$' : 'Rs '}
                      {pkg.price[currency].toLocaleString()}
                    </span>
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
                    {pkg.includes.map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-item">
                        <FaCheck className="check-icon" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="package-cta-btn">
                    Enroll Now
                    <FaRocket />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Other tabs remain same */}
      {/* ... */}

    </motion.div>
  );
};

export default MsOffice;
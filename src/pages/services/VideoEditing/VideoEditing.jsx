import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaVideo, 
  FaFilm, 
  FaMagic, 
  FaPlay,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaRocket,
  FaDollarSign,
  FaRupeeSign,
  FaCheck,
  FaClock,
  FaEdit
} from "react-icons/fa";
import "./VideoEditing.css";

const VideoEditing = () => {
  const [currency, setCurrency] = useState("USD");

  const editingPackages = [
    {
      name: "Basic Editing",
      price: { USD: 49, PKR: 14000 },
      description: "Perfect for simple social media videos",
      delivery: "2-3 days",
      revisions: "2 revisions",
      features: [
        "Up to 1 minute video",
        "Basic Color Correction",
        "Simple Transitions",
        "Text Overlays",
        "Background Music",
        "1080p Resolution",
        "1 Platform Optimization"
      ],
      bestFor: ["YouTube Shorts", "Instagram Reels", "Facebook Videos"],
      popular: false
    },
    {
      name: "Standard Package",
      price: { USD: 149, PKR: 42000 },
      description: "Professional editing for content creators",
      delivery: "5-7 days",
      revisions: "3 revisions",
      features: [
        "Up to 5 minutes video",
        "Advanced Color Grading",
        "Motion Graphics",
        "Sound Effects",
        "Voice Over Sync",
        "4K Resolution",
        "Multi-platform Optimization",
        "Custom Thumbnail",
        "Brand Integration"
      ],
      bestFor: ["YouTube Videos", "Product Demos", "Tutorials"],
      popular: true
    },
    {
      name: "Premium Package",
      price: { USD: 299, PKR: 84000 },
      description: "Advanced editing for professional needs",
      delivery: "7-10 days",
      revisions: "5 revisions",
      features: [
        "Up to 10 minutes video",
        "Cinematic Color Grading",
        "Advanced Motion Graphics",
        "Visual Effects",
        "Sound Design",
        "4K/6K Resolution",
        "All Platform Optimization",
        "Custom Animations",
        "Multiple Thumbnails",
        "Priority Support"
      ],
      bestFor: ["Corporate Videos", "Commercials", "Music Videos"],
      popular: false
    },
    {
      name: "Enterprise Package",
      price: { USD: 599, PKR: 168000 },
      description: "Complete video production solution",
      delivery: "2-3 weeks",
      revisions: "Unlimited revisions",
      features: [
        "Unlimited Video Length",
        "Hollywood-style Grading",
        "Complex Visual Effects",
        "Professional Sound Mixing",
        "8K Resolution Ready",
        "Multi-camera Editing",
        "Script Consultation",
        "Storyboard Creation",
        "Dedicated Editor",
        "24/7 Support"
      ],
      bestFor: ["Feature Films", "Documentaries", "Large Campaigns"],
      popular: false
    }
  ];

  return (
    <motion.div
      className="video-editing-service"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="service-header">
        <div className="header-content">
          <h2>Video Editing Services</h2>
          <p>
            Professional video editing services for social media, corporate videos, 
            and personal projects. Engaging content that tells your story effectively.
          </p>
        </div>
        <div className="header-icon">
          <FaVideo />
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
        <h3>Video Editing Packages</h3>
        <div className="packages-grid">
          {editingPackages.map((pkg, index) => (
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
                  <span className="price-note">per video</span>
                </div>
              </div>

              <p className="package-description">{pkg.description}</p>

              <div className="package-details">
                <div className="detail-item">
                  <FaClock />
                  <span>Delivery: {pkg.delivery}</span>
                </div>
                <div className="detail-item">
                  <FaEdit />
                  <span>Revisions: {pkg.revisions}</span>
                </div>
              </div>

              <div className="features-list">
                <h5>What's Included:</h5>
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item">
                    <FaCheck className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="best-for">
                <h5>Best For:</h5>
                <div className="platform-tags">
                  {pkg.bestFor.map((platform, platformIndex) => (
                    <span key={platformIndex} className="platform-tag">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              <button className="package-cta-btn">
                Start Project
                <FaRocket />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Existing sections remain same */}
      {/* ... */}

    </motion.div>
  );
};

export default VideoEditing;
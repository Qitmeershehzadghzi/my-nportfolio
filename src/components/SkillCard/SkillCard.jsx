import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaStar, FaRocket } from "react-icons/fa";
import './SkillCard.css';

const SkillCard = ({ name, level = "intermediate", category, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getLevelColor = (level) => {
    switch (level) {
      case "beginner": return "#ef4444";
      case "intermediate": return "#f59e0b";
      case "advanced": return "#10b981";
      case "expert": return "#3b82f6";
      default: return "#6b7280";
    }
  };

  const getLevelIcon = (level) => {
    switch (level) {
      case "beginner": return "🌱";
      case "intermediate": return "🚀";
      case "advanced": return "⭐";
      case "expert": return "🏆";
      default: return "💫";
    }
  };

  return (
    <motion.div
      className={`skill-card ${level} ${category}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        rotateY: 5
      }}
      transition={{ 
        duration: 0.4, 
        type: "spring",
        stiffness: 300 
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Skill Header */}
      <div className="skill-header">
        <div className="skill-icon-wrapper">
          {icon || <FaRocket className="skill-icon" />}
        </div>
        <div className="skill-level-indicator">
          <span 
            className="level-dot" 
            style={{ backgroundColor: getLevelColor(level) }}
          ></span>
          <span className="level-emoji">{getLevelIcon(level)}</span>
        </div>
      </div>

      {/* Skill Content */}
      <div className="skill-content">
        <h4 className="skill-name">{name}</h4>
        <div className="skill-meta">
          <span className="skill-category">{category}</span>
          <span className="skill-level" style={{ color: getLevelColor(level) }}>
            {level}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="skill-progress">
        <div className="progress-track">
          <motion.div 
            className="progress-fill"
            initial={{ width: 0 }}
            whileInView={{ width: `${getProgressWidth(level)}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ backgroundColor: getLevelColor(level) }}
          />
        </div>
        <span className="progress-text">{getProgressWidth(level)}%</span>
      </div>

      {/* Hover Effect */}
      <div className="skill-glow" style={{ opacity: isHovered ? 1 : 0 }}></div>
    </motion.div>
  );
};

// Helper function to determine progress width based on skill level
const getProgressWidth = (level) => {
  switch (level) {
    case "beginner": return 40;
    case "intermediate": return 65;
    case "advanced": return 85;
    case "expert": return 95;
    default: return 50;
  }
};

export default SkillCard;
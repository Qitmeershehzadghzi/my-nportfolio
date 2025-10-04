import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaCode, 
  FaDatabase, 
  FaTools, 
  FaPalette,
  FaServer,
  FaMobile,
  FaCloud,
  FaRocket
} from "react-icons/fa";
import "./Skills.css";

// Skills data
const skillsData = [
  {
    category: "Frontend Development",
    icon: <FaPalette />,
    color: "#3b82f6",
    skills: [
      { name: "React", level: 75, icon: "⚛️" },
      { name: "JavaScript", level: 90, icon: "🟨" },
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS3", level: 78, icon: "🎨" },
      { name: "Tailwind CSS", level: 70, icon: "💨" },
      { name: "Bootstrap", level: 70, icon: "🅱️" }
    ]
  },
  {
    category: "Backend Development",
    icon: <FaServer />,
    color: "#10b981",
    skills: [
      { name: "Node.js", level: 80, icon: "🟢" },
      { name: "Express.js", level: 75, icon: "🚂" },
      { name: "Python", level: 50, icon: "🐍" },
      { name: "REST APIs", level: 85, icon: "🔗" },
      { name: "Authentication", level: 78, icon: "🔐" },
      // { name: "WebSockets", level: 65, icon: "⚡" }
    ]
  },
  {
    category: "Database & Tools",
    icon: <FaDatabase />,
    color: "#f59e0b",
    skills: [
      { name: "MongoDB", level: 75, icon: "🍃" },
      // { name: "MySQL", level: 70, icon: "🐬" },
      { name: "Git", level: 85, icon: "📚" },
      { name: "GitHub", level: 80, icon: "🐙" },
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "Postman", level: 75, icon: "📬" }
    ]
  },
  {
    category: "Technologies & Cloud",
    icon: <FaCloud />,
    color: "#8b5cf6",
    skills: [
      { name: "MERN Stack", level: 80, icon: "⚡" },
      // { name: "Firebase", level: 70, icon: "🔥" },
      { name: "Netlify", level: 85, icon: "☁️" },
      { name: "Vercel", level: 80, icon: "▲" },
      { name: "cloudinary", level: 65, icon: "🚀" },
      // { name: "Docker", level: 60, icon: "🐳" }
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const getSkillLevel = (level) => {
    if (level >= 90) return { label: "Expert", color: "#10b981" };
    if (level >= 75) return { label: "Advanced", color: "#3b82f6" };
    if (level >= 60) return { label: "Intermediate", color: "#f59e0b" };
    return { label: "Beginner", color: "#ef4444" };
  };

  return (
    <section className="skills-section">
      {/* Background Elements */}
      <div className="skills-bg-elements">
        <div className="skill-shape shape-1"></div>
        <div className="skill-shape shape-2"></div>
        <div className="skill-shape shape-3"></div>
      </div>

      <div className="skills-container">
        {/* Header */}
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>My Skills</h2>
          <p>Technologies & Tools I work with to bring ideas to life</p>
        </motion.div>

        <div className="skills-content">
          {/* Category Navigation */}
          <motion.div 
            className="category-nav"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {skillsData.map((category, index) => (
              <motion.button
                key={index}
                className={`category-btn ${activeCategory === index ? 'active' : ''}`}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  '--category-color': category.color,
                  borderLeftColor: activeCategory === index ? category.color : 'transparent'
                }}
              >
                <div className="category-icon">{category.icon}</div>
                <span className="category-name">{category.category}</span>
                <span className="skills-count">{category.skills.length}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Display */}
          <motion.div 
            className="skills-display"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            key={activeCategory}
          >
            <div className="skills-category-header">
              <div 
                className="category-header-icon"
                style={{ backgroundColor: skillsData[activeCategory].color }}
              >
                {skillsData[activeCategory].icon}
              </div>
              <div>
                <h3>{skillsData[activeCategory].category}</h3>
                <p>{skillsData[activeCategory].skills.length} skills</p>
              </div>
            </div>

            <div className="skills-grid">
              {skillsData[activeCategory].skills.map((skill, index) => {
                const levelInfo = getSkillLevel(skill.level);
                return (
                  <motion.div
                    key={index}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {/* Skill Header */}
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <div>
                          <h4 className="skill-name">{skill.name}</h4>
                          <span 
                            className="skill-level"
                            style={{ color: levelInfo.color }}
                          >
                            {levelInfo.label}
                          </span>
                        </div>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="skill-progress">
                      <div className="progress-track">
                        <motion.div 
                          className="progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                          style={{ backgroundColor: skillsData[activeCategory].color }}
                        />
                      </div>
                    </div>

                    {/* Skill Glow */}
                    <div 
                      className="skill-glow"
                      style={{ 
                        backgroundColor: skillsData[activeCategory].color,
                        opacity: 0.1
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Skills Summary */}
        <motion.div 
          className="skills-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="summary-item">
            <FaRocket className="summary-icon" />
            <div>
              <h3>Fast Learning</h3>
              <p>Quick to adapt and learn new technologies</p>
            </div>
          </div>
          <div className="summary-item">
            <FaCode className="summary-icon" />
            <div>
              <h3>Clean Code</h3>
              <p>Focus on readable and maintainable code</p>
            </div>
          </div>
          <div className="summary-item">
            <FaTools className="summary-icon" />
            <div>
              <h3>Problem Solving</h3>
              <p>Strong analytical and debugging skills</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
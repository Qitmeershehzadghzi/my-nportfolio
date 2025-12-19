import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaCode,
  FaDatabase,
  FaTools,
  FaPalette,
  FaServer,
  FaCloud,
  FaRocket,
  FaCheckCircle,
  FaLightbulb,
  FaChartLine,
  FaMobile,
  FaShieldAlt,
  FaBolt
} from "react-icons/fa";
import {
  Code,
  Database,
  Palette,
  Server,
  Cloud,
  Rocket,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  Shield,
  Zap,
  Cpu,
  GitBranch,
  Layout,
  Globe
} from "lucide-react";

const skillsData = [
  {
    category: "Frontend Development",
    icon: <Palette />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
    skills: [
      { name: "React", level: 85, icon: "⚛️", color: "bg-blue-500" },
      { name: "JavaScript", level: 90, icon: "🟨", color: "bg-yellow-500" },
      { name: "HTML5", level: 95, icon: "🌐", color: "bg-orange-500" },
      { name: "CSS3", level: 88, icon: "🎨", color: "bg-blue-400" },
      { name: "Tailwind CSS", level: 85, icon: "💨", color: "bg-cyan-500" },
      { name: "Responsive Design", level: 90, icon: <FaMobile />, color: "bg-purple-500" }
    ]
  },
  {
    category: "Backend Development",
    icon: <Server />,
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-gradient-to-br from-emerald-500/10 to-green-500/10",
    skills: [
      { name: "Node.js", level: 85, icon: "🟢", color: "bg-green-500" },
      { name: "Express.js", level: 80, icon: "🚂", color: "bg-gray-500" },
      { name: "REST APIs", level: 88, icon: "🔗", color: "bg-blue-600" },
      { name: "Authentication", level: 85, icon: "🔐", color: "bg-red-500" },
      { name: "JWT", level: 82, icon: <Shield />, color: "bg-purple-600" },
    ]
  },
  {
    category: "Database & Tools",
    icon: <Database />,
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-gradient-to-br from-yellow-500/10 to-amber-500/10",
    skills: [
      { name: "MongoDB", level: 80, icon: "🍃", color: "bg-green-600" },
      { name: "Git", level: 90, icon: <GitBranch />, color: "bg-orange-600" },
      { name: "GitHub", level: 85, icon: "🐙", color: "bg-gray-800" },
      { name: "VS Code", level: 95, icon: <Code />, color: "bg-blue-700" },
      { name: "Postman", level: 80, icon: "📬", color: "bg-orange-500" }
    ]
  },
  {
    category: "Technologies",
    icon: <Zap />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
    skills: [
      { name: "MERN Stack", level: 85, icon: "⚡", color: "bg-purple-500" },
      { name: "Netlify", level: 90, icon: <Cloud />, color: "bg-cyan-600" },
      { name: "Vercel", level: 85, icon: "▲", color: "bg-black" },
      { name: "Firebase", level: 75, icon: "🔥", color: "bg-yellow-600" },
      { name: "Cloudinary", level: 70, icon: "☁️", color: "bg-blue-400" },
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const getSkillLevel = (level) => {
    if (level >= 90) return { label: "Expert", color: "text-emerald-400", bg: "bg-emerald-500" };
    if (level >= 80) return { label: "Advanced", color: "text-blue-400", bg: "bg-blue-500" };
    if (level >= 70) return { label: "Intermediate", color: "text-yellow-400", bg: "bg-yellow-500" };
    return { label: "Beginner", color: "text-red-400", bg: "bg-red-500" };
  };

  const strengths = [
    { icon: <Lightbulb />, title: "Problem Solving", desc: "Analytical thinking and debugging complex issues" },
    { icon: <CheckCircle />, title: "Clean Code", desc: "Readable, maintainable and efficient code" },
    { icon: <TrendingUp />, title: "Fast Learning", desc: "Quick adaptation to new technologies" },
    { icon: <Rocket />, title: "Performance", desc: "Optimized and scalable solutions" },
    { icon: <Cpu />, title: "Architecture", desc: "Robust system design and planning" },
    { icon: <Globe />, title: "Responsive", desc: "Cross-device compatibility" }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        {/* Animated Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-emerald-500/10 via-transparent to-cyan-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
        
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 text-sm font-semibold mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-gradient">Technical Skills</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-emerald-500">Expertise</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies & tools I work with to create exceptional digital experiences
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Category Navigation & Strengths */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Category Navigation */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Layout className="text-blue-400" />
                <span>Skill Categories</span>
              </h3>
              
              <div className="space-y-3">
                {skillsData.map((category, index) => (
                  <motion.button
                    key={index}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${
                      activeCategory === index
                        ? `bg-gradient-to-r ${category.color} text-white shadow-xl`
                        : 'bg-gray-800/30 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-600'
                    } border border-transparent hover:border-gray-600`}
                    onClick={() => setActiveCategory(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${
                        activeCategory === index ? 'bg-white/20' : 'bg-gray-700/50 group-hover:bg-gray-700'
                      }`}>
                        {category.icon}
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold">{category.category}</h4>
                        <p className="text-sm opacity-75">{category.skills.length} skills</p>
                      </div>
                    </div>
                    {activeCategory === index && (
                      <motion.div
                        layoutId="activeCategory"
                        className="w-2 h-2 rounded-full bg-white"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Key Strengths */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Rocket className="text-purple-400" />
                <span>Key Strengths</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {strengths.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900/30 rounded-xl p-4 border border-gray-700/50 hover:border-blue-500/30 transition-colors group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex flex-col items-center text-center gap-2">
                      <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Display */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            key={activeCategory}
          >
            <div className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 ${skillsData[activeCategory].bgColor}`}>
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${skillsData[activeCategory].color}`}>
                  {skillsData[activeCategory].icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {skillsData[activeCategory].category}
                  </h3>
                  <p className="text-gray-400">Proficiency Overview</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillsData[activeCategory].skills.map((skill, index) => {
                  const levelInfo = getSkillLevel(skill.level);
                  return (
                    <motion.div
                      key={index}
                      className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-gray-600 transition-colors group"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${skill.color} text-white group-hover:scale-110 transition-transform`}>
                            {typeof skill.icon === 'string' ? (
                              <span className="text-lg">{skill.icon}</span>
                            ) : (
                              skill.icon
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">{skill.name}</h4>
                            <span className={`text-xs font-medium ${levelInfo.color}`}>
                              {levelInfo.label}
                            </span>
                          </div>
                        </div>
                        <span className="text-lg font-bold text-gray-300">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden mb-2">
                        <motion.div
                          className={`h-full rounded-full ${levelInfo.bg}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                        />
                      </div>
                      
                      {/* Skill Levels */}
                      <div className="flex justify-between text-xs text-gray-500">
                        <span className={skill.level >= 70 ? "text-gray-400" : ""}>Beginner</span>
                        <span className={skill.level >= 80 ? "text-gray-400" : ""}>Intermediate</span>
                        <span className={skill.level >= 90 ? "text-emerald-400 font-semibold" : ""}>Expert</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
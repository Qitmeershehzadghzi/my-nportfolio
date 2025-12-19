import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaStar, FaRocket } from "react-icons/fa";

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

  const getProgressWidth = (level) => {
    switch (level) {
      case "beginner": return 40;
      case "intermediate": return 65;
      case "advanced": return 85;
      case "expert": return 95;
      default: return 50;
    }
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl p-6 border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm hover:border-sky-500/30 transition-all duration-300 group`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.02,
        y: -5,
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
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-slate-800 text-2xl text-sky-400 group-hover:scale-110 transition-transform duration-300">
          {icon || <FaRocket />}
        </div>
        <div className="flex items-center gap-2 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-700/50">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: getLevelColor(level) }}
          ></span>
          <span className="text-lg">{getLevelIcon(level)}</span>
        </div>
      </div>

      {/* Skill Content */}
      <div className="mb-6">
        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">{name}</h4>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded text-xs uppercase tracking-wider">{category}</span>
          <span className="font-semibold capitalize" style={{ color: getLevelColor(level) }}>
            {level}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full relative overflow-hidden"
            initial={{ width: 0 }}
            whileInView={{ width: `${getProgressWidth(level)}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ backgroundColor: getLevelColor(level) }}
          >
            <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
          </motion.div>
        </div>
        <div className="flex justify-end">
          <span className="text-xs font-bold text-slate-500">{getProgressWidth(level)}% Proficiency</span>
        </div>
      </div>

      {/* Hover Effect */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      ></div>
    </motion.div>
  );
};

export default SkillCard;
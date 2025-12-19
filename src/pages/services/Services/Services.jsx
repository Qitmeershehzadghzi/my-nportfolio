import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaLaptop,
  FaVideo,
  FaArrowRight,
  FaRocket,
  FaClock,
  FaCheckCircle
} from "react-icons/fa";
import {
  Code,
  Monitor,
  Video,
  ArrowRight,
  Rocket,
  Clock,
  CheckCircle,
  Zap,
  Layers,
  Sparkles,
  Target,
  Users,
  Shield,
  BarChart
} from "lucide-react";

const Services = () => {
  const location = useLocation();
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      name: "MERN Stack Development",
      path: "mern-stack",
      icon: <Code />,
      description: "Full-stack web applications using MongoDB, Express, React, and Node.js",
      color: "text-blue-500",
      borderColor: "border-blue-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      hoverGradient: "hover:from-blue-500/20 hover:to-cyan-500/20",
      features: ["RESTful APIs", "Real-time Features", "Database Design", "Deployment"]
    },
    {
      name: "MS Office Training",
      path: "ms-office",
      icon: <Monitor />,
      description: "Professional MS Office training for individuals and organizations",
      color: "text-emerald-500",
      borderColor: "border-emerald-500",
      bgGradient: "from-emerald-500/10 to-green-500/10",
      hoverGradient: "hover:from-emerald-500/20 hover:to-green-500/20",
      features: ["Word", "Excel", "PowerPoint", "Outlook"]
    },
    {
      name: "Video Editing",
      path: "video-editing",
      icon: <Video />,
      description: "Professional video editing services for social media and presentations",
      color: "text-purple-500",
      borderColor: "border-purple-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      hoverGradient: "hover:from-purple-500/20 hover:to-pink-500/20",
      features: ["Adobe Premiere", "After Effects", "Color Grading", "Motion Graphics"]
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed", icon: <Rocket className="text-blue-400" /> },
    { number: "100%", label: "Client Satisfaction", icon: <CheckCircle className="text-emerald-400" /> },
    { number: "24/7", label: "Support", icon: <Clock className="text-purple-400" /> },
    { number: "1+", label: "Years Experience", icon: <Zap className="text-yellow-400" /> }
  ];

  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-500/10 via-transparent to-pink-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Services
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions to bring your digital ideas to life with expert
            precision and attention to detail
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-gray-700/50 flex items-center gap-4 group hover:border-gray-600 transition-colors"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</h3>
                <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Services Navigation */}
          <motion.div
            className="lg:col-span-4 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-blue-400 w-5 h-5" />
                <h3 className="text-xl font-bold text-white">What I Offer</h3>
              </div>
              
              <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                Choose from my range of professional services tailored to meet your specific needs
                and business requirements. Each service is designed to deliver maximum value.
              </p>

              <div className="space-y-4">
                {services.map((service, index) => {
                  const isActive = location.pathname.includes(service.path);
                  return (
                    <motion.div
                      key={service.path}
                      onHoverStart={() => setHoveredService(index)}
                      onHoverEnd={() => setHoveredService(null)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Link
                        to={service.path}
                        className={`block p-5 rounded-xl border transition-all duration-300 relative overflow-hidden ${isActive
                            ? `bg-gradient-to-r ${service.bgGradient} ${service.borderColor} shadow-lg`
                            : 'bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-700/50 hover:border-gray-600'
                          } group/link`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeService"
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"
                          />
                        )}
                        
                        <div className="relative z-10 flex items-start gap-4">
                          <div className={`p-3 rounded-lg ${isActive ? 'bg-white/10' : 'bg-gray-800/50 group-hover/link:bg-gray-800'} transition-colors`}>
                            <span className={isActive ? 'text-white' : service.color}>
                              {service.icon}
                            </span>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className={`font-semibold ${isActive ? 'text-white' : 'text-gray-300'}`}>
                                {service.name}
                              </h4>
                              {isActive && (
                                <ArrowRight className={`text-sm ${service.color} animate-pulse`} />
                              )}
                            </div>
                            <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                              {service.description}
                            </p>
                            
                            {/* Features Dropdown */}
                            <AnimatePresence>
                              {hoveredService === index && (
                                <motion.div
                                  className="flex flex-wrap gap-2"
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {service.features.map((feature, featureIndex) => (
                                    <span
                                      key={featureIndex}
                                      className="text-[10px] px-2 py-1 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300"
                                    >
                                      {feature}
                                    </span>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* CTA Section */}
            <motion.div
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 p-6 rounded-2xl text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
              
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  Ready to Start?
                </h4>
                <p className="text-blue-100 text-sm mb-6 max-w-xs mx-auto">
                  Let's discuss how I can help bring your vision to life with professional solutions
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group"
                >
                  Get In Touch
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Service Content */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            key={location.pathname}
          >
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 min-h-[600px] shadow-xl"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
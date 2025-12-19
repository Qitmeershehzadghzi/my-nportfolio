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
import {
  Database,
  Server,
  Cpu,
  Rocket,
  DollarSign,
  IndianRupee,
  Check,
  MessageCircle,
  Smartphone,
  Shield,
  Cloud,
  Zap,
  Layers
} from "lucide-react";

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
      popular: false,
      icon: <Cpu className="text-blue-400" />
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
      popular: true,
      icon: <Layers className="text-purple-400" />
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
      popular: false,
      icon: <Database className="text-emerald-400" />
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
      popular: false,
      icon: <Smartphone className="text-pink-400" />
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
      popular: false,
      icon: <Server className="text-orange-400" />
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
      popular: true,
      icon: <Zap className="text-yellow-400" />
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
      popular: false,
      icon: <Cloud className="text-cyan-400" />
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
      popular: false,
      icon: <Shield className="text-red-400" />
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
      popular: false,
      icon: <Database className="text-blue-400" />
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
      popular: true,
      icon: <Layers className="text-purple-400" />
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
      popular: false,
      icon: <MessageCircle className="text-pink-400" />
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
      popular: false,
      icon: <Cloud className="text-cyan-400" />
    },
  ];

  const handleWhatsAppOrder = (packageName, price, category) => {
    const message = `Hello! I want to order the ${packageName} (${category}) package for ${currency === 'USD' ? '$' : 'Rs '}${price}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const renderPackages = (packages, title) => (
    <motion.div
      className="mb-16 last:mb-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
        <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            className={`relative group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${pkg.popular
                ? 'border-blue-500/50 shadow-xl shadow-blue-500/10'
                : 'border-gray-700/50 hover:border-blue-500/30'
              } hover:shadow-2xl hover:shadow-blue-500/10`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            {pkg.popular && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl z-10">
                Most Popular
              </div>
            )}

            {/* Package Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900">
                {pkg.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-2">{pkg.name}</h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {currency === 'USD' ? '$' : 'Rs '}
                    {pkg.price[currency].toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 text-sm leading-relaxed">{pkg.description}</p>

            {/* Quick Info */}
            <div className="flex gap-3 mb-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-3 py-1.5 rounded-lg">
                <Rocket className="text-blue-400 w-4 h-4" />
                <span className="text-sm text-gray-300">{pkg.delivery}</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-3 py-1.5 rounded-lg">
                <Database className="text-purple-400 w-4 h-4" />
                <span className="text-sm text-gray-300 capitalize">{pkg.category}</span>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h5 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Technologies:
              </h5>
              <div className="flex flex-wrap gap-2">
                {pkg.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              <h5 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                Features:
              </h5>
              {pkg.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start gap-3 text-sm">
                  <Check className="text-emerald-500 w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="w-full py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-green-600/20 hover:shadow-green-600/40 group/btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleWhatsAppOrder(pkg.name, pkg.price[currency], pkg.category)}
            >
              <MessageCircle className="w-5 h-5 group-hover/btn:animate-bounce" />
              Order on WhatsApp
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-sm font-semibold mb-4">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              MERN Stack Development
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            Full-Stack <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Solutions</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl">
            Complete full-stack development services including Frontend, Backend, and MERN Stack solutions.
            12 comprehensive packages to choose from.
          </p>
        </div>

        {/* Currency Toggle */}
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 p-1 rounded-xl flex gap-1">
          <motion.button
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${currency === 'USD'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            onClick={() => setCurrency('USD')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <DollarSign className="w-4 h-4" /> USD
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${currency === 'PKR'
                ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            onClick={() => setCurrency('PKR')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IndianRupee className="w-4 h-4" /> PKR
          </motion.button>
        </div>
      </div>

      {/* Packages Section */}
      <div className="space-y-16">
        {renderPackages(frontendPackages, "Frontend Development")}
        {renderPackages(backendPackages, "Backend Development")}
        {renderPackages(mernPackages, "MERN Stack Development")}
      </div>
    </motion.div>
  );
};

export default MernStack;
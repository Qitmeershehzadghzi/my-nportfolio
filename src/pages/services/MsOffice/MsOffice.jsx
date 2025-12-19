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
import {
  FileText,
  Table,
  Presentation,
  Mail,
  Database,
  GraduationCap,
  Award,
  Clock,
  Users,
  Rocket,
  DollarSign,
  IndianRupee,
  Check,
  User,
  UserPlus,
  Building,
  MessageCircle
} from "lucide-react";

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
      popular: false,
      icon: <GraduationCap className="text-emerald-400" />
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
      popular: true,
      icon: <Table className="text-blue-400" />
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
      popular: false,
      icon: <Database className="text-purple-400" />
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
      popular: false,
      icon: <Building className="text-cyan-400" />
    }
  ];

  const handleWhatsAppOrder = (packageName, price) => {
    const message = `Hello! I want to enroll in the ${packageName} training package for ${currency === 'USD' ? '$' : 'Rs '}${price}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 text-sm font-semibold mb-4">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              MS Office Training
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            Professional <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-cyan-500 bg-clip-text text-transparent">Skills Training</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl">
            Comprehensive Microsoft Office training programs designed to enhance
            productivity and professional skills for individuals and organizations.
          </p>
        </div>

        {/* Currency Toggle */}
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 p-1 rounded-xl flex gap-1">
          <motion.button
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${currency === 'USD'
                ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg'
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
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
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
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-green-500 rounded-full"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">Training Packages</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trainingPackages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${pkg.popular
                  ? 'border-emerald-500/50 shadow-xl shadow-emerald-500/10'
                  : 'border-gray-700/50 hover:border-emerald-500/30'
                } hover:shadow-2xl hover:shadow-emerald-500/10`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl z-10">
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
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                      {currency === 'USD' ? '$' : 'Rs '}
                      {pkg.price[currency].toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 px-3 py-1.5 rounded-lg">
                  <Clock className="text-emerald-400 w-4 h-4" />
                  <span className="text-sm text-gray-300">{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-3 py-1.5 rounded-lg">
                  <GraduationCap className="text-blue-400 w-4 h-4" />
                  <span className="text-sm text-gray-300">{pkg.sessions}</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 px-3 py-1.5 rounded-lg">
                  <Award className="text-yellow-400 w-4 h-4" />
                  <span className="text-sm text-gray-300">{pkg.level}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <h5 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Training Includes:
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
                onClick={() => handleWhatsAppOrder(pkg.name, pkg.price[currency])}
              >
                <MessageCircle className="w-5 h-5 group-hover/btn:animate-bounce" />
                Enroll via WhatsApp
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MsOffice;
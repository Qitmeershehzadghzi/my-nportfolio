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
  FaEdit,
  FaWhatsapp
} from "react-icons/fa";
import {
  Video,
  Film,
  Sparkles,
  Play,
  Youtube,
  Instagram,
  Facebook,
  Rocket,
  DollarSign,
  IndianRupee,
  Check,
  Clock,
  Edit,
  MessageCircle,
  Zap
} from "lucide-react";

const VideoEditing = () => {
  const [currency, setCurrency] = useState("USD");
  const phoneNumber = "03053158512";

  const editingPackages = [
    {
      name: "Basic Social Media Edit",
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
        "1080p Resolution"
      ],
      bestFor: ["YouTube Shorts", "Instagram Reels", "Facebook Videos"],
      popular: false,
      icon: <Video className="text-purple-400" />
    },
    {
      name: "Content Creator Package",
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
        "4K Resolution"
      ],
      bestFor: ["YouTube Videos", "Product Demos", "Tutorials"],
      popular: true,
      icon: <Film className="text-pink-400" />
    },
    {
      name: "Premium Corporate Edit",
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
        "4K/6K Resolution"
      ],
      bestFor: ["Corporate Videos", "Commercials", "Music Videos"],
      popular: false,
      icon: <Sparkles className="text-cyan-400" />
    },
    {
      name: "Enterprise Video Production",
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
        "Multi-camera Editing"
      ],
      bestFor: ["Feature Films", "Documentaries", "Large Campaigns"],
      popular: false,
      icon: <Play className="text-yellow-400" />
    }
  ];

  const handleWhatsAppOrder = (packageName, price) => {
    const message = `Hello! I want to order the ${packageName} package for ${currency === 'USD' ? '$' : 'Rs '}${price}. Please provide more details.`;
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-sm font-semibold mb-4">
            <Video className="w-4 h-4 text-purple-400" />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Video Editing Services
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            Professional <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">Video Editing</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl">
            Professional video editing services for social media, corporate videos,
            and personal projects. Engaging content that tells your story effectively.
          </p>
        </div>

        {/* Currency Toggle */}
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 p-1 rounded-xl flex gap-1">
          <motion.button
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${currency === 'USD'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
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
          <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">Editing Packages</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {editingPackages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${pkg.popular
                  ? 'border-purple-500/50 shadow-xl shadow-purple-500/10'
                  : 'border-gray-700/50 hover:border-purple-500/30'
                } hover:shadow-2xl hover:shadow-purple-500/10`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl z-10">
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
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                      {currency === 'USD' ? '$' : 'Rs '}
                      {pkg.price[currency].toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500">/video</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 text-sm leading-relaxed">{pkg.description}</p>

              {/* Quick Info */}
              <div className="flex gap-3 mb-6">
                <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-3 py-1.5 rounded-lg">
                  <Clock className="text-purple-400 w-4 h-4" />
                  <span className="text-sm text-gray-300">{pkg.delivery}</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-3 py-1.5 rounded-lg">
                  <Edit className="text-blue-400 w-4 h-4" />
                  <span className="text-sm text-gray-300">{pkg.revisions}</span>
                </div>
              </div>

              {/* Best For */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Best For:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {pkg.bestFor.map((platform, platformIndex) => (
                    <span
                      key={platformIndex}
                      className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <h5 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  What's Included:
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
                Order on WhatsApp
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VideoEditing;
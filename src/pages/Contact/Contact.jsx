import React from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  MessageSquare,
  User,
  Target,
  Sparkles
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin />,
      title: "Location",
      value: "Pakistan",
      link: "#",
      color: "text-red-400",
      bgColor: "from-red-500/10 to-rose-500/10"
    },
    {
      icon: <Phone />,
      title: "Phone",
      value: "+92 305 3158512",
      link: "tel:+923053158512",
      color: "text-emerald-400",
      bgColor: "from-emerald-500/10 to-green-500/10"
    },
    {
      icon: <Mail />,
      title: "Email",
      value: "qitmeershehzad@gmail.com",
      link: "mailto:qitmeershehzad@gmail.com",
      color: "text-blue-400",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/qetmeer-shehzad-0b441b2ba/",
      color: "text-blue-400",
      bgColor: "from-blue-500/10 to-blue-600/10"
    },
    {
      icon: <Github />,
      name: "GitHub",
      url: "https://github.com/Qitmeershehzadghzi",
      color: "text-gray-300",
      bgColor: "from-gray-700/10 to-gray-800/10"
    }
  ];

  const handleFormSubmit = () => {
    toast.success("✅ Your message has been sent successfully!", {
      position: "top-right",
      autoClose: 4000,
    });
  };

  return (
    <section className="relative min-h-screen py-16 md:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        {/* Animated Gradients */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-emerald-500/10 via-transparent to-cyan-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toast Container */}
        <ToastContainer />

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact Me
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and bring your ideas to life. I'm here to help you create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-white">Let's Talk</h3>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${item.bgColor}`}>
                      <span className={`text-xl ${item.color}`}>{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-1">{item.title}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-gray-700/50">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br ${social.bgColor} backdrop-blur-sm border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group flex-1`}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className={`text-xl ${social.color} group-hover:scale-110 transition-transform`}>
                        {social.icon}
                      </span>
                      <span className="text-white font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl">
              <form 
                action="https://formsubmit.co/qitmeershehzad@gmail.com" 
                method="POST"
                className="space-y-6"
                onSubmit={handleFormSubmit}
              >
                {/* FormSubmit hidden inputs */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={window.location.href} />

                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-300">
                      <User className="w-4 h-4 text-blue-400" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all shadow-inner"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-300">
                      <Mail className="w-4 h-4 text-emerald-400" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all shadow-inner"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <Target className="w-4 h-4 text-purple-400" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all shadow-inner"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <MessageSquare className="w-4 h-4 text-cyan-400" />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all shadow-inner resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-3 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5 group-hover:animate-bounce" />
                  Send Message
                </motion.button>
              </form>

              {/* Form Note */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <p className="text-sm text-gray-400 text-center">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
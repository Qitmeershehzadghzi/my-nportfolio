import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
  FaPaperPlane,
  FaEnvelope,
  FaCode,
  FaPalette,
  FaDatabase,
  FaHeart,
  FaRegCopyright
} from 'react-icons/fa';
import {
  Github,
  Linkedin,
  Facebook,
  ArrowUp,
  Send,
  Mail,
  Code2,
  Palette,
  Database,
  Heart,
  Copyright,
  Sparkles,
  Zap,
  Target,
  MessageSquare,
  Calendar
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Dummy subscription logic
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Skills', href: '/skills' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    {
      icon: <Github />,
      label: 'GitHub',
      href: 'https://github.com/Qitmeershehzadghzi',
      color: 'from-gray-800 to-gray-900',
      hoverColor: 'hover:from-gray-700 hover:to-gray-800',
      iconColor: 'text-gray-300'
    },
    {
      icon: <Linkedin />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/qetmeer-shehzad-0b441b2ba/',
      color: 'from-blue-800/20 to-blue-900/20',
      hoverColor: 'hover:from-blue-700/30 hover:to-blue-800/30',
      iconColor: 'text-blue-400'
    },
    {
      icon: <Facebook />,
      label: 'Facebook',
      href: 'https://www.facebook.com/share/17Kjmcm91v/',
      color: 'from-indigo-800/20 to-indigo-900/20',
      hoverColor: 'hover:from-indigo-700/30 hover:to-indigo-800/30',
      iconColor: 'text-indigo-400'
    },
  ];

  const skills = [
    { icon: <Code2 />, label: 'MERN Stack' },
    { icon: <Palette />, label: 'UI/UX Design' },
    { icon: <Database />, label: 'Database' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        {/* Animated Gradients */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-500/10 via-transparent to-cyan-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-full shadow-xl shadow-blue-500/30">
                  <span className="text-3xl font-extrabold text-white block w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">Q</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-gray-950 animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-none">
                  Qetmeer
                </h3>
                <p className="text-sm text-blue-300 font-medium flex items-center gap-2">
                  <Zap className="w-3 h-3" />
                  Full Stack Developer
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Crafting exceptional digital experiences with cutting-edge technologies and modern design principles. 
              Let's build something amazing together.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-blue-500/20 text-blue-300 transition-all duration-300 hover:scale-105 hover:border-blue-400/40"
                >
                  <span className="mr-1.5 text-blue-400">{skill.icon}</span>
                  {skill.label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="group flex items-center text-gray-400 hover:text-blue-400 transition-all duration-300 text-base font-medium"
                  >
                    <div className="w-0 group-hover:w-3 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 mr-0 group-hover:mr-3 rounded-full"></div>
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-cyan-500 rounded-full"></div>
              <span>Connect With Me</span>
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  className={`group flex items-center space-x-4 p-3 rounded-xl bg-gradient-to-br ${social.color} backdrop-blur-sm border border-gray-700/50 transition-all duration-300 transform hover:scale-[1.02] ${social.hoverColor}`}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 ${social.iconColor} group-hover:scale-110 transition-transform`}>
                    {social.icon}
                  </div>
                  <div>
                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{social.label}</span>
                    <p className="text-xs text-gray-500 mt-1">Connect & Follow</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              <span>Stay Updated</span>
            </h4>
            <div className="space-y-5">
              <p className="text-gray-300 text-sm leading-relaxed">
                Subscribe to get notified about my latest projects, updates, and tech insights.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all shadow-xl"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed ${subscribed ? 'from-emerald-600 to-green-600 shadow-emerald-500/20' : ''}`}
                  disabled={subscribed}
                >
                  <span className="font-semibold">
                    {subscribed ? 'Subscribed! Thank You.' : 'Subscribe Now'}
                  </span>
                  <Send className={`text-sm ${subscribed ? 'animate-bounce' : ''}`} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <Copyright className="text-blue-500 w-4 h-4" />
            <span>{new Date().getFullYear()} Qetmeer. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="text-red-500 animate-pulse w-4 h-4 mx-1" />
            <span>by <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Qetmeer</span></span>
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm text-blue-400 rounded-full border border-gray-700/50 hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300 shadow-xl shadow-gray-900/30"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CV_DOWNLOAD_URL from '../../../public/Qetmeer_CV.pdf'
// Icons (Using Lucide React)
import {
  Home,
  User,
  FolderKanban,
  Briefcase,
  Code2,
  Mail,
  Sun,
  Moon,
  Download,
  Menu,
  X,
  Sparkles,
  Zap,
  ArrowRight
} from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // const ";

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // CV Download Handler 
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CV_DOWNLOAD_URL; 
    link.download = 'Qetmeer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { path: "/", label: "Home", icon: <Home /> },
    { path: "/about", label: "About", icon: <User /> },
    { path: "/projects", label: "Projects", icon: <FolderKanban /> },
    { path: "/services", label: "Services", icon: <Briefcase /> },
    { path: "/skills", label: "Skills", icon: <Code2 /> }, 
    { path: "/contact", label: "Contact", icon: <Mail /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-inter ${
        scrolled 
          ? "bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-xl shadow-2xl shadow-blue-900/40 py-3 border-b border-gray-800/50" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 relative overflow-hidden">
                <span className="text-2xl font-bold text-white relative z-10">Q</span>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 animate-pulse"></div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-gray-950 animate-ping"></div>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-white leading-none">
                Qetm<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">eer</span>
              </h1>
              <p className="text-xs text-gray-400 font-medium flex items-center gap-1">
                <Zap className="w-3 h-3 text-blue-400" />
                MERN Stack Dev
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-1 p-1 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all duration-300 text-sm font-semibold group ${
                    location.pathname === item.path
                      ? "text-white bg-gradient-to-r from-blue-600/50 to-purple-600/50 shadow-lg shadow-blue-500/20"
                      : "text-gray-300 hover:text-blue-300 hover:bg-gradient-to-r hover:from-gray-700/30 hover:to-gray-800/30"
                  }`}
                >
                  <span className={`text-base ${location.pathname === item.path ? 'text-white' : 'text-gray-400 group-hover:text-blue-400'}`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl text-gray-300 hover:text-yellow-300 hover:bg-gradient-to-br hover:from-gray-700/30 hover:to-gray-800/30 transition-all duration-300 border border-gray-700/50"
                aria-label="Toggle theme"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center space-x-2 text-sm group"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                <span>Download CV</span>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl text-gray-300 hover:text-yellow-300 transition-all duration-300 border border-gray-700/50"
              aria-label="Toggle theme"
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-3 text-gray-300 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl hover:text-white transition-all duration-300 border border-gray-700/50"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-gradient-to-br from-gray-900/95 to-gray-950/95 backdrop-blur-xl border-t border-gray-800/50 absolute w-full shadow-2xl"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center space-x-4 px-4 py-3.5 rounded-xl transition-all font-medium group ${
                    location.pathname === item.path
                      ? "bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-white border border-blue-500/50"
                      : "text-gray-300 hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-900/50 hover:text-blue-300"
                  }`}
                >
                  <span className={`text-xl ${location.pathname === item.path ? 'text-blue-400' : 'text-gray-500 group-hover:text-blue-400'}`}>
                    {item.icon}
                  </span>
                  <span className="flex-1">{item.label}</span>
                  {location.pathname === item.path && (
                    <ArrowRight className="w-4 h-4 text-blue-400 animate-pulse" />
                  )}
                </Link>
              ))}
              <div className="pt-6 mt-4 border-t border-gray-800/50 space-y-4">
                <motion.button
                  onClick={() => setDarkMode(!darkMode)}
                  className="w-full flex items-center justify-center gap-2 p-3 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl text-gray-300 hover:text-yellow-300 border border-gray-700/50 transition-colors"
                  whileTap={{ scale: 0.98 }}
                >
                  {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  <span>Switch to {darkMode ? 'Light' : 'Dark'} Mode</span>
                </motion.button>
                <motion.button
                  onClick={handleDownloadCV}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/30"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
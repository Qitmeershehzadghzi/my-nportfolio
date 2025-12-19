import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// CSS import karein (agar aapne home.css banaya hai)
// import './home.css';

// Inline SVG Icons (aapke original icons yahi rahenge)
const DownloadIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>);
const EyeIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>);
const GithubIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.01-3.79s-1.12-.35-3.64 1.5c-1-.28-2.07-.38-3.13-.38-.03 0-.06 0-.09 0C10.74 5.01 9.67 5.11 8.64 5.39c-2.52-1.85-3.64-1.5-3.64-1.5a5.07 5.07 0 0 0-.02 3.79A5.44 5.44 0 0 0 2 13c0 5.44 3.3 6.64 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>);
const LinkedinIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);
const RocketIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 15.5c-1.1 0-2-.9-2-2s.9-2 2-2h15c1.1 0 2 .9 2 2s-.9 2-2 2h-15zM12 21v-3"/><path d="M15 15h3.5a1 1 0 0 0 0-2H15V8.5a1 1 0 0 0-2 0V12h-3.5a1 1 0 0 0 0 2H10v3"/><path d="M12 3v2"/></svg>);
const CodeIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);
const ArrowDownIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>);
const NodeJsIcon = (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" fill="currentColor"/><path d="M12 8.414L8.414 12 12 15.586 15.586 12z" fill="none" stroke="currentColor"/><path d="M12 5.5V18.5M5.5 12H18.5" stroke="currentColor"/></svg>);
const ReactIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2.8"/><path d="M14.5 17.5l-2.5-5 2.5-5M9.5 6.5l2.5 5-2.5 5"/></svg>);
const StarIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>);
const CheckCircleIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>);
const LightbulbIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1.5.2-3 0-4.5"/><path d="M10 14c-.2-1.5-.2-3 0-4.5"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 18c-1.1 0-2-.9-2-2v-2h4v2c0 1.1-.9 2-2 2z"/></svg>);
const LayersIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>);
const MongodbIcon = (props) => (<svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><ellipse cx="12" cy="12" rx="4" ry="1.5"/></svg>);
const ExpressIcon = (props) => (<svg {...props} viewBox="0 0 24 24" fill="currentColor"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fontWeight="bold">Ex</text></svg>);
const TailwindIcon = (props) => (<svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 18.5c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6zm0-10c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zM12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"/></svg>);
const JavascriptIcon = (props) => (<svg {...props} viewBox="0 0 24 24" fill="currentColor"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fontWeight="bold">JS</text></svg>);
// const TypescriptIcon = (props) => (<svg {...props} viewBox="0 0 24 24" fill="currentColor"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fontWeight="bold">TS</text></svg>);
const DesignServicesIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/></svg>);

const profile = "https://avatars.githubusercontent.com/u/153637774?s=400&u=194a64b488b50f6d67a1e6220c734e4c4013f6b2&v=4";
const cv = "#";

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const floatingVariants = {
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const technologies = [
    { name: "React", icon: <ReactIcon />, color: "text-cyan-400" },
    { name: "Node.js", icon: <NodeJsIcon />, color: "text-green-500" },
    { name: "Express", icon: <ExpressIcon />, color: "text-gray-300" },
    { name: "MongoDB", icon: <MongodbIcon />, color: "text-green-400" },
    { name: "JavaScript", icon: <JavascriptIcon />, color: "text-yellow-400" },
    { name: "Tailwind CSS", icon: <TailwindIcon />, color: "text-sky-400" },
    // { name: "TypeScript", icon: <TypescriptIcon />, color: "text-blue-400" },
  ];

  const features = [
    { icon: <CodeIcon />, text: "Clean & Efficient Code", color: "text-purple-400" },
    { icon: <DesignServicesIcon />, text: "Modern UI/UX Design", color: "text-pink-400" },
    { icon: <LightbulbIcon />, text: "Creative Solutions", color: "text-yellow-400" },
    { icon: <LayersIcon />, text: "Full Stack Development", color: "text-indigo-400" },
  ];

  const stats = [
    { value: "10+", label: "Projects", icon: <CheckCircleIcon className="text-green-500" /> },
    { value: "5+", label: "Months Experience", icon: <RocketIcon className="text-blue-500" /> },
    { value: "100%", label: "Client Satisfaction", icon: <StarIcon className="text-yellow-500" /> },
  ];

  const socialLinks = [
    { href: "https://github.com/Qitmeershehzadghzi", icon: <GithubIcon />, color: "hover:text-white" },
    { href: "https://www.linkedin.com/in/qetmeer-shehzad-0b441b2ba/", icon: <LinkedinIcon />, color: "hover:text-blue-400" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-24 lg:pt-32 pb-20 md:pb-28 lg:pb-36 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-20 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left w-full lg:w-1/2"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={textVariants}
              custom={0}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-morphism text-sm font-semibold mb-6 md:mb-8 backdrop-blur-lg shadow-2xl shadow-blue-900/20"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                <RocketIcon className="text-blue-400 w-4 h-4 relative" />
              </div>
              <span className="text-gradient-blue font-medium tracking-wide">Available for Opportunities</span>
            </motion.div>

            <motion.div variants={textVariants} custom={1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 tracking-tight leading-none text-white">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="text-gradient animate-gradient-x">Qetmeer</span>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-3 -right-6 text-xl md:text-2xl text-yellow-400 opacity-90"
                  >
                    <StarIcon className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.span>
                </span>
              </h1>
              <div className="h-1.5 w-20 md:w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto lg:mx-0 my-4 md:my-6 animate-gradient-x"></div>
            </motion.div>

            <motion.h2
              variants={textVariants}
              custom={2}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8 text-white"
            >
              <span className="text-gradient-blue tracking-wider">MERN Stack Developer</span>
              <span className="text-gray-600 mx-3 md:mx-4">|</span>
              <span className="text-amber-300/90 font-medium">Full Stack Engineer</span>
            </motion.h2>

            <motion.p
              variants={textVariants}
              custom={3}
              className="text-gray-300/90 text-base md:text-lg lg:text-xl max-w-2xl xl:max-w-3xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed"
            >
              Crafting exceptional digital experiences with cutting-edge technologies. 
              I specialize in building scalable, high-performance web applications using the{' '}
              <span className="font-bold text-blue-400">MERN</span> stack. Transforming complex problems into elegant, user-centric solutions.
            </motion.p>

            <motion.div
              variants={textVariants}
              custom={4}
              className="mb-8 md:mb-12"
            >
              <div className="text-sm text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2 justify-center lg:justify-start">
                <CodeIcon className="text-blue-400 w-4 h-4" />
                <span className="font-medium">Technology Stack</span>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="px-3 py-2 md:px-4 md:py-2.5 glass-card rounded-lg md:rounded-xl flex items-center gap-2 group hover:border-blue-400/30 transition-all duration-300"
                  >
                    <span className={`text-lg md:text-xl ${tech.color} w-5 h-5 md:w-6 md:h-6`}>{tech.icon}</span>
                    <span className="text-xs md:text-sm text-gray-300 group-hover:text-white font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={textVariants}
              custom={5}
              className="grid grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-12 max-w-md mx-auto lg:mx-0"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 md:p-4 glass-card rounded-lg md:rounded-xl transition-all duration-300 hover:bg-gray-800/30"
                >
                  <div className={`text-lg md:text-xl ${feature.color} w-4 h-4 md:w-5 md:h-5 flex-shrink-0`}>
                    {feature.icon}
                  </div>
                  <span className="text-xs md:text-sm text-gray-300 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={textVariants}
              custom={6}
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 mb-8 md:mb-12 border-t border-b border-gray-800/30 py-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer px-2 md:px-0">
                  <div className="flex items-center gap-1.5 md:gap-2 justify-center">
                    {React.cloneElement(stat.icon, { className: `w-4 h-4 md:w-5 md:h-5 ${stat.icon.props.className}` })}
                    <div className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-gradient transition-colors duration-300">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={textVariants}
              custom={7}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4 mb-8 md:mb-10"
            >
              <motion.a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl shadow-blue-700/30 flex items-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 w-full sm:w-auto justify-center group"
              >
                <DownloadIcon className="group-hover:animate-bounce w-4 h-4 md:w-5 md:h-5" />
                Download CV
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/projects"
                  className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-gray-700/50 text-white font-bold rounded-full hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300 flex items-center gap-2 justify-center group glass-card"
                >
                  <EyeIcon className="group-hover:scale-110 transition-transform w-4 h-4 md:w-5 md:h-5" />
                  View Projects
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={textVariants}
              custom={8}
              className="flex items-center justify-center lg:justify-start gap-3 md:gap-4"
            >
              <p className="text-xs md:text-sm text-gray-400 hidden md:block mr-2 uppercase tracking-wider font-medium">Connect:</p>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 text-lg md:text-xl p-2 md:p-3 rounded-full glass-card backdrop-blur-sm border border-gray-700/30 transition-all duration-300 shadow-lg ${social.color}`}
                >
                  {React.cloneElement(social.icon, { className: 'w-4 h-4 md:w-5 md:h-5' })}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="flex-1 relative w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              variants={floatingVariants}
              animate="floating"
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 blur-2xl md:blur-3xl animate-pulse-slow"></div>
              
              <div className="absolute inset-[-8px] md:inset-[-10px] rounded-full border border-blue-400/10 animate-spin-slow"></div>
              <div className="absolute inset-[-16px] md:inset-[-20px] rounded-full border border-purple-400/10 animate-spin-slow-reverse" style={{ animationDelay: '1s' }}></div>

              <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-blue-400 via-cyan-400 to-purple-500 animate-gradient-x glow-effect">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-950 relative z-30 shadow-2xl">
                  <img
                    src={profile}
                    alt="Qetmeer - MERN Stack Developer"
                    className="w-full h-full object-cover transform transition-transform duration-700"
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src = "https://placehold.co/480x480/1e293b/ffffff?text=Qetmeer";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent"></div>
                </div>
              </div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-12 h-12 md:w-16 md:h-16 glass-card rounded-full flex items-center justify-center text-blue-400 shadow-xl shadow-blue-900/50 z-40"
              >
                <ReactIcon className="w-6 h-6 md:w-8 md:h-8 animate-pulse" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -left-4 md:-left-8 w-10 h-10 md:w-14 md:h-14 glass-card rounded-full flex items-center justify-center text-green-500 shadow-xl shadow-green-900/50 z-40"
              >
                <NodeJsIcon className="w-5 h-5 md:w-7 md:h-7" />
              </motion.div>

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-4 right-8 md:-bottom-6 md:right-10 w-10 h-10 md:w-12 md:h-12 glass-card rounded-full flex items-center justify-center text-green-400 shadow-xl shadow-green-900/50 z-40"
              >
                <MongodbIcon className="w-4 h-4 md:w-6 md:h-6" />
              </motion.div>

              <div className="absolute -bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-1.5 md:px-5 md:py-2 glass-morphism rounded-full shadow-xl shadow-emerald-900/30 z-40">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-emerald-500 rounded-full animate-ping absolute"></div>
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-emerald-500 rounded-full relative"></div>
                  <span className="text-xs md:text-sm font-semibold text-emerald-300">Open to Work</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 md:gap-2 z-30"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-blue-400"
          >
            <ArrowDownIcon className="w-5 h-5 md:w-6 md:h-6" />
          </motion.div>
          <span className="text-xs text-gray-400/80 tracking-widest uppercase animate-pulse">Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
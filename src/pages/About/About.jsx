import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code,          
  Package,       
  GraduationCap, 
  Rocket,        
  Award,         
  Download,      
  Calendar,      
  Lightbulb,     
  Check,         
  MapPin,        
  School,        
  User,
  Target,
  Clock,
  Users,
  Sparkles
} from "lucide-react";

const App = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const stats = [
    { number: "10+", label: "Projects Completed", icon: <Package />, color: "text-blue-500" },
    { number: "1+", label: "Year Experience", icon: <Clock />, color: "text-emerald-500" },
    { number: "10+", label: "Technologies", icon: <Code />, color: "text-purple-500" },
    { number: "100%", label: "Client Satisfaction", icon: <Users />, color: "text-amber-500" }
  ];

  const experiences = [
    {
      icon: <School className="text-blue-500" />,
      title: "Education",
      items: [
        "Matriculation in Commerce",
        "Intermediate in Commerce (2nd Year)",
        "Web Development Course - Saylani"
      ]
    },
    {
      icon: <Target className="text-emerald-500" />,
      title: "Technical Expertise",
      items: [
        "MERN Stack Development",
        "Frontend with React & Tailwind",
        "Backend with Node.js & Express",
        "MongoDB Database Design"
      ]
    },
    {
      icon: <Rocket className="text-purple-500" />,
      title: "Projects & Experience",
      items: [
        "3+ Full-stack Web Applications",
        "E-commerce Platforms",
        "Real-time Applications",
        "Portfolio & Business Websites"
      ]
    }
  ];

  return (
    <section ref={ref} className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        {/* Animated Gradients */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-emerald-500/10 via-transparent to-cyan-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
        
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
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-gradient">About Me</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Journey</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate MERN Stack Developer with 1+ year of experience creating
            dynamic and scalable web applications. Transforming ideas into reality
            through clean code and modern solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Stats & Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl bg-gray-900/50 ${stat.color} text-2xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {stat.icon}
                    </div>
                    <div>
                      <h3 className="text-4xl font-extrabold text-white mb-1">{stat.number}</h3>
                      <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Personal Info Card */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-gray-700/50 pb-4">
                <User className="text-blue-500" />
                <span>Personal Information</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-3 bg-gray-900/30 rounded-xl hover:bg-gray-800/50 transition-colors">
                  <MapPin className="text-blue-400 text-lg flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 font-medium">Location</p>
                    <p className="text-white font-semibold">Pakistan</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 bg-gray-900/30 rounded-xl hover:bg-gray-800/50 transition-colors">
                  <Calendar className="text-emerald-400 text-lg flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 font-medium">Experience</p>
                    <p className="text-white font-semibold">1+ Year</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 bg-gray-900/30 rounded-xl hover:bg-gray-800/50 transition-colors">
                  <Lightbulb className="text-amber-400 text-lg flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 font-medium">Specialization</p>
                    <p className="text-white font-semibold">MERN Stack Development</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Story Section */}
            <div className="bg-gradient-to-br from-blue-900/10 to-purple-900/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-gray-700/50 pb-4">
                <GraduationCap className="text-blue-400" />
                <span>My Journey</span>
              </h3>
              
              <div className="space-y-6">
                <motion.p
                  className="text-gray-300 leading-relaxed text-base"
                  initial={{ opacity: 0 }}
                  animate={hasAnimated ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  I completed my matriculation in Commerce and I am currently in 2nd year (Intermediate in Commerce). 
                  Alongside my studies, I have completed a Web Development course from Saylani, where I learned 
                  and practiced modern technologies including MERN Stack. My goal is to combine commerce knowledge with technical skills.
                </motion.p>
                
                <motion.p
                  className="text-gray-300 leading-relaxed text-base"
                  initial={{ opacity: 0 }}
                  animate={hasAnimated ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  I specialize in building full-stack web applications using MongoDB, Express.js, React, and Node.js. 
                  Through hands-on projects, I've gained experience in creating scalable, efficient, and user-friendly solutions, 
                  with a strong focus on clean code and robust architecture.
                </motion.p>
              </div>
            </div>

            {/* Experience Sections */}
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group hover:border-purple-500/30"
                  initial={{ opacity: 0, x: 30 }}
                  animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-4 mb-4 pb-3">
                    <div className="p-3 rounded-xl bg-gray-900/50 text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      {exp.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.items.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex} 
                        className="flex items-start gap-3 text-gray-300 group/item"
                        initial={{ opacity: 0, x: 20 }}
                        animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1.2 + itemIndex * 0.1 }}
                      >
                        <Check className="text-emerald-500 text-sm mt-1 flex-shrink-0 w-4 h-4 group-hover/item:scale-110 transition-transform" />
                        <span className="text-base">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 shadow-2xl shadow-blue-500/10"
              initial={{ opacity: 0, y: 30 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Bring Your Ideas to Life?</h3>
                <p className="text-gray-300 mb-8 max-w-md mx-auto">
                  Let's collaborate on your next digital product or web solution.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="#contact"
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Rocket className="w-4 h-4 group-hover:animate-bounce" />
                    Hire Me (Contact)
                  </motion.a>
                  
                  <motion.a
                    href="#"
                    className="px-8 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white font-semibold rounded-xl hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-4 h-4 group-hover:animate-bounce" />
                    Download CV
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default App;
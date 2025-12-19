import React from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import { 
  FaPaperPlane, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import './contact.css'
const Contact = () => {

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Pakistan",
      link: "#"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+92 305 3158512",
      link: "tel:+923053158512"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "qitmeershehzad@gmail.com",
      link: "mailto:qitmeershehzad@gmail.com"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/qetmeer-shehzad-0b441b2ba/",
      color: "#0077b5"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/Qitmeershehzadghzi",
      color: "#333"
    }
  ];

  // ✅ This function is triggered after form submit
  const handleFormSubmit = () => {
    toast.success("✅ Your message has been sent successfully!", {
      position: "top-right",
      autoClose: 4000,
    });
  };

  return (
    <section className="contact-section">
      <ToastContainer />
      
      {/* Background Elements */}
      <div className="contact-bg-elements">
        <div className="contact-shape shape-1"></div>
        <div className="contact-shape shape-2"></div>
        <div className="contact-shape shape-3"></div>
      </div>

      <div className="contact-container">
        {/* Header */}
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Get In Touch</h2>
          <p>Let's discuss your project and bring your ideas to life</p>
        </motion.div>

        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Let's Talk</h3>
            <p className="info-description">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll get back to you!
            </p>

            {/* Contact Details */}
            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="contact-detail"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="detail-icon">{item.icon}</div>
                  <div className="detail-content">
                    <span className="detail-title">{item.title}</span>
                    <span className="detail-value">{item.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{ '--social-color': social.color }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form 
              action="https://formsubmit.co/qitmeershehzad@gmail.com" 
              method="POST"
              className="contact-form"
              onSubmit={handleFormSubmit}
            >
              {/* FormSubmit hidden inputs */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={window.location.href} />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button type="submit" className="submit-btn">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react'

const Footer = () => {
  return (
<footer>
  <div className="footer-container">
    
    <div className="footer-about">
      <h3>Muhammad Saad</h3>
      <p>Web Developer | MERN Stack | Designer</p>
    </div>

    <div className="footer-links">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/projects">Projects</a>
      <a href="/contact">Contact</a>
      <a href="/skills">Skills</a>
    </div>

    <div className="footer-social">
      <a href="https://github.com/Qitmeershehzadghzi">GitHub</a> |
      <a href="https://www.linkedin.com/in/qetmeer-shehzad-0b441b2ba/">LinkedIn</a> |
      <a href="">facebook</a>
    </div>

    <div className="footer-bottom">
      <p>© 2025 Qetmeer. All Rights Reserved.</p>
    </div>
  </div>
</footer>

)
}

export default Footer
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>STANHOLE TRADING & PROJECTS</h3>
            <p>Your trusted partner for professional electrical and mechanical engineering solutions across South Africa.</p>
            <p>100% Black-Owned | B-BBEE Compliant</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Information</h4>
            <p>📞 <a href='tel:+27837360290'>083 736 0290</a></p>
            <p>✉️ <a href="mailto:info@stanhole.co.za">mailto:info@stanhole.co.za</a></p>
            <p>📍 Multiple locations across Gauteng and Limpopo</p>
          </div>

          <div className="footer-section">
            <h4>Business Details</h4>
            <p>REG NO: 2014/078224/07</p>
            <p>VAT: 4800292320</p>
            <p>B-BBEE: Level 1 Contributor</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy;<a href='https://singularitytech.co.za/'>SingularityTech</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
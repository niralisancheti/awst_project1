import { Link } from 'react-router-dom';
import { FaShoppingCart, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <FaShoppingCart className="logo-icon" />
              <h4>Apartment Grocery Sync</h4>
            </div>
            <p>Simplifying grocery management for apartment communities. Sync lists, share responsibilities, and never run out of essentials again.</p>
            <div className="social-links">
              <a href="#" className="social-link"><FaFacebook /></a>
              <a href="#" className="social-link"><FaTwitter /></a>
              <a href="#" className="social-link"><FaInstagram /></a>
              <a href="#" className="social-link"><FaLinkedin /></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/apply">Apply</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>info@apartmentgrocerysync.com</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>(123) 456-7890</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Grocery Lane, Apartment City</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Apartment Grocery Sync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

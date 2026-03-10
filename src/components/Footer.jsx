import { Link } from 'react-router-dom';
import { FaShoppingCart, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Link to="/" className="footer-logo-link">
                <FaShoppingCart className="logo-icon" />
                <h4>Apartment Grocery Sync</h4>
              </Link>
            </div>
            <p>Simplifying grocery management for apartment communities. Sync lists, share responsibilities, and never run out of essentials again.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook"><FaFacebook /></a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-link" title="X"><XIcon /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn"><FaLinkedin /></a>
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
            <a href="mailto:info@apartmentgrocerysync.com" className="contact-item contact-link">
              <FaEnvelope className="contact-icon" />
              <span>info@apartmentgrocerysync.com</span>
            </a>
            <a href="tel:+919999999999" className="contact-item contact-link">
              <FaPhone className="contact-icon" />
              <span>+91 99999 99999</span>
            </a>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Bengaluru, Karnataka, India</span>
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

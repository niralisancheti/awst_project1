import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Contact', path: '/contact' },
    { name: 'Apply', path: '/apply' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.12)' : '0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      <div className="container">
        <Link to="/" className="logo">
          <FaShoppingCart className="logo-icon" />
          <span>Apartment Grocery Sync</span>
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, i) => (
            <motion.li
              key={link.path}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.3 }}
            >
              <Link
                to={link.path}
                className={isActive(link.path) ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;

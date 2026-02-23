import { FaHeart, FaHandshake, FaClock, FaUsers, FaRocket, FaAward, FaShoppingCart } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>About Apartment Grocery Sync</h1>
            <p>Our mission is to make grocery management in apartments seamless, collaborative, and stress-free for everyone.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2023, Apartment Grocery Sync was born out of the frustration of managing shared groceries in busy apartment living. We realized that technology could simplify this everyday task and bring neighbors closer together.
              </p>
              <p>
                Our app allows roommates and neighbors to create shared lists, track purchases, and communicate effortlessly about household needs. What started as a simple solution has grown into a community-driven platform trusted by thousands of apartments worldwide.
              </p>
            </div>
            <div className="about-content">
              <h2>Our Values</h2>
              <ul className="values-list">
                <li><FaHeart className="inline text-secondary mr-2" /><strong>Collaboration:</strong> Making teamwork easy and enjoyable</li>
                <li><FaHandshake className="inline text-secondary mr-2" /><strong>Simplicity:</strong> User-friendly design for everyone</li>
                <li><FaClock className="inline text-secondary mr-2" /><strong>Efficiency:</strong> Saving time and reducing waste</li>
                <li><FaUsers className="inline text-secondary mr-2" /><strong>Community:</strong> Building stronger apartment connections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <FaRocket className="text-4xl text-secondary mb-3" />
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Happy Apartments</div>
            </div>
            <div className="stat-card">
              <FaShoppingCart className="text-4xl text-secondary mb-3" />
              <div className="stat-number">500,000+</div>
              <div className="stat-label">Items Tracked</div>
            </div>
            <div className="stat-card">
              <FaClock className="text-4xl text-secondary mb-3" />
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
            <div className="stat-card">
              <FaAward className="text-4xl text-secondary mb-3" />
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Growing Community</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start simplifying your apartment grocery management today and experience the difference.
            </p>
            <a href="/contact" className="btn bg-white text-primary hover:bg-light transform hover:scale-105 transition-all duration-300">
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

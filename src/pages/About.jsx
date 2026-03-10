import { FaHeart, FaHandshake, FaClock, FaUsers, FaRocket, FaAward, FaShoppingCart, FaCheckCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">About Us</span>
            <h1 className="hero-title">
              Building Better<br />
              <span className="hero-title-accent"> apartment Living</span>
            </h1>
            <p className="hero-subtitle">
              Our mission is to make grocery management in apartments seamless, collaborative, and stress-free for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">Founded on Frustration</h2>
            <p className="section-subtitle">
              Born from a simple problem: duplicate groceries and forgotten essentials.
            </p>
          </div>
          <div className="about-content-full">
            <p className="about-text">
              Founded in 2023, Apartment Grocery Sync was born out of the frustration of managing shared groceries in busy apartment living. We realized that technology could simplify this everyday task and bring neighbors closer together.
            </p>
            <p className="about-text">
              Our app allows roommates and neighbors to create shared lists, track purchases, and communicate effortlessly about household needs. What started as a simple solution has grown into a community-driven platform trusted by thousands of apartments worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-subtitle">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaHeart />
              </div>
              <h3>Collaboration</h3>
              <p>Making teamwork easy and enjoyable for every household.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaHandshake />
              </div>
              <h3>Simplicity</h3>
              <p>User-friendly design that anyone can use from day one.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaClock />
              </div>
              <h3>Efficiency</h3>
              <p>Saving time and reducing waste in your daily life.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaUsers />
              </div>
              <h3>Community</h3>
              <p>Building stronger apartment connections across the globe.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Impact</span>
            <h2 className="section-title">Numbers That Matter</h2>
          </div>
          <div className="stats-grid-4col">
            <div className="stat-card-landing">
              <div className="stat-icon-landing">
                <FaRocket />
              </div>
              <div className="stat-number-landing">10,000+</div>
              <div className="stat-label-landing">Happy Apartments</div>
            </div>
            <div className="stat-card-landing">
              <div className="stat-icon-landing">
                <FaShoppingCart />
              </div>
              <div className="stat-number-landing">500,000+</div>
              <div className="stat-label-landing">Items Tracked</div>
            </div>
            <div className="stat-card-landing">
              <div className="stat-icon-landing">
                <FaClock />
              </div>
              <div className="stat-number-landing">24/7</div>
              <div className="stat-label-landing">Support Available</div>
            </div>
            <div className="stat-card-landing">
              <div className="stat-icon-landing">
                <FaAward />
              </div>
              <div className="stat-number-landing">99.9%</div>
              <div className="stat-label-landing">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section-landing">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Growing Community</h2>
            <p>Start simplifying your apartment grocery management today and experience the difference.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary btn-lg">Get Started Now</a>
              <a href="/features" className="btn btn-outline-white btn-lg">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

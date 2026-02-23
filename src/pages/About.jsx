const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>About Apartment Grocery Sync</h1>
            <p>Our mission is to make grocery management in apartments seamless and collaborative.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2023, Apartment Grocery Sync was born out of the frustration of managing shared groceries in busy apartment living. We realized that technology could simplify this everyday task.
              </p>
              <p>
                Our app allows roommates and neighbors to create shared lists, track purchases, and communicate effortlessly about household needs.
              </p>
            </div>
            <div className="about-content">
              <h2>Our Values</h2>
              <ul className="values-list">
                <li><strong>Collaboration:</strong> Making teamwork easy</li>
                <li><strong>Simplicity:</strong> User-friendly design</li>
                <li><strong>Efficiency:</strong> Saving time and reducing waste</li>
                <li><strong>Community:</strong> Building stronger apartment connections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Happy Apartments</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500,000+</div>
              <div className="stat-label">Items Tracked</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

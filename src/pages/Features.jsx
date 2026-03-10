import { FaList, FaUsers, FaBox, FaBell, FaUtensils, FaMoneyBillWave, FaSync, FaLock, FaMobile, FaRocket, FaShieldAlt, FaChartLine, FaCheckCircle } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaList />,
      title: 'Shared Grocery Lists',
      description: 'Create lists that everyone in your apartment can access and update in real-time.',
      color: '#3c6e71'
    },
    {
      icon: <FaUsers />,
      title: 'Task Assignment',
      description: 'Assign shopping tasks to specific people and track completion easily.',
      color: '#4d8747'
    },
    {
      icon: <FaBox />,
      title: 'Inventory Tracking',
      description: 'Keep track of what\'s in your pantry and what needs to be restocked.',
      color: '#353535'
    },
    {
      icon: <FaBell />,
      title: 'Smart Notifications',
      description: 'Get reminders when items are running low or when lists are updated.',
      color: '#d97706'
    },
    {
      icon: <FaUtensils />,
      title: 'Recipe Integration',
      description: 'Add ingredients from recipes directly to your grocery list.',
      color: '#dc2626'
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Budget Tracking',
      description: 'Monitor spending and stay within your apartment\'s grocery budget.',
      color: '#4d8747'
    },
    {
      icon: <FaSync />,
      title: 'Real-time Sync',
      description: 'Updates happen instantly across all devices, keeping everyone in sync.',
      color: '#3c6e71'
    },
    {
      icon: <FaLock />,
      title: 'Secure Sharing',
      description: 'Private groups ensure your grocery lists are only shared with intended people.',
      color: '#6b7280'
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Optimized',
      description: 'Perfect experience on phones, tablets, and desktops for shopping on the go.',
      color: '#7c3aed'
    }
  ];

  const benefits = [
    { icon: <FaCheckCircle />, text: 'Never miss an item again' },
    { icon: <FaCheckCircle />, text: 'Eliminate duplicate purchases' },
    { icon: <FaCheckCircle />, text: 'Save time on coordination' },
    { icon: <FaCheckCircle />, text: 'Reduce food waste' },
  ];

  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Features</span>
            <h1 className="hero-title">
              Powerful Features for<br />
              <span className="hero-title-accent">Better Grocery Management</span>
            </h1>
            <p className="hero-subtitle">
              Discover what makes Apartment Grocery Sync the perfect tool for managing your apartment's groceries efficiently and collaboratively.
            </p>
            <div className="hero-benefits">
              {benefits.map((benefit, index) => (
                <div key={index} className="hero-benefit">
                  {benefit.icon}
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Everything You Need</span>
            <h2 className="section-title">Comprehensive Feature Set</h2>
            <p className="section-subtitle">
              Our comprehensive feature set ensures you never miss an item or duplicate purchases again.
            </p>
          </div>
          <div className="features-grid-3col">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card-landing"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="feature-icon-landing"
                  style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-showcase">
        <div className="container">
          <div className="showcase-grid">
            <div className="showcase-content">
              <span className="section-tag">How It Works</span>
              <h2 className="section-title">See It In Action</h2>
              <p className="showcase-text">
                Experience the power of collaborative grocery management. Watch as your roommates add items, 
                mark purchases, and stay in sync in real-time.
              </p>
              <div className="showcase-steps">
                <div className="showcase-step">
                  <div className="step-number">1</div>
                  <div>
                    <h4>Create Your List</h4>
                    <p>Add items you need with categories and priorities</p>
                  </div>
                </div>
                <div className="showcase-step">
                  <div className="step-number">2</div>
                  <div>
                    <h4>Share with Roommates</h4>
                    <p>Invite your apartment to collaborate</p>
                  </div>
                </div>
                <div className="showcase-step">
                  <div className="step-number">3</div>
                  <div>
                    <h4>Shop Together</h4>
                    <p>Track purchases in real-time</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="showcase-visual">
              <div className="demo-card">
                <div className="demo-card-header">
                  <FaRocket className="text-secondary" />
                  <span>Live Demo Preview</span>
                </div>
                <div className="demo-card-content">
                  <div className="demo-item">
                    <FaCheckCircle className="text-accent" />
                    <span>Organic Milk</span>
                    <span className="text-secondary text-sm">Dairy</span>
                  </div>
                  <div className="demo-item bought">
                    <FaCheckCircle className="text-secondary" />
                    <span>Whole Wheat Bread</span>
                    <span className="text-secondary text-sm">Bakery</span>
                  </div>
                  <div className="demo-item">
                    <FaCheckCircle className="text-accent" />
                    <span>Free Range Eggs</span>
                    <span className="text-secondary text-sm">Dairy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section-landing">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Simplify Your Grocery Shopping?</h2>
            <p>Join thousands of apartments already using Apartment Grocery Sync to streamline their grocery management.</p>
            <div className="cta-buttons">
              <a href="/" className="btn btn-primary btn-lg">Try the Demo</a>
              <a href="/contact" className="btn btn-outline-white btn-lg">Get Started</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;

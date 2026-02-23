import { FaList, FaUsers, FaBox, FaBell, FaUtensils, FaMoneyBillWave, FaSync, FaLock, FaMobile, FaRocket, FaShieldAlt, FaChartLine } from 'react-icons/fa';

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
      color: '#284b63'
    },
    {
      icon: <FaBox />,
      title: 'Inventory Tracking',
      description: 'Keep track of what\'s in your pantry and what needs to be restocked.',
      color: '#8b5cf6'
    },
    {
      icon: <FaBell />,
      title: 'Smart Notifications',
      description: 'Get reminders when items are running low or when lists are updated.',
      color: '#f59e0b'
    },
    {
      icon: <FaUtensils />,
      title: 'Recipe Integration',
      description: 'Add ingredients from recipes directly to your grocery list.',
      color: '#ef4444'
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Budget Tracking',
      description: 'Monitor spending and stay within your apartment\'s grocery budget.',
      color: '#10b981'
    },
    {
      icon: <FaSync />,
      title: 'Real-time Sync',
      description: 'Updates happen instantly across all devices, keeping everyone in sync.',
      color: '#6366f1'
    },
    {
      icon: <FaLock />,
      title: 'Secure Sharing',
      description: 'Private groups ensure your grocery lists are only shared with intended people.',
      color: '#64748b'
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Optimized',
      description: 'Perfect experience on phones, tablets, and desktops for shopping on the go.',
      color: '#ec4899'
    }
  ];

  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="flex items-center justify-center mb-4">
              <FaRocket className="text-secondary text-4xl mr-3" />
              <h1 className="text-5xl font-bold text-primary">
                Powerful Features
              </h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed">
              Discover what makes Apartment Grocery Sync the perfect tool for managing your apartment's groceries efficiently and collaboratively.
            </p>
            <div className="flex items-center justify-center mt-6 space-x-6">
              <div className="flex items-center space-x-2">
                <FaShieldAlt className="text-accent text-xl" />
                <span className="text-accent font-medium">Secure & Reliable</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaChartLine className="text-secondary text-xl" />
                <span className="text-secondary font-medium">Data-Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Everything You Need</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Our comprehensive feature set ensures you never miss an item or duplicate purchases again.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${feature.color}20`, color: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-secondary leading-relaxed">{feature.description}</p>
                <div 
                  className="mt-4 h-1 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: feature.color, width: '30%' }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-light to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">See It In Action</h2>
            <p className="text-lg text-secondary">Experience the power of collaborative grocery management</p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Roommate A</h3>
                <p className="text-sm text-secondary">Adds milk to the list</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FaSync className="text-white text-2xl animate-spin" style={{ animationDuration: '3s' }} />
                </div>
                <h3 className="font-semibold text-primary mb-2">Real-time Sync</h3>
                <p className="text-sm text-secondary">Instant updates</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FaBell className="text-white text-2xl" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Roommate B</h3>
                <p className="text-sm text-secondary">Gets notified immediately</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Simplify Your Grocery Shopping?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of apartments already using Apartment Grocery Sync to streamline their grocery management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact" className="btn bg-white text-primary hover:bg-light transform hover:scale-105 transition-all duration-300">
                Start Your Free Trial
              </a>
              <a href="#demo" onClick={(e) => { e.preventDefault(); document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
                Try Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;

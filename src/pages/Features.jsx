import { FaList, FaUsers, FaBox, FaBell, FaUtensils, FaMoneyBillWave, FaSync, FaLock, FaMobile, FaRocket, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Features = () => {
  const [visibleFeatures, setVisibleFeatures] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleFeatures([0, 1, 2]);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <FaList />,
      title: 'Shared Grocery Lists',
      description: 'Create lists that everyone in your apartment can access and update in real-time.',
      color: 'text-blue-500'
    },
    {
      icon: <FaUsers />,
      title: 'Task Assignment',
      description: 'Assign shopping tasks to specific people and track completion.',
      color: 'text-green-500'
    },
    {
      icon: <FaBox />,
      title: 'Inventory Tracking',
      description: 'Keep track of what\'s in your pantry and what needs to be restocked.',
      color: 'text-purple-500'
    },
    {
      icon: <FaBell />,
      title: 'Smart Notifications',
      description: 'Get reminders when items are running low or when lists are updated.',
      color: 'text-orange-500'
    },
    {
      icon: <FaUtensils />,
      title: 'Recipe Integration',
      description: 'Add ingredients from recipes directly to your grocery list.',
      color: 'text-red-500'
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Budget Tracking',
      description: 'Monitor spending and stay within your apartment\'s grocery budget.',
      color: 'text-teal-500'
    },
    {
      icon: <FaSync />,
      title: 'Real-time Sync',
      description: 'Updates happen instantly across all devices, keeping everyone in sync.',
      color: 'text-indigo-500'
    },
    {
      icon: <FaLock />,
      title: 'Secure Sharing',
      description: 'Private groups ensure your grocery lists are only shared with intended people.',
      color: 'text-gray-600'
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Optimized',
      description: 'Perfect experience on phones, tablets, and desktops for shopping on the go.',
      color: 'text-pink-500'
    }
  ];

  const handleFeatureHover = (index) => {
    setVisibleFeatures(prev => prev.includes(index) ? prev : [...prev, index]);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
        <div className="container relative">
          <div className="hero-content">
            <div className="flex items-center justify-center mb-4">
              <FaRocket className="text-secondary text-4xl mr-3" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Powerful Features
              </h1>
            </div>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed">
              Discover what makes Apartment Grocery Sync the perfect tool for managing your apartment's groceries efficiently and collaboratively.
            </p>
            <div className="flex items-center justify-center mt-6 space-x-4">
              <FaShieldAlt className="text-accent" />
              <span className="text-accent font-medium">Secure & Reliable</span>
              <FaChartLine className="text-secondary" />
              <span className="text-secondary font-medium">Data-Driven</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-20">
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
                className={`feature-card group ${visibleFeatures.includes(index) ? 'animate-fade-in' : 'opacity-0'}`}
                onMouseEnter={() => handleFeatureHover(index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`feature-icon ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-secondary leading-relaxed">{feature.description}</p>
                <div className="mt-4 w-0 group-hover:w-full h-1 bg-gradient-to-r from-secondary to-accent transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-to-r from-light to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">See It In Action</h2>
            <p className="text-lg text-secondary">Experience the power of collaborative grocery management</p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Roommate A</h3>
                <p className="text-sm text-secondary">Adds milk to the list</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaSync className="text-white text-2xl animate-spin" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Real-time Sync</h3>
                <p className="text-sm text-secondary">Instant updates</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBell className="text-white text-2xl" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Roommate B</h3>
                <p className="text-sm text-secondary">Gets notified immediately</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-90"></div>
        <div className="container relative">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Simplify Your Grocery Shopping?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of apartments already using Apartment Grocery Sync to streamline their grocery management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact" className="btn btn-primary bg-white text-primary hover:bg-light transform hover:scale-105 transition-all duration-300">
                Start Your Free Trial
              </a>
              <a href="#demo" className="btn border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
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

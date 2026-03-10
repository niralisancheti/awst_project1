import { useState, useEffect } from 'react';
import { FaShoppingCart, FaUsers, FaSync, FaCheckCircle, FaPlus, FaTrash, FaFilter, FaStar, FaArrowRight, FaHandshake, FaChartLine, FaBell, FaLightbulb, FaPiggyBank, FaRecycle, FaClock, FaShieldAlt, FaMobile, FaList, FaEnvelope, FaArrowDown, FaEdit, FaTimes, FaUserPlus, FaTrashAlt, FaHome, FaExclamationTriangle, FaMoneyBillWave, FaQuestionCircle } from 'react-icons/fa';

const Home = () => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('groceryItems');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'Organic Milk', category: 'Dairy', quantity: 1, bought: false, priority: 'high' },
      { id: 2, name: 'Whole Wheat Bread', category: 'Bakery', quantity: 1, bought: true, priority: 'medium' },
      { id: 3, name: 'Free Range Eggs', category: 'Dairy', quantity: 12, bought: false, priority: 'high' },
    ];
  });
  const [apartment, setApartment] = useState(() => {
    const saved = localStorage.getItem('apartmentData');
    return saved ? JSON.parse(saved) : null;
  });
  const [roommates, setRoommates] = useState(() => {
    const saved = localStorage.getItem('roommates');
    return saved ? JSON.parse(saved) : [];
  });
  const [newItem, setNewItem] = useState('');
  const [newCategory, setNewCategory] = useState('General');
  const [newQuantity, setNewQuantity] = useState(1);
  const [newPriority, setNewPriority] = useState('medium');
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editQuantity, setEditQuantity] = useState(1);
  const [editCategory, setEditCategory] = useState('General');
  const [toast, setToast] = useState(null);
  const [showApartmentModal, setShowApartmentModal] = useState(false);
  const [showRoommateModal, setShowRoommateModal] = useState(false);
  const [newApartmentName, setNewApartmentName] = useState('');
  const [newRoommateName, setNewRoommateName] = useState('');
  const [newRoommateEmail, setNewRoommateEmail] = useState('');

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    localStorage.setItem('groceryItems', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('apartmentData', JSON.stringify(apartment));
  }, [apartment]);

  useEffect(() => {
    localStorage.setItem('roommates', JSON.stringify(roommates));
  }, [roommates]);

  const createApartment = () => {
    if (newApartmentName.trim()) {
      setApartment({ name: newApartmentName, createdAt: new Date().toISOString() });
      setNewApartmentName('');
      setShowApartmentModal(false);
      showToast('Apartment created successfully!');
    }
  };

  const addRoommate = () => {
    if (newRoommateName.trim() && newRoommateEmail.trim()) {
      const newRoommate = {
        id: Date.now(),
        name: newRoommateName,
        email: newRoommateEmail,
        addedAt: new Date().toISOString()
      };
      setRoommates([...roommates, newRoommate]);
      setNewRoommateName('');
      setNewRoommateEmail('');
      setShowRoommateModal(false);
      showToast('Roommate added successfully!');
    }
  };

  const removeRoommate = (id) => {
    setRoommates(roommates.filter(r => r.id !== id));
    showToast('Roommate removed');
  };

  const addItem = () => {
    if (newItem.trim()) {
      const newItemObj = {
        id: Date.now(),
        name: newItem,
        category: newCategory,
        quantity: newQuantity,
        bought: false,
        priority: newPriority
      };
      setItems([...items, newItemObj]);
      setNewItem('');
      setNewCategory('General');
      setNewQuantity(1);
      setNewPriority('medium');
      setShowForm(false);
      showToast('Item added successfully!');
    }
  };

  const toggleBought = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, bought: !item.bought } : item
    ));
    const item = items.find(i => i.id === id);
    showToast(item?.bought ? 'Item marked as pending' : 'Item marked as bought');
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
    showToast('Item removed');
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditName(item.name);
    setEditQuantity(item.quantity);
    setEditCategory(item.category);
  };

  const saveEdit = () => {
    setItems(items.map(item =>
      item.id === editingId ? { ...item, name: editName, quantity: editQuantity, category: editCategory } : item
    ));
    setEditingId(null);
    showToast('Item updated successfully!');
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const filteredItems = items.filter(item => {
    const matchesFilter = filter === 'all' ||
      (filter === 'pending' && !item.bought) ||
      (filter === 'bought' && item.bought) ||
      item.category === filter ||
      item.priority === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['General', 'Dairy', 'Bakery', 'Produce', 'Meat', 'Pantry', 'Frozen'];
  const priorities = [
    { value: 'low', label: 'Low', color: '#4d8747' },
    { value: 'medium', label: 'Medium', color: '#d97706' },
    { value: 'high', label: 'High', color: '#dc2626' }
  ];

  const getPriorityIcon = (priority) => {
    const prio = priorities.find(p => p.value === priority);
    return <FaStar className="text-sm" style={{ color: prio?.color }} />;
  };

  const pendingCount = items.filter(item => !item.bought).length;
  const boughtCount = items.filter(item => item.bought).length;

  const features = [
    { icon: <FaList />, title: 'Shared Grocery Lists', description: 'Create lists that everyone in your apartment can access and update in real-time.', color: '#3c6e71' },
    { icon: <FaSync />, title: 'Real-Time Sync', description: 'Updates happen instantly across all devices, keeping everyone on the same page.', color: '#4d8747' },
    { icon: <FaBell />, title: 'Smart Notifications', description: 'Get reminders when items are running low or when lists are updated.', color: '#d97706' },
    { icon: <FaLightbulb />, title: 'Smart Suggestions', description: 'AI-powered suggestions based on your shopping patterns.', color: '#7c3aed' },
    { icon: <FaShieldAlt />, title: 'Secure Sharing', description: 'Private groups ensure your grocery lists are only shared with intended people.', color: '#6b7280' },
    { icon: <FaMobile />, title: 'Mobile Optimized', description: 'Perfect experience on phones, tablets, and desktops for shopping on the go.', color: '#3c6e71' },
  ];

  const howItWorks = [
    { step: 1, title: 'Create Your Apartment', description: 'Sign up and create your apartment group in seconds.', icon: <FaUsers /> },
    { step: 2, title: 'Add Roommates', description: 'Invite your roommates to join with a simple link.', icon: <FaHandshake /> },
    { step: 3, title: 'Sync Grocery Needs', description: 'Everyone adds items they need, and the app keeps track.', icon: <FaSync /> },
  ];

  const benefits = [
    { icon: <FaPiggyBank />, title: 'Save Money', description: 'Stop buying duplicates and only purchase what you need.', color: '#4d8747' },
    { icon: <FaRecycle />, title: 'Reduce Food Waste', description: 'Track what you have and buy only essentials.', color: '#3c6e71' },
    { icon: <FaClock />, title: 'Save Time', description: 'No more coordination calls or text messages.', color: '#d97706' },
    { icon: <FaChartLine />, title: 'Stay Organized', description: 'Keep all your grocery needs in one place.', color: '#7c3aed' },
  ];

  return (
    <div>
      {/* Toast Notification */}
      {toast && (
        <div className={`toast-notification ${toast.type}`}>
          {toast.message}
        </div>
      )}

      {/* Hero Section */}
      <section className="hero landing-hero">
        <div className="hero-bg-pattern"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Trusted by 10,000+ apartments</div>
            <h1 className="hero-title">
              Never Buy the Same<br />
              <span className="hero-title-accent">Groceries Twice</span>
            </h1>
            <p className="hero-subtitle">
              The smart way for roommates to manage shared grocery lists. 
              Sync in real-time, eliminate duplicates, and save money on every shopping trip.
            </p>
            <div className="hero-ctas">
              <a href="#demo" className="btn btn-primary btn-lg">
                Try the Demo
                <FaArrowRight className="ml-2" />
              </a>
              <a href="/features" className="btn btn-outline btn-lg">
                Learn More
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-number">500K+</span>
                <span className="hero-stat-label">Items Tracked</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">10K+</span>
                <span className="hero-stat-label">Happy Apartments</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">99.9%</span>
                <span className="hero-stat-label">Uptime</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-header">
                <FaShoppingCart className="text-secondary" />
                <span>Apartment Grocery Sync</span>
              </div>
              <div className="hero-card-content">
                <div className="hero-grocery-item">
                  <FaCheckCircle className="text-accent" />
                  <span>Organic Milk</span>
                  <span className="text-secondary text-sm">Dairy</span>
                </div>
                <div className="hero-grocery-item bought">
                  <FaCheckCircle className="text-secondary" />
                  <span>Whole Wheat Bread</span>
                  <span className="text-secondary text-sm">Bakery</span>
                </div>
                <div className="hero-grocery-item">
                  <FaCheckCircle className="text-accent" />
                  <span>Free Range Eggs</span>
                  <span className="text-secondary text-sm">Dairy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <FaArrowDown className="text-secondary animate-bounce" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">The Problem</span>
            <h2 className="section-title">Shared Living, Shared Headaches</h2>
            <p className="section-subtitle">
              Living with roommates sounds easy until it comes to groceries.
            </p>
          </div>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon"><FaSync /></div>
              <h3>Duplicate Purchases</h3>
              <p>You buy eggs, your roommate buys eggs. Now you have 2 dozen eggs you'll never use.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon"><FaExclamationTriangle /></div>
              <h3>Forgotten Essentials</h3>
              <p>Someone forgets to add milk to the list. Now you're out of cereal tomorrow morning.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon"><FaMoneyBillWave /></div>
              <h3>Wasted Money</h3>
              <p>Duplicate items and expired food mean throwing money in the trash every week.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="container">
          <div className="solution-content">
            <span className="section-tag">The Solution</span>
            <h2 className="section-title">One List, Everyone Synced</h2>
            <p className="solution-text">
              Apartment Grocery Sync brings all your grocery needs into one place. 
              See what everyone needs, track what's been bought, and never duplicate purchases again.
            </p>
            <ul className="solution-list">
              <li><FaCheckCircle className="text-accent" /> Real-time synchronization across all devices</li>
              <li><FaCheckCircle className="text-accent" /> Smart notifications when lists change</li>
              <li><FaCheckCircle className="text-accent" /> Priority-based item tracking</li>
              <li><FaCheckCircle className="text-accent" /> Category organization for easy shopping</li>
            </ul>
          </div>
          <div className="solution-visual">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-header">
                  <FaShoppingCart className="text-secondary" />
                  <span>Your List</span>
                </div>
                <div className="phone-items">
                  <div className="phone-item">
                    <FaCheckCircle className="text-accent" />
                    <span>Milk</span>
                  </div>
                  <div className="phone-item">
                    <FaCheckCircle className="text-secondary opacity-50" />
                    <span>Bread</span>
                  </div>
                  <div className="phone-item">
                    <FaCheckCircle className="text-accent" />
                    <span>Eggs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">Get Started in 3 Simple Steps</h2>
            <p className="section-subtitle">
              You and your roommates will be synced up in minutes.
            </p>
          </div>
          <div className="steps-grid">
            {howItWorks.map((step, index) => (
              <div key={index} className="step-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Features</span>
            <h2 className="section-title">Everything You Need to Stay Synced</h2>
            <p className="section-subtitle">
              Powerful features that make grocery management effortless.
            </p>
          </div>
          <div className="features-grid-3col">
            {features.map((feature, index) => (
              <div key={index} className="feature-card-landing" style={{ animationDelay: `${index * 0.1}s` }}>
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

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Benefits</span>
            <h2 className="section-title">Why You'll Love It</h2>
            <p className="section-subtitle">
              More than just a grocery list – it's a better way to live together.
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div 
                  className="benefit-icon"
                  style={{ backgroundColor: `${benefit.color}15`, color: benefit.color }}
                >
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="demo-section-landing">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Try It Out</span>
            <h2 className="section-title">Experience the Power of Sync</h2>
            <p className="section-subtitle">
              See for yourself how easy apartment grocery management can be.
            </p>
          </div>
          <div className="demo-container-landing">
            <div className="demo-stats-bar">
              <div className="demo-stat-item">
                <span className="demo-stat-number">{pendingCount}</span>
                <span className="demo-stat-label">Pending</span>
              </div>
              <div className="demo-stat-item">
                <span className="demo-stat-number">{boughtCount}</span>
                <span className="demo-stat-label">Completed</span>
              </div>
              <div className="demo-stat-item">
                <span className="demo-stat-number">{items.length}</span>
                <span className="demo-stat-label">Total Items</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <button
                onClick={() => setShowForm(!showForm)}
                className="btn btn-secondary inline-flex items-center gap-2"
              >
                <FaPlus />
                {showForm ? 'Hide Form' : 'Add New Item'}
              </button>
            </div>

            {showForm && (
              <div className="demo-form-landing animate-slide-down">
                <div className="form-row-landing">
                  <input
                    type="text"
                    placeholder="Item name..."
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    className="form-input-landing"
                    onKeyPress={(e) => e.key === 'Enter' && addItem()}
                  />
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="form-select-landing"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    min="1"
                    value={newQuantity}
                    onChange={(e) => setNewQuantity(parseInt(e.target.value))}
                    className="form-input-landing quantity-input-landing"
                    placeholder="Qty"
                  />
                  <select
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value)}
                    className="form-select-landing"
                  >
                    {priorities.map(p => (
                      <option key={p.value} value={p.value}>{p.label}</option>
                    ))}
                  </select>
                  <button
                    onClick={addItem}
                    className="btn btn-primary add-btn-landing"
                  >
                    <FaPlus /> Add
                  </button>
                </div>
              </div>
            )}

            <div className="filters-section-landing mb-6">
              <div className="search-bar-landing">
                <input
                  type="text"
                  placeholder="Search items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input-landing"
                />
                <FaFilter className="search-icon-landing" />
              </div>
              <div className="filter-buttons-landing">
                <button
                  onClick={() => setFilter('all')}
                  className={`filter-btn-landing ${filter === 'all' ? 'active' : ''}`}
                >
                  All ({items.length})
                </button>
                <button
                  onClick={() => setFilter('pending')}
                  className={`filter-btn-landing ${filter === 'pending' ? 'active' : ''}`}
                >
                  Pending ({pendingCount})
                </button>
                <button
                  onClick={() => setFilter('bought')}
                  className={`filter-btn-landing ${filter === 'bought' ? 'active' : ''}`}
                >
                  Bought ({boughtCount})
                </button>
                {categories.slice(0, 4).map(cat => {
                  const count = items.filter(item => item.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`filter-btn-landing ${filter === cat ? 'active' : ''}`}
                    >
                      {cat} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            <ul className="grocery-list-landing">
              {filteredItems.map((item, index) => (
                <li
                  key={item.id}
                  className={`grocery-item-landing ${item.bought ? 'bought' : ''}`}
                >
                  {editingId === item.id ? (
                    <div className="edit-form-landing">
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="form-input-landing"
                        autoFocus
                      />
                      <select
                        value={editCategory}
                        onChange={(e) => setEditCategory(e.target.value)}
                        className="form-select-landing"
                      >
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                      <input
                        type="number"
                        min="1"
                        value={editQuantity}
                        onChange={(e) => setEditQuantity(parseInt(e.target.value))}
                        className="form-input-landing quantity-input-landing"
                      />
                      <div className="edit-actions">
                        <button onClick={saveEdit} className="btn btn-primary btn-sm" title="Save">
                          <FaCheckCircle />
                        </button>
                        <button onClick={cancelEdit} className="btn btn-secondary btn-sm" title="Cancel">
                          <FaTimes />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="item-info-landing">
                        <div className="flex items-center gap-2">
                          <span className="item-name-landing">{item.name}</span>
                          {getPriorityIcon(item.priority)}
                        </div>
                        <span className="item-details-landing">
                          {item.category} • Qty: {item.quantity}
                        </span>
                      </div>
                      <div className="item-actions-landing">
                        <button
                          onClick={() => startEdit(item)}
                          className="edit-btn-landing"
                          title="Edit item"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => toggleBought(item.id)}
                          className={`check-btn-landing${item.bought ? ' checked' : ''}`}
                          title={item.bought ? 'Mark as pending' : 'Mark as bought'}
                        >
                          <FaCheckCircle />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="delete-btn-landing"
                          title="Remove item"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>

            {filteredItems.length === 0 && (
              <div className="empty-state-landing">
                <FaShoppingCart size={48} className="text-secondary opacity-50" />
                <h3 className="text-lg font-semibold text-primary mt-3 mb-2">No items found</h3>
                <p className="text-secondary">Add some items to get started!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-landing">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Simplify Your Grocery Shopping?</h2>
            <p>Join thousands of apartments already using Apartment Grocery Sync to streamline their grocery management.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary btn-lg">Get Started Free</a>
              <a href="/about" className="btn btn-outline-white btn-lg">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Apartment Management Section */}
      <section className="apartment-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Apartment</span>
            <h2 className="section-title">Manage Your Apartment</h2>
            <p className="section-subtitle">
              Create your apartment group and invite roommates to start sharing grocery lists.
            </p>
          </div>
          
          {!apartment ? (
            <div className="apartment-setup">
              <div className="setup-card">
                <FaHome className="setup-icon" />
                <h3>Create Your Apartment</h3>
                <p>Set up your apartment group to start sharing grocery lists with roommates.</p>
                <button onClick={() => setShowApartmentModal(true)} className="btn btn-primary">
                  <FaPlus /> Create Apartment
                </button>
              </div>
            </div>
          ) : (
            <div className="apartment-dashboard">
              <div className="apartment-info-card">
                <div className="apartment-header">
                  <FaHome className="text-secondary" />
                  <div>
                    <h3>{apartment.name}</h3>
                    <p>Created {new Date(apartment.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="apartment-stats">
                  <div className="apt-stat">
                    <span className="apt-stat-number">{roommates.length}</span>
                    <span className="apt-stat-label">Roommates</span>
                  </div>
                  <div className="apt-stat">
                    <span className="apt-stat-number">{items.length}</span>
                    <span className="apt-stat-label">Items</span>
                  </div>
                  <div className="apt-stat">
                    <span className="apt-stat-number">{pendingCount}</span>
                    <span className="apt-stat-label">Pending</span>
                  </div>
                </div>
              </div>
              
              <div className="roommates-section">
                <div className="roommates-header">
                  <h3>Roommates ({roommates.length})</h3>
                  <button onClick={() => setShowRoommateModal(true)} className="btn btn-secondary btn-sm">
                    <FaUserPlus /> Add Roommate
                  </button>
                </div>
                {roommates.length === 0 ? (
                  <div className="no-roommates">
                    <p>No roommates added yet. Invite your roommates to join!</p>
                  </div>
                ) : (
                  <div className="roommates-list">
                    {roommates.map((roommate, index) => (
                      <div key={roommate.id} className="roommate-card">
                        <div className="roommate-avatar">{roommate.name.charAt(0).toUpperCase()}</div>
                        <div className="roommate-info">
                          <h4>{roommate.name}</h4>
                          <p>{roommate.email}</p>
                        </div>
                        <button onClick={() => removeRoommate(roommate.id)} className="remove-roommate-btn" title="Remove">
                          <FaTrashAlt />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Apartment Modal */}
      {showApartmentModal && (
        <div className="modal-overlay" onClick={() => setShowApartmentModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Create Apartment</h3>
            <input
              type="text"
              placeholder="Apartment name (e.g., Sunset Apartments #204)"
              value={newApartmentName}
              onChange={(e) => setNewApartmentName(e.target.value)}
              className="form-input-landing"
              autoFocus
            />
            <div className="modal-actions">
              <button onClick={() => setShowApartmentModal(false)} className="btn btn-secondary">Cancel</button>
              <button onClick={createApartment} className="btn btn-primary">Create</button>
            </div>
          </div>
        </div>
      )}

      {/* Roommate Modal */}
      {showRoommateModal && (
        <div className="modal-overlay" onClick={() => setShowRoommateModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Add Roommate</h3>
            <input
              type="text"
              placeholder="Roommate name"
              value={newRoommateName}
              onChange={(e) => setNewRoommateName(e.target.value)}
              className="form-input-landing"
            />
            <input
              type="email"
              placeholder="Roommate email"
              value={newRoommateEmail}
              onChange={(e) => setNewRoommateEmail(e.target.value)}
              className="form-input-landing"
            />
            <div className="modal-actions">
              <button onClick={() => setShowRoommateModal(false)} className="btn btn-secondary">Cancel</button>
              <button onClick={addRoommate} className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

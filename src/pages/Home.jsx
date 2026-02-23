import { useState, useEffect } from 'react';
import { FaShoppingCart, FaUsers, FaSync, FaCheckCircle, FaPlus, FaTrash, FaFilter, FaStar, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('groceryItems');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'Organic Milk', category: 'Dairy', quantity: 1, bought: false, priority: 'high' },
      { id: 2, name: 'Whole Wheat Bread', category: 'Bakery', quantity: 1, bought: true, priority: 'medium' },
      { id: 3, name: 'Free Range Eggs', category: 'Dairy', quantity: 12, bought: false, priority: 'high' },
    ];
  });
  const [newItem, setNewItem] = useState('');
  const [newCategory, setNewCategory] = useState('General');
  const [newQuantity, setNewQuantity] = useState(1);
  const [newPriority, setNewPriority] = useState('medium');
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem('groceryItems', JSON.stringify(items));
  }, [items]);

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
    }
  };

  const toggleBought = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, bought: !item.bought } : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
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
    { value: 'low', label: 'Low', color: 'text-green-500' },
    { value: 'medium', label: 'Medium', color: 'text-yellow-500' },
    { value: 'high', label: 'High', color: 'text-red-500' }
  ];

  const getPriorityIcon = (priority) => {
    return <FaStar className={`text-sm ${priorities.find(p => p.value === priority)?.color}`} />;
  };

  const pendingCount = items.filter(item => !item.bought).length;
  const boughtCount = items.filter(item => item.bought).length;

  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="flex items-center justify-center mb-6">
              <FaShoppingCart className="text-secondary text-5xl mr-4 animate-float" />
              <h1 className="text-5xl font-bold text-primary">
                Apartment Grocery Sync
              </h1>
            </div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-secondary">
              Simplify grocery shopping for your apartment community. Sync lists, share responsibilities, and never run out of essentials again.
            </p>
            <div className="flex items-center justify-center mt-8 space-x-8">
              <div className="flex items-center space-x-2 bg-white/50 px-4 py-2 rounded-full shadow-sm">
                <FaUsers className="text-accent text-xl" />
                <span className="text-accent font-semibold">Collaborative</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 px-4 py-2 rounded-full shadow-sm">
                <FaSync className="text-secondary text-xl" />
                <span className="text-secondary font-semibold">Real-time</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 px-4 py-2 rounded-full shadow-sm">
                <FaCheckCircle className="text-primary text-xl" />
                <span className="text-primary font-semibold">Efficient</span>
              </div>
            </div>
            <a href="#demo" className="btn btn-primary mt-10 inline-flex items-center gap-2">
              Try Our Interactive Demo
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      <section id="demo" className="demo-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Experience the Power of Sync</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Our advanced grocery management system with categories, priorities, and real-time collaboration.
            </p>
          </div>
          <div className="demo-container">
            <div className="stats-bar">
              <div className="stat-item">
                <span className="stat-number">{pendingCount}</span>
                <span className="stat-label">Pending</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{boughtCount}</span>
                <span className="stat-label">Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{items.length}</span>
                <span className="stat-label">Total Items</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <button
                onClick={() => setShowForm(!showForm)}
                className="btn btn-secondary inline-flex items-center gap-2"
              >
                <FaPlus />
                {showForm ? 'Hide Form' : 'Add New Item'}
              </button>
            </div>

            {showForm && (
              <div className="demo-form animate-slide-down">
                <div className="form-row">
                  <input
                    type="text"
                    placeholder="Item name..."
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    className="form-input"
                    onKeyPress={(e) => e.key === 'Enter' && addItem()}
                  />
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="form-select"
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
                    className="form-input quantity-input"
                    placeholder="Qty"
                  />
                  <select
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value)}
                    className="form-select"
                  >
                    {priorities.map(p => (
                      <option key={p.value} value={p.value}>{p.label}</option>
                    ))}
                  </select>
                  <button
                    onClick={addItem}
                    className="btn btn-primary add-btn"
                  >
                    <FaPlus /> Add Item
                  </button>
                </div>
              </div>
            )}

            <div className="filters-section mb-8">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <FaFilter className="search-icon" />
              </div>
              <div className="filter-buttons">
                <button
                  onClick={() => setFilter('all')}
                  className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                >
                  All ({items.length})
                </button>
                <button
                  onClick={() => setFilter('pending')}
                  className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
                >
                  Pending ({pendingCount})
                </button>
                <button
                  onClick={() => setFilter('bought')}
                  className={`filter-btn ${filter === 'bought' ? 'active' : ''}`}
                >
                  Bought ({boughtCount})
                </button>
                {categories.slice(0, 4).map(cat => {
                  const count = items.filter(item => item.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`filter-btn ${filter === cat ? 'active' : ''}`}
                    >
                      {cat} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            <ul className="grocery-list">
              {filteredItems.map((item, index) => (
                <li
                  key={item.id}
                  className={`grocery-item ${item.bought ? 'bought' : ''}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="item-info">
                    <div className="flex items-center justify-between mb-1">
                      <span className="item-name">{item.name}</span>
                      {getPriorityIcon(item.priority)}
                    </div>
                    <span className="item-details">
                      {item.category} &bull; Qty: {item.quantity}
                    </span>
                  </div>
                  <div className="item-actions">
                    <button
                      onClick={() => toggleBought(item.id)}
                      className={`check-btn${item.bought ? ' checked' : ''}`}
                      title={item.bought ? 'Mark as not bought' : 'Mark as bought'}
                    >
                      <FaCheckCircle />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="delete-btn"
                      title="Remove item"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {filteredItems.length === 0 && (
              <div className="empty-state">
                <FaShoppingCart size={64} className="text-secondary/50" />
                <h3 className="text-xl font-semibold text-primary mt-4 mb-2">No items found</h3>
                <p className="text-secondary">Try adjusting your filters or add some items to get started!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="features-overview">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Us?</h2>
            <p className="text-lg text-secondary">Revolutionary features that make grocery management effortless</p>
          </div>
          <div className="features-grid">
            <div className="feature-card group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Shared Lists</h3>
              <p className="text-secondary leading-relaxed">Create and share grocery lists with your roommates or neighbors effortlessly.</p>
            </div>
            <div className="feature-card group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaSync className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Real-time Sync</h3>
              <p className="text-secondary leading-relaxed">Updates happen instantly, keeping everyone on the same page.</p>
            </div>
            <div className="feature-card group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaCheckCircle className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Smart Management</h3>
              <p className="text-secondary leading-relaxed">Track purchases, assign tasks, and manage your apartment's groceries with ease.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

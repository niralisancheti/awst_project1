import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaQuestionCircle, FaLock, FaMobileAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Contact Us</span>
            <h1 className="hero-title">
              Get in Touch<br />
              <span className="hero-title-accent">We're Here to Help</span>
            </h1>
            <p className="hero-subtitle">
              Have questions about Apartment Grocery Sync? We're here to help! Reach out to our friendly team.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-page-grid">
            <div className="contact-form-card">
              <div className="card-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you soon.</p>
              </div>
              <form onSubmit={handleSubmit} className="contact-form">
                {submitted && (
                  <div className="success-message">
                    <FaCheckCircle /> Thank you! Your message has been sent successfully.
                  </div>
                )}
                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={errors.subject ? 'error' : ''}
                  />
                  {errors.subject && <span className="error-text">{errors.subject}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us how we can help you..."
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-full"
                >
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </div>

            <div className="contact-sidebar">
              <div className="contact-methods">
                <h3>Contact Methods</h3>
                <a href="mailto:info@apartmentgrocerysync.com" className="contact-method-card">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-info">
                    <h4>Email Us</h4>
                    <p>info@apartmentgrocerysync.com</p>
                    <span>Send us an email anytime</span>
                  </div>
                </a>
                <a href="tel:+1234567890" className="contact-method-card">
                  <div className="method-icon">
                    <FaPhone />
                  </div>
                  <div className="method-info">
                    <h4>Call Us</h4>
                    <p>(123) 456-7890</p>
                    <span>Mon-Fri 8am to 5pm</span>
                  </div>
                </a>
                <div className="contact-method-card">
                  <div className="method-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="method-info">
                    <h4>Visit Us</h4>
                    <p>123 Grocery Lane</p>
                    <span>Apartment City, AC 12345</span>
                  </div>
                </div>
              </div>

              <div className="faq-card">
                <h3>Frequently Asked Questions</h3>
                <div className="faq-list">
                  <div className="faq-item">
                    <FaQuestionCircle className="faq-icon" />
                    <div>
                      <strong>How do I get started?</strong>
                      <p>Simply sign up for a free account and create your first shared list!</p>
                    </div>
                  </div>
                  <div className="faq-item">
                    <FaLock className="faq-icon" />
                    <div>
                      <strong>Is my data secure?</strong>
                      <p>Yes, we use industry-standard encryption to protect your information.</p>
                    </div>
                  </div>
                  <div className="faq-item">
                    <FaMobileAlt className="faq-icon" />
                    <div>
                      <strong>Can I use it on mobile?</strong>
                      <p>Absolutely! Our app is optimized for all devices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

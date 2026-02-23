import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Contact Us</h1>
            <p>
              Have questions about Apartment Grocery Sync? We're here to help! Reach out to our friendly team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
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
                    required
                    placeholder="What's this about?"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Email Us</h3>
                  <p className="text-gray-600">info@apartmentgrocerysync.com</p>
                  <span className="text-sm text-gray-500">Send us an email anytime!</span>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Call Us</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                  <span className="text-sm text-gray-500">Mon-Fri from 8am to 5pm.</span>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Visit Us</h3>
                  <p className="text-gray-600">123 Grocery Lane, Apartment City, AC 12345</p>
                  <span className="text-sm text-gray-500">Come say hello at our HQ.</span>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 text-primary">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <strong className="text-primary">How do I get started?</strong>
                    <p className="text-gray-600 mt-1">Simply sign up for a free account and create your first shared list!</p>
                  </div>
                  <div>
                    <strong className="text-primary">Is my data secure?</strong>
                    <p className="text-gray-600 mt-1">Yes, we use industry-standard encryption to protect your information.</p>
                  </div>
                  <div>
                    <strong className="text-primary">Can I use it on mobile?</strong>
                    <p className="text-gray-600 mt-1">Absolutely! Our app is optimized for all devices.</p>
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


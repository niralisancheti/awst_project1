import { useState } from 'react';
import { FaUser, FaBriefcase, FaFileAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Apply = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    position: '',
    experience: '',
    education: '',
    skills: '',
    experience_desc: '',
    referral: '',
    availability: '',
    additional: ''
  });

  const [files, setFiles] = useState({
    resume: null,
    coverLetter: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files: fileList } = e.target;
    setFiles(prev => ({
      ...prev,
      [name]: fileList[0]
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'position', 'experience', 'education', 'skills'];
    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = 'This field is required';
      }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!files.resume) {
      newErrors.resume = 'Resume is required';
    } else {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(files.resume.type)) {
        newErrors.resume = 'Please upload a valid file (PDF, DOC, or DOCX)';
      } else if (files.resume.size > 5 * 1024 * 1024) {
        newErrors.resume = 'File size must be less than 5MB';
      }
    }

    if (files.coverLetter) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(files.coverLetter.type)) {
        newErrors.coverLetter = 'Please upload a valid file (PDF, DOC, or DOCX)';
      } else if (files.coverLetter.size > 5 * 1024 * 1024) {
        newErrors.coverLetter = 'File size must be less than 5MB';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const applications = JSON.parse(localStorage.getItem('jobApplications') || '[]');
      applications.push({ 
        ...formData, 
        files: {
          resume: files.resume?.name || null,
          coverLetter: files.coverLetter?.name || null
        },
        submittedAt: new Date().toISOString() 
      });
      localStorage.setItem('jobApplications', JSON.stringify(applications));

      setSubmitted(true);
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        position: '',
        experience: '',
        education: '',
        skills: '',
        experience_desc: '',
        referral: '',
        availability: '',
        additional: ''
      });
      setFiles({ resume: null, coverLetter: null });
      setErrors({});
      
      document.getElementById('resume').value = '';
      document.getElementById('coverLetter').value = '';
      
    } catch (error) {
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="apply-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Careers</span>
            <h1 className="hero-title">
              Join Our Team<br />
              <span className="hero-title-accent">Build the Future</span>
            </h1>
            <p className="hero-subtitle">
              Join our team and be part of the future of grocery management. Fill out the form below to submit your application.
            </p>
          </div>
        </div>
      </section>

      <section className="apply-section">
        <div className="container">
          <div className="apply-form-container">
            {submitted && (
              <div className="success-message">
                <FaCheckCircle /> Your application has been submitted successfully! We'll review it and get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="apply-form">
              <div className="form-section">
                <div className="form-section-header">
                  <FaUser className="text-secondary" />
                  <h2>Personal Information</h2>
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={errors.firstName ? 'error' : ''}
                      placeholder="John"
                    />
                    {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={errors.lastName ? 'error' : ''}
                      placeholder="Doe"
                    />
                    {errors.lastName && <span className="error-text">{errors.lastName}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={errors.phone ? 'error' : ''}
                      placeholder="+91 9876543210"
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="address">Address *</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="3"
                      className={errors.address ? 'error' : ''}
                      placeholder="Your complete address"
                    />
                    {errors.address && <span className="error-text">{errors.address}</span>}
                  </div>
                </div>
              </div>

              <div className="form-section">
                <div className="form-section-header">
                  <FaBriefcase className="text-secondary" />
                  <h2>Professional Information</h2>
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="position">Position Applied For *</label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className={errors.position ? 'error' : ''}
                    >
                      <option value="">Select Position</option>
                      <option value="software-engineer">Software Engineer</option>
                      <option value="data-analyst">Data Analyst</option>
                      <option value="product-manager">Product Manager</option>
                      <option value="ui-ux-designer">UI/UX Designer</option>
                      <option value="marketing-specialist">Marketing Specialist</option>
                      <option value="hr-manager">HR Manager</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.position && <span className="error-text">{errors.position}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="experience">Years of Experience *</label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className={errors.experience ? 'error' : ''}
                    >
                      <option value="">Select Experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                    {errors.experience && <span className="error-text">{errors.experience}</span>}
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="education">Education *</label>
                    <textarea
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      rows="3"
                      className={errors.education ? 'error' : ''}
                      placeholder="e.g., B.Tech in Computer Science from IIT"
                    />
                    {errors.education && <span className="error-text">{errors.education}</span>}
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="skills">Skills & Technologies *</label>
                    <textarea
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      rows="3"
                      className={errors.skills ? 'error' : ''}
                      placeholder="e.g., JavaScript, React, Node.js, Python, etc."
                    />
                    {errors.skills && <span className="error-text">{errors.skills}</span>}
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="experience_desc">Work Experience</label>
                    <textarea
                      id="experience_desc"
                      name="experience_desc"
                      value={formData.experience_desc}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Describe your relevant work experience..."
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <div className="form-section-header">
                  <FaFileAlt className="text-secondary" />
                  <h2>Documents</h2>
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="resume">Resume/CV *</label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className={errors.resume ? 'error' : ''}
                    />
                    <span className="input-hint">Accepted: PDF, DOC, DOCX. Max: 5MB</span>
                    {errors.resume && <span className="error-text">{errors.resume}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="coverLetter">Cover Letter</label>
                    <input
                      type="file"
                      id="coverLetter"
                      name="coverLetter"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className={errors.coverLetter ? 'error' : ''}
                    />
                    <span className="input-hint">Optional. Accepted: PDF, DOC, DOCX. Max: 5MB</span>
                    {errors.coverLetter && <span className="error-text">{errors.coverLetter}</span>}
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h2 className="form-section-title">Additional Information</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="referral">How did you hear about us?</label>
                    <select
                      id="referral"
                      name="referral"
                      value={formData.referral}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Source</option>
                      <option value="website">Company Website</option>
                      <option value="social-media">Social Media</option>
                      <option value="job-board">Job Board</option>
                      <option value="referral">Employee Referral</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="availability">Availability</label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Availability</option>
                      <option value="immediately">Immediately</option>
                      <option value="2-weeks">Within 2 weeks</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="negotiable">Negotiable</option>
                    </select>
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="additional">Additional Comments</label>
                    <textarea
                      id="additional"
                      name="additional"
                      value={formData.additional}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Any additional information you'd like to share..."
                    />
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg"
                >
                  {isSubmitting ? 'Submitting...' : <><FaPaperPlane /> Submit Application</>}
                </button>
                <p className="claimer">
                  By submitting this form, you agree to our <a href="/contact">Privacy Policy</a> and <a href="/contact">Terms of Service</a>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;

import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email format is invalid';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate form submission API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="section bg-alt reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's discuss how my analytical skills and BI tools can support your database decisions</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div>
              <h3 className="contact-info-title">Contact Information</h3>
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="info-details">
                    <span className="info-label">Email Me</span>
                    <a href="mailto:gokulnath32478@gmail.com" className="info-value">gokulnath32478@gmail.com</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="info-details">
                    <span className="info-label">Call Me</span>
                    <span className="info-value">+91 9361587513</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-details">
                    <span className="info-label">Location</span>
                    <span className="info-value">Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-socials-wrapper">
              <span className="socials-title">Follow / Connect</span>
              <div className="socials-row">
                <a href="www.linkedin.com/in/gokulnathh" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/Gokulnathdeveloper7" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-pane">
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon-wrap">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you! Gokul will respond to your inquiry shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error-input' : ''}
                    placeholder="Enter your name"
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
                    className={errors.email ? 'error-input' : ''}
                    placeholder="Enter your email"
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error-input' : ''}
                    rows="5"
                    placeholder="Write your message details..."
                  ></textarea>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './Contact.css';

const Contact = () => {
  const form = useRef();
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
    
    // Send email using EmailJS
    emailjs.sendForm(
      'service_k3z03r9', // Replace with your EmailJS service ID
      'template_53gerrp', // Replace with your EmailJS template ID
      form.current,
      'CxxUf7lrk9WBpErZw' // Replace with your EmailJS public key
    )
    .then(() => {
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#7C3AED',
        customClass: {
          popup: 'swal-normal-size'
        }
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch((error) => {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to send message. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#7C3AED',
      });
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p className="lead">Let's discuss your next project</p>
      </div>

      <div className="contact-content">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <h2>Contact Information</h2>
              <p>Feel free to reach out for collaborations or just a friendly hello</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div className="item-content">
                    <h3>Email</h3>
                    <p>mushbaali86@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="item-content">
                    <h3>Location</h3>
                    <p>Karachi, Pakistan</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fas fa-phone-alt"></i>
                  <div className="item-content">
                    <h3>Phone</h3>
                    <p>+923292028468</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a 
                  href="https://github.com/MushbaSiddiqui" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/mushba-siddiqui-605806183/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="linkedin"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
              <div className="form-header">
                <h2>Send Message</h2>
                <p>Fill in the form below to send me a message</p>
              </div>

              <div className="form-group">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <i className="fas fa-pen"></i>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-group">
                <i className="fas fa-comment-alt"></i>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
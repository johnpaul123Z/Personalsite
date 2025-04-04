import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending message with loading bar
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSubmitting(false);
          setIsSubmitted(true);
          return 100;
        }
        return prev + 5;
      });
    }, 80);
  };

  return (
    <div className="contact-container">
      <h1 className="gaming-header">CONTACT PLAYER ONE</h1>
      
      <h2 className="gaming-subheader">SEND A MESSAGE TO CONTINUE</h2>
      
      {isSubmitted ? (
        <div className="success-message">
          <h2 className="gaming-result">MESSAGE SENT!</h2>
          
          <p className="gaming-text">Thank you for your message. I'll respond as soon as possible.</p>
          
          <div className="save-notification">GAME SAVED SUCCESSFULLY</div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="gaming-form">
          {isSubmitting && (
            <div className="loading-overlay">
              <h3 className="loading-text">SENDING MESSAGE...</h3>
              
              <div className="progress-bar-container">
                <div 
                  className="progress-bar" 
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
              
              <div className="loading-percentage">{loadingProgress}%</div>
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="name" className="gaming-label">PLAYER NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="gaming-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="gaming-label">PLAYER EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="gaming-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="gaming-label">YOUR MESSAGE</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="gaming-textarea"
            ></textarea>
          </div>
          
          <button type="submit" className="gaming-button">
            TRANSMIT MESSAGE
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;
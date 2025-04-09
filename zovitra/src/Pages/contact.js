import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

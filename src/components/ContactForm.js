import React from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="contact-info">
        <h1>AA Nigeria</h1>
        <p>Support groups for individuals seeking recovery from alcoholism.</p>
        <div className="contact-details">
          <AiOutlinePhone className="icon" />
          <span>+234 800 123 4567</span>
          <AiOutlineMail className="icon" />
          <span>contact@aanigeria.org</span>
        </div>
      </div>
      <div className="contact-form-container">
        <form>
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" placeholder="Enter phone number" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter email address" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Write your message here"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
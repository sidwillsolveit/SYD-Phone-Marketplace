
import React from 'react';

const Contact = () => (
  <div className="contact-page" style={{ paddingTop: '110px', minHeight: '100vh', background: 'var(--gradient-bg)', color: 'var(--text-light)', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '2rem' }}>
    <h1>Contact Us</h1>
    <h2>Service Centre Location</h2>
    <p>
     C502, Mandavi Pearl City<br />
      Udupi Road<br />
      Manipal, Karnataka, India
    </p>
    <h2>Email Support</h2>
    <p>
      <a href="mailto:support@yfone.com" style={{ color: '#4bcffa' }}>support@yfone.com</a>
    </p>
    <h2>Phone Support</h2>
    <p>
      +91-9319635256
    </p>
  </div>
);

export default Contact;


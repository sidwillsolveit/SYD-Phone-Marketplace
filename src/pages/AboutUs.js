import React from 'react';
import sydprof from '../assets/profile.jpg';

const AboutUs = () => (
  <div
    className="about-us-page"
    style={{
      paddingTop: '110px',
      minHeight: '100vh',
      background: 'var(--gradient-bg)',
      color: 'var(--text-light)',
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingBottom: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <div style={{
      background: 'rgba(30, 42, 71, 0.93)',
      borderRadius: '18px',
      maxWidth: 700,
      width: '100%',
      boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
      padding: '2.5rem 2rem',
      textAlign: 'center',
      marginTop: '2rem'
    }}>
      {/* Profile Image */}
      <img
        src={sydprof}
        alt="Siddhant Mathur"
        style={{
          borderRadius: '50%',
          width: 140,
          height: 140,
          marginBottom: '1.2rem',
          border: '4px solid #4bcffa',
          objectFit: 'cover'
        }}
      />
      <h1 style={{ color: '#4bcffa', fontWeight: 700, fontSize: '2.4rem', marginBottom: 0 }}>Siddhant Mathur</h1>
      <p style={{ fontSize: '1.1rem', color: '#b0bec5', marginBottom: '0.7rem' }}>
        B.Tech, Computer Science &amp; Engineering (2022-2026)<br />
        Minor in Professional Communication<br />
        Manipal Institute of Technology
      </p>
      <div style={{ margin: '1rem 0 1.7rem' }}>
        <span style={{ display: 'inline-block', color: '#4bcffa', fontWeight: 'bold', marginRight: '1.5rem' }}>
          siddhantmathur.mit@gmail.com
        </span>
        <span style={{ color: '#b0bec5' }}>|</span>
        <span style={{ color: '#fff', marginLeft: '1.5rem' }}>+91 9319635256</span>
      </div>
      {/* Professional Summary */}
      <div style={{ fontSize: '1.09rem', lineHeight: 1.7, marginBottom: '1.5rem', color: '#b0bec5' }}>
        I’m a Computer Science Engineering student skilled in <span style={{ color: '#ffe066' }}>React.js, JavaScript, HTML5, CSS3, C, Java, Python, and SQL</span>.<br />
        <span style={{ color: '#fff' }}>Frontend Highlights:</span> Developed a responsive React-based e-commerce frontend for SYD/YFONE with animated product showcases, a client-side promo code system, and live price updates.<br />
        <span style={{ color: '#fff' }}>Internship Experience:</span> Created automation scripts in Python and Dynamo at Sanrachna to enhance virtual modeling workflows for real-world architecture projects. Worked on React frontend features for a university research portal, including interactive report generation and team collaboration.<br />
        <span style={{ color: '#fff' }}>Side Projects:</span> Built a MySQL music streaming backend and several web apps with a focus on responsive design and user experience.
      </div>
      {/* Hobbies Section (kept as requested) */}
      <div style={{ fontSize: '1.09rem', color: '#b0bec5', marginBottom: '1.5rem' }}>
        When I'm not coding, you'll find me playing chess, tech blogging, or volunteering for NGOs.
      </div>
      {/* Contact & Social Links */}
      <div style={{ marginBottom: '1.5rem' }}>
        <a
          href="mailto:siddhantmathur.mit@gmail.com"
          style={{
            color: '#4bcffa',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginRight: '1.5rem'
          }}
        >
          siddhantmathur.mit@gmail.com
        </a>
        <span style={{ color: '#b0bec5' }}>|</span>
        <span style={{ color: '#fff', marginLeft: '1.5rem' }}>+91 9319635256</span>
      </div>
      <div>
        <a
          href="https://in.linkedin.com/in/siddhant-mathur-18b431247"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#4bcffa',
            color: '#0a3d62',
            padding: '0.6rem 1.4rem',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'background 0.2s'
          }}
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  </div>
);

export default AboutUs;

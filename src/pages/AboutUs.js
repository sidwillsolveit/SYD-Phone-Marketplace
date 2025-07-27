
import React from 'react';

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
        src="https://pplx-res.cloudinary.com/image/private/user_uploads/66646096/6fa0f8fb-c105-4be8-979d-149415007737/image.jpg"
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
      <p style={{ fontSize: '1.1rem', color: '#b0bec5', marginBottom: '1.7rem' }}>
        Founder & CEO, YFONE
      </p>
      <div style={{ fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
        <span role="img" aria-label="wave">👋</span> Hi, I'm Siddhant—an aspiring tech entrepreneur and the creator of YFONE. I am currently pursuing my <b>B.Tech in Computer Science</b> at Manipal Institute of Technology (2022-2026), and I am passionate about building technology that empowers people.
        <br /><br />
        <b>What drives me?</b> <br />
        <span style={{ color: '#0be881' }}>Innovation, learning, and making a real difference.</span> With hands-on experience in web development, data analytics, and software projects, I love turning ideas into user-friendly products.
        <br /><br />
        <b>Key Skills:</b> <span style={{ color: '#ffe066' }}>Web Development, Data Analytics, Communication, C Programming, Computer Networks</span>
        <br />
        <b>Projects:</b> <span style={{ color: '#ffe066' }}>Fitness Tracker Website, Image Processing (CPU vs GPU), Music Streaming App</span>
        <br /><br />
        When I'm not coding, you'll find me playing chess, tech blogging, or volunteering for NGOs.
      </div>
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

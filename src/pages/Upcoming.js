
// src/pages/Upcoming.js

import React from 'react';

const Upcoming = () => (
  <div
    style={{
      maxWidth: 600,
      margin: '0 auto',
      paddingTop: '120px',
      paddingBottom: '3rem',
      color: '#fff'
    }}
  >
    {/* COMING SOON Banner */}
    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <span
        style={{
          display: 'inline-block',
          background: '#ffd166',
          color: '#1e272e',
          fontWeight: 'bold',
          padding: '0.6rem 2rem',
          borderRadius: '30px',
          fontSize: '1.4rem',
          letterSpacing: '0.05em'
        }}
      >
        COMING SOON
      </span>
    </div>

    {/* Product Image */}
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '2.5rem'
    }}>
      <img
        src="/assets/syd_ipad.png"
        alt="SYD iPad Adventure"
        style={{
          width: '100%',
          maxWidth: 340,
          aspectRatio: '2/3',
          borderRadius: '18px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.13)',
          marginBottom: '1.5rem',
          objectFit: 'contain',
          background: '#222c3d'
        }}
      />
    </div>

    {/* Product Info */}
    <h2 style={{
      fontSize: '1.45rem',
      color: '#4bcffa',
      marginBottom: '0.7rem',
      textAlign: 'center'
    }}>
      📱 SYD iPad ADVENTURE – Built for Survival
    </h2>

    <h3 style={{ color: '#ffe066', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Key Features</h3>
    <ul style={{ fontSize: '1.07rem', marginBottom: '1.3rem', lineHeight: 1.7 }}>
      <li><b>Display:</b> 11.2” Ultra-Bright, Gorilla Glass, Anti-Glare</li>
      <li><b>Body:</b> IP69K + MIL-STD-810H rugged frame</li>
      <li><b>Battery:</b> 14,000mAh + Solar + Kinetic Charging</li>
      <li><b>Processor:</b> Octa-core SYD Vortex 7, 8GB RAM, 256GB storage</li>
    </ul>

    <h3 style={{ color: '#ffe066', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Connectivity</h3>
    <ul style={{ fontSize: '1.07rem', marginBottom: '1.3rem', lineHeight: 1.7 }}>
      <li>Offline GPS + Topo Maps</li>
      <li>Mesh Network + Satellite SOS</li>
      <li>Global eSIM + LTE</li>
    </ul>

    <h3 style={{ color: '#ffe066', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Tools</h3>
    <ul style={{ fontSize: '1.07rem', marginBottom: '1.3rem', lineHeight: 1.7 }}>
      <li>Flashlight (800 lumens), SOS Button</li>
      <li>Barometer, Compass, Altimeter</li>
      <li>Flare Launcher + Emergency App</li>
    </ul>

    <h3 style={{ color: '#ffe066', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Cameras</h3>
    <ul style={{ fontSize: '1.07rem', marginBottom: '1.3rem', lineHeight: 1.7 }}>
      <li>16MP + 12MP rear, 10MP front (Night IR)</li>
    </ul>

    <div style={{
      background: 'rgba(75,207,250,0.12)',
      color: '#0be881',
      padding: '1rem',
      borderRadius: '14px',
      fontWeight: 500,
      fontSize: '1.08rem',
      textAlign: 'center',
      marginTop: '1.2rem'
    }}>
      🏞️ For hikers, adventurers, and those who go where others don’t.
    </div>
  </div>
);

export default Upcoming;

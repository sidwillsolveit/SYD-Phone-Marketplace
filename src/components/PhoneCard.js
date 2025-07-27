
import React from 'react';

const PhoneCard = ({ phone }) => (
  <div
    className="phone-card"
    style={{
      width: '220px',
      height: '350px',
      borderRadius: '18px',
      background: '#1e2a47',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      position: 'relative',
      margin: '0 0.7rem'
    }}
  >
    <div
      style={{
        width: '100%',
        height: '330px', // 2:3 aspect ratio for the image area
        background: 'transparent', // No blue border or gradient
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <img
        src={phone.image}
        alt={phone.name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain', // Shows the entire image, no cropping
          display: 'block'
        }}
      />
    </div>
    <div
      style={{
        width: '100%',
        background: 'rgba(30,42,71,0.98)',
        padding: '1.1rem 1rem 1.2rem 1rem',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
        minHeight: '70px',
        textAlign: 'left'
      }}
    >
      <h2 style={{ color: '#4bcffa', fontSize: '1.18rem', margin: 0 }}>{phone.name}</h2>
      <p style={{ color: '#ffe066', fontWeight: 'bold', fontSize: '1.08rem', margin: '0.25rem 0 0.7rem 0' }}>
        ${phone.price}
      </p>
    </div>
  </div>
);

export default PhoneCard;

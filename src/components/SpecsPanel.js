
import React from 'react';

const renderSpecValue = (value) => {
  if (typeof value === 'object' && value !== null) {
    return (
      <div style={{ marginLeft: '1rem' }}>
        {Object.entries(value).map(([subKey, subValue]) => (
          <div key={subKey} style={{ marginTop: '0.3rem' }}>
            <span style={{ fontWeight: 'bold' }}>{subKey}:</span> {subValue}
          </div>
        ))}
      </div>
    );
  } else if (Array.isArray(value)) {
    return (
      <ul style={{ marginLeft: '1rem', paddingLeft: '1rem' }}>
        {value.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    );
  }
  return value;
};

const SpecsPanel = ({ phone, onClose }) => {
  if (!phone) return null;

  return (
    <>
      <div
        className="specs-overlay"
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          zIndex: 1000,
        }}
      />
      <div
        className="specs-panel"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#1e2a47',
          color: 'white',
          padding: '2rem',
          borderRadius: '15px',
          width: '90%',
          maxWidth: '500px',
          zIndex: 1001,
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}
      >
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
          <h2 style={{fontSize: '1.3rem', color: '#4bcffa', margin: 0}}>{phone.name} Specifications</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '2rem',
              cursor: 'pointer',
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
        <div>
          {Object.entries(phone.specs).map(([key, value]) => (
            <div key={key} style={{
              marginBottom: '1rem',
              background: 'rgba(255,255,255,0.07)',
              borderRadius: '8px',
              padding: '1rem'
            }}>
              <div style={{ fontWeight: 'bold', color: '#4bcffa', marginBottom: '0.5rem' }}>{key}:</div>
              <div>{renderSpecValue(value)}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpecsPanel;

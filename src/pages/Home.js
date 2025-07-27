
import React, { useEffect, useState } from 'react';
import phones from '../data/phones';
import { useNavigate } from 'react-router-dom';
import PhoneCard from '../components/PhoneCard';
import ComparisonTable from '../components/ComparisonTable';

const Home = () => {
  const [showComparison, setShowComparison] = useState(false);
  const [visible, setVisible] = useState(Array(phones.length).fill(false));
  const navigate = useNavigate();

  useEffect(() => {
    phones.forEach((_, i) => {
      setTimeout(() => {
        setVisible(prev => {
          const updated = [...prev];
          updated[i] = true;
          return updated;
        });
      }, 400 + i * 400);
    });
  }, []);

  return (
    <div className="home-page">
      <div className="phones-display">
        {phones.map((phone, i) => (
          <div
            key={phone.id}
            className={`phone-fade-in${visible[i] ? ' visible' : ''}`}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2.5rem' }}
          >
            <PhoneCard phone={phone} />
            {/* Buy Now button OUTSIDE the PhoneCard */}
            <button
              className="buy-btn"
              onClick={() => navigate(`/checkout/${phone.id}`)}
            >
              BUY NOW
            </button>
          </div>
        ))}
      </div>
      <button
        className="compare-btn"
        onClick={() => setShowComparison(true)}
      >
        Compare All Models
      </button>
      {showComparison && (
        <div style={{ marginTop: '2rem', width: '100%' }}>
          <ComparisonTable phones={phones} />
        </div>
      )}
    </div>
  );
};

export default Home;

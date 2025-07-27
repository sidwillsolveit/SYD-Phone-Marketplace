
import React, { useState, useRef } from 'react';
import PhoneCard from '../components/PhoneCard';
import SpecsPanel from '../components/SpecsPanel';
import ComparisonTable from '../components/ComparisonTable';
import phones from '../data/phones';
import '../index.css';

const Products = () => {
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [showComparison, setShowComparison] = useState(false);
  const comparisonRef = useRef(null);

  const scrollToComparison = () => {
    setShowComparison(true);
    setTimeout(() => {
      comparisonRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="products-page">
      <h1 style={{ textAlign: 'center', margin: '2rem 0', color: 'white' }}>
        Choose Your YFONE
      </h1>
      
      <div className="phones-display">
        {phones.map(phone => (
          <PhoneCard
            key={phone.id}
            phone={phone}
            onShowSpecs={setSelectedPhone}
          />
        ))}
      </div>

      <div style={{ textAlign: 'center', margin: '3rem 0' }}>
        <button 
          className="compare-btn"
          onClick={scrollToComparison}
        >
          Compare All Models
        </button>
      </div>

      {showComparison && (
        <div ref={comparisonRef}>
          <ComparisonTable phones={phones} />
        </div>
      )}

      <SpecsPanel phone={selectedPhone} onClose={() => setSelectedPhone(null)} />
    </div>
  );
};

export default Products;

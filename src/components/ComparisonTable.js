import React from 'react';

const renderValue = (value) => {
  if (Array.isArray(value)) {
    return (
      <ul style={{ textAlign: 'left', paddingLeft: '1.2em', margin: 0 }}>
        {value.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    );
  }
  if (typeof value === 'object' && value !== null) {
    return (
      <div style={{ textAlign: 'left' }}>
        {Object.entries(value).map(([k, v]) => (
          <div key={k}><b>{k}:</b> {v}</div>
        ))}
      </div>
    );
  }
  return value;
};

const ComparisonTable = ({ phones }) => {
  // Defensive check
  if (!phones || !Array.isArray(phones) || phones.length === 0) {
    return <div style={{ color: 'white', padding: '2rem', textAlign: 'center' }}>No phones to compare.</div>;
  }

  // Collect all unique spec keys
  const allKeys = Array.from(
    new Set(
      phones.flatMap(phone => Object.keys(phone.specs))
    )
  );

  return (
    <div className="comparison-table">
      <h2>GLO Phone Model Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Specification</th>
            {phones.map(phone => (
              <th key={phone.id}>{phone.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allKeys.map(key => (
            <tr key={key}>
              <td className="spec-key">{key}</td>
              {phones.map(phone => (
                <td key={phone.id}>{renderValue(phone.specs[key])}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="spec-key">Who is it for?</td>
            {phones.map(phone => (
              <td key={phone.id}>{phone.for}</td>
            ))}
          </tr>
          <tr>
            <td className="spec-key">Description</td>
            {phones.map(phone => (
              <td key={phone.id}>{phone.description}</td>
            ))}
          </tr>
          <tr>
            <td className="spec-key">Price (USD)</td>
            {phones.map(phone => (
              <td key={phone.id}>${phone.price}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;

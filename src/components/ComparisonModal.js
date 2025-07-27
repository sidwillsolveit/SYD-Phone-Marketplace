
import React from "react";

const ComparisonModal = ({ phones }) => {
  return (
    <div className="comparison-table">
      <div className="table-row header">
        <div className="table-cell">Phone</div>
        <div className="table-cell">Processor</div>
        <div className="table-cell">Battery</div>
        <div className="table-cell">RAM</div>
        <div className="table-cell">Use Case</div>
      </div>
      {phones.map((phone) => (
        <div className="table-row" key={phone.id}>
          <div className="table-cell">{phone.name}</div>
          <div className="table-cell">{phone.specs.processor}</div>
          <div className="table-cell">{phone.specs.battery}</div>
          <div className="table-cell">{phone.specs.ram}</div>
          <div className="table-cell">{phone.specs.useCase}</div>
        </div>
      ))}
    </div>
  );
};

export default ComparisonModal;

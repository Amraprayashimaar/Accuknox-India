import React from 'react';
import './Widget.css';

const Widget = ({ name, onRemove }) => {
  return (
    <div className="widget">
      <span>{name}</span>
      <button className="remove-btn" onClick={onRemove}>Remove</button>
    </div>
  );
};

export default Widget;

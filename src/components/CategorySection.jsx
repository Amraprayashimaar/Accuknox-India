import React from 'react';
import Widget from './Widget';
import './CategorySection.css';

const CategorySection = ({ category, widgets, onRemove }) => {
  return (
    <div className="category-section">
      <h2>{category}</h2>
      <div className="widget-list">
        {widgets.map((widget, idx) => (
          <Widget key={idx} name={widget} onRemove={() => onRemove(idx)} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;

import React, { useState } from 'react';
import CategorySection from './CategorySection';
import AddWidgetForm from './AddWidgetForm';
import './Dashboard.css';

const initialData = {
  Analytics: ['Visitors', 'Revenue'],
  Marketing: ['Campaigns'],
  Sales: ['Orders'],
};

const Dashboard = () => {
  const [widgets, setWidgets] = useState(initialData);

  const addWidget = (category, widgetName) => {
    setWidgets(prev => ({
      ...prev,
      [category]: [...(prev[category] || []), widgetName],
    }));
  };

  const removeWidget = (category, index) => {
    setWidgets(prev => {
      const updated = [...prev[category]];
      updated.splice(index, 1);
      return { ...prev, [category]: updated };
    });
  };

  return (
    <div className="dashboard">
      <h1>Dynamic Dashboard</h1>
      <AddWidgetForm onAdd={addWidget} />
      <div className="categories">
        {Object.keys(widgets).map(cat => (
          <CategorySection
            key={cat}
            category={cat}
            widgets={widgets[cat]}
            onRemove={index => removeWidget(cat, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

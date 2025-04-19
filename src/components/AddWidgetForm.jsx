import React, { useState } from 'react';
import './AddWidgetForm.css';

const AddWidgetForm = ({ onAdd }) => {
  const [category, setCategory] = useState('Analytics');
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim()) {
      onAdd(category, name.trim());
      setName('');
    }
  };

  return (
    <form className="add-widget-form" onSubmit={handleSubmit}>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option>Analytics</option>
        <option>Marketing</option>
        <option>Sales</option>
      </select>
      <input
        type="text"
        value={name}
        placeholder="Widget Name"
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Add Widget</button>
    </form>
  );
};

export default AddWidgetForm;

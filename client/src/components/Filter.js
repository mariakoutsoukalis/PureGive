import React, { useState, useEffect } from 'react';

const CauseFilter = ({ onCauseChange }) => {
  const [causes, setCauses] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/organizations/cause')
      .then(response => response.json())
      .then(data => {
        const causeNames = new Set(data.map(item => item.cause_name));
        setCauses([...causeNames]);
      })
      .catch(error => console.error('Error fetching causes:', error));
  }, []);

  return (
    <div className="cause-filter">
      <label htmlFor="cause-select"></label>
      <select id="cause-select" onChange={e => onCauseChange(e.target.value)}>
        <option value="">Filter by Cause</option>
        {causes.map(cause => (
          <option key={cause} value={cause}>{cause}</option>
        ))}
      </select>
    </div>
  );
};

export default CauseFilter;
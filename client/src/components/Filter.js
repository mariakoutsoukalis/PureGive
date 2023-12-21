import React from 'react';

const CauseFilter = ({ onCauseChange }) => {
  return (
    <div className="cause-filter">
      <label htmlFor="cause-select"></label>
      <select id="cause-select" onChange={e => onCauseChange(e.target.value)}>
        <option value="">Filter by Cause</option>
        {['Agriculture', 'Animal Welfare', 'Arts and Culture', 'Youth Advocacy', 'Civil Rights and Social Action', 'Disaster and Humanitarian Relief', 'Economic Empowerment', 'Education', 'Politics', 'Environmentalism', 'Health', 'Human Rights', 'Poverty Alleviation', 'Science and Technology', 'Social Services', 'Veteran Support'].map(cause => (
          <option key={cause} value={cause}>{cause}</option>
        ))}
      </select>
    </div>
  );
};

export default CauseFilter;
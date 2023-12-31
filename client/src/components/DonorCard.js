import React from 'react';

function DonorCard({ donor }) {
    const { first_name, last_name, cause_associations } = donor;
  
    // Function to convert donor object properties (except cause_associations) to an array
    const convertDonorToObjectArray = (donor) => {
      return Object.entries(donor).map(([key, value]) => {
        if (key !== 'cause_associations') {
          return { key, value };
        }
        return null;
      }).filter(item => item !== null);
    };
  
    // Convert donor object to array (excluding cause_associations)
    const donorArray = convertDonorToObjectArray(donor);
  
    return (
      <div className="card">
        <h3>{first_name} {last_name}</h3>
        <ul>
          {cause_associations.map(({ cause_id, cause, name }) => (
            <li key={cause_id}>
              <strong>{name}</strong>
            </li>
          ))}
        </ul>
        {/* Additional display or processing using donorArray can be done here */}
      </div>
    );
  }
  
  export default DonorCard;  
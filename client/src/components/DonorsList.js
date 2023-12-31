import React from 'react';
import DonorCard from './DonorCard'; // Adjust the import path as necessary

function DonorsList({ donors }) {
  return (
    <ul className="cards">
      {donors.map(donor => (
        <DonorCard key={donor.donor_id} donor={donor} />
      ))}
    </ul>
  );
}

export default DonorsList;


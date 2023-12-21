import React from "react";
import OrganizationCard from "./OrganizationCard";


function OrganizationsList({ organizations }) {
  return (
    <ul className="cards">
      {organizations.map(organization => (
        <OrganizationCard key={organization[0]} organization={organization} />
      ))}
    </ul>
  );
}

export default OrganizationsList;
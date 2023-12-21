import React, { useState, useEffect } from "react";
import OrganizationsList from "@/components/OrganizationsList";
import NavBar2 from '../components/NavBar2';
import Footer from '../components/Footer';

const URL = 'http://127.0.0.1:5000/organizations'

function OrganizationsPage() {
  const [organizations, setOrganizations] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCause, setSelectedCause] = useState(''); // State to track the selected cause

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setOrganizations(data));
  }, []);

  const handleCauseChange = (cause) => {
    setSelectedCause(cause);
  };

  const filteredOrganizations = organizations.filter(organization =>
    (selectedCause === '' || organization.cause === selectedCause) &&
    organization[1] && organization[1].toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavBar2 
        search={search} 
        setSearch={setSearch} 
        onCauseChange={handleCauseChange}
      />
      <main>
        <OrganizationsList organizations={filteredOrganizations} />
      </main>
      <Footer />
    </>
  );
}

export default OrganizationsPage;
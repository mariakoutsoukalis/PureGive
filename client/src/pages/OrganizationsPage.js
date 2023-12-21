import React, { useState, useEffect } from "react";
import OrganizationsList from "@/components/OrganizationsList";
import NavBar2 from '../components/NavBar2';
import Footer from '../components/Footer';

const URL_ORG = 'http://127.0.0.1:5000/organizations';
const URL_CAUSES = 'http://127.0.0.1:5000/organizations/cause';

function OrganizationsPage() {
  const [allOrganizations, setAllOrganizations] = useState([]);
  const [causesWithOrgs, setCausesWithOrgs] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCause, setSelectedCause] = useState('');

  useEffect(() => {
    fetch(URL_ORG)
      .then(res => res.json())
      .then(data => setAllOrganizations(data));

    fetch(URL_CAUSES)
      .then(response => response.json())
      .then(data => {
        const causesMap = new Map();
        data.forEach(item => {
          if (!causesMap.has(item.cause_name)) {
            causesMap.set(item.cause_name, new Set());
          }
          causesMap.get(item.cause_name).add(item.organization_name);
        });
        setCausesWithOrgs(Array.from(causesMap, ([cause, orgs]) => ({ cause, orgs: Array.from(orgs) })));
      })
      .catch(error => console.error('Error fetching causes:', error));
  }, []);

  const handleCauseChange = (cause) => {
    setSelectedCause(cause);
  };

  const filteredOrganizations = allOrganizations.filter(org => {
    const matchesCause = selectedCause
      ? causesWithOrgs.some(causeObj => 
          causeObj.cause === selectedCause && causeObj.orgs.includes(org[1]))
      : true;
    const matchesSearch = org[1].toLowerCase().includes(search.toLowerCase());

    return matchesCause && matchesSearch;
  });

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
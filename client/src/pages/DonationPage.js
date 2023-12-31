import React, { useState, useEffect } from "react";
import OrganizationList from "./OrganizationList";
import Search from "./Search";

const URL = ''

function DonationPage() {
  const [donations, setDonations] = useState([])
  const [search, setSearch] = useState('')

  // fetching data
  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(data => setDonations(data))
  }, [])

  // adding new donation to a db and updating DOM
  const handleAddDonation = (newDonation) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newDonation)
    })
    .then(res => res.json())
    .then(data => setDonations([...donations, data]))
  }

  // filtering through an original array to filter plants that user is searching for
const filteredOrganizations = organizations.filter(organization => organization.name && organization.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <Search search={search} setSearch={setSearch}/>
      <OrganizationList organizations={filteredOrganizations} />
    </main>
  );
}

export default DonationPage;
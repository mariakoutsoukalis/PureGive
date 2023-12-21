import React, { useState, useEffect } from "react";
import DonorsList from "@/components/DonorsList"; // Adjust the import path as necessary
import SearchDonors from '../components/SearchD';

const URL = 'http://127.0.0.1:5000/donors/causes'

function DonorPage() {
  const [donors, setDonors] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(data => setDonors(data))
  }, [])

  const filteredDonors = donors.filter(donor =>
    (donor.first_name.toLowerCase().includes(search.toLowerCase())) ||
    (donor.last_name.toLowerCase().includes(search.toLowerCase()))
  );
  
  return (
    <main>
      <SearchDonors search={search} setSearch={setSearch}/>
      <DonorsList donors={filteredDonors} />
    </main>
  );
}

export default DonorPage;

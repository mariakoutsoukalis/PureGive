import React from "react";


function SearchDonors({ search, setSearch }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="Type a Donors name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchDonors;
import React from "react";


function SearchOrganizations({ search, setSearch }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="Type an organization's name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchOrganizations;
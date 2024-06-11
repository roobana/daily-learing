import React from "react";
const SearchItems = ({ searchItem, setSearchItem }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label className="searchLabel">Search Text</label>
      <input
        className="searchInput"
        type="text"
        placeholder="type the required item"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </form>
  );
};

export default SearchItems;

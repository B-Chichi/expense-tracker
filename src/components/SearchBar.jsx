import React from "react";

function SearchBar({ onChange }) {
  const input = (e) => {
    onChange(e.target.value);
  };

  return <input type="text" placeholder="Search Expenses" onChange={input} />;
}

export default SearchBar;

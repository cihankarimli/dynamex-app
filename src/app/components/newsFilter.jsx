import React from "react";
import NewsData from "../data/NewsData";

function newsFilter({ onSelectChange }) {
  const options = Object.keys(NewsData);
  const handleSelectChange = (event) => {
    onSelectChange(event.target.value);
    console.log("Seçilən option:", event.target.value);
  };
  return (
    <div className="filter">
      <select onChange={handleSelectChange}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default newsFilter;

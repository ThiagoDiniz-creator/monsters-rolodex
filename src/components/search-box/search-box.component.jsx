//Essential import
import React from "react";

//Stylesheet
import "./search-box.styles.css";

export const SearchBox = ({ id, type, placeholder, handleChange }) => {
  return (
    <div>
      <input
        className="search"
        key={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

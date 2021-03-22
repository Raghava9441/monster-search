import React from 'react';
import './SearchField.css';
export default function SearchField({ placeholder, onsearch }) {
  return (
    <div className = "search_box">
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={onsearch}
      />
    </div>
  );
}

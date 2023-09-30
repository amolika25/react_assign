import React from "react";
import { useState } from "react";
var mock_data = require("./mock_data.json");

export default function Search() {
  const [name, setname] = useState("");

  const onChange = (event) => {
    setname(event.target.name);
  };

  const onSearch = (searchTerm) => {
    setname(searchTerm);
    console.log("search", searchTerm);
  };

  return (
    <div className="search">
      <p>Search</p>
      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={name} onChange={onChange()} />
          <button onClick={() => onSearch(name)}>Search</button>
        </div>
        <div className="dropdown">
          {mock_data
            .filter((item) => {
              const searchTerm = name.toLowerCase();
              const firstname = item.first_name.toLowerCase();

              return (
                searchTerm &&
                firstname.startsWith(searchTerm) &&
                firstname !== searchTerm
              );
            })
            .map((item) => (
              <div
                onClick={() => onSearch(item.first_name)}
                className="dropdown-row"
                key={item.first_name}
              >
                {item.first_name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

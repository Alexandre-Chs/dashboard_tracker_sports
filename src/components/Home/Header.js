import React from "react";
import Date from "./Date";

const Header = () => {
  return (
    <div className="dashboard">
      <div>
        <p className="header_dashboard">Dashboard</p>
        <Date />
      </div>
      <input
        type="text"
        autoComplete="off"
        id="search"
        placeholder="Search here..."
      ></input>
    </div>
  );
};

export default Header;

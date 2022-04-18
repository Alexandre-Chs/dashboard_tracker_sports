import React from "react";
import Date from "./Date";

const Header = () => {
  return (
    <div className="dashboard">
      <div>
        <p className="header_dashboard">Dashboard</p>
        <Date />
      </div>
      <input type="text"></input>
    </div>
  );
};

export default Header;

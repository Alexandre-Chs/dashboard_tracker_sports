import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiSettings5Fill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { IoTimeSharp } from "react-icons/io5";
import { IoExit } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="navbar">
      <div id="icon_dashboard">
        <MdSpaceDashboard size={"3.5em"} style={{ color: "#FFFFFF" }} />
      </div>
      <div id="navigation_icon">
        <Link className="icon" to="/">
          <AiFillHome size={"1.5em"} style={{ color: "#FFFFFF" }} />
          <p>Home</p>
        </Link>
        <Link className="icon" to="/graph">
          <BsFillFileBarGraphFill size={"1.5em"} style={{ color: "#FFFFFF" }} />
          <p>Graph</p>
        </Link>
        <Link className="icon" to="/timer">
          <IoTimeSharp size={"1.5em"} style={{ color: "#FFFFFF" }} />
          <p>Timer</p>
        </Link>
        <Link className="icon" to="/settings">
          <RiSettings5Fill size={"1.5em"} style={{ color: "#FFFFFF" }} />
          <p>Settings</p>
        </Link>
      </div>
      <div id="exit_icon">
        <IoExit size={"1.5em"} style={{ color: "#FFFFFF" }} />
      </div>
    </div>
  );
};

export default NavBar;

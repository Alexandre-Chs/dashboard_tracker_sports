import React from "react";
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
        <div className="icon">
          <AiFillHome size={"1.5em"} style={{ color: "#FFFFFF" }} />
          <p>Home</p>
        </div>
        <div className="icon">
          <BsFillFileBarGraphFill size={"1.5em"} style={{ color: "#FFFFFF" }} />
          <p>Graph</p>
        </div>
        <div className="icon">
          <IoTimeSharp size={"1.5em"} style={{ color: "#FFFFFF" }} />
          <p>Timer</p>
        </div>
        <div className="icon">
          <RiSettings5Fill size={"1.5em"} style={{ color: "#FFFFFF" }} />
          <p>Settings</p>
        </div>
      </div>
      <div id="exit_icon">
        <IoExit size={"1.5em"} style={{ color: "#FFFFFF" }} />
      </div>
    </div>
  );
};

export default NavBar;

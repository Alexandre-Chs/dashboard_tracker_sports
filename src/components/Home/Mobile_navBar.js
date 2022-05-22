import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { IoTimeSharp } from "react-icons/io5";
import { RiSettings5Fill } from "react-icons/ri";
import { IoExit } from "react-icons/io5";

const Mobile_navBar = (props) => {
  return (
    <Fragment>
      <Link
        className={`icon_mobile home ${props.click ? "open_navBar" : "hidden"}`}
        to="/"
      >
        <AiFillHome size={"1.5em"} style={{ color: "#FFFFFF" }} />
        <p>HOME</p>
      </Link>
      <Link
        className={`icon_mobile graph ${props.click ? "open_navBar" : "hidden"}`}
        to="/graph"
      >
        <BsFillFileBarGraphFill size={"1.5em"} style={{ color: "#FFFFFF" }} />
        <p>GRAPH</p>
      </Link>
      <Link
        className={`icon_mobile chrono ${props.click ? "open_navBar" : "hidden"}`}
        to="/timer"
      >
        <IoTimeSharp size={"1.5em"} style={{ color: "#FFFFFF" }} />
        <p>TIMER</p>
      </Link>
      <Link
        className={`icon_mobile setting ${props.click ? "open_navBar" : "hidden"}`}
        to="/settings"
      >
        <RiSettings5Fill size={"1.5em"} style={{ color: "#FFFFFF" }} />
        <p>SETTINGS</p>
      </Link>
      <IoExit className={`icon_mobile exit ${props.click ? "open_navBar" : "hidden"}`} size={"1.5em"} style={{ color: "#FFFFFF" }} />
    </Fragment>
  );
};

export default Mobile_navBar;

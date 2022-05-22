import React, { useState, Fragment } from "react";
import Mobile_navBar from "./Mobile_navBar";

const BurgerAndMenu = () => {
  const [click, setClick] = useState(false);

  return (
    <Fragment>
      <div onClick={() => setClick(!click)} className={`hamburger ${click ? "width_navBar" : "hidden"}`}>
        <div className="hamburger_icon">
          <div className={`bar ${click ? "animate" : "hidden"}`}></div>
        </div>
        <Mobile_navBar click={click}/>
      </div>
    </Fragment>
  );
};

export default BurgerAndMenu;

import React from "react";
import NavBar from "./Home/NavBar";
import Header from "./Home/header";
import HomeProfile from "./Home/Profile_home";
import Chronometer from "./Timer/Chronometer";
import "../styles/timer.css";

const Timer = () => {
  return (
    <div className="container">
      <div className="main_card_container">
        <NavBar />

        <div className="container_timer">
          <Header />
          <Chronometer />
        </div>
        <HomeProfile />
      </div>
    </div>
  );
};

export default Timer;

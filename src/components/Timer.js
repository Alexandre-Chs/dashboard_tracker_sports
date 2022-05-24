import React from "react";
import NavBar from "./Home/NavBar";
import Header from "./Home/Header";
import HomeProfile from "./Home/Profile_home";
import Chronometer from "./Timer/Chronometer";
import "../styles/timer.css";
import BurgerAndMenu from "./Home/Burger";

const Timer = () => {
  return (
    <div className="container">
      <div className="main_card_container">
        <BurgerAndMenu />
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

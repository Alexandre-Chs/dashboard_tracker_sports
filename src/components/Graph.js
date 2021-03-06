import React from "react";
import NavBar from "./Home/NavBar";
import HomeProfile from "./Home/Profile_home";
import Analytics from "./GraphContent/Analytics";
import Header from "./Home/Header";
import "../styles/graph.css";
import BurgerAndMenu from "./Home/Burger";

const Graph = () => {
  return (
    <div className="container">
      <div className="main_card_container">
      <BurgerAndMenu />
        <NavBar />

        <div className="container_graph">
          <Header />
          <Analytics />
        </div>

        <HomeProfile />
      </div>
    </div>
  );
};

export default Graph;

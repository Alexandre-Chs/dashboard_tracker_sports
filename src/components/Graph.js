import React from "react";
import NavBar from "./Home/NavBar";
import HomeProfile from "./Home/Profile_home";
import ChartsHome from "./Home/ChartsHome";
import Analytics from "./GraphContent/Analytics";
import Header from "./Home/header";
import "../styles/graph.css";

const Graph = () => {
  return (
    <div className="container">
      <div className="main_card_container">
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

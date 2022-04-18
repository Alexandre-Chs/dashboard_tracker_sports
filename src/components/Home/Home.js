import React from "react";
import NavBar from "./NavBar";
import HomeInformation from "./InformationsHome/information_home";
import HomeProfile from "./ProfileHome/Profile_home";

const Home = () => {
  return (
    <div className="container">
      <div className="main_card_container">
          <NavBar/>
          <HomeInformation/>
          <HomeProfile/>
      </div>
    </div>
  );
};

export default Home;

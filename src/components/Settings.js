import React from "react";
import NavBar from "./Home/NavBar";
import HomeProfile from "./Home/Profile_home";
import Settings_dashboard from "./Settings/Settings_dashboard";
import Header from "./Home/header";
import "../styles/settings.css";

const Settings = () => {
  return (
    <div className="container">
      <div className="main_card_container">
        <NavBar />

        <div className="container_settings">
          <Header />
          <Settings_dashboard />
        </div>

        <HomeProfile />
      </div>
    </div>
  );
};

export default Settings;

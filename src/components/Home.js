import React, {useContext} from "react";
import "../styles/home.css";
import NavBar from './Home/NavBar'
import HomeInformation from './Home/information_home'
import HomeProfile from './Home/Profile_home'
import BurgerAndMenu from "./Home/Burger";

const Home = () => {
  return (
    <div className="container">
      <div className="main_card_container">
          <BurgerAndMenu />
          <NavBar/>
          <HomeInformation/>
          <HomeProfile/>
      </div>
    </div>
  );
};

export default Home;

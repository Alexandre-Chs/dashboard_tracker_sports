import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Graph from "./components/Graph";
import Timer from "./components/Timer";
import Settings from "./components/Settings";
import "./index.css";

export const MyContext = React.createContext();

// INFORMATIONS CHARTS 
const chartsData = {
  steps: [
    { name: "Monday", Steps: 1500 },
    { name: "Tuesday", Steps: 1200 },
    { name: "Wednesday", Steps: 800 },
    { name: "Thursday", Steps: 1500 },
    { name: "Friday", Steps: 760 },
    { name: "Saturday", Steps: 500 },
    { name: "Sunday", Steps: 1800 },
  ],

  calories: [
    { name: "Monday", Calories: 100 },
    { name: "Tuesday", Calories: 1200 },
    { name: "Wednesday", Calories: 800 },
    { name: "Thursday", Calories: 1500 },
    { name: "Friday", Calories: 760 },
    { name: "Saturday", Calories: 500 },
    { name: "Sunday", Calories: 1800 },
  ],

  sleep: [
    { name: "Monday", Sleep: 500 },
    { name: "Tuesday", Sleep: 1200 },
    { name: "Wednesday", Sleep: 800 },
    { name: "Thursday", Sleep: 1500 },
    { name: "Friday", Sleep: 760 },
    { name: "Saturday", Sleep: 500 },
    { name: "Sunday", Sleep: 1800 },
  ],
};

function App() {
  return (
    <Router>
      <MyContext.Provider value={chartsData}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MyContext.Provider>
    </Router>
  );
}

export default App;

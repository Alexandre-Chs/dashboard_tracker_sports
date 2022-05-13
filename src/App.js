import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Graph from "./components/Graph";
import Timer from "./components/Timer";
import Settings from "./components/Settings";
import "./index.css";

export const MyContext = React.createContext();

const values = {
  test: "test",
};

function App() {
  return (
    <Router>
      <MyContext.Provider value={values}>
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

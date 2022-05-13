import React, { useState, useContext } from "react";
import { MyContext } from "../../App";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartsHome = () => {
  const context = useContext(MyContext)
  console.log(context);
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

  const [data, setData] = useState("");

  const handleClick = (e) => {
    // TAKE VALUE ON SELECT HTML ELEMENT
    const dataValue = e.target.value;
    setData(dataValue);
  };

  return (
    <div className="charts">
      <div className="header_charts">
        <h3>My activity</h3>
        <div>
          <select
            name="selector_tracker"
            id="select_activity"
            onClick={handleClick}
          >
            <option value="steps">Steps</option>
            <option value="calories">Calories</option>
            <option value="sleep">Sleep</option>
          </select>
        </div>
      </div>
      <ResponsiveContainer>
        <LineChart
          data={
            data === "steps"
              ? chartsData.steps
              : data === "calories"
              ? chartsData.calories
              : chartsData.sleep
          }
        >
          <Line
            type="monotone"
            dataKey={
              data === "steps"
                ? "Steps"
                : data === "calories"
                ? "Calories"
                : "Sleep"
            }
            stroke="#52a6c0"
          />
          <CartesianGrid stroke="#b1b2b4" strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartsHome;

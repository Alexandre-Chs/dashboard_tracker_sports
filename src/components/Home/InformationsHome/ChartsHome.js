import React from "react";
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
  const data = [
    { name: "Monday", Steps: 1500 },
    { name: "Tuesday", Steps: 1200 },
    { name: "Wednesday", Steps: 800 },
    { name: "Thursday", Steps: 1500 },
    { name: "Friday", Steps: 760 },
    { name: "Saturday", Steps: 500 },
    { name: "Sunday", Steps: 1800 },
  ];

  return (
    <div className="charts">
      <div className="header_charts">
        <h3>My activity</h3>
        <div>
          <select name="selector_tracker" id="select_activity">
            <option value="steps">Steps</option>
            <option value="calories">Calories</option>
            <option value="sleep">Sleep</option>
          </select>
        </div>
      </div>
      <ResponsiveContainer>
        <LineChart
          data={data}
        >
          <Line type="monotone" dataKey="Steps" stroke="#52a6c0" />
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

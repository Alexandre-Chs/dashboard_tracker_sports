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
            <option value="sleep">Sleep</option>
            <option value="steps">Steps</option>
            <option value="calories">Calories</option>
            
          </select>
        </div>
      </div>
      <ResponsiveContainer>
        <LineChart
          data={
            data === "steps"
              ? context.steps
              : data === "calories"
              ? context.calories
              : context.sleep
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

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
    { name: "Mon", uv: 1500 },
    { name: "Tue", uv: 1200 },
    { name: "Wed", uv: 800 },
    { name: "Thu", uv: 1500 },
    { name: "Fri", uv: 760 },
    { name: "Sat", uv: 500 },
    { name: "Sun", uv: 1800 },
  ];

  return (
    <div className="charts">
        <ResponsiveContainer>
            <LineChart
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
        </ResponsiveContainer>
      
    </div>
  );
};

export default ChartsHome;

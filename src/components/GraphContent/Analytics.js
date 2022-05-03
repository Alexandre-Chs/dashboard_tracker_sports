import React, { Fragment } from "react";
import ChartsHome from "../Home/ChartsHome";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];


  return (
    <Fragment>
      <div className="card_charts">
        <div className="top_content">
          <div className="enhautcharts">
            <div className="box1"></div>
            <div className="box2"></div>
          </div>
          <ChartsHome />
        </div>

        <div className="bottom_content">
          <div className="box3">
          <ResponsiveContainer width="100%" height="100%">
        <PieChart width={100} height={100}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
          </div>
          <div className="box4"></div>
          <div className="box5"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Analytics;

import React, { Fragment } from "react";
import ChartsHome from "../Home/ChartsHome";

const Analytics = () => {
  return (
    <Fragment>
      <div className="left_content">
        <div className="enhautcharts">
            <div className="box1"></div>
            <div className="box2"></div>
        </div>
        <ChartsHome />
      </div>

      <div className="right_content">
          <div className="box3"></div>
          <div className="box4"></div>
          <div className="box5"></div>
      </div>
    </Fragment>
  );
};

export default Analytics;

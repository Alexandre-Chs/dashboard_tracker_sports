import React, { Fragment } from "react";
import ChartsHome from "../Home/ChartsHome";
import { GrScorecard } from "react-icons/gr";
import { FiActivity } from "react-icons/fi";
import { GiChessKing } from "react-icons/gi";
import { RiZzzFill } from "react-icons/ri";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const Analytics = () => {
  const dataFirstBox = [
    {
      subject: "Points",
      A: 50,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Steps",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Calories",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Sleep",
      A: 86,
      B: 130,
      fullMark: 150,
    },
  ];

  return (
    <Fragment>
      <div className="card_charts">
        <div className="top_content">
          <div className="topcharts_informations">
            <div className="box box1">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={dataFirstBox}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis />
                  <Radar
                    name="Mike"
                    dataKey="A"
                    stroke="#48484b"
                    fill="#97d4e6"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="cardsInformations box2">
              <div className="inside box">
                <div className="container_box3">
                  <div className="iconScore">
                    <GrScorecard />
                  </div>
                  <div className="text_score">
                    <p>110 pts</p>
                    <p>Earned this month</p>
                  </div>
                </div>
              </div>
              <div className="inside box">
                <div className="container_box3">
                  <div className="iconScore">
                    <GiChessKing size={"1.5em"} />
                  </div>
                  <div className="text_score">
                    <p>10 rewards</p>
                    <p>10 points left for the next reward</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ChartsHome />
        </div>

        <div className="bottom_content">
          <div className="box boxBottom">
            <div className="box_bottom_informations">
              <div className="header_text_bottom_informations">
                <div className="iconScore">
                  <FiActivity size={"1.5em"} />
                </div>
                <p>Last activity</p>
              </div>
              <div className="textContent_bottom_informations">
                <p>Cycling</p>
              </div>
            </div>
          </div>
          <div className="box boxBottom">
          <div className="box_bottom_informations">
              <div className="header_text_bottom_informations">
                <div className="iconScore">
                  <RiZzzFill size={"1.5em"} />
                </div>
                <p>Last sleep</p>
              </div>
              <div className="textContent_bottom_informations">
                <p>09/05/2022</p>
              </div>
            </div>
          </div>
          <div className="box boxBottom">
          <div className="box_bottom_informations">
              <div className="header_text_bottom_informations">
                <div className="iconScore">
                  <MdOutlineSportsVolleyball size={"1.5em"} />
                </div>
                <p>Favorite sport</p>
              </div>
              <div className="textContent_bottom_informations">
                <p>Swimming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Analytics;

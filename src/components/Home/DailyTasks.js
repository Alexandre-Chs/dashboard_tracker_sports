import React, {useState} from "react";
import { GiFootprint } from "react-icons/gi";
import { AiFillFire } from "react-icons/ai";
import { RiMoonFill } from "react-icons/ri";
import Modal from "./Modal";


const DailyTasks = () => {

  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true);
  }

  const disableModal = () => {
    setVisible(false);
  }


  return (
    <div className="dailyTasks_home">
      <h3>Daily Tasks</h3>
      <div className="container_dailytask">
        <div className="cardDailyTask card_steps_dailytask">
          <div className="left_card_steps orange">
            <GiFootprint size={"1.5em"} style={{ color: "#FFFFFF" }} />
          </div>
          <div className="text-right_card">
            <p>1000 Steps</p>
            <p>Step</p>
          </div>

          <button onClick={showModal} className="button_setting_card">
            <div className="little_circle1 orange"></div>
            <div className="little_circle2 orange"></div>
          </button>
        </div>

        <div className="cardDailyTask card_steps_dailytask">
          <div className="left_card_steps blue">
            <AiFillFire size={"1.5em"} style={{ color: "#FFFFFF" }} />
          </div>
          <div className="text-right_card">
            <p>40 Kcal</p>
            <p>Calories</p>
          </div>

          <button className="button_setting_card">
            <div className="little_circle1 blue"></div>
            <div className="little_circle2 blue"></div>
          </button>
        </div>

        <div className="cardDailyTask card_steps_dailytask">
          <div className="left_card_steps yellow">
            <RiMoonFill size={"1.5em"} style={{ color: "#FFFFFF" }} />
          </div>
          <div className="text-right_card">
            <p>100 Score</p>
            <p>Sleep</p>
          </div>
          <button className="button_setting_card">
            <div className="little_circle1 yellow"></div>
            <div className="little_circle2 yellow"></div>
          </button>
        </div>
      </div>
      <Modal visible={visible} notShow={disableModal}/>
    </div>
  );
};

export default DailyTasks;

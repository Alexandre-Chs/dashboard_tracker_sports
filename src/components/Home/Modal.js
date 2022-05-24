import React, { useContext} from "react";
import { MyContext } from "../../App";

// IMPORT FROM DAILYTASK
const Modal = ({ calories, steps, sleep, visible, notShow }) => {
  const context = useContext(MyContext);
  const newDataSteps = [...context.steps];
  const newDataCalories = [...context.calories];
  const newDataSleep = [...context.sleep];

  const handleInputSteps = (e) => {
    const numberSteps = Number(e.target.value);
    newDataSteps[0].Steps = numberSteps;
  };

  const handleInputCalories = (e) => {
    const numberCalories = Number(e.target.value);
    newDataCalories[0].Calories = numberCalories;
  };
  const handleInputSleep = (e) => {
    const number = Number(e.target.value) * 100;
    newDataSleep[0].Sleep = number;
  };
  
  return visible && steps ? (
    <div className="modal" >
      <div className="container_modal">
        <div className="enter_steps_count">
          <label>Enter how many steps you have walked today</label>
          <input
            onInput={handleInputSteps}
            placeholder="Enter steps"
            type="number"
            id="count_steps"
            name="count_steps"
          ></input>
          <input type="submit" onClick={notShow} value="Add"></input>
          
        </div>
        <div>
          <p onClick={notShow} className="close_modal">
            X
          </p>
        </div>
      </div>
    </div>
  ) : visible && calories ? (
    <div className="modal">
      <div className="container_modal">
        <div className="enter_steps_count">
          <label>Enter how many calories you loose today</label>
          <input
            onInput={handleInputCalories}
            placeholder="Enter calories"
            type="number"
            id="count_steps"
            name="count_steps"
          ></input>
          <input type="submit" onClick={notShow} value="Add"></input>
        </div>
        <div>
          <p onClick={notShow} className="close_modal">
            X
          </p>
        </div>
      </div>
    </div>
  ) : visible && sleep ? (
    <div className="modal">
      <div className="container_modal">
        <div className="enter_steps_count">
          <label>Enter how many time you sleep today</label>
          <p id="exampleTime">Example : 12h = 12</p>
          <input
            onInput={handleInputSleep}
            placeholder="Enter time"
            type="number"
            id="count_steps"
            name="count_steps"
          ></input>
          <input type="submit" onClick={notShow} value="Add"></input>
        </div>
        <div>
          <p onClick={notShow} className="close_modal">
            X
          </p>
        </div>
      </div>
    </div>
  ) : null;
};
export default Modal;

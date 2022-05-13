import React from "react";

const Modal = (props) => {
  return props.visible && props.steps ? (
    <div className="modal">
      <div className="container_modal">
        <div className="enter_steps_count">
          <label>Enter how many steps you have walked today</label>
          <input
            placeholder="Enter steps"
            type="number"
            id="count_steps"
            name="count_steps"
          ></input>
          <input type="submit" value="Add"></input>
        </div>
        <div>
          <p onClick={props.notShow} className="close_modal">
            X
          </p>
        </div>
      </div>
    </div>
  ) : props.visible && props.calories ? (
    <div className="modal">
      <div className="container_modal">
        <div className="enter_steps_count">
          <label>Enter how many calories you loose today</label>
          <input
            placeholder="Enter calories"
            type="number"
            id="count_steps"
            name="count_steps"
          ></input>
          <input type="submit" value="Add"></input>
        </div>
        <div>
          <p onClick={props.notShow} className="close_modal">
            X
          </p>
        </div>
      </div>
    </div>
  ) : props.visible && props.sleep ? (
    <div className="modal">
      <div className="container_modal">
        <div className="enter_steps_count">
          <label>Enter how many time you sleep today</label>
          <input
            placeholder="Enter time"
            type="time"
            id="count_steps"
            name="count_steps"
          ></input>
          <input type="submit" value="Add"></input>
        </div>
        <div>
          <p onClick={props.notShow} className="close_modal">
            X
          </p>
        </div>
      </div>
    </div>
  ) : null;
};
export default Modal;

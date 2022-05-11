import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    console.log(props)
    return (
      <div className="modal">Modal</div>
    )
  }
export default Modal;


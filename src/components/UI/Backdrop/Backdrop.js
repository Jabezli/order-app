import React from "react";
import classes from "./Backdrop.module.css";
import ReactDOM from "react-dom";

const backdropRoot = document.getElementById("backdrop-root");
const Backdrop = (props) => {
  console.log(props);
  return ReactDOM.createPortal(
    //"...props" will ensure all the props related to this backdrop will be applied to this div
    <div {...props} className={`${classes.Backdrop} $(props.className)`}>
      {props.children}
    </div>,
    backdropRoot
  );
};

export default Backdrop;

import React from "react";
import Backdrop from "../Backdrop";
import classes from "./Confirm.module.css";
const Confirm = (props) => {
  return (
    <Backdrop onClick={props.onCancel} className={classes.ConfirmOuter}>
      <div className={classes.Confirm}>
        <p className={classes.ConfirmText}>{props.confirmText}</p>
        <div>
          <button
            onClick={(e) => {
              props.onCancel(e);
            }}
            className={classes.Cancel}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              props.onYes();
            }}
            className={classes.Yes}
          >
            Yes
          </button>
        </div>
      </div>
    </Backdrop>
  );
};

export default Confirm;

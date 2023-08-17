import React from "react";
import ReactDOM from "react-dom";
import classes from "./Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fasolid, faXmark } from "@fortawesome/free-solid-svg-icons";

const checkoutRoot = document.getElementById("checkout-root");

const Checkout = ({ onHide }) => {
  return ReactDOM.createPortal(
    <div
      className={classes.Checkout}
      onClick={() => {
        onHide();
      }}
    >
      <div className={classes.Close}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>,
    checkoutRoot
  );
};

export default Checkout;

import React, { useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fasolid, faXmark } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context";
import CheckoutItem from "./CheckoutItem/CheckoutItem";

const checkoutRoot = document.getElementById("checkout-root");

const Checkout = ({ onHide }) => {
  const ctx = useContext(CartContext);

  console.log(ctx);

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
      <div className={classes.MealsDesc}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>Order Detail</h2>
        </header>
        <div className={classes.Meals}>
          {ctx.items.map((item) => (
            <CheckoutItem key={item.id} tea={item} />
          ))}
        </div>
        <footer className={classes.Footer}>
          <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
        </footer>
      </div>
    </div>,
    checkoutRoot
  );
};

export default Checkout;

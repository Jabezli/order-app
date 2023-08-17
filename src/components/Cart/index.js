import { React, useContext, useState } from "react";
import classes from "./Cart.module.css";
import iconImg from "../../asset/bag.png";
import CartContext from "../../store/cart-context";
import CartDetails from "./CartDetails";
import Checkout from "./Checkout";

const Cart = () => {
  const ctx = useContext(CartContext);
  //the showDetails will show the cart if the value is true. It is false by default
  const [showDetails, SetShowDetails] = useState(false);

  const toggleDetailsHandler = () => {
    if (ctx.totalAmount === 0) {
      SetShowDetails(false);
      return;
    }
    SetShowDetails((prevState) => !prevState);
  };

  const [showCheckout, setShowCheckout] = useState(false);

  const showCheckoutHandler = () => {
    if (ctx.totalAmount === 0) return;
    setShowCheckout(true);
  };

  const hideCheckoutHandler = () => {
    setShowCheckout(false);
  };
  return (
    <div className={classes.Cart} onClick={toggleDetailsHandler}>
      {showCheckout && <Checkout onHide={hideCheckoutHandler} />}
      {showDetails && <CartDetails />}
      <div className={classes.Icon}>
        <img src={iconImg} alt="" />
        {ctx.totalAmount === 0 ? null : (
          <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
        )}
      </div>
      <p className={classes.Price}>{ctx.totalPrice}</p>
      <button
        onClick={showCheckoutHandler}
        className={`${classes.Button} ${
          ctx.totalAmount === 0 ? classes.DisabledButton : ""
        }`}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;

import { React, useContext, useState } from "react";
import classes from "./Cart.module.css";
import iconImg from "../../asset/bag.png";
import CartContext from "../../store/cart-context";

const Cart = () => {
  const ctx = useContext(CartContext);

  return (
    <div className={classes.Cart}>
      <div className={classes.Icon}>
        <img src={iconImg} alt="" />
        <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
      </div>
      <p className={classes.Price}>{ctx.totalPrice}</p>
      <button className={classes.Button}>Checkout</button>
    </div>
  );
};

export default Cart;

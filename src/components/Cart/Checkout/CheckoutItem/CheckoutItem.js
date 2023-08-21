import React from "react";
import classes from "./CheckoutItem.module.css";
import Counter from "../../../UI/Counter/index";

const CheckoutItem = (props) => {
  console.log("tea props" + props);
  return (
    <div className={classes.CheckoutItem}>
      <div className={classes.MealImg}>
        <img src={props.tea.img} alt="" />
      </div>
      <div className={classes.Desc}>
        <h2 className={classes.Title}>{props.tea.title}</h2>
        <div className={classes.PriceOuter}>
          <Counter tea={props.tea} />
          <div className={classes.Price}>
            {props.tea.price * props.tea.amount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;

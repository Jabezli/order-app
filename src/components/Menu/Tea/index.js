import React from "react";
import classes from "./Tea.module.css";

const Tea = () => {
  return (
    <div className={classes.Tea}>
      <div className={classes.ImgBox}>
        <img src="/img/teas/1.jpg" alt="green" />
      </div>
      <div className={classes.DescWrap}>
        <h2 className={classes.Title}>Green Tea</h2>
        <p className={classes.Desc}>
          Best Grean Tea Ever! Best Grean Tea Ever! Best Grean Tea Ever! Best
          Grean Tea Ever!
        </p>
        <div className={classes.PriceWrap}>
          <span className={classes.Price}>12</span>
          <div className={classes.Number}>number</div>
        </div>
      </div>
    </div>
  );
};

export default Tea;

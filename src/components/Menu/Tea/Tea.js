import React from "react";
import classes from "./Tea.module.css";
import Counter from "../../UI/Counter/Counter";

const Tea = ({ tea }) => {
  // console.log(props);
  return (
    <div className={classes.Tea}>
      <div className={classes.ImgBox}>
        <img src={tea.img} alt="" />
      </div>
      <div className={classes.DescWrap}>
        <h2 className={classes.Title}>{tea.title}</h2>
        <p className={classes.Desc}>{tea.desc}</p>
        <div className={classes.PriceWrap}>
          <span className={classes.Price}>{tea.price}</span>
          <Counter tea={tea} />
        </div>
      </div>
    </div>
  );
};

export default Tea;

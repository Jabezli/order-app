import React from "react";
import Tea from "./Tea";
import classes from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={classes.Menu}>
      {props.menuData.map((item) => (
        <Tea key={item.id} tea={item} />
      ))}
    </div>
  );
};

export default Menu;

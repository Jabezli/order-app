import React from "react";
import Tea from "./Tea";
import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={classes.Menu}>
      <Tea />
      <Tea />
      <Tea />
      <Tea />
      <Tea />
      <Tea />
      <Tea />
    </div>
  );
};

export default Menu;

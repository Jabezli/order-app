import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css";

const FilterMeals = () => {
  return (
    <div className={classes.FilterMeals}>
      <div className={classes.InputWrapper}>
        <input
          className={classes.SearchInput}
          type="text"
          placeholder={"Search for Teas!"}
        />
        <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} />
      </div>
    </div>
  );
};

export default FilterMeals;

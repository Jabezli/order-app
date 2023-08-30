import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css";

const FilterMeals = ({ onFilter }) => {
  const [keyword, setKeyword] = useState("");

  const inputChangeHandler = (e) => {
    setKeyword(e.target.value.trim().toLowerCase());
    // const keyword = e.target.value.trim().toLowerCase();
    // // onFilter(keyword);
  };
  return (
    <div className={classes.FilterMeals}>
      <div className={classes.InputWrapper}>
        <input
          onChange={inputChangeHandler}
          className={classes.SearchInput}
          type="text"
          placeholder={"Search for Teas!"}
          value={keyword}
        />
        <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} />
      </div>
    </div>
  );
};

export default FilterMeals;

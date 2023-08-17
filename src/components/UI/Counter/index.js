import React, { useContext } from "react";
import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context";

const Counter = (props) => {
  const ctx = useContext(CartContext);

  const addButtonHanlder = () => {
    ctx.addItem(props.tea);
  };
  const subButtonHanlder = () => {
    ctx.removeItem(props.tea);
  };
  return (
    <div className={classes.Counter}>
      {/* if props.amount exist and > 0 */}
      {props.tea.amount && props.tea.amount > 0 ? (
        <>
          <button onClick={subButtonHanlder} className={classes.Sub}>
            <FontAwesomeIcon icon={faMinus} size="2xs" />
          </button>
          <span className={classes.Count}>{props.tea.amount}</span>
        </>
      ) : null}

      <button onClick={addButtonHanlder} className={classes.Add}>
        <FontAwesomeIcon icon={faPlus} size="2xs" />
      </button>
    </div>
  );
};

export default Counter;

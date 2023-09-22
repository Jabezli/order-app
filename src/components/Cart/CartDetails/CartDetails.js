import React, { useContext, useState } from "react";
import Backdrop from "../../UI/Backdrop/Backdrop.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "./CartDetails.module.css";
import CartContext from "../../../store/cart-context.js";
import Tea from "../../Menu/Tea/Tea";
import Confirm from "../../UI/Confirm/Confirm.js";
const CartDetails = () => {
  const ctx = useContext(CartContext);

  //state to show Confirm UI
  const [showConfirm, setShowConfirm] = useState(false);
  //function to update showConfirm state
  const showConfirmHandler = () => {
    setShowConfirm(true);
  };

  const cancelHandler = (e) => {
    e.stopPropagation();
    setShowConfirm(false);
  };

  const yesHandler = () => {
    ctx.cartDispatch({ type: "CLEAR_CART" });
  };
  return (
    // backdrop is the wrapper of the detail.

    <Backdrop>
      {showConfirm && (
        <Confirm
          confirmText={`Do you want to delete all the items?`}
          onCancel={cancelHandler}
          onYes={yesHandler}
        />
      )}
      {/* to prevent the cart toggled when click cart detail area */}
      <div className={classes.CartDetails} onClick={(e) => e.stopPropagation()}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>Order Detail</h2>
          <div className={classes.Clear} onClick={showConfirmHandler}>
            <FontAwesomeIcon icon={faTrash} />
            <span>Empty Cart</span>
          </div>
        </header>
        <div className={classes.List}>
          {ctx.items.map((item) => (
            <Tea key={item.id} tea={item} />
          ))}
        </div>
      </div>
    </Backdrop>
  );
};

export default CartDetails;

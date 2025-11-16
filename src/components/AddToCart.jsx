import React from "react";
import { useSelector } from "react-redux";

function AddToCart() {
  const cartSelector = useSelector((state) => state.cart.items);
  // console.log(cartSelector.length);  

  return (
    <>
      <div className="cart">
        <i className="cart-icon">🛒</i>
        <span className="cart-count">
          {cartSelector.length ? cartSelector.length : 0}
        </span>
      </div>
    </>
  );
}

export default AddToCart;

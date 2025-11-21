import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AddToCart() {
  const cartSelector = useSelector((state) => state.cart.items);
  return (
    <>
      <Link to="/cart">
        <div className="cart">
          <i className="cart-icon">🛒</i>
          <span className="cart-count">
            {cartSelector.length ? cartSelector.length : 0}
          </span>
        </div>
      </Link>
    </>
  );
}

export default AddToCart;

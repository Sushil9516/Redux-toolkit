import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem } from "../redux/slice";
import { Link } from "react-router-dom";

function CartList() {
  const dispatch = useDispatch();
  const cartSelector = useSelector((state) => state.cart.items);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Cart Items</h2>
        <h2>{cartSelector.length} Items</h2>
      </div>

      {cartSelector.length > 0 &&
        cartSelector.map((cartItem) => {
          return (
            <div key={cartItem.id} className="cart-item">
              <div className="item-info">
                <img src={cartItem.image} height="100" />
                <div className="item-details">
                  <h4>{cartItem.title}</h4>
                  <p>{cartItem.category}</p>
                </div>
              </div>

              <div className="item-actions">
                <span className="price">₹{cartItem.price}</span>

                {/* QUANTITY CONTROLS */}
                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(decreaseQuantity(cartItem.id))}
                  >
                    -
                  </button>

                  <span className="qty">{cartItem.quantity}</span>

                  <button
                    className="qty-btn"
                    onClick={() => dispatch(increaseQuantity(cartItem.id))}
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-to-cart"
                  onClick={() => dispatch(removeItem(cartItem.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}

      {/* FOOTER TOTAL */}
      <div className="cart-footer">
        <div>
          <Link to="/checkout">
            <button className="add-to-cart">Place Order</button>
          </Link>
        </div>
        <div>
          Total : ₹
          {cartSelector
            .reduce(
              (sum, item) =>
                sum + Number(item.price) * Number(item.quantity || 1),
              0
            )
            .toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default CartList;

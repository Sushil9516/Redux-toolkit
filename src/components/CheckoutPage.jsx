import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CheckoutPage() {
  const cart = useSelector((state) => state.cart.items);

  const totalAmount = cart.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity || 1),
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Checkout</h2>
        <h2>{cart.length} Items</h2>
      </div>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="item-info">
            <img src={item.image} height="100" />
            <div className="item-details">
              <h4>{item.title}</h4>
              <p>{item.category}</p>
            </div>
          </div>

          <div className="item-actions">
            <span className="price">₹{item.price}</span>
            <span className="qty">Qty: {item.quantity}</span>
          </div>
        </div>
      ))}

      <div className="cart-footer">
        <div className="total">
          <b>Total Amount:</b> ₹{totalAmount.toFixed(2)}
        </div>

        {/* Proceed To Payment button */}
        <Link to="/payment">
          <button className="add-to-cart">Proceed To Payment</button>
        </Link>
      </div>
    </div>
  );
}

export default CheckoutPage;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Checkout() {
  const cartSelector = useSelector((state) => state.cart.items);

  const subtotal = cartSelector.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity || 1),
    0
  );

  const shipping = subtotal > 500 ? 0 : 49;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="checkout-container">
      <h2>Checkout Summary</h2>

      <div className="checkout-content">
        {/* LEFT SIDE – CART PREVIEW */}
        <div className="checkout-items">
          <h3>Order Items</h3>

          {cartSelector.map((item) => (
            <div key={item.id} className="checkout-item">
              <img src={item.image} alt="" height="80" />

              <div className="checkout-details">
                <h4>{item.title}</h4>
                <p>Category: {item.category}</p>
                <p>
                  Qty: <strong>{item.quantity}</strong>
                </p>
                <p>
                  Price: ₹{item.price} × {item.quantity} ={" "}
                  <strong>₹{(item.price * item.quantity).toFixed(2)}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE – PRICE SUMMARY */}
        <div className="price-summary">
          <h3>Price Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
          </div>

          <div className="summary-row">
            <span>Tax (5%)</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>

          <hr />

          <div className="summary-row total">
            <strong>Total</strong>
            <strong>₹{total.toFixed(2)}</strong>
          </div>

          {/* BUTTONS */}
          <div className="checkout-buttons">
            <Link to="/cart">
              <button className="back-btn">Back to Cart</button>
            </Link>

            {/* FIX ADDED HERE */}
            <Link to="/payment">
              <button className="order-btn">Proceed to Payment</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

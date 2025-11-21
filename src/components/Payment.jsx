import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearAllItems } from "../redux/slice";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [activeMethod, setActiveMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // SUCCESS FLOW
  const orderSuccess = (paymentType) => {
    setShowPopup(paymentType);

    setTimeout(() => {
      dispatch(clearAllItems());
      localStorage.removeItem("cart");
      navigate("/");
    }, 2000);
  };

  // UPI PAYMENT
  const handleUPI = () => {
    if (!upiId.includes("@")) {
      alert("Enter a valid UPI ID (example: username@upi)");
      return;
    }
    orderSuccess("UPI Payment Successful 🎉");
  };

  // CARD PAYMENT
  const handleCardPayment = () => {
    if (!card.number || !card.name || !card.expiry || !card.cvv) {
      alert("Fill all card details");
      return;
    }
    orderSuccess("Card Payment Successful 🎉");
  };

  // COD PAYMENT
  const handleCOD = () => {
    orderSuccess("Order Placed (COD) 🎉");
  };

  return (
    <div className="checkout-container">
      <h2>Select Payment Method</h2>

      {/* PAYMENT TABS */}
      <div className="payment-tabs">
        <button
          className={activeMethod === "upi" ? "active-tab" : ""}
          onClick={() => setActiveMethod("upi")}
        >
          UPI
        </button>
        <button
          className={activeMethod === "card" ? "active-tab" : ""}
          onClick={() => setActiveMethod("card")}
        >
          Card
        </button>
        <button
          className={activeMethod === "cod" ? "active-tab" : ""}
          onClick={() => setActiveMethod("cod")}
        >
          COD
        </button>
      </div>

      {/* TAB CONTENT */}
      <div className="payment-content">
        {/* UPI */}
        {activeMethod === "upi" && (
          <div className="payment-section">
            <h3>Pay using UPI</h3>
            <input
              type="text"
              placeholder="Enter UPI ID (example: xyz@upi)"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="payment-input"
            />
            <button className="order-btn" onClick={handleUPI}>
              Pay ₹ via UPI
            </button>
          </div>
        )}

        {/* CARD */}
        {activeMethod === "card" && (
          <div className="payment-section">
            <h3>Card Payment</h3>

            <input
              type="text"
              placeholder="Card Number"
              maxLength="16"
              value={card.number}
              onChange={(e) => setCard({ ...card, number: e.target.value })}
              className="payment-input"
            />

            <input
              type="text"
              placeholder="Card Holder Name"
              value={card.name}
              onChange={(e) => setCard({ ...card, name: e.target.value })}
              className="payment-input"
            />

            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              value={card.expiry}
              onChange={(e) => setCard({ ...card, expiry: e.target.value })}
              className="payment-input"
            />

            <input
              type="password"
              placeholder="CVV"
              maxLength="3"
              value={card.cvv}
              onChange={(e) => setCard({ ...card, cvv: e.target.value })}
              className="payment-input"
            />

            <button className="order-btn" onClick={handleCardPayment}>
              Pay ₹ via Card
            </button>
          </div>
        )}

        {/* COD */}
        {activeMethod === "cod" && (
          <div className="payment-section">
            <h3>Cash On Delivery</h3>
            <button className="order-btn" onClick={handleCOD}>
              Confirm Order (COD)
            </button>
          </div>
        )}
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>{showPopup}</h3>
            <p>Your order has been placed successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;

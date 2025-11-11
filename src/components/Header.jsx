import React from "react";
import AddToCart from "./AddToCart";

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">ShopEase</div>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <AddToCart />
      </header>
    </>
  );
}

export default Header;

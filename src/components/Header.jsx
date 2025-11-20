import React from "react";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">ShopEase</div>

        <nav className="nav">
          {/* <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a> */}
          <Link to="/">Home</Link>
        </nav>

        <AddToCart />
      </header>
    </>
  );
}

export default Header;

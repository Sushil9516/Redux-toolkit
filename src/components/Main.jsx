import React from "react";
import "./Main.css";
import Header from "./Header";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { clearAllItems } from "../redux/slice";
import { Route, Routes } from "react-router-dom";
import CartList from "./CartList";
function Main() {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      {/* <button onClick={() => dispatch(clearAllItems())} className="add-to-cart">
        Clear Cart
      </button> */}

      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
    </>
  );
}

export default Main;

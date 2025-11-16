import React from "react";
import "./Main.css";
import Header from "./Header";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { clearAllItems } from "../redux/slice";
function Main() {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <button onClick={() => dispatch(clearAllItems())} className="add-to-cart">
        Clear Cart
      </button>

      <Product />
    </>
  );
}

export default Main;

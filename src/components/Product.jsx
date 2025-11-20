import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slice";
import { fetchProducts } from "../redux/productSlice";

function Product() {
  const dispatch = useDispatch(); //use to call actions

  const cartSelector = useSelector((state) => state.cart.items);
  // console.log(cartSelector.length);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productSelector = useSelector((state) => state.products.items);
  // console.log(productSelector);

  return (
    <>
      {/* <main className="main">
        <div className="product-card">
          <img
            src="data:image/jpeg;base64,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"
            alt="Product Image"
            className="product-img"
          />
          <h3 className="product-title">Wireless Headphones</h3>
          <p className="product-desc">
            High-quality sound, noise cancellation, and long battery life.
          </p>
          <div className="product-footer">
            <span className="price">₹1,999</span>
            <button
              onClick={() => dispatch(addItem(1))}
              className="add-to-cart"
            >
              Add to Cart
            </button>
            <button
              onClick={() => dispatch(removeItem(1))}
              className="remove-to-cart"
            >
              Remove From Cart
            </button>
          </div>
        </div>
      </main> */}
      <div className="product-container">
        {productSelector.length &&
          productSelector.map((item) => (
            <div key={item.id} className="product-card">
              <img
                src={item.image}
                alt={item.title}
                className="product-image"
              />

              <h3 className="product-title">{item.title}</h3>

              <p className="product-price">$ {item.price}</p>

              <p className="product-category">{item.category}</p>

              <p className="product-description">
                {item.description.substring(0, 80)}...
              </p>

              <div className="button-group">
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="remove-to-cart"
                >
                  Remove From Cart
                </button>

                {cartSelector.find((cartItem) => cartItem.id === item.id) ? (
                  <button className="add-to-cart btn-disabled">Added in Cart</button>
                ) : (
                  <button
                    onClick={() => dispatch(addItem(item))}
                    className="add-to-cart"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Product;

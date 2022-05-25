import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import CartBasket from "../cart-basket/CartBasket";
import CartItem from "../cart-item/CartItem";
import { cart } from "../../utils/cart";

import "./Cart.css";

function Cart({ showCart, defaultData }) {
  return (
    <div className={showCart ? "cart showCart" : "cart"}>
      <div className="cart-positioning">
        <div className="center-cart">
          <div className="cart-header">
            <div className="cart-header-nav">
              <span onClick={defaultData}>
                <BsArrowLeft />
              </span>
              <h3>My Cart</h3>
            </div>
            <CartBasket />
          </div>
          <div className="cart-list">
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="cart-total">
          <div className="total-price">
            <p>TOTAL</p>
            <h3>$2,560</h3>
          </div>
          <button>DONE SHOPPING</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

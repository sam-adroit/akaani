import React from "react";
import "./CartItem.css";

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <span className="coconut">
        <img src="./coconut.png" alt="" />
      </span>
      <div className="name-price">
        <p>{item.name} </p>
        <h3>$ {item.price}</h3>
      </div>
      <select>
        <option value="1kg">1kg</option>
        <option value="2kg">2kg</option>
        <option value="3kg">3kg</option>
        <option value="4kg">4kg</option>
      </select>
      <span
        className={
          item.letter.length > 1
            ? `letter second-letter ${item.letter[0]}`
            : `letter ${item.letter[0]}`
        }
      >
        {item.letter[0]}
      </span>
    </div>
  );
}

export default CartItem;

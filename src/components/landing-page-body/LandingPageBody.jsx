import React from "react";
import { FiSearch } from "react-icons/fi";

import "./LandingPageBody.css";
import CartBasket from "../cart-basket/CartBasket";
import Card from "../card/Card";

function LandingPageBody({ changeData, cardDetails }) {
  return (
    <div className="Landing-page-body">
      <div className="landing-page-body-container">
        <header className="landing-page-body-header">
          <h2>Good evening, Laura!</h2>
          <div className="search">
            <input type="text" placeholder="Search Basket" />
            <span>
              <FiSearch />
            </span>
          </div>
        </header>
        <div className="cardList">
          {cardDetails.map((cardDetail) => (
            <Card cardDetail={cardDetail} key={cardDetail.id} />
          ))}
        </div>
        <div className="basket">
          <div className="basket-heading">
            <h2>Basket</h2>
            <button>Create Basket</button>
          </div>
          <ul className="basket-link">
            <li className="basket-link--item ">Paid</li>
            <li className="basket-link--item actives">Pending</li>
            <li className="basket-link--item">Completed</li>
          </ul>
          <div className="basket-body">
            <span>
              <img src="./shop.png" alt="" />
            </span>
            <p>No Paid Baskets, yet!</p>
          </div>
        </div>
        <div className="basket-body-bottom" onClick={changeData}>
          <CartBasket />
        </div>
      </div>
    </div>
  );
}

export default LandingPageBody;

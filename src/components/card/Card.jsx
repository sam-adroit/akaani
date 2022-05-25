import React from "react";
import { FiTruck, FiCreditCard, FiGift } from "react-icons/fi";
import { BsShop } from "react-icons/bs";

import "./Card.css";

function Card({ cardDetail }) {
  console.log(cardDetail);
  return (
    <div className="card-item">
      <div className="icon ">
        <span className={cardDetail.icon}>
          {cardDetail.icon === "truck-icon" && <FiTruck />}
          {cardDetail.icon === "card-icon" && <FiCreditCard />}
          {cardDetail.icon === "gift-icon" && <FiGift />}
          {cardDetail.icon === "shop-icon" && <BsShop />}
        </span>
      </div>
      <div className="card-item-details">
        <p>{cardDetail.job}</p>
        <h3>{cardDetail.val}</h3>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import { FaUserCircle, FaShoppingBasket, FaHistory } from "react-icons/fa";
import "./LeftSidebar.css";

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <div className="center-nav">
        <div className="logo">
          <img src="./logo.png" alt="" />
        </div>
        <ul className="nav-list">
          <li className="nav-list-item">
            <span className="icons">
              <FaUserCircle />
            </span>
            <span>Profile</span>
          </li>
          <li className="nav-list-item active">
            <span className="icons">
              <FaShoppingBasket />
            </span>
            <span>Basket</span>
          </li>
          <li className="nav-list-item">
            <span className="icons">
              <FaHistory />
            </span>
            <span>Order History</span>
          </li>
        </ul>
      </div>
      <div className="bottom-menu center-nav">
        <h2>LE</h2>
        <h3>Laura Edson</h3>
        <p>lauraedson@work.com</p>
        <span>
          <img src="./Vector.png" alt="" />
        </span>
      </div>
    </div>
  );
}

export default LeftSidebar;

import React from "react";
import "./RightSidebar.css";

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="right-sidebar-center ">
        <div className="invite bd-btm ">
          <h2>INVITES </h2>
          <p>You have no invites.</p>
        </div>
        <div className="payment bd-btm ">
          <h2>RECENT PAYMENTS </h2>
          <p>No Payment has been made. </p>
        </div>
        <div className="orders">
          <h2>PREVIOUS ORDERS </h2>
          <p>You have created no order.</p>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;

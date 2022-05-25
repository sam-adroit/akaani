import React, { useState } from "react";
import LeftSidebar from "../../components/left-sidebar/LeftSidebar";
import LandingPageBody from "../../components/landing-page-body/LandingPageBody";
import RightSidebar from "../../components/right-sidebar/RightSidebar";
import Cart from "../../components/cart/Cart";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { card } from "../../utils/card";

import "./Landing.css";

function Landing() {
  const [showCart, setShowCart] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [cardDetails, setCardDetails] = useState(card.slice(0, 3));
  const changeData = () => {
    setShowCart(true);
    setCardDetails(card.reverse());
  };
  const defaultData = () => {
    card.reverse();
    setCardDetails(card.slice(0, 3));
    setShowCart(false);
  };
  return (
    <div className="landing">
      <span
        className={
          showSidebar ? "show-sidebar icon-right" : "show-sidebar icon-left"
        }
      >
        <span onClick={() => setShowSidebar(!showSidebar)}>
          {showSidebar ? <GrClose /> : <FiMenu />}
        </span>
      </span>
      <LeftSidebar showSidebar={showSidebar} />
      <LandingPageBody
        showCart={showCart}
        setShowCart={setShowCart}
        changeData={changeData}
        cardDetails={cardDetails}
      />
      <RightSidebar />
      <Cart showCart={showCart} defaultData={defaultData} />
    </div>
  );
}

export default Landing;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/cart.css";

const Car = () => {
  return (
    <div className="botones container text-right">
      <a href="#" className="btn border primero">
        <FontAwesomeIcon icon={faUser} />
      </a>
      <a href="#" className="btn border">
        <FontAwesomeIcon icon={faHeart} />
      </a>
      <a href="#" className="btn border">
        <FontAwesomeIcon icon={faShoppingCart} />
      </a>
    </div>
  );
};
export default Car;

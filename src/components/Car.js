import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/car.css";

const Car = () => {
  return (
    <div className="botones container text-right">
        
      <a href="#" className="btn border primero">
        <FontAwesomeIcon icon={faUser} />
        {/* <span className="badge">0</span> */}
      </a>

      <a href="#" className="btn border">
        <FontAwesomeIcon icon={faHeart} />
        {/* <span className="badge">0</span> */}
      </a>
      <a href="#" className="btn border">
        <FontAwesomeIcon icon={faShoppingCart} />
        {/* <span className="badge">0</span> */}
      </a>
    </div>
  );
};
export default Car;

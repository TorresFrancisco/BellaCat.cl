import React, { useState } from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <div className={`nav_items ${isOpen && "open"}`}>
        <a href="#"> Sobre Nosotros</a>
        <a href="#"> Productos</a>
        <a href="#"> Contactanos</a>
      </div>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;

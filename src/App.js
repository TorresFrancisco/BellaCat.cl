import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import LogoComponent from "./components/Logo";
import Navbar from "./components/NavBar";
import Buscador from "./components/Buscador";
import Car from "./components/Car";
import MiCarousel from "./components/Carousel";
import "./assets/css/app.css";
import Template from "./components/Template";

function App() {
  return (
    
    <div>
      
      <Template />
      <div className="contenedor">
        <div className="navbarUp">
          <Navbar />
        </div>
        <div className="carUp">
          <Car />
        </div>
      </div>
      <LogoComponent />
      <Buscador />
      <MiCarousel />
      
    </div>
  );
}

export default App;

import React from "react";
import Header from "./components/Header";
import LogoComponent from "./components/Logo";
import Navbar from "./components/NavBar";
import Buscador from "./components/Buscador";
import Car from "./components/Car";
import MiCarousel from "./components/Carousel";
import "./assets/css/app.css";

function App() {
  return (
    <div>
      <Header />
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

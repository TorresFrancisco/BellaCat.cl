import React from "react";

// Components
import Header from "./components/Header";
import LogoComponent from "./components/Logo";
import Navbar from "./components/Navbar";
import Buscador from "./components/Search-bar";
import Cart from "./components/Cart";
import MiCarousel from "./components/Carrousel";

// CSS

import './assets/css/normalize.css';
import './assets/css/reset.css';


function App() {
  return (
    <div>
      <Header />
      <Cart />
      <Navbar />
      <LogoComponent />
      <Buscador />
      <MiCarousel />
    </div>
  );
}

export default App;

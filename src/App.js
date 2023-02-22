import React from "react";
import Header from "./components/Header";
import LogoComponent from "./components/Logo";
import Navbar from "./components/Navbar";
import Buscador from "./components/Search-bar";
import Cart from "./components/Cart";
import MiCarousel from "./components/Carrousel";
import Footer from "./components/Footer";

// CSS

import "./assets/css/normalize.css";
import "./assets/css/reset.css";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Cart />
      <LogoComponent />
      <Buscador />
      <MiCarousel />
      <Footer />
    </div>
  );
}

export default App;

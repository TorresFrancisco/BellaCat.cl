import React from 'react';
import  Logo  from '../assets/img/logoBellaCat.png';
import '../assets/css/logo.css'


function LogoComponent() {
    return (
        <div className="logo-container">
        <img src={Logo} alt="Logo de mi aplicación" className="logo" />
      </div>
    );
  }
  
  export default LogoComponent;
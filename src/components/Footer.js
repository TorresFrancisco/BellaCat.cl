import React from "react";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="row">
          <div className="col-12 col-md-4">
            <h3>Información</h3>
            <ul>
              <li>
                <a href="#">Quienes somos</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
              <li>
                <a href="#">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="#">Términos y condiciones</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h3>Redes sociales</h3>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h3>Formas de pago</h3>
            <ul>
              <li>
                <a href="#">Mercado Pago</a>
              </li>
              <li>
                <a href="#">Tarjetas de crédito</a>
              </li>
              <li>
                <a href="#">Efectivo</a>
              </li>
              <li>
                <a href="#">Transferencia bancaria</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

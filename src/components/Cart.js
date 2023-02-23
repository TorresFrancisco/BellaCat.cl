import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CModalFooter,
} from "@coreui/react";
import {
  CButton,
  CFormLabel,
  CCol,
  CForm,
  CRow,
  CFormInput,
  CCardImage,
} from "@coreui/react";
import Logo from "../assets/img/logoBellaCat.png";
import "../assets/css/cart.css";

const Car = () => {
  const [visibleLg, setVisibleLg] = useState(false);
  const [inicioSeccion, setInicioSeccion] = useState(false);
 
  return (
    <div className="botones container text-right">
      <a href="#" onClick={() => setVisibleLg(true)}>
        <FontAwesomeIcon icon={faUser} />
        {/* <span className="badge">0</span> */}
        <CModal
          size="lg"
          visible={visibleLg}
          onClose={() => setVisibleLg(false)}
          className="modalContainer"
        >
          <CModalHeader>
            <CModalTitle className="text-center container ">
              <CCardImage
                orientation="top"
                className=" logoRegister"
                src={Logo}
              />
            </CModalTitle>
          </CModalHeader>
          <CModalBody className="modalForm">
            <CForm visible={inicioSeccion}>
              <CRow className="mb-3">
                <CFormLabel
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Correo
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput type="email" id="inputEmail3" className="inputForm"/>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label "
                >
                  Contraseña
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput type="password" id="inputPassword3" className="inputForm" />
                </CCol>
              </CRow>

              <CCol xs={12}>
           
            <CButton color="primary" type="submit" className="btnRegister sing">Iniciar Sesion    </CButton>
    </CCol>
            </CForm>
          </CModalBody>
          <CModalFooter>
           <a href="#">¿Olvidaste tu contraseña?</a>
          </CModalFooter>

         
        </CModal>
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

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/car.css";
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
  CFormSelect,
  CFormCheck
} from "@coreui/react";

const Car = () => {
  const [visibleLg, setVisibleLg] = useState(false);
  const [inicioSeccion, setInicioSeccion] = useState(false);
  const [registrarse, setRegistrarse] = useState (false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const handleLoginFormClick = () => {
    setIsLoginForm(true);
  };

  const handleRegistrationClick = () => {
    setIsLoginForm(false);
  };
  return (
    <div className="botones container text-right">
      <a href="#" onClick={() => setVisibleLg(true)}>
        <FontAwesomeIcon icon={faUser} />
        <CModal
      size="lg"
      visible={visibleLg}
      onClose={() => setVisibleLg(false)}
    >
   <CModalHeader>
        <CModalTitle>
          <a href="#" className={isLoginForm ? 'inicioSeccion active' : 'inicioSeccion'} onClick={handleLoginFormClick}>Iniciar Seccion</a>/ 
          <a href="#" className={!isLoginForm ? 'registro active' : 'registro'} onClick={handleRegistrationClick}>Registrases</a>
        </CModalTitle>
      </CModalHeader>
  <CModalBody>
    {isLoginForm  ? (
       <CForm>
       <CRow className="mb-3">
         <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</CFormLabel>
         <CCol sm={10}>
           <CFormInput type="email" id="inputEmail3" />
         </CCol>
       </CRow>
       <CRow className="mb-3">
         <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</CFormLabel>
         <CCol sm={10}>
           <CFormInput type="password" id="inputPassword3" />
         </CCol>
       </CRow>

       <CButton type="submit">Sign in</CButton>
     </CForm>
    ):(
      <CForm className="row g-3">
        <CCol md={6}>
          <CFormInput type="email" id="inputEmail4" label="Email" />
        </CCol>
        <CCol md={6}>
          <CFormInput type="password" id="inputPassword4" label="Password" />
        </CCol>
        <CCol xs={12}>
          <CFormInput id="inputAddress" label="Address" placeholder="1234 Main St"/>
        </CCol>
        <CCol xs={12}>
          <CFormInput id="inputAddress2" label="Address 2" placeholder="Apartment, studio, or floor"/>
        </CCol>
        <CCol md={6}>
          <CFormInput id="inputCity" label="City"/>
        </CCol>
        <CCol md={4}>
          <CFormSelect id="inputState" label="State">
            <option>Choose...</option>
            <option>...</option>
          </CFormSelect>
        </CCol>
        <CCol md={2}>
          <CFormInput id="inputZip" label="Zip" />
        </CCol>
       
        <CCol xs={12}>
          <CButton type="submit">Sign in</CButton>
        </CCol>
      </CForm>)



}
  </CModalBody>
    
      </CModal>



       

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

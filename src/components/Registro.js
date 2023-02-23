import React, {useState} from "react";
import {
  CButton,
  CFormLabel,
  CCol,
  CForm,
  CRow,
  CFormInput,
  CFormSelect,
  CFormCheck,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCloseButton,
  CCardFooter,
  CCardText,
  CCardHeader,
  CInputGroup,
  CInputGroupText
} from "@coreui/react";
import Header from "./Header";
import Logo from "../assets/img/logoBellaCat.png";
import { Link } from 'react-router-dom';


//CSS
import "../assets/css/registro.css";
import "../assets/css/logo.css";




const Registro = () => {
 

  return (
    <div>
      <Header />
      <CCard className="text-center container card col-12-lg">
        <CCardHeader>
          <CCardImage orientation="top" className=" logoRegister" src={Logo} />
        </CCardHeader>

        <CCardBody>
          <CCardTitle className="title">Registrate </CCardTitle>
          <CCardText className="subTitle">Rapido y Facil</CCardText>
          <CForm
            className="row needs-validation "
           
          >
            <CCol md={6}>
              <CFormInput
                type="input"
                id="validationDefault01"
                className="form"
                label="Nombre"
                
        
        required
              />
              </CCol>
            <CCol md={6}>
              <CFormInput
                type="input"
                id="validationDefault02"
                className="form"
                label="Apellido"
                defaultValue=""
                required
              />
            </CCol>

            <CCol md={6} className="ccol">
              <CFormInput id="validationDefault03" required className="form" label="Correo" />
            </CCol>
            <CCol md={6} className="ccol">
              <CFormInput
                type="password"
                id="validationDefault04"
                className="form"
                label="Password"
                required
              />
            </CCol>
            
            <CCol xs={12}>
           
            <CButton color="primary" type="submit" className="btnRegister">
      Registrarse
    </CButton>
              
            </CCol>
            <CCol xs={12}>
              <Link to='/'><a href="#" className="back">
                Volver
              </a></Link>
              
            </CCol>
          </CForm>
          {/* <CForm className="row g-3">
          <CCol md={6}>
              <CFormInput
                type="input"
                id="validationDefault01"
                className="form"
                label="Nombre"
                
        
        required
              />
 
  </CCol>
  <CCol md={4}>
    <CFormInput
      type="text"
      id="validationDefault02"
      label="Last name"
      defaultValue="Otto"
      required
    />
  </CCol>
  <CCol md={4}>
    <CFormLabel htmlFor="validationDefaultUsername">Username</CFormLabel>
    <CInputGroup>
      <CInputGroupText id="inputGroupPrepend02">@</CInputGroupText>
      <CFormInput
        type="text"
        id="validationDefaultUsername"
        defaultValue=""
        aria-describedby="inputGroupPrepend02"
        required
      />
    </CInputGroup>
  </CCol>
  <CCol md={6}>
    <CFormInput type="text" id="validationDefault03" label="City" required />
  </CCol>
  <CCol md={3}>
    <CFormSelect id="validationDefault04" label="State">
      <option disabled>Choose...</option>
      <option>...</option>
    </CFormSelect>
  </CCol>
  <CCol md={3}>
    <CFormInput type="text" id="validationDefault05" label="Zip" required />
  </CCol>
  <CCol xs={12}>
    <CFormCheck type="checkbox" id="invalidCheck" label="Agree to terms and conditions" required />
  </CCol>
  <CCol xs={12}>
    <CButton color="primary" type="submit">
      Submit form
    </CButton>
  </CCol>
</CForm> */}
        </CCardBody>
      </CCard>
    </div>
  );
};
export default Registro;

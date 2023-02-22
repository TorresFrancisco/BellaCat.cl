import React from "react";
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
const Registro = () => {

    return (
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
      </CForm>
    )
}
export default Registro;
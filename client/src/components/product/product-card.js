import React from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";

const ProductCard = (props) => {
  return (
  	<MDBCol lg="3" md="6" mb="4" >
    <MDBCard className="align-items-center">
      <MDBCardImage
        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
        top
        alt="sample photo"
        overlay="white-slight"
      />
      <MDBCardBody className="text-center">
        <a href="#!" className="grey-text">
          <h5>Shirt Name</h5>
        </a>
        <h5>
          <strong>
            <a href="#!" className="dark-grey-text">
              Desc{" "}
            </a>
          </strong>
        </h5>
        <h4 className="font-weight-bold blue-text">
          <strong>120$</strong>
        </h4>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
  )
}

export default ProductCard;
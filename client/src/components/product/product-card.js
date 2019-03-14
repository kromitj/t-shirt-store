import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";
import Price from './product-price'
const ProductCard = (props) => {
  const { product } = props


  return (
    <MDBCol lg="3" md="6" mb="4" >
      <MDBCard ecommerce className="align-items-center product-item">
        <div className="product-item-img">
        <MDBCardImage          
          src={require(`../../../public/product-imgs/${product.thumbnail}`)}
          top
          alt="sample photo"
          overlay="white-slight"
        />
        </div>
        <MDBCardBody className="text-center">
          <a href="#!" className="grey-text">
            <h5>{product.name}</h5>
          </a>
          <Price product={product}></Price>
        </MDBCardBody>
      </MDBCard>

    </MDBCol>
  )
}

export default ProductCard;

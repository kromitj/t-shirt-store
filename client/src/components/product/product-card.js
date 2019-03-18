import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MDBCol, MDBCard, MDBCardImage, MDBCardBody } from "mdbreact";
import Price from './product-price'

class ProductCard extends Component {

  render() {
    const { product } = this.props
    return (
      <MDBCol lg="3" md="6" mb="4" >
        <MDBCard ecommerce className="align-items-center cascade wide product-item">
          <div className="product-item-img">
          <MDBCardImage 
            cascade         
            src={`https://res.cloudinary.com/kromitj/image/upload/v1552638701/${product.thumbnail}`}
            top
            alt="sample photo"
            overlay="blue"
          />
          </div>
          <MDBCardBody color="cyan lighten-5" className="text-center ">
             <h5>{product.name}</h5>
            <Price product={product}></Price>
            <Link to={`/product/${product.product_id}`} className="btn btn-info">
              See Details
            </Link>
          </MDBCardBody>
        </MDBCard>

      </MDBCol>
    )
  }
}


export default ProductCard

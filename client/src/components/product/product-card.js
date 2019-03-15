import React, { Component} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";
import Price from './product-price'

class ProductCard extends Component  {
  constructor() {
    super()
  }

  render() {
  const { product } = this.props
    return (
      <MDBCol lg="3" md="6" mb="4" >
        <MDBCard ecommerce className="align-items-center cascade wide product-item">
          <div className="product-item-img">
          <MDBCardImage 
            cascade         
            src={require(`../../../public/product-imgs/${product.thumbnail}`)}
            top
            alt="sample photo"
            overlay="blue"
          />
          </div>
          <MDBCardBody color="cyan lighten-5" className="text-center ">
            <Link to={`/product/${product.product_id}`} className="btn btn-info">
              <h5>{product.name}</h5>
            </Link>
            <Price product={product}></Price>
          </MDBCardBody>
        </MDBCard>

      </MDBCol>
    )    
  }
}

ProductCard.propTypes = {
}




export default ProductCard

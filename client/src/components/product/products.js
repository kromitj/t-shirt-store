import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ProductCard from './product-card'

export class Products extends Component {
  render() {
    console.log("Products: ", this.props)
    const products = this.props.products.products
    console.log(this.props)
    const productItems = products.map(product => (
      <ProductCard key={product.product_id} product={product} />
    ));
    return (
      <div className="row wow fade-in">     
        {productItems}
      </div>
    )
  }
}

Products.propTypes = {
  products: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  products: state.products,
})

export default connect(mapStateToProps, {})(Products)

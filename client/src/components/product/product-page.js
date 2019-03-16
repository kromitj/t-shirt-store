import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getProductPageById } from '../../actions/productActions';
import { addUserCart } from '../../actions/authActions';

import Spinner from '../common/spinner';

class ProductPage extends Component {
	 constructor() {
	    super()
	  }
	 componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getProductPageById(this.props.match.params.id);
    }
  }
   UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.product.product === null && this.props.product.loading) {
      this.props.history.push('/not-found');
    }
  }
  onAddToCart(e) {
    const userCartID = this.props.userCartID
    const productCart = []
    productCart.push(this.props.product.product.product_id)
    productCart.push(this.props.product.product.name)
    productCart.push(this.props.product.product.price)
    productCart.push(this.props.product.product.discounted_price)
    productCart.push(this.props.product.product.thumbnail)
    productCart.push(1)
    e.preventDefault()
    this.props.addUserCart(productCart, userCartID)
  }

	render() {
    console.log(this.props)
		const { product, loading } = this.props
    let productContent;
    if (product === null || loading) {
    	productContent = (<Spinner />)
    } else {
    	productContent = (
<main className="mt-5 pt-4">
  <div className="container dark-grey-text mt-5">
    {/*Grid row*/}
    <div className="row wow fadeIn">
      {/*Grid column*/}
      <div className="col-md-6 mb-4">
        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg" className="img-fluid" alt />
        
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-md-6 mb-4">
        {/*Content*/}
        <div className="p-4">
          <div className="mb-3">
            <a href>
              <span className="badge purple mr-1">Category 2</span>
            </a>
            <a href>
              <span className="badge blue mr-1">New</span>
            </a>
            <a href>
              <span className="badge red mr-1">Bestseller</span>
            </a>
          </div>
          <p className="lead">
            <span className="mr-1">
              <del>$ {product.product.price}</del>
            </span>
            <span>$ {product.product.discounted_price}</span>
          </p>
          <p className="lead font-weight-bold">{product.product.name}</p>
          <p>{product.product.description}</p>
          <form className="d-flex justify-content-left">
            {/* Default input */}
            <input type="number" defaultValue={1} aria-label="Search" className="form-control" style={{width: '100px'}} />
            <button className="btn btn-primary btn-md my-0 p" type="" onClick={this.onAddToCart.bind(this) } >Add to cart
              <i className="fas fa-shopping-cart ml-1" />
            </button>
          </form>
        </div>
        {/*Content*/}
      </div>
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
    <hr />
    {/*Grid row*/}
    <div className="row d-flex justify-content-center wow fadeIn">
      {/*Grid column*/}
      <div className="col-md-6 text-center">
        <h4 className="my-4 h4">Additional information</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit modi sapiente illo soluta odit
          voluptates,
          quibusdam officia. Neque quibusdam quas a quis porro? Molestias illo neque eum in laborum.</p>
      </div>
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
    {/*Grid row*/}
    <div className="row wow fadeIn">
      {/*Grid column*/}
      <div className="col-lg-4 col-md-12 mb-4">
        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg" className="img-fluid" alt />
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-4 col-md-6 mb-4">
        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg" className="img-fluid" alt />
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-4 col-md-6 mb-4">
        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" className="img-fluid" alt />
      </div>
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
  </div>
</main>

      )
    }
		return (
			<div>{productContent}</div>
		)
	}
}

ProductPage.propTypes = {
  getProductPageById: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  userCartID: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userCartID:  state.auth.ipAddress,
  product: state.products.product
});

export default connect(mapStateToProps, { getProductPageById, addUserCart })(ProductPage);


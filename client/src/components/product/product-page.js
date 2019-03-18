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
  //  UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (nextProps.product === null && this.props.product.loading) {
  //     this.props.history.push('/not-found');
  //   }
  // }
  onAddToCart(e) {
    const userCartID = this.props.userCartID
    const productCart = []
    productCart.push(this.props.product_id)
    productCart.push(this.props.product.product.name)
    productCart.push(this.props.product.product.price)
    productCart.push(this.props.product.product.discounted_price)
    productCart.push(this.props.product.product.thumbnail)
    productCart.push(1)
    e.preventDefault()
    this.props.addUserCart(productCart, userCartID)
  }

	render() {
		const { product, loading } = this.props
    let productContent;
    if (product === null || loading) { productContent = (<Spinner />) } else {
    	productContent = (
        <main className="mt-5 pt-4">
          <div className="container dark-grey-text mt-5">
            {/*Grid row*/}
            <div className="row wow fadeIn">
              {/*Grid column*/}
              <div className="col-md-6 mb-4">
                <img src={`https://res.cloudinary.com/kromitj/image/upload/v1552638701/${product.image}`} className="img-fluid" height="200%"/>
                
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
                      <del>$ {product.price}</del>
                    </span>
                    <span>$ {product.discounted_price}</span>
                  </p>
                  <p className="lead font-weight-bold">{product.name}</p>
                  <p>{product.description}</p>
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


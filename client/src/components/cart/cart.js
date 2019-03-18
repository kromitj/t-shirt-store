import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, ToastContainer, toast } from 'mdbreact';
import StripeCheckout from 'react-stripe-checkout'
import CheckoutStripe from './stripe-checkout'
//import { removeUserCart, updateUserCart, getCheckout } from '../../actions/authActions';

class Cart extends Component {
	constructor() {
		super()
    this.state = {
      orderSuccess: false
    }
		
	}

	render() {
		let totalPrice = 0
		const cartItems = this.props.userCart.map((product) => {
			const totalItemPrice = product[2] * product[5]
			totalPrice += totalItemPrice
			return (
        <tr>
            <td className="col-sm-8 col-md-6">
              <div className="media">
                <a className="thumbnail pull-left" href="#"> <img className="media-object" src={`https://res.cloudinary.com/kromitj/image/upload/v1552638701/${product[4]}`} style={{width: '72px', height: '72px'}} /> </a>
                <div className="media-body">
                  <h4 className="media-heading"><a href="#">{product[1]}</a></h4>
                  <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                </div>
              </div></td>
            <td className="col-sm-1 col-md-1" style={{textAlign: 'center'}}>
              <input type="email" className="form-control" id="exampleInputEmail1" value={product[5]} />
            </td>
            <td className="col-sm-1 col-md-1 text-center"><strong>$ {product[2]}</strong></td>
            <td className="col-sm-1 col-md-1 text-center"><strong>$ { totalItemPrice }</strong></td>
            <td className="col-sm-1 col-md-1">
              <button type="button" className="btn btn-danger">
                <span className="glyphicon glyphicon-remove" /> Remove
              </button></td>
          </tr>)
		})
		const tax = totalPrice * .075
		return (
			<div className="container">
  <div className="row">
    <div className="col-sm-12 col-md-10 col-md-offset-1">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th className="text-center">Price</th>
            <th className="text-center">Total</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
        	{cartItems}
        	<tr>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td><h5>Subtotal</h5></td>
            <td className="text-right"><h5><strong>{totalPrice.toFixed(2)}$</strong></h5></td>
          </tr>
          <tr>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td><h5>Estimated shipping</h5></td>
            <td className="text-right"><h5><strong>{tax.toFixed(2)}$</strong></h5></td>
          </tr>
          <tr>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td><h3>Total</h3></td>
            <td className="text-right"><h3><strong>{(totalPrice + tax).toFixed(2)}$</strong></h3></td>
          </tr>
          <tr>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td>
              <Link to="/product?department=1">
                <button  type="button" className="btn btn-default">
                  <span className="glyphicon glyphicon-shopping-cart" /> Continue Shopping
                </button>
              </Link>
            </td>
            <td> 
              <CheckoutStripe order= {this.props.userCart} price={totalPrice}></CheckoutStripe>             
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
		);
	}
}

const mapStateToProps = state => ({
	userCart: state.auth.cart
})


export default connect(mapStateToProps, { })(Cart)





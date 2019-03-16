import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//import { removeUserCart, updateUserCart, getCheckout } from '../../actions/authActions';

class Cart extends Component {
	constructor() {
		super()
		
	}

	render() {
		return (
			<div>CART</div>
		);
	}
}

const mapStateToProps = state => ({
	userCart: state.auth.cart
})


export default connect(mapStateToProps, { })(Cart)
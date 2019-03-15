import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getProductPageById } from '../../actions/productActions';

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

	render() {
    console.log(this.props)
		const { product, loading } = this.props
    let productContent;
    if (product === null || loading) {
    	productContent = (<Spinner />)
    } else {
    	productContent = (<div>{product.name}</div>)
    }
		return (
			<div>{productContent}</div>
		)
	}
}

ProductPage.propTypes = {
  getProductPageById: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.products.product
});

export default connect(mapStateToProps, { getProductPageById })(ProductPage);
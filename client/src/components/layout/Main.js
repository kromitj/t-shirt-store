import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProducts } from '../../actions/productActions';


import ProductCard from '../product/product-card'
import Products from '../product/products'
import ProductNav from '../product/product-nav'
import ProductPagination from '../product/product-pagination'
import Spinner from '../common/spinner';

export class Main extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
  console.log(this.props)
    if (this.props.location.search) {
      this.props.getProducts(this.props.location.search);      
    }
  }

componentWillReceiveProps(nextProps) {
    if(JSON.stringify(this.props.products) !== JSON.stringify(nextProps.products))
    {
          console.log("nextProps: ", nextProps)
           this.forceUpdate()
    }
} 

  render() {
    return (
      <main className="main-content">
        <div className="container">

          <ProductNav title="Department"></ProductNav>

          <section className="text-center mb-4">
            <ProductPagination></ProductPagination>
            <Products></Products>
          </section>

        </div>
      </main>
    );
  }
}

Main.propTypes = {
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  products: state.products
})


export default connect(mapStateToProps, { getProducts })(Main);

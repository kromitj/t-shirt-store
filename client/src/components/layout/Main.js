import React, { Component } from 'react';
import ProductCard from '../product/product-card'
import Products from '../product/products'
import ProductNav from '../product/product-nav'
import ProductPagination from '../product/product-pagination'

export class Main extends Component {
  constructor() {
    super()
    this.state = {}
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


export default Main;

import React, { Component } from 'react';
import ProductCard from '../product/product-card'
import Products from '../product/product-row'
import ProductNav from '../product/product-nav'
import ProductPagination from '../product/product-pagination'

const Main = (props) => {
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

export default Main;

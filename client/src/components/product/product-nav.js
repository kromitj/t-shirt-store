import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getProducts } from '../../actions/productActions'
import $ from 'jquery';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

class ProductNav extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    };
    this.onDeptClick = this.onDeptClick.bind(this);
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  onDeptClick(e) {
    e.preventDefault();
    $(".nav-item").removeClass("active");
    $(`#${e.target.id}`).addClass("active");
    this.props.getProducts(e.target.name, this.props.history)
  }
  render() {

    return (
      <MDBNavbar className="product-nav-bar" dark expand="md">
        <MDBNavbarBrand>
          <strong className="product-nav-bar-item">{ this.props.title}: </strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active id="0">
              <MDBNavLink to="" name="" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">>All</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem id="1">
              <MDBNavLink to="" onClick={ this.onDeptClick } name="?department=1" id="1" className="product-nav-bar-item">>Regional</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem id="2">
              <MDBNavLink to="" onClick={ this.onDeptClick } name="?department=2" id="2" className="product-nav-bar-item">>Nature</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem id="3">
              <MDBNavLink to="" onClick={ this.onDeptClick } name="?department=3" id="3" className="product-nav-bar-item">>Seasonal</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2 searchbar-focus" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

ProductNav.propTypes = {
  getProducts: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  department: state.products.department
})

export default connect(mapStateToProps, { getProducts})(ProductNav);

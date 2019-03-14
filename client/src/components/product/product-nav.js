import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getProducts } from '../../actions/productActions'

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
    console.log(e.target)
    this.props.getProducts(e.target.name, this.props.history);
  }
  render() {
    return (
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">{ this.props.title}: </strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#" name="" onClick={ this.onDeptClick}>All</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#" name="?department=1" onClick={ this.onDeptClick}>Regional</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#" name="?department=2" onClick={ this.onDeptClick}>Nature</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#" name="?department=3" onClick={ this.onDeptClick}>Seasonal</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
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

// const mapStateToProps = (state) => ({
// })

export default connect(null, { getProducts })(ProductNav);

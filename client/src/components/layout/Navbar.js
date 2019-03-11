import React from 'react';
import PropTypes from 'prop-types';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn } from "mdbreact";



function Navbar(props) {
  return (
    <div >
              {/* Navbar */}
        <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
          <div className="container">
            {/* Brand */}
            <a className="navbar-brand waves-effect" href="https://mdbootstrap.com/docs/jquery/" target="_blank">
              <strong className="blue-text">T-Shirt-Shop</strong>
            </a>
            {/* Collapse */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            {/* Links */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* Left */}
              <ul className="navbar-nav mr-auto">
              </ul>
              {/* Right */}
              <ul className="navbar-nav nav-flex-icons">
                <li className="nav-item">
                  <a className="nav-link waves-effect">
                    <span className="badge red z-depth-1 mr-1"> 1 </span>
                    <i className="fas fa-shopping-cart" />
                    <span className="clearfix d-none d-sm-inline-block"> Cart </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="nav-link border border-light rounded waves-effect" target="_blank">
                    <i className="fab fa-github mr-2" />Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar */}
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Navbar;
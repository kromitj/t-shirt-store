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

          ` <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">All</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <MDBDropdownItem >
                  <MDBNavLink to="" name="" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">All</MDBNavLink>
                </MDBDropdownItem>
                  <MDBDropdownItem >
                    <MDBNavLink to="" name="?department=1&category=1" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">French</MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                    <MDBNavLink to="" name="?department=1&category=2" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">Italian</MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                      <MDBNavLink to="" name="?department=1&category=3" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">Irish</MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                    <MDBNavLink to="" name="?department=2&category=4" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">Animal</MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                    <MDBNavLink to="" name="?department=2&category=5" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">Flower</MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                  <MDBNavLink to="" name="?department=3&category=6" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">Christmas</MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                    <MDBNavLink to="" name="?department=3&category=7" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">Valintines</MDBNavLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Regional</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <MDBDropdownItem >
                  <MDBNavLink to="" name="?department=1" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">All</MDBNavLink>
                </MDBDropdownItem>
                  <MDBDropdownItem >
                    <MDBNavLink to="" name="?department=1&category=1" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">French</MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                    <MDBNavLink to="" name="?department=1&category=2" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">Italian</MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                      <MDBNavLink to="" name="?department=1&category=3" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">Irish</MDBNavLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Nature</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <MDBDropdownItem >
                  <MDBNavLink to="" name="?department=2" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">All</MDBNavLink>
                </MDBDropdownItem>
                  <MDBDropdownItem >
                    <MDBNavLink to="" name="?department=2&category=4" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">Animal</MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                    <MDBNavLink to="" name="?department=2&category=5" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">Flower</MDBNavLink>
                  </MDBDropdownItem>                  
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Seasonal</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <MDBDropdownItem >
                  <MDBNavLink to="" name="?department=3" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">All</MDBNavLink>
                </MDBDropdownItem>
                  <MDBDropdownItem >
                  <MDBNavLink to="" name="?department=3&category=6" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">Christmas</MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                    <MDBNavLink to="" name="?department=3&category=7" id="0" onClick={ this.onDeptClick} className="product-nav-bar-item">Valintines</MDBNavLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
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

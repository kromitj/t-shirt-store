import React, { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/authActions'
import BrandLogo from '../../imgs/tshirtshop.png'

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";


class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  onLogOutClick(e) {
    e.preventDefault()
    this.props.logoutUser()
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isAuthenticated, user } = this.props.auth


    const authLinks = (
      <MDBDropdown >
        <MDBDropdownToggle nav caret>
          <MDBIcon size="2x" icon="user" className="nav-item-auth"/>
        </MDBDropdownToggle>
        <MDBDropdownMenu className="dropdown-default" right>
          <MDBDropdownItem ><Link to="/login" className="brand-cyan">Profile</Link></MDBDropdownItem>
          <MDBDropdownItem> <a href="" onClick={this.onLogOutClick.bind(this) } className="brand-cyan">Logout</a></MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    )
    const guestLinks = (
      <MDBDropdown>
        <MDBDropdownToggle nav caret>
          <MDBIcon size="2x" className="nav-item-guest" icon="user" />
        </MDBDropdownToggle>
        <MDBDropdownMenu className="dropdown-default" right>
          <MDBDropdownItem><Link to="/login" >Login</Link></MDBDropdownItem>
          <MDBDropdownItem> <Link to="/register">Sign Up</Link></MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    )

    return (
      <MDBNavbar className="topnav" double expand="xs" fixed="top">
      <MDBNavbarBrand ><MDBIcon icon="tshirt" className="logo-icon-status-idle"/> 
        <Link to="/" ><strong className="logo-icon-text">| T-Shirt-Store</strong></Link>
      </MDBNavbarBrand>
        
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink className="waves-effect" to="#!">
              <span class="badge badge-primary">2</span>
              <MDBIcon size="2x" className="nav-item-guest" icon="shopping-cart"/>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            { isAuthenticated ? authLinks : guestLinks}
          </MDBNavItem>
        </MDBNavbarNav>
    </MDBNavbar>
    );
  }
}

NavbarPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(NavbarPage);

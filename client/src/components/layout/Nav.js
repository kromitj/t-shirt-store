import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <MDBNavbar className="topnav" color="white" double expand="xs" fixed="top" scrolling>
      <MDBNavbarBrand >
        <Link to="/" ><strong className="black-text">Shirt-Store</strong></Link>
      </MDBNavbarBrand>
        
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink className="waves-effect" to="#!">
            <span className="counter">22</span>
              <MDBIcon icon="shopping-cart" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <MDBIcon icon="user" />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem ><Link to="/login" >Login</Link></MDBDropdownItem>
                <MDBDropdownItem > <Link to="/register">Sign Up</Link></MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
    </MDBNavbar>
    );
  }
}

export default NavbarPage;
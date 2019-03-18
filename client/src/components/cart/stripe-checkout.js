import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { MDBBtn } from 'mdbreact';
import { Button, ToastContainer, toast } from 'mdbreact';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
 
class CheckoutStripe extends React.Component {
  constructor() {
    super()
    
  }
  onToken = (token) => {
    fetch('/api/user/1/charge', {
      method: 'POST',
      body: {token: JSON.stringify(token), 
        user: this.props.auth},
    }).then(response => {

    });
  }
 
  // ...
 
  render() {
    return (
      // ...
       <StripeCheckout
        name="How You Paying For This..."
        amount={this.props.price * 100}
        currency="USD"
        token={this.onToken}
        stripeKey="pk_test_TYooMQauvdEDq54NiTphI7jx"
        shippingAddress={false}
        billingAddress={true}
        zipCode={true}
        reconfigureOnUpdate={false}
        triggerEvent="onClick"
      >
      <MDBBtn color="black" floated="right">
          Check out
        </MDBBtn>
      </StripeCheckout>     
    )
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
})
export default connect(mapStateToProps, {})(CheckoutStripe)
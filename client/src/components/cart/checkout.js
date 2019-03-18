import React, { Component } from "react";
import { MDBBtn } from 'mdbreact'
import { StripeCheckout } from 'react-stripe-elements';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
  }

  render() {
    return (
      <StripeCheckout
        name="T-Shirt-Store"
        amount={100}
        stripeKey={"pk_test_TYooMQauvdEDq54NiTphI7jx"}
        shippingAddress={false}
        billingAddress={true}
        zipCode={true}
        reconfigureOnUpdate={false}
        triggerEvent="onClick"
      >
        <MDBBtn onClick={this.submit}>Place Order!</MDBBtn>
      </StripeCheckout>
    )
  }
};

export default Checkout

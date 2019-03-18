import React, { Component }from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,  MDBSelectInput, MDBSelectOptions, MDBSelectOption } from 'mdbreact';
import {Elements, StripeProvider, StripeCheckout} from 'react-stripe-elements';
import CheckoutForm from './checkout-form'

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
  )}
};

export default Checkout
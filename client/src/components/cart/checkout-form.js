import React, {Component} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,  MDBSelectInput, MDBSelectOptions, MDBSelectOption } from 'mdbreact';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
    let {token} = await this.props.stripe.createToken({name: "Name"});
    console.log("token: ", token)
    let response = await fetch("/api/user/1/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });

    if (response.ok) {
      this.setState({complete: true})
    }
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
          <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Checkout: </p>
            <div className="grey-text">
            <MDBInput
                label="Type your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Phone Number"
                icon="phone"
                group
                type="text"
                validate
              />
              <MDBInput
                label="Type your mailing adresss"
                icon="home"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="City"
                icon="city"
                group
                type="text"
                validate
              />
              <MDBInput
                label="State"
                icon="map"
                group
                type="text"
                validate
              />
               <MDBInput
                label="Zip-Code"
                icon="map-marker"
                group
                type="text"
                validate
              />
              <MDBInput
                label="Country"
                icon="flag"
                group
                type="text"
                validate
              />
              <div className="checkout">
                <p>Would you like to complete the purchase?</p>
                <CardElement />
              </div>
            </div>
            <div className="text-center">
              <MDBBtn onClick={this.submit}>Place Order!</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}

export default injectStripe(CheckoutForm);
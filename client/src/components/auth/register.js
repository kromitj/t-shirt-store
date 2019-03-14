import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

import { registerUser } from '../../actions/authActions'

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: 'blah',
      email: 'blah@gmail.com',
      password: 'password',
      password2: 'password',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/')
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }


  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
  }
  render() {
    const { user } = this.props.auth
    return (
      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form form onSubmit={this.onSubmit}>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    required
                    error={this.props.errors.name}
                    success="right"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  <div className="amber-text">{this.props.errors.name}</div>
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    required
                    error={this.props.errors.email}
                    success="right"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  <div className="amber-text">{this.props.errors.email}</div>
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    required
                    error={this.props.errors.password}
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  <div className="amber-text">{this.props.errors.password}</div>
                  <MDBInput
                    label="Confirm your password"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    required
                    error={this.props.errors.password2}
                    success="right"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                  <div className="amber-text">{this.props.errors.password2}</div>
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}

Register.propTypes = {
  registerUser: Proptypes.func.isRequired,
  auth: Proptypes.object.isRequired,
  errors: Proptypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(Register));

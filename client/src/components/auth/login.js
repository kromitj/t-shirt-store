import React, { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loginUser } from '../../actions/authActions'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
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
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/')
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onChange(e) {
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(newUser, this.props.history);
  }
  render() {const { errors } = this.state.errors

    return (
      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form form onSubmit={ this.onSubmit}>
                <p className="h4 text-center py-4">Login</p>
                <div className="grey-text">
                  <MDBInput
                    type="email"
                    name="email"
                    label="Your email"
                    value={this.state.email}
                    icon="envelope"
                    group
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.onChange}
                  />
                  <div className="amber-text">{this.props.errors.email}</div>
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  <div className="amber-text">{this.props.errors.password}</div>
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Login
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login);

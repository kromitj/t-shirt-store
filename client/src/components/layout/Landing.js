import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getProducts } from '../../actions/productActions'

export class Landing extends Component {
  constructor() {
    super()
    this.onDeptClick = this.onDeptClick.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/product')
    }
  }

  onDeptClick(e) {
    e.preventDefault();
    this.props.getProducts(e.target.name, this.props.history);
  }
  render() {
    return (
      <div>       
        <main className="main-wrap">
          {/* Masthead */}
          <header className="hero-container text-center animated slideInDown">
            <div className="container">
              <div className="col-md-10  mx-auto">
                <form className="justify-content-center">
                  <div className="form-row">
                    <div className="col-12 col-md-5 hero-logo">
                      <h1 className="logo-landing"><a className="link" href="#"><span className="hero-logo-text">T-Shirt-Store</span></a></h1>
                    </div>
                    <div className="col-12 col-md-7 mb-2 mb-md-0 hero-phrase">
                      <h4 className>We have the largest collection of postage-stamp-based t-shirts designs on the Planet! </h4>
                      <h5 className="hero-sub-phrase font-weight-bold">Start your journey by selecting a Department below... </h5>
                    </div>
                  </div>
                  <div className="city-selection">
                    <div className="form-row justify-content-center">
                      <div className="col-xs-12 center-block">
                        <h4>Department:</h4>
                      </div>                
                    </div>
                    <div className="form-row justify-content-center pick-city">
                      <div className="btn-toolbar col-xs-12 center-block" align="center" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-info city-button mx-3" name="" onClick={ this.onDeptClick}>All</button>
                        <button type="button" className="btn btn-outline-info city-button mx-3" name="?department=1" onClick={ this.onDeptClick}>Regional</button>
                        <button type="button" className="btn btn-outline-info city-button mx-3" name="?department=2" onClick={ this.onDeptClick}>Nature</button>
                        <button type="button" className="btn btn-outline-info city-button mx-3" name="?department=3" onClick={ this.onDeptClick}>Seasonal</button>
                      </div>                
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </header>
          {/* More Below Indicator */}
          <section className="text-center scroll-negative-margin ">
            <div className="container">
              <div className="row">
                <div className="col-xl-9 mx-auto scroll-down-indicator">
                  <a href className="link-comp">
                    <span>See All T-Shirts!</span><br />
                    <span className="icon-arrow-down" />                   
                  </a>
                </div>          
              </div>
            </div>
          </section>
        </main>
        {/* Call to Action */}
        <section className="text-center call-to-action-background">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h2 className="mb-4 text-white newsletter-statement">Sign up to get Updates!</h2>
                <h2 className="newsletter-success d-none text-white">Cool! You will now recieve a periodic newsletter</h2>  
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto newsletter-form-wrapper">
                <form className>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input type="email" className="form-control form-control-lg " placeholder="Enter your email..." />
                    </div>
                    <div className="col-12 col-md-3">
                      <button type="submit" className="btn btn-block btn-lg btn-outline-info btn-dark-back newsletter-sign-up-btn">Sign up!</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        {/* Footer */}
        <footer className="footer footer-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                <ul className="list-inline mb-2">
                  <li className="list-inline-item">
                    <a href="#" className="link-comp text-white">
                      <i className="fa fa-facebook fa-2x fa-fw " />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="link-comp text-white">
                      <i className="fa fa-twitter fa-2x fa-fw e" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="link-comp text-white">
                      <i className="fa fa-instagram fa-2x fa-fw " />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-3">
                    <a href="#" className="link-comp text-white">About</a>
                  </li>
                  <li className="list-inline-item text-white">⋅</li>
                  <li className="list-inline-item mr-3">
                    <a href="#" className="link-comp text-white">Contact</a>
                  </li>
                  <li className="list-inline-item text-white">⋅</li>
                  <li className="list-inline-item">
                    <a href="#" className="link-comp text-white">Terms of Use</a>
                  </li>
                  <li className="list-inline-item text-white">⋅</li>
                  <li className="list-inline-item">
                    <a href="#" className="link-comp text-white">Shelter Manager</a>
                  </li>
                </ul>
                <p className="small mb-4 mb-lg-0 text-white">© Hello Doggy 2018. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </footer>
        {/* Bootstrap core JavaScript */}
        {/*  */}
      </div>
    );
  }
}

Landing.propTypes = {
  getProducts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { getProducts })(Landing)

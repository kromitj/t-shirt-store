import React, { Component } from 'react';

export class Main extends Component {
	render() {
		return (
			<div>	
					var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        {/* Navbar */}
        <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
          <div className="container">
            {/* Brand */}
            <a className="navbar-brand waves-effect" href="https://mdbootstrap.com/docs/jquery/" target="_blank">
              <strong className="blue-text">MDB</strong>
            </a>
            {/* Collapse */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            {/* Links */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* Left */}
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link waves-effect" href="#">Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link waves-effect" href="https://mdbootstrap.com/docs/jquery/" target="_blank">About MDB</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link waves-effect" href="https://mdbootstrap.com/docs/jquery/getting-started/download/" target="_blank">Free download</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link waves-effect" href="https://mdbootstrap.com/education/bootstrap/" target="_blank">Free
                    tutorials</a>
                </li>
              </ul>
              {/* Right */}
              <ul className="navbar-nav nav-flex-icons">
                <li className="nav-item">
                  <a className="nav-link waves-effect">
                    <span className="badge red z-depth-1 mr-1"> 1 </span>
                    <i className="fas fa-shopping-cart" />
                    <span className="clearfix d-none d-sm-inline-block"> Cart </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://www.facebook.com/mdbootstrap" className="nav-link waves-effect" target="_blank">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://twitter.com/MDBootstrap" className="nav-link waves-effect" target="_blank">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="nav-link border border-light rounded waves-effect" target="_blank">
                    <i className="fab fa-github mr-2" />MDB GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar */}
        {/*Main layout*/}
        <main className="mt-5 pt-4">
          <div className="container dark-grey-text mt-5">
            {/*Grid row*/}
            <div className="row wow fadeIn">
              {/*Grid column*/}
              <div className="col-md-6 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg" className="img-fluid" alt />
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-md-6 mb-4">
                {/*Content*/}
                <div className="p-4">
                  <div className="mb-3">
                    <a href>
                      <span className="badge purple mr-1">Category 2</span>
                    </a>
                    <a href>
                      <span className="badge blue mr-1">New</span>
                    </a>
                    <a href>
                      <span className="badge red mr-1">Bestseller</span>
                    </a>
                  </div>
                  <p className="lead">
                    <span className="mr-1">
                      <del>$200</del>
                    </span>
                    <span>$100</span>
                  </p>
                  <p className="lead font-weight-bold">Description</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor suscipit libero eos atque quia ipsa
                    sint voluptatibus!
                    Beatae sit assumenda asperiores iure at maxime atque repellendus maiores quia sapiente.</p>
                  <form className="d-flex justify-content-left">
                    {/* Default input */}
                    <input type="number" defaultValue={1} aria-label="Search" className="form-control" style={{width: '100px'}} />
                    <button className="btn btn-primary btn-md my-0 p" type="submit">Add to cart
                      <i className="fas fa-shopping-cart ml-1" />
                    </button>
                  </form>
                </div>
                {/*Content*/}
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
            <hr />
            {/*Grid row*/}
            <div className="row d-flex justify-content-center wow fadeIn">
              {/*Grid column*/}
              <div className="col-md-6 text-center">
                <h4 className="my-4 h4">Additional information</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit modi sapiente illo soluta odit
                  voluptates,
                  quibusdam officia. Neque quibusdam quas a quis porro? Molestias illo neque eum in laborum.</p>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
            {/*Grid row*/}
            <div className="row wow fadeIn">
              {/*Grid column*/}
              <div className="col-lg-4 col-md-12 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg" className="img-fluid" alt />
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg" className="img-fluid" alt />
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" className="img-fluid" alt />
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
        </main>
        {/*Main layout*/}
        {/*Footer*/}
        <footer className="page-footer text-center font-small mt-4 wow fadeIn">
          {/*Call to action*/}
          <div className="pt-4">
            <a className="btn btn-outline-white" href="https://mdbootstrap.com/docs/jquery/getting-started/download/" target="_blank" role="button">Download MDB
              <i className="fas fa-download ml-2" />
            </a>
            <a className="btn btn-outline-white" href="https://mdbootstrap.com/education/bootstrap/" target="_blank" role="button">Start
              free tutorial
              <i className="fas fa-graduation-cap ml-2" />
            </a>
          </div>
          {/*/.Call to action*/}
          <hr className="my-4" />
          {/* Social icons */}
          <div className="pb-4">
            <a href="https://www.facebook.com/mdbootstrap" target="_blank">
              <i className="fab fa-facebook-f mr-3" />
            </a>
            <a href="https://twitter.com/MDBootstrap" target="_blank">
              <i className="fab fa-twitter mr-3" />
            </a>
            <a href="https://www.youtube.com/watch?v=7MUISDJ5ZZ4" target="_blank">
              <i className="fab fa-youtube mr-3" />
            </a>
            <a href="https://plus.google.com/u/0/b/107863090883699620484" target="_blank">
              <i className="fab fa-google-plus-g mr-3" />
            </a>
            <a href="https://dribbble.com/mdbootstrap" target="_blank">
              <i className="fab fa-dribbble mr-3" />
            </a>
            <a href="https://pinterest.com/mdbootstrap" target="_blank">
              <i className="fab fa-pinterest mr-3" />
            </a>
            <a href="https://github.com/mdbootstrap/bootstrap-material-design" target="_blank">
              <i className="fab fa-github mr-3" />
            </a>
            <a href="http://codepen.io/mdbootstrap/" target="_blank">
              <i className="fab fa-codepen mr-3" />
            </a>
          </div>
          {/* Social icons */}
          {/*Copyright*/}
          <div className="footer-copyright py-3">
            © 2019 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/" target="_blank"> MDBootstrap.com </a>
          </div>
          {/*/.Copyright*/}
        </footer>
        {/*/.Footer*/}
        {/* SCRIPTS */}
        {/* JQuery */}
        {/* Bootstrap tooltips */}
        {/* Bootstrap core JavaScript */}
        {/* MDB core JavaScript */}
        {/* Initializations */}
      </div>
    );
  }
});
			</div>
		);
	}
}

import React, { Component, useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import jwt_decode from 'jwt-decode'

import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser, getUserIp } from './actions/authActions'
import store from './store'

import Footer from './components/layout/Footer'
import NavbarPage from './components/layout/Nav'
import Item from './components/navbar/navItem'
import Landing from './components/layout/Landing'
import Main from './components/layout/Main'
import ProductPage from './components/product/product-page'
import Login from './components/auth/login'
import Register from './components/auth/register'
import Cart from './components/cart/cart'

import './App.scss';

// check for auth token
if (localStorage.jwtToken) {
	setAuthToken(localStorage.jwtToken)
	const decoded = jwt_decode(localStorage.jwtToken)
	store.dispatch(setCurrentUser(decoded))

	// check if jwt token is expired and log user out if it is
	const currentTime = new Date() / 1000
	if (decoded.exp < currentTime) {
		store.dispatch(logoutUser())
	}
}

// check for cart 
		
class App extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// load userCart from localStorage with users ipAddress as key
	  store.dispatch(getUserIp())
  }

	render() {
		var currentLocation = window.location.pathname;
		console.log("currentLocation: ", currentLocation)
		return (
			<Provider store={store} >
    	<Router>
	    	<div className="app">
	    		<NavbarPage />
	  			<Route exact path='/' component={ Landing} />
	    		<div className="container">
	    			<Route exact path='/product' component={ Main } />
	    			<Route exact path="/product/:id" component={ProductPage} />
	    			<Route exact path='/cart' component={ Cart} />
	    			<Route exact path='/login' component={ Login} />
	    			<Route exact path='/register' component={ Register} />
	  			</div>
	    	 <Footer></Footer >
	    	</div>
    	</Router>
    </Provider>
		);
	}
}


export default App;

import React, { Component, useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import jwt_decode from 'jwt-decode'

import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './actions/authActions'
import store from './store'

import Footer from './components/layout/Footer'
import NavbarPage from './components/layout/Nav'
import Item from './components/navbar/navItem'
import Landing from './components/layout/Landing'
import Main from './components/layout/Main'
import Login from './components/auth/login'
import Register from './components/auth/register'

import './App.scss';

// check for auth token
if (localStorage.jwtToken) {
	setAuthToken(localStorage.jwtToken)
	// 
	const decoded = jwt_decode(localStorage.jwtToken)
	store.dispatch(setCurrentUser(decoded))

	// check if jwt token is expired and log user out if it is
	const currentTime = new Date() / 1000
	if (decoded.exp < currentTime) {
		store.dispatch(logoutUser())
	}
}
class App extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={store} >
    	<Router>
	    	<div className="app">
    			<Route exact path='/' component={ Landing} />
	    		<div className="container">
    			<NavbarPage></NavbarPage>
	    		<Route exact path='/product' component={ Main } />
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

import React, { Component, useReducer } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './App.scss';

import Footer from './components/layout/Footer'
import NavbarPage from './components/layout/Nav'
import Item from './components/navbar/navItem'
import Main from './components/layout/Main'
import Login from './components/auth/login'
import Register from './components/auth/register'



class App extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
  	<Provider store={store} >
    	<Router>
	    	<div className="app">
	    		<NavbarPage></NavbarPage >
	    		<div className="container">
	    			<Route exact path='/' component={ Main} />
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

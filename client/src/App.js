import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.scss';

import Footer from './components/layout/Footer'
import NavbarPage from './components/layout/Nav'
import Item from './components/navbar/navItem'
import Main from './components/layout/Main'
import Login from './components/auth/login'
import Register from './components/auth/register'

const App = (props) => {
  return (
    	<div className="container">
    		<NavbarPage></NavbarPage >	
    		{<Route exact path='/' component={ Main} />}
    		{<Route exact path='/login' component={ Login} />}
    		{<Route exact path='/register' component={ Register} />}
    	 <Footer></Footer >
    </div>
    );
}



export default App;

import React, { Component } from 'react';

export class Footer extends Component {
	render() {
		return (
			<footer>
				Copyright &copy; {new Date().getFullYear()} 
			</footer>
		);
	}
}

export default Footer;

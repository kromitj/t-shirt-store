import axios from 'axios';

import { GET_PRODUCTS, SET_PRODUCTS, GET_ERRORS } from './types';

// GET PRODUCTS
export const getProducts = (query, history) => dispatch => {
	console.log("product Actions: value: ", query)
	axios
		.get('/api/product' + query)
		.then(res => {
			dispatch(setProducts(res.data))
		}).then(() => {
			history.push('/product')
		})
		.catch(err => {
			console.log(err)
			dispatch({
				type: GET_ERRORS,
				payload: err
			})
		});
};

export const setProducts = (products) => {
	console.log("setProducts: ", products)
	return {
		type: SET_PRODUCTS,
		payload: products
	};
};

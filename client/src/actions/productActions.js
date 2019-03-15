import axios from 'axios';

import { GET_PRODUCTS, GET_ERRORS, GET_PRODUCT, PRODUCT_LOADING} from './types';


// GET PRODUCTS
export const getProducts = (query, history) => dispatch => {
	console.log("getproducts called")
		dispatch(setProductLoading());
		axios
			.get('/api/product' + query)
			.then(res => {
				dispatch({
					type: GET_PRODUCTS,
					payload: res.data
				})
			})
			.catch(err => {
				dispatch({
					type: GET_ERRORS,
					payload: err
				})
			});	
};


export const getProductPageById = (product_id) => dispatch => {
	console.log("getProductById")
	dispatch(setProductLoading());
  axios
    .get(`/api/product/${product_id}`)
    .then(res =>
      dispatch({
        type: GET_PRODUCT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
};

export const setProductLoading = () => {
  return {
    type: PRODUCT_LOADING
  };
};

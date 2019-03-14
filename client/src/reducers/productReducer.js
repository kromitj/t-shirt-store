import { SET_PRODUCTS } from '../actions/types';

const initialState = {
	products: [],
	product: null,
	offset: 0,
	limit: 50,
	department: null

};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_PRODUCTS:
			const products = action.payload
			return {
				...state,
				products: products
			};
		default:
			return state;
	}
}

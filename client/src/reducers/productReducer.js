import { GET_PRODUCTS, GET_PRODUCT, PRODUCT_LOADING } from '../actions/types';

const initialState = {
	products: [],
	product: null,
	loading: false,
	offset: 0,
	limit: 50,
	department: null,	
	ip: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case PRODUCT_LOADING:
      return {
        ...state,
        loading: true
      };
      case GET_PRODUCT:
	      return {
	        ...state,
	        product: action.payload,
	        loading: false
	     };
      case GET_PRODUCTS: 
      console.log(action)     
      return {
        ...state,
        products: action.payload.products,
        ip: action.payload.ip,
        loading: false
      };
		default:
			return state;
	}
}

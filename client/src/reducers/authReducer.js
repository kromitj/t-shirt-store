import isEmpty from '../validation/is-empty';

import { SET_CURRENT_USER, SET_USER_CART, ADD_USER_CART } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},
  ipAddress: null,
  cart: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:

      console.log("blah: ", action)
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case SET_USER_CART:
      console.log("INSIDE SET_USER_CART REDUCER")
      return {
        ...state,
        cart: action.payload.cart,
        ipAddress: action.payload.ip
      };
    case ADD_USER_CART:
      console.log("INSIDE ADD_USER_CART REDUCER")
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
}

import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER, SET_USER_CART, ADD_USER_CART } from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/user/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  console.log(userData)
  axios
    .post('/api/user/login', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const getUserIp = () => dispatch => {
  axios.get('/api/user/ip').then(res => {
    const userIP = res.data.userIP
    const userCartID = `tshirtstore${userIP}`  
    if (!localStorage.getItem(userCartID)) {
    localStorage.setItem(userCartID, JSON.stringify([]))
  }
  const userCart = JSON.parse(localStorage.getItem(userCartID))
  console.log("USERCART: ", userCart)
    dispatch(setUserCart(userCart, userCartID));
  })  
};

export const setUserCart = (userCart, userIP) => {  
  return {
    type: SET_USER_CART,
    payload: {cart: userCart, ip: userIP}
  }
};
export const addUserCart = (product, userIP) => {  
  console.log("product: ", product)
  // get cart from localStorage
  const cart = JSON.parse(localStorage.getItem(userIP))
  let isUnique = true
  // check if item is already in cart, if yes, add to qty
  for (let i=0; i<cart.length; i++) {
    if (cart[i][0] === product[0]) {
        isUnique = false
        cart[i][5] += 1
        break;
    }
  }
  if (isUnique) cart.push(product)
   localStorage.setItem(userIP, JSON.stringify(cart))
  return {
    type: ADD_USER_CART,
    payload: cart
  }
};

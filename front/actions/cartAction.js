
import { CART } from '../api/constants';
import Swal from 'sweetalert2';
import { size, includes, remove } from 'lodash';

import { 
  ADD_PRODUCT,
  GET_PRODUCT,
  REMOVE_PRODUCT,
  REMOVE_ALL_PRODUCT 
} from "../types";



//  add cart to localstorage 
export function addProductCart(product) {
  return async (dispatch) => {
    const cart = getProductCart()
    if(!cart) {
      localStorage.setItem(CART, product)
       // Alerta
       Swal.fire(
        'Correcto', 
        'Añadido correctamente',
        'success'
      );

      dispatch({
        type: ADD_PRODUCT
      })
    
    } else {
      cart.push(product);
      localStorage.setItem(CART, cart);
      dispatch({
        type: ADD_PRODUCT
      })
     
       // Alerta
       Swal.fire(
        'Correcto', 
        'Añadido correctamente',
        'success'
      );
    }
    
  }
}

//  get cart from localstorage
export function getProductCart() {
    const cart = localStorage.getItem(CART);
    if(!cart) {
      return null
    } else {
      const products = cart.split(",");
      return products
    }
}

//  remove cart from localstorage 
export function removeProductCart() {
  return async (dispatch) => {}
}

// 
export function removeAllProductCart() {
  return async (dispatch) => {}
}

// contamos los elementos en carrito
export function countProductCart() {
  return async (dispatch) => {
    const cart = getProductCart();
    dispatch({
      type: GET_PRODUCT,
      payload: size(cart)
    })
  }
}
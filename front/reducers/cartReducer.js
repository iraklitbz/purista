import { 
  ADD_PRODUCT,
  GET_PRODUCT,
  REMOVE_PRODUCT,
  REMOVE_ALL_PRODUCT 
} from "../types";


const initialState = {
  productCart: 0,
  cartProductos: [],
  reloadCart: false
  
}


export default function(state = initialState, action) {
  switch(action.type) {

    case ADD_PRODUCT:
      return {
        ...state,
        reloadCart: true
      }

    case GET_PRODUCT:
      return {
        ...state,
        productCart: action.payload,
        reloadCart: false
      }

    
    default:
      return state;
  }
}
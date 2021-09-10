import { 
  ULTIMOS_PRODUCTOS,
  PRODUCTO_BY_URL,
  PRODUCTO_BY_ID 
} from "../types";


const initialState = {
  productos: [],
  producto: null,
  productosCart: null,
}


export default function(state = initialState, action) {
  switch(action.type) {

    case ULTIMOS_PRODUCTOS:
      return {
        ...state,
        productos: action.payload
      }

    case PRODUCTO_BY_URL:
      return {
        ...state,
        producto: action.payload
      }

    case PRODUCTO_BY_ID:
      return {
        ...state,
        productosCart: action.payload
      }

    
    default:
      return state;
  }
}
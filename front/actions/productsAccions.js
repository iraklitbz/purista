
import { BASE_PATH } from '../api/constants';
import { 
  ULTIMOS_PRODUCTOS,
  PRODUCTO_BY_URL,
  PRODUCTO_BY_ID  
} from "../types";




// obtenemos productos con limite
export function getLastProducts(limit) {
  return async (dispatch) => {
    try {
      const limitItems = `_limit=${limit}`;
      const sortItem = `_sort=createdAt:desc`

      const url = `${BASE_PATH}/breads?${limitItems}&${sortItem}`
      const response = await fetch(url)
      const result = await response.json();
        dispatch({
          type: ULTIMOS_PRODUCTOS,
          payload: result
        })
      
    } catch (error) {
      console.log();
      return null
    }
  }
  
}

//GET BY URL INDIVIDUAL

export function getProductByUrl(path){
 return async (dispatch) => {
  try {
    const url = `${BASE_PATH}/breads?url=${path}`
    const response = await fetch(url)
    const result = await response.json();
    dispatch({
      type: PRODUCTO_BY_URL,
      payload: result[0]
    })
  } catch (error) {
    console.log(error);
    return error
  }
 }

}

//GET BY ID INDIVIDUAL

export function getProductById(id){
  return async (dispatch) => {
   try {
     const url = `${BASE_PATH}/breads/${id}`
     const response = await fetch(url)
     const result = await response.json();
    return result;
   } catch (error) {
     console.log(error);
     return error
   }
  }
 }


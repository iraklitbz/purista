
import jwtDecode from "jwt-decode";
import { removeToken } from "../api/token";
import { 
  REGISTRO_EXITOSO, 
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  OBTENER_TOKEN,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../types";


const initialState = {
  token: null,
  login: () => null,
  logout: () => null,
  setReloadUser: () => null,
  usuarioID: null,
  user: null,
  error: null,
  loading: false,
  jwt: null,
}


export default function(state = initialState, action) {
  switch(action.type) {

    case REGISTRO_EXITOSO:
      return{
        ...state,
        usuarioID: action.payload
      }

    case REGISTRO_ERROR:
      return{
        ...state,
        loading: false,
        error: action.payload
      }

    case LOGIN_EXITOSO:
    case OBTENER_TOKEN:
      const user = jwtDecode(action.token);
      return{
        ...state,
        usuarioID: user,
        token: action.token

      }

    case OBTENER_USUARIO:
      return{
        ...state,
        user: action.payload
      }

    case CERRAR_SESION:
      removeToken();
      return{
        ...state,
        token: null,
        usuarioID: null,
        user: null
      }

    
    default:
      return state;
  }
}
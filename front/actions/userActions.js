
import { BASE_PATH } from '../api/constants';
import Swal from 'sweetalert2';
import { setToken, getToken } from '../api/token';
import { authFetch } from '../utils/fetch';
import { 
  REGISTRO_EXITOSO, 
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  ACTUALIZAR_USUARIO,
  LOGIN_EXITOSO,
  OBTENER_TOKEN,
  LOGIN_ERROR,
  CERRAR_SESION,
  RESET_PASSWORD 
} from "../types";




// registramos usuario
export function registrarUsuario(usuario) {
  console.log('primer', usuario)
  return async (dispatch) => {
    try {
      const url = `${BASE_PATH}/auth/local/register`
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
      }
      const response = await fetch(url, params)
      const result = await response.json();
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: result
      })
      // Alerta
      Swal.fire(
        'Correcto', 
        'Te has registrado correctamente',
        'success'
    );
     
      
    } catch (error) {
      console.log(error);
      dispatch( registrarUsuarioError(true) );
       // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error, intenta de nuevo'
    })
    }
   
  }
}
//actualizar usuario
export function actualizarUsuario(id, data, logout) {
  console.log(id)
  return async (dispatch) => {
    try {
      const url = `${BASE_PATH}/users/${id}`
      const params = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
      const response = await fetch(url, params, logout)
      const result = await response.json();
      dispatch({
        type: ACTUALIZAR_USUARIO,
        payload: result
      })
      // Alerta
      Swal.fire(
        'Correcto', 
        'Te has registrado correctamente',
        'success'
    );
     
      
    } catch (error) {
      console.log(error);
      dispatch( {
        type: REGISTRO_ERROR,
        payload: true
      } );
       // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error, intenta de nuevo'
    })
    }
   
  }
}

//actualizar password
export function actualizarPass(id, password, logout) {
  console.log(id)
  return async (dispatch) => {
    try {
      const url = `${BASE_PATH}/users/${id}`
      const params = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({password})
      }
      const response = await fetch(url, params, logout)
      const result = await response.json();
      dispatch({
        type: ACTUALIZAR_USUARIO,
        payload: result
      })
      // Alerta
      Swal.fire(
        'Correcto', 
        'Te has registrado correctamente',
        'success'
      );
     
      
    } catch (error) {
      console.log(error);
      dispatch( {
        type: REGISTRO_ERROR,
        payload: true
      } );
       // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error, intenta de nuevo'
    })
    }
   
  }
}

// login usuario
export function loginUsuario(usuario) {
  return async (dispatch) => {
    
    try {
 
      const url = `${BASE_PATH}/auth/local`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
      }
      const response = await fetch(url, params)
      const result = await response.json();
    
      setToken(result.jwt);
      dispatch({
        type: LOGIN_EXITOSO,
        token: result.jwt
      })
      dispatch({
        type: OBTENER_USUARIO,
       })

    } catch (error) {
      console.log(error);
      return null
    }

  }
}

//logoutUsuario

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: CERRAR_SESION
    })

  }
}

// load usuario
export const loadUser = () => {
  return (dispatch) => {
   
    const token = getToken();
    if (token) {
      dispatch({
        type: OBTENER_TOKEN,
        token,
      });
    } else return null;
  };
};

// Resetear la contraseña en caso de olvido
export const resetPassword = (email) => {
  return async () => {
    console.log(email)
    try {
      const url = `${BASE_PATH}/auth/forgot-password`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email})
      }
      const response = await fetch(url, params)
      const result = await response.json();
      console.log('resultado',result)
      return result;
      
    } catch (error) {
      
    }
   
   
  };
};

// GET los datos del usuario
export const getMeApi = (signOut) => {
  return async(dispatch) => {
    try {
      const url = `${BASE_PATH}/users/me`;
      const result = await authFetch(url, null, signOut);
     
     if(result) {
       dispatch({
        type: "OBTENER_USUARIO",
        payload: result
       })

     } else {
       return null
     }
    } catch (error) {
      return null
    }
  }
}
import { getToken, hasExpiredToken } from "../api/token";


// esto comprueba si el usuario al URL privado que accede esta auth o no
export async function authFetch(url, params, logout) {
  const token = getToken();

  if (!token) {
    // Usuario no logeador
    logout();
  } else {
    if (hasExpiredToken(token)) {
      // Token caducado
      logout();
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await fetch(url, paramsTemp);
        const result = await response.json();
        return result;
      } catch (error) {
        return error;
      }
    }
  }
}
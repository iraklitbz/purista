import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUsuario, resetPassword } from '../../../actions/userActions';


const LoginForm = ({showRegisterForm}) => {
  const dispatch = useDispatch();


    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
      identifier: '',
      password: ''
    });
    // extraer de usuario
    const { identifier, password } = usuario;

  const onChange = e => {
    guardarUsuario({
        ...usuario,
        [e.target.name] : e.target.value
    })
  }

  // Cuando el usuario quiere iniciar sesión
  const onSubmit = e => {
    e.preventDefault();

    // Validar que no haya campos vacios
    if(identifier.trim() === '' || password.trim() === '') {
        console.log('error')
    }

    // Pasarlo al action
    dispatch(loginUsuario(usuario));
  }

  //reset password

  const restablecerPassword = () => {
    /*TODO*/ 
    dispatch(resetPassword(identifier));
  }
 

  return (
    <> 
      <h2>Login</h2>
      <form className="login" onSubmit={onSubmit}>
        <input 
          name="identifier"
          type="email"
          placeholder="Email"
          value={identifier}
          onChange={onChange}
        />
        <input 
          type="password"
          name="password"
          placeholder="Tu contraseña"
          value={password}
          onChange={onChange}
        />

        <div className="actions">
        <button
            type="submit"
            
          >Entrar</button>
          <button onClick={showRegisterForm}>Ir al registro</button>
         
          <button
            type="button"
            onClick={restablecerPassword}
            
          >Has olvidado la contraseña?</button>
        </div>

      </form>
     
    </>
   );
}

 
export default LoginForm;
import {  useState } from 'react';
import { useDispatch } from "react-redux";
import { registrarUsuario } from '../../../actions/userActions';

const RegistoForm = ({showLoginForm}) => {
  const dispatch = useDispatch();
  

  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    name: '',
    lastname: '',
    email: '',
    password: ''
  });
  const { name, lastname, email, password } = usuario;

  const onChange = e => {
    guardarUsuario({
        ...usuario,
        [e.target.name] : e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
     // Validar que no haya campos vacios
     if(  name.trim() === '' || 
          email.trim() === '' || 
          password.trim() === '') {
          console.log('error')
     }
    dispatch(registrarUsuario(usuario));
  }

  
  return ( 
    <>
      <h2>Registrate</h2>
      <form
        onSubmit={onSubmit}
        className="login-form"
      >
        <input
          name="name"
          type="text"
          placeholder="nombre"
          value={name}
          onChange={onChange}
        />
         <input
          name="lastname"
          type="text"
          placeholder="Apellidos"
          value={lastname}
          onChange={onChange}
        />
        <input 
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
         <input 
          name="password"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={onChange}
        />

        <div className="action">
          <button
            onClick={showLoginForm}
            type="button"
            basic
          >Iniciar sesión
          </button>
          <button
            type="submit"
            className="submit"
          >Registrar
          </button>
        </div>
        
      </form>
    </>
   );
}

 
export default RegistoForm;
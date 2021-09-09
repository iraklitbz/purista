import { useState } from "react";
import { useDispatch } from "react-redux";
import { actualizarPass } from '../../../actions/userActions';

const ChangePasswordForm = ({ user, cerrarSesion }) => {
  const dispatch = useDispatch();
  const [usuario, setUsuario] = useState({
    password: '',
    repeatPassword: ''
  })
  const {password, repeatPassword } = usuario;
  const onChange = (e) => {
    e.preventDefault();
    setUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    // Validar que no haya campos vacios
    if(  password.trim() === '' || 
        repeatPassword.trim() === '') {
          console.log('error')
      }

      else if(password.value !== repeatPassword.value) {
        console.log('no coincide contraseña')
      } else {
        dispatch(actualizarPass(user._id, usuario.password, cerrarSesion));
      }
   
    }
  return ( 
    <div>
     <form
      onSubmit={onSubmit}
     >
      <input 
          name="password"
          type="password"
          placeholder="Tu nueva contraseña"
          onChange={onChange}
          value={password}
        />
        <input 
          name="repeatPassword"
          type="password"
          placeholder="repite contraseña"
          onChange={onChange}
          value={repeatPassword}
        />
         <button type="submit">Actualizar</button>
     </form>
     
    </div>
   );
}
 
export default ChangePasswordForm;
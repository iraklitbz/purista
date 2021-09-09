import { useState } from "react";
import { useDispatch } from "react-redux";
import { actualizarUsuario } from '../../../actions/userActions';

const ChangeNameFrom = ({ user, cerrarSesion }) => {
  const dispatch = useDispatch();
  const [usuario, setUsuario] = useState({
    name: user.name,
    lastname: user.lastname
  })
  const {name, lastname } = usuario;
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
    if(  name.trim() === '' || 
          lastname.trim() === '') {
          console.log('error')
      }
    dispatch(actualizarUsuario(user._id, usuario, cerrarSesion));
    }
  return ( 
    <div>
     <form
      onSubmit={onSubmit}
     >
      <input 
          name="name"
          type="text"
          placeholder="Cambiar nombre"
          onChange={onChange}
          value={name}
        />
        <input 
          name="lastname"
          type="text"
          placeholder="Cambiar apellidos"
          onChange={onChange}
          value={lastname}
        />
         <button type="submit">Actualizar</button>
     </form>
     
    </div>
   );
}
 
export default ChangeNameFrom;
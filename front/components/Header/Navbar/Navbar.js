import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showModal } from '../../../actions/modalActions'
import { useSelector } from "react-redux";
import { signOut, getMeApi } from '../../../actions/userActions';
import Link from 'next/link'

const Navbar = () => {
  const auth = useSelector(state => state.usuario.token);
  const user = useSelector(state => state.usuario.user);

  const dispatch = useDispatch();

  const mostrarModal = () => {
    dispatch(showModal())
  }
  const cerrarSesion = () => {
    dispatch(signOut())
  }

  useEffect(() =>{
    const fetchData = async () => {
       await dispatch(getMeApi(cerrarSesion));
    }
    fetchData()

  },[auth])
  
  return ( 
    <nav>
      {user ? 
      (
        <ul>
          <span onClick={() =>cerrarSesion()}>logout {user.name}</span>
          <Link href="/orders">Mis Pedidos </Link>
        </ul>
      ) : 
      (
        <ul>
          <span onClick={() => mostrarModal()}>login</span> 
        </ul> 
      ) }
      
      <ul>

      </ul>
     
    </nav>
   
   );
}
 
export default Navbar;
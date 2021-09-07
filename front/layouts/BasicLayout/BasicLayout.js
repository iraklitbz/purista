import Header from "../../components/Header";
import BasicModal from "../../components/Modal";
import Auth from "../../components/Auth";
import { useState, useEffect } from "react";
import { loadUser } from "../../actions/userActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const BasicLayout = (props) => {
  const auth = useSelector(state => state.usuario.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  //El titulo del Modal
  const [titleModal, setTitleModal] = useState('Inicia sesión');
  
  const { children } = props;

  if(auth === undefined) return null;
  return ( 
    <div>
      <Header />
      {children}
      <BasicModal
        title={titleModal}
        size="small"    
      >
        <Auth setTitleModal={setTitleModal} />
      </BasicModal>
    </div>
   );
}
 
export default BasicLayout;
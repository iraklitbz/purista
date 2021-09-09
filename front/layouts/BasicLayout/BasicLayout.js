import Header from "../../components/Header";
import BasicModal from "../../components/Modal";
import Auth from "../../components/Auth";
import { useState, useEffect } from "react";
import { loadUser } from "../../actions/userActions";
import { useDispatch,useSelector } from "react-redux";
import classNames from "classnames";

const BasicLayout = (props) => {
  const auth = useSelector(state => state.usuario.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  //El titulo del Modal
  const [titleModal, setTitleModal] = useState('Inicia sesión');
  
  const { children, className } = props;

  if(auth === undefined) return null;
  return ( 
    <div className={classNames("basic-layout",{[className]: className})}
    >
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
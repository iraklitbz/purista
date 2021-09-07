import { useDispatch, useSelector } from "react-redux";
import { hiddeModal } from "../../actions/modalActions";
import { Modal } from 'semantic-ui-react';


const BasicModal = ({ title,children, ...rest }) => {
  const dispatch = useDispatch();

  const setShow = useSelector(state => state.modals.showModal);
  const onClose = () => {
    dispatch(hiddeModal())
  }
  
  return ( 
   <Modal className="basic-modal" open={setShow} onClose={onClose} {...rest}>
     <Modal.Header>
       <span>{title}</span>
       <i onClick={onClose}>x</i>
     </Modal.Header>
     <Modal.Content>
       {children}
     </Modal.Content>

   </Modal>
   );
}
 
export default BasicModal;
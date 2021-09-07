import { MOSTAR_MODAL, OCULTAR_MODAL } from "../types";

const initialState = {
  showModal: false
}

export default function(state = initialState, action) {
  switch(action.type) {

    case MOSTAR_MODAL:
      return{
        ...state,
        showModal: true
      }

    case OCULTAR_MODAL:
      return{
        ...state,
        showModal: false
      }
    
    default:
      return state;
  }
}
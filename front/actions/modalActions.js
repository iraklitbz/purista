import { MOSTAR_MODAL, OCULTAR_MODAL } from "../types";

// Musetra modal

export function showModal() {
  return (dispatch) => {
    dispatch(mostrarModal())
  }
}

const mostrarModal = () => ({
  type: MOSTAR_MODAL
})

export function hiddeModal() {
  return (dispatch) => {
    dispatch(ocultarModal())
  }
}

const ocultarModal = () => ({
  type: OCULTAR_MODAL
})
import BasicLayout from '../layouts/BasicLayout'
import { useEffect } from 'react';
import {useDispatch } from 'react-redux';
import router, { useRouter } from 'next/router';
import { getMeApi, signOut } from '../actions/userActions';
import { useSelector } from "react-redux";
import { signIn, useSession } from 'next-auth/client'


export default function Account() {
  const auth = useSelector(state => state.usuario.token);
  const user = useSelector(state => state.usuario.user);
  const [session, loading] = useSession();
  const dispatch = useDispatch();
  const cerrarSesion = () => {
    dispatch(signOut())
  }





  

  useEffect(() =>{
    const fetchData = async () => {
      await dispatch(getMeApi(cerrarSesion))
    }
    fetchData()

  },[auth])


  // When rendering client side don't display anything until loading is complete
  if (!user) {
    return router.push('/')
  }


  return (
    <BasicLayout>
      <h1>Estamos en la account</h1>
    </BasicLayout>
 
  )
}

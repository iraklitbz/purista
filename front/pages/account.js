import BasicLayout from '../layouts/BasicLayout'
import { useEffect, useState } from 'react';
import {useDispatch } from 'react-redux';
import router from 'next/router';
import { getMeApi, signOut } from '../actions/userActions';
import { useSelector } from "react-redux";
import ChangeNameForm from '../components/Account/ChangeNameForm';
import ChangePasswordForm from '../components/Account/ChangePasswordForm';


export default function Account() {
  const auth = useSelector(state => state.usuario.token);
  const user = useSelector(state => state.usuario.user);
  const dispatch = useDispatch();
  const cerrarSesion = () => {
    dispatch(signOut())
  }


  useEffect(() => {
    dispatch(getMeApi(cerrarSesion));
  }, [auth]);

  if (user === null) return (<div>Login</div>);

  if (!auth && !user) {
    router.replace("/");
    return null;
  }
  


    return (
      <BasicLayout>
        <h1>Estamos en la account</h1>
        <ChangeNameForm 
          user={user}
          cerrarSesion={cerrarSesion}
        />
        <ChangePasswordForm 
          user={user}
          cerrarSesion={cerrarSesion}
        />
      </BasicLayout>
    )
   

  
}

import { useState } from 'react';
import LoginForm from './LoginForm';
import RegistoForm from './RegistroForm'
const Auth = ({setTitleModal}) => {
  const [showLogin, setShowLogin] = useState(true);

  const showLoginForm = () => {
    setShowLogin(true);
    setTitleModal('Iniciar sesión')
  }
  const showRegisterForm = () => {
    setShowLogin(false);
    setTitleModal('Crear nuevo usuario')
  }

  return ( 
    <div>
      { showLogin ? 
        <LoginForm 
          showRegisterForm={showRegisterForm} 
        /> : 
        <RegistoForm 
          showLoginForm={showLoginForm}
        /> 
      }
    </div>
   );
}
 
export default Auth;
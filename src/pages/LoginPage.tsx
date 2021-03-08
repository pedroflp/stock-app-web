import { useState } from 'react';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

import '../styles/pages/LoginPage.css';

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);

  function handleRegisterUser() {
    setIsRegister(true);
  }

  function handleLoginUser() {
    setIsRegister(false);
  }

  return (
    <div className='login-page-container'>
      <div className='login-page-left'>
        <h1>H</h1>
      </div>
      
      <div className='login-page-right'>
        <div className='login-page-right-card'>
        { !isRegister ? (
          <>
          <LoginForm />
          <br/>

          <div className='login-or-register'>
            <hr/>
            <span>ou</span>
          </div>
          <button 
          onClick={handleRegisterUser}
          className='register-user'
          >
            Registrar novo usuário
          </button>
          </>
        ) : (
        <>
        <AiOutlineArrowLeft onClick={handleLoginUser} size={20} />
        <RegisterForm />
        </>
        ) }
        </div>
      </div>
    </div>
  );
}
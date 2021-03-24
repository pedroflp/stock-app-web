import { useState } from 'react';
import Helmet from 'react-helmet';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { GoPackage } from 'react-icons/go';

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
    <>

    <Helmet title="StockAPP | Login" />
    
    <div className='login-page-container'>
      <div className='login-page-left'>
      <GoPackage size={700} 
        style={{
          color: 'var(--blue)',
          filter: 'brightness(1.07)', 
          transform: 'translateX(-50px) rotate(-10deg)'
        }} 
      />
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

    </>
  );
}
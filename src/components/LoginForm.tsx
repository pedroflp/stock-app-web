import { FormEvent, useContext, useState } from "react";
import { Context } from "../contexts/AuthContext";
import api from "../services/api";

import { BsEye, BsEyeSlash } from 'react-icons/bs';

import AlertPopup from "./AlertPopup";

import '../styles/components/PasswordInput.css';

export default function LoginForm() { 
  const [isHidden, setIsHidden] = useState(true);
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errs, setErrs] = useState({
    password: false
  })

  const { callLoading, handleLogin } = useContext(Context)
  
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    callLoading(true)

    await api.post('login', {
      username: username,
      password: password

    }).then(response => {
      const data = response.data;

    
      localStorage.setItem('uId', data.user.id)
      localStorage.setItem('username', data.user.username)

      handleLogin(data);
    }).catch(e => {
      if (e) {
        callLoading(false); 
        setErrs({...errs, password: true})

        setTimeout(() => {
          setErrs({...errs, password: false})
        }, 4000);
      }
    })
    
  }
  
  function showPassword() {
  setIsHidden(false);
  }

  function hidePassword() {
  setIsHidden(true);
  }

  return (
    <div className='login-form'>
      <h1>Login</h1>
      
      <div className='login-form-inputs'>
      { errs.password &&
       <AlertPopup 
          icon 
          type="alert" 
          title="Login inválido" 
          description="Suas credenciais não correspondem à nenhuma conta!" 
        />
      }
        <form onSubmit={handleSubmit}>
          <input
          value={username}
          onChange={e => setUsername(e.target.value)} id="username" type="text" 
          placeholder='Nome de usuário' />
          
          <div className='input-password'>
            <input 
            value={password}
            onChange={e => setPassword(e.target.value)} id="password"
            type={ isHidden ? 'password' : 'text' } 
            placeholder='Senha' />
            <label>
            { isHidden ? <BsEye size={23} onClick={showPassword} /> 
            : 
            <BsEyeSlash size={23} onClick={hidePassword} />}
            </label>
          </div>

          <button
            disabled={username === '' || password === ''}
            onClick={handleSubmit} 
            type="submit" 
            style={{ width: '100%', fontSize: '1rem', height: '4rem' }} 
            className="register-product-button"
          >
           Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
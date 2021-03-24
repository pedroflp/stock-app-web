import { FormEvent, useContext, useState } from "react";

import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Context } from "../contexts/AuthContext";
import api from "../services/api";

import '../styles/components/PasswordInput.css';

export default function RegisterForm() {
  const { handleLogin } = useContext(Context);

  const [isHidden, setIsHidden] = useState(true);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    data.append('username', String(username));
    data.append('email', String(email));
    data.append('password', String(password));

    await api.post('registrar', data);

    await api.post('login', {
      username: username,
      password: password

    }).then(response => {
      const data = response.data;
      handleLogin(data);
    });
  }

  function showPassword() {
  setIsHidden(false);
  }

  function hidePassword() {
  setIsHidden(true);
  }

  return (
    <div className='register-form'>
      <h1>Registrar</h1>
      
      <div className='register-form-inputs'>
        <form onSubmit={handleSubmit}>
          <input
          value={username}
          onChange={e => setUsername(e.target.value)} id="username" type="text" 
          placeholder='Nome de usuário' />

          <input 
          value={email}
          onChange={e => setEmail(e.target.value)} id="email" type="email"
          placeholder='Email' />
          
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

          <button type="submit" className="register-user">Registrar</button>
        </form>
      </div>
    </div>
  );
}
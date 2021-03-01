import { useState } from "react";

import { BsEye, BsEyeSlash } from 'react-icons/bs';

import '../styles/components/PasswordInput.css';

export default function PasswordInput() {
  const [isHidden, setIsHidden] = useState(true);

  function showPassword() {
    setIsHidden(false);
  }

  function hidePassword() {
    setIsHidden(true);
  }

  return (
    <div className='input-password'>
      <input 
      type={ isHidden ? 'password' : 'text' } 
      placeholder='Senha' />
      <label>
      { isHidden ? <BsEye size={23} onClick={showPassword} /> 
      : 
      <BsEyeSlash size={23} onClick={hidePassword} />}
    </label>
  </div>
  );
}
import PasswordInput from "./PasswordInput";

export default function RegisterForm() {
  return (
    <div className='register-form'>
      <h1>Registrar</h1>
      
      <div className='register-form-inputs'>
        <input type="text" placeholder='Nome' />
        <input type="email" placeholder='Email' />
        <PasswordInput />
        <input type="submit" value='Registrar' />
      </div>
    </div>
  );
}
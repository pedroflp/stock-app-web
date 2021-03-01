import PasswordInput from "./PasswordInput";

export default function LoginForm() {  
  return (
    <div className='login-form'>
      <h1>Login</h1>
      
      <div className='login-form-inputs'>
        <input type="email" placeholder='Email' />
        <PasswordInput />
        <input type="submit" value='Entrar' />
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';

import '../styles/components/TopBar.css';

export default function TopBar() {
  return (
    <div className='topbar-container'>
      <div className='topbar-title'>
        <h1>Bem-vindo, <strong>Pedro Felipe</strong>!</h1>
      </div>

      <div className='topbar-buttons'>
        <Link to='/criar-produto' className='register-product-button'>Cadastrar novo produto</Link>
      </div>
    </div>
  );
}
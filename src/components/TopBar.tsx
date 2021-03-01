import { Link } from 'react-router-dom';

import { FiLogOut } from 'react-icons/fi';

import '../styles/components/TopBar.css';

export default function TopBar() {
  return (
    <div className='topbar-container'>
      <div className='topbar-title'>
        <h1>Bem-vindo, <strong>Pedro Felipe</strong>!</h1>
      </div>

      <div className='topbar-buttons'>
        <Link to='/cadastrar' className='register-product-button'>Cadastrar novo produto</Link>
        <Link to='/' className='logout-button'><FiLogOut size={17} /></Link>
      </div>
    </div>
  );
}
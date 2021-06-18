import { Link } from 'react-router-dom';

import { AiOutlinePlus } from 'react-icons/ai';

import '../styles/components/TopBar.css';

export default function TopBar() {
  const id = localStorage.getItem('uId')
  const username = localStorage.getItem('username')

  return (
    <div className='topbar-container'>
      <div className='topbar-title'>
        <h1>Bem-vindo, <strong>{username}</strong>!</h1>
      </div>

      <div className='topbar-buttons'>
        <Link to={`/${id}/criar-produto`} className='register-product-button'>Cadastrar novo produto <AiOutlinePlus style={{ marginLeft: '0.3rem' }} size={20} /></Link>
      </div>
    </div>
  );
}
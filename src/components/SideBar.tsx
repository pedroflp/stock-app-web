import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { Context } from '../contexts/AuthContext';

import { AiOutlinePlus } from 'react-icons/ai';
import { FiLogOut, FiPackage } from 'react-icons/fi';

import '../styles/components/SideBar.css';

export default function SideBar() {
  const { handleLogout } = useContext(Context)

  return ( 
    <aside className='sidebar-container'>
      <div className='sidebar-section-title'>
        <h1><strong>H</strong>.</h1>
      </div>

      <div className='sidebar-section-buttons'>
        <Link to='/estoque'><FiPackage size={26} /></Link>
        <Link to='/criar-produto'><AiOutlinePlus size={26} /></Link>
      </div>

      <div>
        <FiLogOut className="logout-button" onClick={handleLogout} size={30} />
      </div>
    </aside>
  );
}
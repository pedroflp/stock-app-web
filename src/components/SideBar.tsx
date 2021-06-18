import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

import { Context } from '../contexts/AuthContext';

import { FiLogOut, FiPackage } from 'react-icons/fi';

import '../styles/components/SideBar.css';

export default function SideBar() {
  const { handleLogout } = useContext(Context);

  const id = localStorage.getItem('uId')

  return ( 
    <aside className='sidebar-container'>
      <div className='sidebar-section-title'>
        <h1><FiPackage size={40} /></h1>
      </div>

      <div className='sidebar-section-buttons'>
        <Link to={`/${id}/criar-produto`}><AiOutlinePlus size={26} /></Link>
      </div>

      <div>
        <FiLogOut className="logout-button" onClick={handleLogout} size={30} />
      </div>
    </aside>
  );
}
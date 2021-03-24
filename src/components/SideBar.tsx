import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

import { Context } from '../contexts/AuthContext';

import { FiLogOut, FiPackage } from 'react-icons/fi';

import api from '../services/api';

import '../styles/components/SideBar.css';

interface ProfileParams {
  id: string,
}

interface User {
  id: string,
}

export default function SideBar() {
  const params = useParams<ProfileParams>();
  const [user, setUser] = useState<User>()

  useEffect(() => {
    api.get(`/${params.id}/estoque`).then(response => {
      setUser(response.data);
    })
  }, [params.id]);
  
  const { handleLogout } = useContext(Context);

  return ( 
    <aside className='sidebar-container'>
      <div className='sidebar-section-title'>
        <h1><FiPackage size={40} /></h1>
      </div>

      <div className='sidebar-section-buttons'>
        <Link to={`/${user?.id}/criar-produto`}><AiOutlinePlus size={26} /></Link>
      </div>

      <div>
        <FiLogOut className="logout-button" onClick={handleLogout} size={30} />
      </div>
    </aside>
  );
}
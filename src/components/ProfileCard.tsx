import { useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import api from '../services/api';

import '../styles/components/ProfileCard.css';

interface Profile {
  name: string,
  email: string,
  id: string,
}

export default function MainPage() {
  const [profile, setProfile] = useState<Profile>()

  useEffect(() => {
    api.get('perfil').then(response => {
      setProfile(response.data);
    })
  }, []);

  return (
    <div className='profile-container'>
      <div className="profile-card">
        <div className="profile-card-user-info">
          <h1>{profile?.name}</h1>
          <h2>{profile?.email}</h2>
          <div className="profile-card-userid">
            <h3>{profile?.id}</h3>
            <button className="copy-userid">Copiar ID</button>
          </div>
        </div>
        <div className="profile-card-buttons">
          <button className="delete-account">Excluir conta</button>
          <button className="logout-button"><FiLogOut size={24} /></button>
        </div>
      </div>
    </div>
  );
}
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../services/api';

import { FiLogOut } from 'react-icons/fi';

import SideBar from "../components/SideBar";

import '../styles/pages/MainPage.css';
import '../styles/components/ProfileCard.css';
import { Context } from '../contexts/AuthContext';

interface ProfileParams {
  username: string,
}

interface Profile {
  name: string,
  email: string,
  id: string,
}

export default function ProfilePage() {
  const params = useParams<ProfileParams>();

  const [profile, setProfile] = useState<Profile>();

  const { handleLogout, userInformations } = useContext(Context);

  useEffect(() => {
    api.get(`/perfil/${params.username}`).then(response => {
      setProfile(response.data);
    })
  }, [params.username]);

  return (
    <div className='mainpage-container'>
      <SideBar />
      <div className='mainpage-center-content'>
        <div className='profile-container'>
        <div className="profile-card">
            <div className="profile-card-user-info">
              <h1>{userInformations.user.username}</h1>
              <h2>{userInformations.user.email}</h2>
              <div className="profile-card-userid">
                <h3>{userInformations.user.id}</h3>
                <button className="copy-userid">Copiar ID</button>
              </div>
            </div>
            <div className="profile-card-buttons">
              <button className="delete-account">Excluir conta</button>
              <button onClick={handleLogout} className="logout-button"><FiLogOut size={24} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
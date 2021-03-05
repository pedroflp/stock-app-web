import SideBar from "../components/SideBar";
import ProfileCard from '../components/ProfileCard';

import '../styles/pages/MainPage.css';


export default function ProfilePage() {

  return (
    <div className='mainpage-container'>
      <SideBar />
      
      <div className='mainpage-center-content'>
        
        <ProfileCard />
      </div>
    </div>
  );
}
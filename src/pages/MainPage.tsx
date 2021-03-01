import CardSection from "../components/CardSection";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

import '../styles/pages/MainPage.css';

export default function MainPage() {
  return (
    <div className='mainpage-container'>
      <SideBar />
      
      <div className='mainpage-center-content'>
        <TopBar />

        <SearchBar />
        <CardSection />
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';
import { FiPackage } from 'react-icons/fi'

export default function SideBar() {
  return ( 
    <div className='sidebar-container'>
      <h1><strong>H</strong>.</h1>

      <div className='sidebar-section-buttons'>
        <Link to='/'><AiOutlineHome /></Link>
        <Link to='/produtos'><FiPackage /></Link>
      </div>
    </div>
  );
}
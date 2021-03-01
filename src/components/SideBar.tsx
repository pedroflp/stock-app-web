import { Link } from 'react-router-dom';

import { AiOutlineHome, AiOutlinePlus } from 'react-icons/ai';
import { FiPackage } from 'react-icons/fi';

import '../styles/components/SideBar.css';

export default function SideBar() {
  return ( 
    <aside className='sidebar-container'>
      <div className='sidebar-section-title'>
        <h1><strong>H</strong>.</h1>
      </div>

      <div className='sidebar-section-buttons'>
        <Link to='/estoque'><FiPackage size={26} /></Link>
        <Link to='/cadastrar'><AiOutlinePlus size={26} /></Link>
      </div>
    </aside>
  );
}
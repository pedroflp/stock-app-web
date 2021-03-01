import { Link } from 'react-router-dom';

import { HiPencil } from 'react-icons/hi';
import { FiTrash } from 'react-icons/fi';

import '../styles/components/CardStock.css';

export default function CardStock() {
  return (
    <div className='table-list-card'>
      <div className='table-list-info'>
        <span>Ração Cachorro</span>
        <span>50</span>
        <span>R$35,00</span>
        <span>23/02/2021</span>
      </div>

      <div className='table-list-card-buttons'>
        <Link to='' className='edit-card'><HiPencil size={20} /></Link>
        <Link to='' className='delete-card'><FiTrash size={20} /></Link>
      </div>
    </div>
  );
}
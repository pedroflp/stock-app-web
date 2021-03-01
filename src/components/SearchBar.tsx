import { FiSearch } from 'react-icons/fi';
import '../styles/components/SearchBar.css';

export default function SearchBar() {
  return (
    <div className='search-bar-container'> 
      <label><FiSearch size={20} /> </label>
      <input type="text" placeholder='Procurar por nome do produto' />
    </div>
  );
}
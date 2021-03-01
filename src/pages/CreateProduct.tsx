import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'

import SideBar from "../components/SideBar";

import '../styles/pages/CreateProduct.css';

export default function CreateProduct() {
  return (
    <div className='create-product-container'>
      <SideBar />
      
      <div className='create-product-card'>
        <div className='create-product-title' >
          <Link to='/estoque'><AiOutlineArrowLeft size={20} /></Link>
          <h1>Cadastrar novo produto</h1>
        </div>
        <div className='create-product-inputs'>
          <input type="text" placeholder='Nome do produto' required />
          <input type="number" placeholder='Quantidade' min='0' required />
          <input type="number" placeholder='Preço' min='0' required />
          <input type="submit" value='Cadastrar' />
        </div>
      </div>
    </div>
  );
}
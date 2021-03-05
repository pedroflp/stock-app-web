import { Link, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'

import SideBar from "../components/SideBar";

import '../styles/pages/CreateProduct.css';
import { useEffect, useState } from 'react';
import api from '../services/api';

interface ProductParams {
  id: string,
}

interface Product {
  id: string,
  name: string,
  count: number,
  price: number,
}

export default function EditProduct() {
  const params = useParams<ProductParams>();
  const [product, setProduct] = useState<Product>()
 
  useEffect(() => {
    api.get(`produtos/${params.id}`).then(response => {
      setProduct(response.data);
    })
  }, [params.id]);

  return (
    <div className='create-product-container'>
      <SideBar />
      
      <div className='create-product-card'>
        <div className='create-product-title' >
          <Link to='/estoque'><AiOutlineArrowLeft size={20} /></Link>
          <h1>{product?.name}</h1>
        </div>
        <div className='create-product-inputs'>
          <input type="number" placeholder={`Quantidade: ${product?.count}`} min='0' value={product?.count} required />
          <input type="number" placeholder={`Preço: ${product?.price}`} min='0' value={product?.count} required />
          <input type="submit" value='Cadastrar' />
        </div>
      </div>
    </div>
  );
}
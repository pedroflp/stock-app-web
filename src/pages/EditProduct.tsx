import { Link, useHistory, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'

import SideBar from "../components/SideBar";

import '../styles/pages/CreateProduct.css';
import { FormEvent, useEffect, useState } from 'react';
import api from '../services/api';

interface ProductParams {
  id: string,
}

interface Product {
  id: string,
  name: string,
  quantity: number,
  price: number,
}

export default function EditProduct() {
  const params = useParams<ProductParams>();
  const [product, setProduct] = useState<Product>()

  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
 
  useEffect(() => {
    api.get(`editar/${params.id}`).then(response => {
      setProduct(response.data);
    })
  }, [params.id]);

  const history = useHistory();

  async function handleEditSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    data.append('quantity', String(quantity));
    data.append('price', String(price));

    console.log(params.id)
    console.log({ quantity, price })

    await api.put(`editar/${params.id}`, data);

    setProduct(product);
    history.push('/estoque');
  }

  return (
    <div className='create-product-container'>
      <SideBar />
      
      <div className='create-product-card'>
        <div className='create-product-title' >
          <Link to='/estoque'><AiOutlineArrowLeft size={20} /></Link>
          <h1>{product?.name}</h1>
        </div>
        <div className='create-product-inputs'>

         <form onSubmit={handleEditSubmit}>
          <input 
            value={quantity} 
            onChange={e => setQuantity(e.target.value)} type="number" id="quantity"
            placeholder={`Quantidade anterior: ${product?.quantity}`} min='0' />
            
          <input 
            value={price} 
            onChange={e => setPrice(e.target.value)} type="number" id="price"
            placeholder={`Preço anterior: R$${product?.price}`} step="any" min='0' />
          
          <br/>
          <br/>

          <button type="submit" className="register-product-button">Editar</button>
         </form>

        </div>
      </div>
    </div>
  );
}
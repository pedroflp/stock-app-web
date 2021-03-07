import { useHistory, useParams } from 'react-router-dom';

import SideBar from "../components/SideBar";

import '../styles/pages/CreateProduct.css';
import { FormEvent, useEffect, useState } from 'react';
import api from '../services/api';
import ButtonGoBack from '../components/ButtonGoBack';

interface ProductParams {
  id: string,
}

interface Product {
  id: string,
  name: string,
  quantity: string,
  price: string,
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
    history.goBack();
  }

  return (
    <div className='create-product-container'>
      <SideBar />
      
      <div className='create-product-card'>
        <div className='create-product-title' >
        <ButtonGoBack />
        <h1>{product?.name}</h1>
        </div>
        <div className='create-product-inputs'>

         <form onSubmit={handleEditSubmit}>
           <label>Quantidade anterior:</label>
          <input 
            value={quantity} 
            onChange={e => setQuantity(e.target.value)} type="number" id="quantity"
            placeholder={`${product?.quantity}`} min='0' />

            <label>Quantidade Preço:</label>
          <input 
            value={price} 
            onChange={e => setPrice(e.target.value)} type="number" id="price"
            placeholder={`R$${product?.price}`} step="any" min='0' />
          
          <br/>
          <br/>

          <button type="submit" className="register-product-button">Editar</button>
         </form>

        </div>
      </div>
    </div>
  );
}
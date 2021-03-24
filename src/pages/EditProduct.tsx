import { FormEvent, useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import api from '../services/api';

import SideBar from "../components/SideBar";
import ButtonGoBack from '../components/ButtonGoBack';

import '../styles/pages/EditProduct.css';

interface ProductParams {
  id: string,
  username: string,
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
    api.get(`/${params.username}/editar/${params.id}`).then(response => {
      setProduct(response.data);
    })
  }, [params.username, params.id]);

  const history = useHistory();

  async function handleEditSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    if (quantity === "" && price === "") {
    } else
    if (quantity === "") {
      data.append('price', String(price));
    } else
    if (price === "") {
      data.append('quantity', String(quantity));
    } else {
      data.append('quantity', String(quantity));
      data.append('price', String(price));
    }

    await api.put(`/${params.username}/editar/${params.id}`, data);

    setProduct(product);
    history.push(`/${params.username}/estoque`);
  }

  async function handleDeleteProduct(id: any) {
    await api.delete(`/estoque/${id}`);
    history.push(`/${params.username}/estoque`);
  }

  return (
    <div className='edit-product-container'>
      <Helmet title={`StockAPP | ${product?.name}`} />
      <SideBar />
      
      <div className='edit-product-card'>
        <div className='edit-product-title' >
        <ButtonGoBack />
        <h1>{product?.name}</h1>
        </div>
        <div className='edit-product-inputs'>

         <form onSubmit={handleEditSubmit}>
          <span>Quantidade anterior:</span>
          <input 
            value={quantity} 
            onChange={e => setQuantity(e.target.value)} type="number" id="quantity"
            placeholder={`${product?.quantity}`} min='0' />

          <br/>
          <br/>

          <span>Preço anterior:</span>
          <input 
            value={price} 
            onChange={e => setPrice(e.target.value)} type="number" id="price"
            placeholder={`R$${product?.price}`} step="0.01" min='0' />
          
          <br/>
          <br/>

          <div className='table-list-card-buttons' style={{ justifyContent: 'flex-start' }}>
            <button type="submit" className="register-product-button">Editar</button>
            
            <button
              onClick={() => handleDeleteProduct(product?.id)} className='delete-card'>
              Excluir
            </button>
          </div>
         </form>

        </div>
      </div>
    </div>
  );
}
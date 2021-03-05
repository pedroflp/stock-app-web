import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Moment from 'react-moment';

import { HiPencil } from 'react-icons/hi';
import { FiTrash } from 'react-icons/fi';
import { MdMoodBad } from 'react-icons/md';

import api from '../services/api';

import '../styles/components/CardStock.css';
import '../styles/components/CardSection.css';


interface ProductParams {
  id: string,
}

interface Product {
  id: string,
  name: string,
  quantity: number,
  price: number,
  updated: Date,
}

export default function CardSection(this: any) {
  const params = useParams<ProductParams>();
  
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get('estoque').then(response => {
      setProducts(response.data);
    })
  }, []);

  useEffect(() => { api.get(`estoque/${params.id}`) }, [params.id]);

  async function handleDeleteProduct(e: any, product: any) {
    e.preventDefault();

    api.delete(`estoque/produto/${params.id}`).then(response => {
      const delProduct = products.filter(product => params.id == product.id)
      setProducts(delProduct);
    })
  }


  return (
      <div className='table-list-container'>
        <div className='table-title-list'>
          <span>Nome do produto</span>
          <span>Quantidade</span>
          <span>Preço</span>
          <span>Última alteração</span>
        </div>

        <div className='table-card-list'>
        { products.length ?
          products.map(product => {
            return (
              <div key={product.id} className='table-list-card'>
                <div className='table-list-info'>
                  <span>{product.name}</span>
                  <span>{product.quantity}</span>
                  <span>{product.price}</span>
                  <span>
                    <Moment format="HH:mm - DD/MM/YYYY">
                      {product.updated}
                    </Moment>
                  </span>
                </div>
                <div className='table-list-card-buttons'>
                  <Link to={`/produtos/${product.id}`} className='edit-card'><HiPencil size={20} /></Link>
                    <button
                    onClick={e => handleDeleteProduct(e, product)}
                    className='delete-card'><FiTrash size={20} /></button>
                </div>
              </div>
            )
          }) : 
          <div className='table-card-list-alert'>
          <MdMoodBad size={80} />
          <h1>Você não tem nenhum produto cadastrado!</h1>
        </div>
        } 
        </div>
      </div>
  );
}

import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Moment from 'react-moment';

import { HiPencil } from 'react-icons/hi';
import { FiTrash } from 'react-icons/fi';
import { MdMoodBad } from 'react-icons/md';

import api from '../services/api';

import '../styles/components/CardStock.css';
import '../styles/components/CardSection.css';

interface ProfileParams {
  username: string,
}

interface Product {
  id: string,
  name: string,
  quantity: number,
  price: number,
  updated: Date,
}

interface User {
  email: string,
  products: Product[],
  username: string,
}


export default function CardSection(this: any) {
  const params = useParams<ProfileParams>();

  const [userInformation, setUserInformation] = useState<User>();

  const history = useHistory();

  useEffect(() => {
    api.get(`/${params.username}/estoque`).then(response => {
    setUserInformation(response.data);
    });
  }, [params.username]);


  async function handleEditProduct(id: string) {
    history.push(`/editar/${id}`);
  }

  async function handleDeleteProduct(id: string) {
    await api.delete(`/estoque/${id}`);
    window.location.reload();
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
        { userInformation?.products.length ?
          userInformation.products.map(product => {
            return (
              <div key={product.id} className='table-list-card'>
                <div className='table-list-info'>
                  <span>{product.name}</span>
                  <span>{product.quantity}</span>
                  <span>R${product.price}</span>
                  <span>
                    <Moment format="HH:mm - DD/MM/YYYY">
                      {product.updated}
                    </Moment>
                  </span>
                </div>
                <div className='table-list-card-buttons'>
                  <button 
                  onClick={() => handleEditProduct(product.id)}
                  className='edit-card' style={{ border: 0, background: 'none' }}>
                    <HiPencil size={20} />
                  </button>
                    
                  <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className='delete-card' style={{ border: 0, background: 'none' }}>
                    <FiTrash size={20} />
                  </button>
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


